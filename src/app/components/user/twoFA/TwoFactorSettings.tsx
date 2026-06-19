"use client";

import { Typography } from "antd";
import AuthenticatorSetup from "./authSetup";
import SmsSetup from "./smsSetup";

const { Title, Text } = Typography;

export default function TwoFactorSettings() {
    return (
        <div className="flex flex-col gap-8 animate-in fade-in duration-500 max-w-3xl">
            {/* Header Section */}
            <div className="flex flex-col gap-1">
                <Title level={3} style={{ margin: 0, color: '#0A2803', fontWeight: 900, letterSpacing: '-0.02em' }}>
                    Two-Factor Authentication
                </Title>
                <Text className="text-[#5C6672] font-medium">
                    Add an extra layer of security to your account to prevent unauthorized access.
                </Text>
            </div>

            <div className="flex flex-col gap-6">
                <AuthenticatorSetup />
                <SmsSetup />
            </div>
        </div>
    );
}