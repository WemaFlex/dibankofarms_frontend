"use client";
import { useState } from "react";
import { Input, Button, Form, Typography, Flex, Spin, Alert } from "antd";
import { useForm, useWatch } from "antd/es/form/Form";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { UserOutlined, LockOutlined, ArrowRightOutlined, SafetyCertificateOutlined } from "@ant-design/icons";
import { loadUser, signIn } from "@/actions/auth";
import { isValidLoginIdentifier } from "@/utils/common";
import SelectMFAType from "./SelectMFAType";
import SmsMfa from "./SmsMfa";
import AuthMfa from "./AuthMfa";

const { Text, Title } = Typography;

interface LoginData {
  email: string;
  password: string;
}

export type Step = "sign-in" | "selectMFAType" | "smsMfa" | "authenticatorMfa";

// Smoother, slightly springy framer-motion variants
const variants = {
  initial: { opacity: 0, y: 15, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -15, filter: "blur(4px)", transition: { duration: 0.2, ease: "easeIn" } },
};

const LoginForm = () => {
  const [form] = useForm();
  const email = useWatch("email", form);
  const [step, setStep] = useState<Step>("sign-in");
  const [showPwd, setShowPwd] = useState(false);
  const router = useRouter();
  const [errMsg, setErrMsg] = useState<string | null>(null);

  const signInM = useMutation({
    mutationKey: ["sign-user-in"],
    mutationFn: async (data: LoginData) => signIn(data.email, data.password),
    onSuccess: async (response: any) => {
      if (response.mfa?.sms?.enabled || response.mfa?.authenticator?.enabled) {
        setStep("selectMFAType");
        return;
      }
      const authTokenKey = process.env.NEXT_PUBLIC_API_AUTH_TOKEN || "auth_token";
      localStorage.setItem(authTokenKey, response.token);
      await loadUser(response.token);
      router.push("/dashboard/finance");
    },
    onError: (err: AxiosError<{ message: string }>) => {
      setErrMsg(err.response?.data?.message || err.message);
      setTimeout(() => setErrMsg(null), 5000);
    },
  });

  const onFinish = (vals: LoginData) => {
    signInM.mutate(vals);
  };

  return (
    <AnimatePresence mode="wait">
      {step === "sign-in" && (
        <motion.div
          key="signIn"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full max-w-md mx-auto"
        >
          {/* Title Area - Moved inside the animation block */}
          <div className="mb-10 text-center sm:text-left">
            <Title level={2} style={{ margin: 0, fontWeight: 900, color: "#0A2803", letterSpacing: "-0.02em" }}>
              Welcome back
            </Title>
            <Text className="text-[#5C6672] text-base font-medium mt-1 block">
              Securely access your account
            </Text>
          </div>

          {errMsg && (
            <Alert
              showIcon
              type="error"
              title={<span className="font-medium">{errMsg}</span>}
              className="mb-6 rounded-xl border-red-200 bg-red-50 text-red-700 shadow-sm"
            />
          )}

          {signInM.isPending ? (
            <Flex justify="center" align="center" vertical gap="middle" className="py-16">
              <Spin size="large" className="custom-emerald-spin" />
              <Text className="text-[#5B8C51] font-bold animate-pulse">Verifying credentials...</Text>
            </Flex>
          ) : (
            <>
              <Form
                form={form}
                initialValues={{
                  email: process.env.NEXT_PUBLIC_API_AUTH_USER || "",
                  password: process.env.NEXT_PUBLIC_API_AUTH_PASSWORD || ""
                }}
                layout="vertical"
                requiredMark={false}
                onFinish={onFinish}
                className="w-full"
              >
                <Form.Item
                  name="email"
                  label={<span className="font-bold text-[#0A2803] text-sm">Phone or Email Address</span>}
                  rules={[
                    { required: true, message: "This field is required" },
                    {
                      validator: async (_, value) => {
                        if (!value) return Promise.resolve();
                        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                        const isPhone = /^\+?[0-9]{9,15}$/.test(value);
                        if (isEmail || isPhone) return Promise.resolve();
                        return Promise.reject(new Error("Please enter a valid phone number or email"));
                      },
                    },
                  ]}
                  className="mb-0" // Margin managed dynamically below
                >
                  <Input
                    prefix={<UserOutlined className="text-[#5C6672]/60 mr-1" />}
                    placeholder="name@company.com or +233..."
                    size="large"
                    className="h-12 text-base rounded-xl bg-[#F9FCF8] border-gray-200 hover:border-[#5B8C51] focus:border-[#5B8C51] focus:bg-white transition-all"
                  />
                </Form.Item>

                {/* Smooth Progressive Disclosure for Password */}
                <div
                  className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${showPwd && isValidLoginIdentifier(email) ? "max-h-[150px] opacity-100 mt-5" : "max-h-0 opacity-0 mt-0"
                    }`}
                >
                  <Form.Item
                    name="password"
                    label={
                      <div className="flex justify-between items-center w-full">
                        <span className="font-bold text-[#0A2803] text-sm">Password</span>
                        <a
                          href="/auth/forgot-password"
                          className="text-xs font-bold text-[#5B8C51] hover:text-[#0A2803] transition-colors"
                        >
                          Forgot Password?
                        </a>
                      </div>
                    }
                    rules={[{ required: true, message: "Password is required" }]}
                    // THE FIX: Force the Ant Design label wrapper to 100% width
                    className="mb-2 [&_.ant-form-item-label]:w-full [&_.ant-form-item-label>label]:w-full"
                  >
                    <Input.Password
                      prefix={<LockOutlined className="text-[#5C6672]/60 mr-1" />}
                      placeholder="Enter password"
                      size="large"
                      className="h-12 text-base rounded-xl bg-[#F9FCF8] border-gray-200 hover:border-[#5B8C51] focus:border-[#5B8C51] focus:bg-white transition-all"
                    />
                  </Form.Item>
                </div>

                <Button
                  type="primary"
                  size="large"
                  block
                  htmlType={showPwd ? "submit" : "button"}
                  disabled={!isValidLoginIdentifier(email)}
                  onClick={() => !showPwd && setShowPwd(true)}
                  className={`mt-6 h-12 text-base font-bold rounded-xl border-none transition-all duration-300 ${isValidLoginIdentifier(email)
                    ? "bg-[#5B8C51] hover:!bg-[#0A2803] shadow-md shadow-[#5B8C51]/20"
                    : "bg-gray-100 text-gray-400"
                    }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    {showPwd ? (
                      <>Sign In <SafetyCertificateOutlined /></>
                    ) : (
                      <>Continue <ArrowRightOutlined /></>
                    )}
                  </span>
                </Button>
              </Form>

              <div className="relative flex py-8 items-center">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink-0 mx-4 text-[#5C6672] text-xs font-bold uppercase tracking-wider">or continue with</span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>

              <Button
                size="large"
                block
                className="h-12 flex items-center justify-center gap-3 font-bold text-[#0A2803] border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all"
              >
                <img src="/dsfassets/google.svg" width={20} alt="Google" />
                Google
              </Button>

              <div className="text-center mt-10 text-[#5C6672] font-medium text-sm">
                Don’t have an account?{" "}
                <a href="/auth/register" className="font-bold text-[#0A2803] hover:text-[#5B8C51] transition-colors">
                  Sign Up
                </a>
              </div>
            </>
          )}
        </motion.div>
      )}

      {/* MFA Component Routing */}
      {step === "selectMFAType" && (
        <motion.div key="selectMFAType" variants={variants} initial="initial" animate="animate" exit="exit">
          <SelectMFAType setStep={setStep} />
        </motion.div>
      )}

      {step === "smsMfa" && (
        <motion.div key="smsMfa" variants={variants} initial="initial" animate="animate" exit="exit">
          <SmsMfa />
        </motion.div>
      )}

      {step === "authenticatorMfa" && (
        <motion.div key="authMfa" variants={variants} initial="initial" animate="animate" exit="exit">
          <AuthMfa />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginForm;