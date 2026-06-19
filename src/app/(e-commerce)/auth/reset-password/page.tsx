"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { Alert, Button, Flex, Form, Input, Result, Spin, Typography } from "antd";
import { useForm, useWatch } from "antd/es/form/Form";

import useValidatePwd from "@/app/hooks/useValidatePwd";
import { resetPassword } from "@/actions/auth";
import PasswordRules from "@/app/components/PasswordRules";

const { Text, Title } = Typography;

const variants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const resetToken = searchParams.get("token");
  const [form] = useForm();

  const [errMsg, setErrMsg] = useState<string | null>(null);
  const password = useWatch("newPassword", form) || "";
  const [hasMinLength, hasUppercase, hasLowercase, hasNumber] = useValidatePwd(password);

  const resetPwdM = useMutation({
    mutationKey: ["reset-password"],
    mutationFn: async (data: any) => resetPassword(resetToken || "", data.newPassword),
    onSuccess: () => {
      form.resetFields();
    },
    onError: (err: AxiosError<{ message: string }>) => {
      setErrMsg(err.response?.data?.message || err.message);
      setTimeout(() => setErrMsg(null), 5000);
    },
  });

  return (
    <AnimatePresence mode="wait">

      {/* Title Area */}
      <div className="mb-8">
        <Title level={2} style={{ margin: 0 }}>Reset Password</Title>
        <Text className="text-slate-500 text-base">Enter your new secure password below.</Text>
      </div>

      <div className="max-w-md">
        {(resetPwdM.isIdle || resetPwdM.isError) && (
          <motion.div
            key="reset-password-form"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.2 }}
          >
            {errMsg && <Alert showIcon type="error" title={errMsg} className="mb-6" />}

            <Form
              form={form}
              initialValues={{ newPassword: "", confirmNewPassword: "" }}
              layout="vertical"
              requiredMark={false} // Cleaner UI
              onFinish={resetPwdM.mutate}
            >
              <Form.Item
                name="newPassword"
                label={<span className="font-medium text-slate-700">New Password</span>}
                className="mb-3"
                rules={[
                  { required: true, message: "Enter new password" },
                  {
                    validator: async () => {
                      const isValid = hasMinLength && hasUppercase && hasLowercase && hasNumber;
                      if (isValid) return Promise.resolve();
                      return Promise.reject("New password must meet security requirements");
                    },
                  },
                ]}
              >
                <Input.Password placeholder="Enter New password" size="large" />
              </Form.Item>

              <Form.Item
                name="confirmNewPassword"
                label={<span className="font-medium text-slate-700">Confirm Password</span>}
                className="mb-6"
                rules={[
                  { required: true, message: "Confirm password" },
                  {
                    validator: async (_, value) => {
                      if (!value || value === form.getFieldValue("newPassword")) {
                        return Promise.resolve();
                      }
                      return Promise.reject("Passwords must match");
                    },
                  },
                ]}
              >
                <Input.Password placeholder="Confirm New Password" size="large" />
              </Form.Item>

              {/* Password Rules Component */}
              <div className="mb-6">
                <PasswordRules form={form} field="newPassword" />
              </div>

              <Button
                type="primary"
                size="large"
                block
                disabled={!(hasMinLength && hasUppercase && hasLowercase && hasNumber)}
                htmlType="submit"
              >
                Reset Password
              </Button>
            </Form>
          </motion.div>
        )}

        {resetPwdM.isPending && (
          <motion.div
            key="reset-password-loading"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Flex justify="center" align="center" vertical gap="middle" className="py-12">
              <Spin size="large" />
              <Text className="text-slate-500 font-medium">Resetting your password...</Text>
            </Flex>
          </motion.div>
        )}

        {resetPwdM.isSuccess && (
          <motion.div
            key="reset-password-success"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Result
              title="Password Reset Successful!"
              status="success"
              subTitle="Your password has been securely updated. You may now log in."
              extra={
                <Link href="/auth/sign-in">
                  <Button size="large" type="primary">
                    Go to Sign In
                  </Button>
                </Link>
              }
            />
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
}

// Suspense boundary required because of useSearchParams
export default function ResetPassword() {
  return (
    <Suspense fallback={
      <Flex justify="center" align="center" className="min-h-[400px]">
        <Spin size="large" />
      </Flex>
    }>
      <ResetPasswordPage />
    </Suspense>
  );
}