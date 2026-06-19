"use client";

import { useState } from "react";
import { Button, Typography, Modal, message, Input } from "antd";
import { MessageOutlined, MobileOutlined, SecurityScanOutlined } from "@ant-design/icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUser } from "@/app/hooks/useUser";

// Ensure you import your actual actions here
import { getSmsMfaOtp, enableSmsMfa } from "@/actions/auth"; // Adjust path as needed
import Disable2FaModal from "./Disable";

const { Text } = Typography;

export default function SmsSetup() {
    const { user } = useUser();
    const queryClient = useQueryClient();
    const isSmsEnabled = user?.multiFA?.sms?.enabled || false;

    // Modal UI States
    const [modalOpen, setModalOpen] = useState(false);
    const [step, setStep] = useState<"send" | "verify">("send");

    // Data States
    const [smsCode, setSmsCode] = useState("");

    // 1. Mutation to trigger the SMS code to the user's phone
    const sendMutation = useMutation({
        mutationFn: () => getSmsMfaOtp(),
        onSuccess: () => {
            message.success(`Verification code sent to +${user?.phone}`);
            setStep("verify");
        },
        onError: (error: any) => {
            message.error(error.message || "Failed to send verification code. Please try again.");
        }
    });

    // 2. Mutation to verify the 6-digit code and enable SMS 2FA
    const verifyMutation = useMutation({
        mutationFn: (code: string) => enableSmsMfa(code), // Adjust if your action expects an object e.g., enableSmsMfa({ code })
        onSuccess: () => {
            message.success("SMS Authentication enabled successfully!");
            setModalOpen(false);
            setSmsCode("");

            // Invalidate the user query so the UI instantly reflects that SMS 2FA is now enabled
            queryClient.invalidateQueries({ queryKey: ["current-user"] });
        },
        onError: (error: any) => {
            message.error(error.message || "Invalid code. Please try again.");
        }
    });

    const handleVerify = () => {
        if (smsCode.length !== 6) {
            return message.warning("Please enter a 6-digit code.");
        }
        verifyMutation.mutate(smsCode);
    };

    return (
        <>
            {/* The UI Card */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-start sm:items-center justify-between flex-col sm:flex-row gap-6">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#EDDD5E]/20 text-[#0A2803] flex items-center justify-center text-2xl shrink-0 shadow-sm border border-[#EDDD5E]/40">
                        <MessageOutlined />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg font-bold text-[#0A2803]">SMS Authentication</span>
                        <span className="text-sm text-[#5C6672] leading-relaxed mt-1 max-w-md font-medium">
                            Receive a text message with a 6-digit verification code to your registered phone number (+{user?.phone}).
                        </span>
                    </div>
                </div>

                <div className="shrink-0 self-end sm:self-auto">
                    {isSmsEnabled ? (
                        <Disable2FaModal type="sms" />
                    ) : (
                        <Button
                            type="default"
                            className="border-2 border-[#5B8C51] text-[#5B8C51] hover:!text-[#0A2803] hover:!border-[#0A2803] rounded-xl px-6 font-bold h-10 transition-all duration-300"
                            onClick={() => { setStep("send"); setModalOpen(true); }}
                        >
                            Enable SMS
                        </Button>
                    )}
                </div>
            </div>

            {/* The Setup Modal */}
            <Modal
                title={<span className="flex items-center gap-2 text-[#0A2803] font-bold"><MobileOutlined className="text-[#5B8C51]" /> Setup SMS Authentication</span>}
                open={modalOpen}
                onCancel={() => setModalOpen(false)}
                footer={null}
                centered
                destroyOnClose
            >
                {step === "send" ? (
                    <div className="flex flex-col items-center py-6 text-center gap-4">
                        <div className="w-16 h-16 bg-[#EDDD5E]/20 rounded-full flex items-center justify-center text-[#0A2803] text-2xl mb-2">
                            <MessageOutlined />
                        </div>
                        <p className="text-[#5C6672] font-medium">We will send a 6-digit verification code to your registered phone number:</p>
                        <Text className="text-2xl font-black text-[#0A2803] bg-[#F9FCF8] px-6 py-2 rounded-xl border border-gray-200 tracking-wider">
                            +{user?.phone}
                        </Text>
                        <Button
                            type="primary"
                            size="large"
                            onClick={() => sendMutation.mutate()}
                            loading={sendMutation.isPending}
                            className="bg-[#5B8C51] hover:!bg-[#0A2803] border-none mt-4 w-full rounded-xl font-bold shadow-md shadow-[#5B8C51]/20 transition-all duration-300"
                        >
                            Send Code
                        </Button>
                    </div>
                ) : (
                    <div className="flex flex-col items-center py-6 text-center gap-4 animate-in fade-in duration-300">
                        <SecurityScanOutlined className="text-4xl text-[#5B8C51] mb-2" />
                        <p className="text-[#5C6672] font-medium">Enter the 6-digit code sent to +{user?.phone}</p>

                        <Input
                            size="large"
                            maxLength={6}
                            placeholder="000000"
                            className="font-mono font-bold text-[#0A2803] text-center text-2xl tracking-[0.5em] rounded-xl py-3 mt-2 bg-[#F9FCF8] border-gray-200 hover:border-[#5B8C51] focus:border-[#5B8C51] focus:bg-white transition-colors"
                            value={smsCode}
                            onChange={(e) => setSmsCode(e.target.value.replace(/\D/g, ''))}
                            onPressEnter={handleVerify}
                        />

                        <Button
                            type="primary"
                            size="large"
                            onClick={handleVerify}
                            loading={verifyMutation.isPending}
                            className="bg-[#5B8C51] hover:!bg-[#0A2803] border-none w-full rounded-xl mt-4 font-bold shadow-md shadow-[#5B8C51]/20 transition-all duration-300"
                        >
                            Verify & Enable
                        </Button>

                        <Button
                            type="text"
                            onClick={() => sendMutation.mutate()}
                            loading={sendMutation.isPending}
                            className="text-[#5C6672] hover:!text-[#5B8C51] font-bold mt-2"
                        >
                            Resend Code
                        </Button>
                    </div>
                )}
            </Modal>
        </>
    );
}