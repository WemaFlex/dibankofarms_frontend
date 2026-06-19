"use client";

import { useState, useEffect } from "react";
import { Button, Typography } from "antd";
import {
  MobileFilled,
  MessageFilled,
  CheckCircleFilled,
  ArrowRightOutlined
} from "@ant-design/icons";
import { Step } from "./LoginForm"; // Adjust the import path if your Step type is elsewhere

const { Text, Title } = Typography;

export default function SelectMFAType({
  setStep,
}: {
  setStep: (next: Step) => void;
}) {
  const [mfaType, setMfaType] = useState<"smsMfa" | "authenticatorMfa" | "">("");
  const [mfaConfig, setMfaConfig] = useState<any>({ authenticator: {}, sms: {} });

  // Safely read from localStorage on mount
  useEffect(() => {
    try {
      const storedMfa = localStorage.getItem(process.env.NEXT_PUBLIC_USER_MFA || "user_mfa");
      if (storedMfa) {
        setMfaConfig(JSON.parse(storedMfa));
      }
    } catch (e) {
      console.error("Failed to parse MFA config from local storage.");
    }
  }, []);

  return (
    <div className="w-full max-w-md mx-auto text-center sm:text-left">

      {/* Header Area */}
      <div className="mb-8">
        <Title level={2} style={{ margin: 0, fontWeight: 900, color: "#0A2803", letterSpacing: "-0.02em" }}>
          Verify your identity
        </Title>
        <Text className="text-[#5C6672] text-base font-medium mt-2 block">
          You have multiple two-factor authentication methods enabled. Please select how you want to receive your security code.
        </Text>
      </div>

      <div className="flex flex-col gap-4 mb-8">

        {/* Option 1: Authenticator App */}
        {mfaConfig?.authenticator?.enabled && (
          <div
            onClick={() => setMfaType("authenticatorMfa")}
            className={`relative p-5 rounded-xl border-2 cursor-pointer transition-all duration-300 overflow-hidden group ${mfaType === "authenticatorMfa"
              ? "border-[#5B8C51] bg-[#F9FCF8] shadow-[0_4px_20px_rgba(91,140,81,0.15)]"
              : "border-gray-200 bg-white hover:border-[#5B8C51]/50 hover:bg-gray-50"
              }`}
          >
            <div className="flex gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${mfaType === "authenticatorMfa" ? "bg-[#5B8C51] text-white" : "bg-gray-100 text-gray-400 group-hover:text-[#5B8C51]"
                }`}>
                <MobileFilled className="text-xl" />
              </div>

              <div className="flex-1 text-left">
                <span className={`block font-bold text-base mb-1 text-[#0A2803]`}>
                  Authenticator App
                </span>
                <span className={`text-sm leading-relaxed ${mfaType === "authenticatorMfa" ? "text-[#5B8C51] font-medium" : "text-[#5C6672]"}`}>
                  Use Google Authenticator, Authy, or your preferred time-based code generator.
                </span>
              </div>
            </div>

            {/* Selected Indicator */}
            <div className={`absolute top-5 right-5 transition-transform duration-300 ${mfaType === "authenticatorMfa" ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}>
              <CheckCircleFilled className="text-[#5B8C51] text-xl" />
            </div>
          </div>
        )}

        {/* Option 2: SMS */}
        {mfaConfig?.sms?.enabled && (
          <div
            onClick={() => setMfaType("smsMfa")}
            className={`relative p-5 rounded-xl border-2 cursor-pointer transition-all duration-300 overflow-hidden group ${mfaType === "smsMfa"
              ? "border-[#5B8C51] bg-[#F9FCF8] shadow-[0_4px_20px_rgba(91,140,81,0.15)]"
              : "border-gray-200 bg-white hover:border-[#5B8C51]/50 hover:bg-gray-50"
              }`}
          >
            <div className="flex gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${mfaType === "smsMfa" ? "bg-[#5B8C51] text-white" : "bg-gray-100 text-gray-400 group-hover:text-[#5B8C51]"
                }`}>
                <MessageFilled className="text-xl" />
              </div>

              <div className="flex-1 text-left">
                <span className={`block font-bold text-base mb-1 text-[#0A2803]`}>
                  Text Message (SMS)
                </span>
                <span className={`text-sm leading-relaxed ${mfaType === "smsMfa" ? "text-[#5B8C51] font-medium" : "text-[#5C6672]"}`}>
                  Receive a 6-digit verification code sent directly to your registered phone number.
                </span>
              </div>
            </div>

            {/* Selected Indicator */}
            <div className={`absolute top-5 right-5 transition-transform duration-300 ${mfaType === "smsMfa" ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}>
              <CheckCircleFilled className="text-[#5B8C51] text-xl" />
            </div>
          </div>
        )}
      </div>

      <Button
        disabled={!mfaType}
        onClick={() => setStep(mfaType as Step)}
        type="primary"
        size="large"
        block
        className={`h-12 text-base font-bold rounded-xl border-none transition-all duration-300 ${mfaType
          ? "bg-[#5B8C51] hover:!bg-[#0A2803] shadow-md shadow-[#5B8C51]/20"
          : "bg-gray-100 text-gray-400"
          }`}
      >
        <span className="flex items-center justify-center gap-2">
          Continue <ArrowRightOutlined />
        </span>
      </Button>

    </div>
  );
}