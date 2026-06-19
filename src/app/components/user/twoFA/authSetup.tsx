"use client";

import { useState } from "react";
import { Button, Typography, Modal, message, Alert, Input, Image } from "antd";
import { SecurityScanOutlined, QrcodeOutlined } from "@ant-design/icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUser } from "@/app/hooks/useUser";

// Ensure you import your actual actions here
import { getQrCode, enable2Fa } from "@/actions/auth"; // Adjust path as needed
import Disable2FaModal from "./Disable";

const { Text } = Typography;

export default function AuthenticatorSetup() {
    const { user } = useUser();
    const queryClient = useQueryClient();
    const isTotpEnabled = user?.multiFA?.authenticator?.enabled || false;

    // Modal UI States
    const [modalOpen, setModalOpen] = useState(false);
    const [step, setStep] = useState<"generate" | "verify">("generate");

    // Data States
    const [qrUri, setQrUri] = useState("");
    const [totpSecret, setTotpSecret] = useState("");
    const [totpCode, setTotpCode] = useState("");

    // 1. Mutation to fetch the QR Code & Secret
    const generateMutation = useMutation({
        mutationFn: () => getQrCode(),
        onSuccess: (data) => {
            // Adjust these keys based on exactly what your backend returns!
            // E.g., data.data.qrCodeUrl and data.data.secret
            setQrUri(data || data?.qrUri || data?.data?.qrUri);
            setStep("verify");
        },
        onError: (error: any) => {
            message.error(error.message || "Failed to generate authenticator secret.");
        }
    });

    // 2. Mutation to verify the 6-digit code and enable 2FA
    const verifyMutation = useMutation({
        mutationFn: (code: string) => enable2Fa(code), // Adjust if your action expects an object e.g., enable2Fa({ code })
        onSuccess: () => {
            message.success("Authenticator App enabled successfully!");
            setModalOpen(false);
            setTotpCode("");

            // Invalidate the user query so the UI instantly reflects that 2FA is now enabled
            queryClient.invalidateQueries({ queryKey: ["current-user"] });
        },
        onError: (error: any) => {
            message.error(error.message || "Invalid code. Please try again.");
        }
    });

    const handleVerify = () => {
        if (totpCode.length !== 6) {
            return message.warning("Please enter a 6-digit code.");
        }
        verifyMutation.mutate(totpCode);
    };

    return (
        <>
            {/* The UI Card */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-start sm:items-center justify-between flex-col sm:flex-row gap-6">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#5B8C51]/10 text-[#5B8C51] flex items-center justify-center text-2xl shrink-0 shadow-sm border border-[#5B8C51]/20">
                        <QrcodeOutlined />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg font-bold text-[#0A2803]">Authenticator App</span>
                        <span className="text-sm text-[#5C6672] leading-relaxed mt-1 max-w-md font-medium">
                            Use an app like Google Authenticator or Authy to generate security codes. Highly recommended for admins.
                        </span>
                    </div>
                </div>

                <div className="shrink-0 self-end sm:self-auto">
                    {isTotpEnabled ? (
                        <Disable2FaModal type="authenticator" />
                    ) : (
                        <Button
                            type="primary"
                            className="bg-[#5B8C51] hover:!bg-[#0A2803] border-none rounded-xl px-6 font-bold shadow-md shadow-[#5B8C51]/20 transition-all duration-300 h-10"
                            onClick={() => { setStep("generate"); setModalOpen(true); }}
                        >
                            Set Up App
                        </Button>
                    )}
                </div>
            </div>

            {/* The Setup Modal */}
            <Modal
                title={<span className="flex items-center gap-2 text-[#0A2803] font-bold"><SecurityScanOutlined className="text-[#5B8C51]" /> Setup Authenticator</span>}
                open={modalOpen}
                onCancel={() => setModalOpen(false)}
                footer={null}
                centered
                destroyOnHidden
            >
                {step === "generate" ? (
                    <div className="flex flex-col items-center py-6 text-center gap-4">
                        <p className="text-[#5C6672] font-medium mb-2">Click below to generate your unique security QR code.</p>
                        <Button
                            type="primary"
                            size="large"
                            onClick={() => generateMutation.mutate()}
                            loading={generateMutation.isPending}
                            className="bg-[#5B8C51] hover:!bg-[#0A2803] border-none font-bold rounded-xl px-8 shadow-md shadow-[#5B8C51]/20 transition-all duration-300"
                        >
                            Generate QR Code
                        </Button>
                    </div>
                ) : (
                    <div className="flex flex-col items-center py-4 text-center gap-6 animate-in zoom-in-95 duration-300">
                        <Alert
                            title={<span className="font-bold text-[#0A2803]">Scan this QR code with your Authenticator App</span>}
                            type="info"
                            showIcon
                            className="w-full text-left bg-[#F9FCF8] border-[#5B8C51]/30 rounded-2xl"
                        />

                        <div className="p-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
                            {/* NOTE: If your backend returns an otpauth:// URL string, use QRCode component. 
                                IF your backend returns a base64 image data URL directly, change this to:
                                <img src={qrUri} alt="QR Code" width={180} height={180} />
                            */}
                            {<div className="w-[180px] h-[180px] bg-[#F9FCF8] rounded-xl flex items-center justify-center text-gray-400 overflow-hidden">
                                <Image src={qrUri} alt="QR Code" preview={false} />
                            </div>}
                        </div>

                        {/* <div className="flex flex-col gap-1 w-full">
                            <Text className="text-xs uppercase font-bold text-[#5C6672] tracking-wider">Or enter this secret manually</Text>
                            <Text className="font-mono text-lg bg-[#F9FCF8] text-[#0A2803] p-2 rounded-lg border border-gray-100 select-all font-bold">
                                {totpSecret || "Generating..."}
                            </Text>
                        </div> */}

                        <div className="w-full mt-2 pt-6 border-t border-gray-50 flex flex-col gap-3">
                            <Text className="font-bold text-[#0A2803] text-left">Enter the 6-digit code from your app to verify:</Text>
                            <div className="flex gap-2">
                                <Input
                                    size="large"
                                    maxLength={6}
                                    placeholder="000000"
                                    className="font-mono font-bold text-[#0A2803] text-center text-lg tracking-[0.5em] rounded-xl bg-[#F9FCF8] border-gray-200 hover:border-[#5B8C51] focus:border-[#5B8C51] focus:bg-white transition-colors"
                                    value={totpCode}
                                    onChange={(e) => setTotpCode(e.target.value.replace(/\D/g, ''))}
                                    onPressEnter={handleVerify}
                                />
                                <Button
                                    size="large"
                                    type="primary"
                                    onClick={handleVerify}
                                    loading={verifyMutation.isPending}
                                    className="bg-[#5B8C51] hover:!bg-[#0A2803] border-none rounded-xl px-6 font-bold shadow-md shadow-[#5B8C51]/20 transition-all duration-300"
                                >
                                    Verify
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </>
    );
}