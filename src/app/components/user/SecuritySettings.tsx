"use client";

import { Form, Input, Button, Typography, message, Alert } from "antd";
import {
    LockOutlined, SafetyOutlined,
    KeyOutlined,
    SecurityScanOutlined
} from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";

// Ensure you import your actual action here
import { changePassword } from "@/actions/auth"; // Adjust path as needed

const { Title, Text } = Typography;

export default function SecuritySettings() {
    const [form] = Form.useForm();

    // Setup the mutation using TanStack Query
    const passwordMutation = useMutation({
        mutationFn: (values: any) => changePassword(values),
        onSuccess: () => {
            message.success({ content: "Your password has been updated securely.", className: "mt-12" });
            form.resetFields();
        },
        onError: (error: any) => {
            message.error({ content: error.message || "Failed to update password.", className: "mt-12" });
        }
    });

    const onFinish = (values: any) => {
        passwordMutation.mutate(values);
    };

    return (
        <div className="flex flex-col gap-8 animate-in fade-in duration-500 max-w-2xl">

            {/* Header Section */}
            <div className="flex flex-col gap-1">
                <Title level={3} style={{ margin: 0, color: '#0A2803', fontWeight: 900, letterSpacing: '-0.02em' }}>
                    Security & Password
                </Title>
                <Text className="text-[#5C6672] font-medium">
                    Manage your account security and update your authentication credentials.
                </Text>
            </div>

            {/* Information Alert - Themed */}
            <Alert
                message={<span className="font-bold text-[#0A2803]">Security Best Practices</span>}
                description={<span className="text-[#5C6672] font-medium text-sm">Ensure your new password is at least 8 characters long and includes a mix of uppercase letters, lowercase letters, numbers, and symbols. Never reuse passwords from other platforms.</span>}
                type="info"
                showIcon
                icon={<SecurityScanOutlined className="text-[#5B8C51] mt-1 text-lg" />}
                className="bg-[#F9FCF8] border border-[#5B8C51]/30 rounded-2xl p-5 shadow-sm"
            />

            {/* Password Update Form */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-50">
                    <div className="w-10 h-10 rounded-xl bg-[#5B8C51]/10 text-[#5B8C51] flex items-center justify-center text-lg shadow-sm border border-[#5B8C51]/20">
                        <KeyOutlined />
                    </div>
                    <Title level={4} style={{ margin: 0, color: '#0A2803', fontWeight: 800 }}>Update Password</Title>
                </div>

                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    requiredMark={false}
                    className="flex flex-col gap-2"
                >
                    <Form.Item
                        name="currentPassword"
                        label={<span className="font-semibold text-[#5C6672] text-xs uppercase tracking-wider">Current Password</span>}
                        rules={[{ required: true, message: "Please enter your current password" }]}
                    >
                        <Input.Password
                            size="large"
                            prefix={<LockOutlined className="text-[#5C6672]/60 mr-2" />}
                            placeholder="Enter your current password"
                            className="h-12 rounded-xl bg-[#F9FCF8] border-gray-200 hover:border-[#5B8C51] focus:border-[#5B8C51] focus:bg-white transition-colors"
                        />
                    </Form.Item>

                    <Form.Item
                        name="newPassword"
                        label={<span className="font-semibold text-[#5C6672] text-xs uppercase tracking-wider">New Password</span>}
                        rules={[
                            { required: true, message: "Please enter a new password" },
                            { min: 8, message: "Password must be at least 8 characters long" }
                        ]}
                    >
                        <Input.Password
                            size="large"
                            prefix={<SafetyOutlined className="text-[#5C6672]/60 mr-2" />}
                            placeholder="Create a new strong password"
                            className="h-12 rounded-xl bg-[#F9FCF8] border-gray-200 hover:border-[#5B8C51] focus:border-[#5B8C51] focus:bg-white transition-colors"
                        />
                    </Form.Item>

                    <Form.Item
                        name="confirmNewPassword"
                        label={<span className="font-semibold text-[#5C6672] text-xs uppercase tracking-wider">Confirm New Password</span>}
                        dependencies={['newPassword']}
                        rules={[
                            { required: true, message: "Please confirm your new password" },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('newPassword') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error("The two passwords do not match"));
                                },
                            }),
                        ]}
                    >
                        <Input.Password
                            size="large"
                            prefix={<SafetyOutlined className="text-[#5C6672]/60 mr-2" />}
                            placeholder="Re-type your new password"
                            className="h-12 rounded-xl bg-[#F9FCF8] border-gray-200 hover:border-[#5B8C51] focus:border-[#5B8C51] focus:bg-white transition-colors"
                        />
                    </Form.Item>

                    <div className="flex justify-end pt-4 mt-2 border-t border-gray-50">
                        <Button
                            type="primary"
                            htmlType="submit"
                            size="large"
                            loading={passwordMutation.isPending}
                            className="rounded-xl px-8 font-bold bg-[#5B8C51] hover:!bg-[#0A2803] border-none shadow-md shadow-[#5B8C51]/20 transition-all duration-300"
                        >
                            Update Password
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}