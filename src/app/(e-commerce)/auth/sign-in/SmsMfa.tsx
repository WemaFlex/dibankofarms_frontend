"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import {
  Alert,
  Button,
  Flex,
  Form,
  Input,
  Spin,
  Typography,
} from "antd";
import { useForm } from "antd/es/form/Form";
import {
  MessageFilled,
  CheckCircleFilled,
  ArrowRightOutlined
} from "@ant-design/icons";
import { loadUser, signIn2fa } from "@/actions/auth";

const { Text, Title } = Typography;

export default function SmsMfa() {
  const [form] = useForm();
  const router = useRouter();
  const [errMsg, setErrMsg] = useState<string | null>(null);

  const login2faMutation = useMutation({
    mutationKey: ["sms2FaLogin"],
    mutationFn: (data: any) => signIn2fa(
      localStorage.getItem(process.env.NEXT_PUBLIC_LOGIN_TOKEN!),
      data.verificationCode,
      "smsMfa"
    ),
    onSuccess: async (response) => {
      localStorage.setItem(
        process.env.NEXT_PUBLIC_API_AUTH_TOKEN ?? "",
        response?.data?.token || ""
      );

      await loadUser(response?.data?.token || "");
      router.push("/dashboard/finance");
    },
    onError: (err: AxiosError<{ message: string }>) => {
      setErrMsg(err.response?.data.message || err.message);
      setTimeout(() => setErrMsg(null), 5000);
      form.resetFields(); // Auto-clear the wrong code so they can retype instantly
    },
  });

  // 1. Premium Loading State
  if (login2faMutation.isPending) {
    return (
      <Flex justify="center" align="center" vertical gap="middle" className="py-16 w-full max-w-md mx-auto">
        <Spin size="large" />
        <Text className="text-[#5B8C51] font-bold animate-pulse text-base">
          Verifying secure code...
        </Text>
      </Flex>
    );
  }

  // 2. Premium Success State
  if (login2faMutation.isSuccess) {
    return (
      <Flex align="center" justify="center" vertical className="py-12 w-full max-w-md mx-auto animate-fade-in-up">
        <div className="w-20 h-20 bg-[#5B8C51]/10 rounded-full flex items-center justify-center mb-6 shadow-inner border border-[#5B8C51]/20">
          <CheckCircleFilled style={{ color: '#5B8C51' }} className="text-5xl" />
        </div>
        <Title level={3} style={{ margin: 0, fontWeight: 900, color: "#0A2803", letterSpacing: "-0.02em" }}>
          Verification Complete
        </Title>
        <Text className="text-[#5B8C51] font-bold mt-2">
          Redirecting to your workspace...
        </Text>
      </Flex>
    );
  }

  // 3. Main Input State
  return (
    <div className="w-full max-w-md mx-auto text-center">

      {/* Icon & Headers - Fully Centered */}
      <div className="mb-8 flex flex-col items-center">
        <div className="w-14 h-14 bg-[#EDDD5E]/20 border border-[#EDDD5E]/40 rounded-2xl flex items-center justify-center mb-5 shadow-sm">
          {/* Explicitly passing the color via style to override AntD defaults */}
          <MessageFilled style={{ color: '#0A2803' }} className="text-3xl" />
        </div>

        <Title level={2} style={{ margin: 0, fontWeight: 900, color: "#0A2803", letterSpacing: "-0.02em" }}>
          Check your phone
        </Title>
        <Text className="text-[#5C6672] text-base font-medium mt-2 block">
          We&apos;ve sent a 6-digit One-Time Password (OTP) to your registered phone number.
        </Text>
      </div>

      {errMsg && (
        <Alert
          showIcon
          type="error"
          message={<span className="font-bold">{errMsg}</span>}
          className="mb-6 rounded-xl border-red-200 bg-red-50 text-red-700 text-left shadow-sm"
        />
      )}

      <Form
        form={form}
        initialValues={{ verificationCode: "", mfaType: "sms" }}
        layout="vertical"
        onFinish={login2faMutation.mutate}
        requiredMark={false}
      >
        {/* Wrapper to force absolute centering of the OTP boxes */}
        <div className="flex justify-center w-full mb-8">
          <Form.Item
            name="verificationCode"
            className="mb-0"
            rules={[
              { required: true, message: "Verification code is required" },
              { len: 6, message: "Code must be exactly 6 digits" },
            ]}
          >
            <Input.OTP
              length={6}
              size="large"
              className="gap-2 sm:gap-3 custom-otp-input [&_.ant-input]:!bg-[#F9FCF8] [&_.ant-input]:!border-gray-200 hover:[&_.ant-input]:!border-[#5B8C51] focus:[&_.ant-input]:!border-[#5B8C51] focus:[&_.ant-input]:!bg-white"
            />
          </Form.Item>
        </div>

        <Button
          block
          size="large"
          htmlType="submit"
          type="primary"
          className="h-12 text-base font-bold rounded-xl border-none bg-[#5B8C51] hover:!bg-[#0A2803] shadow-md shadow-[#5B8C51]/20 transition-all duration-300"
        >
          <span className="flex items-center justify-center gap-2">
            Verify OTP <ArrowRightOutlined />
          </span>
        </Button>

        {/* Styled USSD Fallback */}
        {/* <div className="text-center mt-8 text-[#5C6672] text-sm bg-[#F9FCF8] p-4 rounded-xl border border-gray-200">
          <span className="block mb-1.5 font-bold text-[#0A2803]">SMS not received?</span>
          <span>
            Dial <code className="bg-white border border-gray-200 text-[#5B8C51] font-bold px-2 py-1 rounded-md text-sm mx-1 shadow-sm">*857*123#</code> on your phone to retrieve it.
          </span>
        </div> */}

        {/* Subtle helper text at the bottom */}
        <div className="text-center mt-6 text-[#5C6672] font-medium text-sm">
          Having trouble? <a href="/contact-us" className="font-bold text-[#0A2803] hover:text-[#5B8C51] transition-colors">Contact Support</a>
        </div>
      </Form>
    </div>
  );
}