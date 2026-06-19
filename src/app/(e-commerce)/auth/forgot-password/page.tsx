"use client";

import Link from "next/link";
import { Button, Flex, Form, Input, Result, Spin, Typography } from "antd";
import { useForm, useWatch } from "antd/es/form/Form";
import { useMutation } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { forgotPassword } from "@/actions/auth";
import { isValidLoginIdentifier } from "@/utils/common";

const { Text, Title } = Typography;

const variants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

export default function ForgotPasswordPage() {
  const [form] = useForm();
  const identifier = useWatch("identifier", form);

  const forgotPwdM = useMutation({
    mutationKey: ["forgot-password"],
    mutationFn: async (data: { identifier: string }) => {
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.identifier);
      const email = isEmail ? data.identifier : undefined;
      const phone = !isEmail ? data.identifier : undefined;

      return forgotPassword(email, phone);
    },
    onSuccess: () => { form.resetFields(); },
  });

  const onFinish = (vals: { identifier: string }) => {
    forgotPwdM.mutate(vals);
  };

  return (
    <AnimatePresence mode="wait">
      <div className="mb-8">
        <Title level={2} style={{ margin: 0 }}>Forgot Password?</Title>
        <Text className="text-slate-500 text-base">
          Enter your email or phone number to receive reset instructions.
        </Text>
      </div>

      <div className="max-w-md">
        {(forgotPwdM.isIdle) && (
          <motion.div
            key="forgotpassword"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.2 }}
          >

            <Form
              form={form}
              initialValues={{ identifier: "" }}
              layout="vertical"
              requiredMark={false}
              onFinish={onFinish}
            >
              <Form.Item
                name="identifier"
                label={<span className="font-medium text-slate-700">Phone / Email Address</span>}
                className="mb-6"
                rules={[
                  { required: true, message: "Phone or Email is required" },
                  {
                    validator: async (_, value) => {
                      if (!value) return Promise.resolve();

                      if (isValidLoginIdentifier(value)) {
                        return Promise.resolve();
                      }

                      return Promise.reject(new Error("Please enter a valid phone number or email"));
                    },
                  },
                ]}
              >
                <Input placeholder="name@company.com or +233..." size="large" />
              </Form.Item>

              <Button
                type="primary"
                size="large"
                block
                htmlType="submit"
                disabled={!isValidLoginIdentifier(identifier)}
              >
                Send Reset Link
              </Button>
            </Form>
          </motion.div>
        )}

        {forgotPwdM.isPending && (
          <motion.div
            key="forgotpassword-loading"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Flex justify="center" align="center" vertical gap="middle" className="py-12">
              <Spin size="large" />
              <Text className="text-slate-500 font-medium">Sending instructions...</Text>
            </Flex>
          </motion.div>
        )}

        {forgotPwdM.isSuccess || forgotPwdM.isError && (
          <motion.div
            key="forgotpassword-success"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Result
              title="Reset Link Sent!"
              status="success"
              subTitle="Check your email or phone for further instructions to reset your password."
            />
          </motion.div>
        )}

        <div className="text-center mt-8 text-slate-500">
          Back to{" "}
          <Link href="/auth/sign-in" className="font-semibold text-slate-900 hover:text-blue-700 transition-colors">
            Sign In
          </Link>
        </div>
      </div>
    </AnimatePresence>
  );
}