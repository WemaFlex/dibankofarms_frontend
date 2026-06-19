"use client";

import { useState } from "react";
import { Button, Modal, message, Typography, Form, Input } from "antd";
import { ExclamationCircleFilled, LockOutlined } from "@ant-design/icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// Ensure you import your actual actions here
import { disable2Fa, disableSmsMfa } from "@/actions/auth";

const { Text } = Typography;

interface Disable2FaModalProps {
    type: "authenticator" | "sms";
}

export default function Disable2FaModal({ type }: Disable2FaModalProps) {
    const [open, setOpen] = useState(false);
    const [form] = Form.useForm();
    const queryClient = useQueryClient();

    const isApp = type === "authenticator";
    const title = isApp ? "Disable Authenticator App" : "Disable SMS Authentication";
    const actionFn = isApp ? disable2Fa : disableSmsMfa;

    const disableMutation = useMutation({
        // NOTE: Adjust the payload structure based on your actual backend action
        // e.g., actionFn(password) vs actionFn({ password })
        mutationFn: (password: string) => actionFn(password),
        onSuccess: () => {
            message.success(`${isApp ? "Authenticator App" : "SMS Authentication"} disabled successfully.`);
            setOpen(false);
            form.resetFields();

            // Invalidate the user query so the UI instantly reverts to the "Enable" button
            queryClient.invalidateQueries({ queryKey: ["current-user"] });
        },
        onError: (error: any) => {
            message.error(error.message || "Failed to disable. Please check your password.");
        }
    });

    const handleDisable = () => {
        form.validateFields().then(values => {
            disableMutation.mutate(values.password);
        }).catch(() => {
            // Form validation failed (e.g., empty password field)
        });
    };

    const handleCancel = () => {
        setOpen(false);
        form.resetFields();
    };

    return (
        <>
            {/* The Trigger Button */}
            <Button
                danger
                type="default"
                className="rounded-xl font-medium hover:bg-rose-50"
                onClick={() => setOpen(true)}
            >
                Disable
            </Button>

            {/* The Warning & Password Modal */}
            <Modal
                title={
                    <span className="flex items-center gap-2 text-rose-600">
                        <ExclamationCircleFilled /> {title}
                    </span>
                }
                open={open}
                onCancel={handleCancel}
                footer={
                    <div className="flex justify-end gap-3 mt-6">
                        <Button
                            className="rounded-xl font-medium"
                            onClick={handleCancel}
                            disabled={disableMutation.isPending}
                        >
                            Cancel
                        </Button>
                        <Button
                            danger
                            type="primary"
                            className="rounded-xl font-bold px-6"
                            onClick={handleDisable}
                            loading={disableMutation.isPending}
                        >
                            Confirm Disable
                        </Button>
                    </div>
                }
                centered
                destroyOnClose
            >
                <div className="flex flex-col gap-5 py-4">
                    <div className="flex flex-col gap-2">
                        <Text className="text-slate-700 font-medium text-base">
                            Are you sure you want to disable this security feature?
                        </Text>
                        <Text className="text-slate-500">
                            Disabling {isApp ? "the Authenticator App" : "SMS verification"} will remove an extra layer of security from your account.
                            Please enter your password to confirm this action.
                        </Text>
                    </div>

                    <Form form={form} layout="vertical" className="mt-2">
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: "Please enter your password to continue." }]}
                            className="mb-0"
                        >
                            <Input.Password
                                size="large"
                                prefix={<LockOutlined className="text-slate-400 mr-2" />}
                                placeholder="Enter your current password"
                                className="rounded-xl bg-slate-50 hover:border-rose-400 focus:bg-white transition-colors"
                                onPressEnter={handleDisable} // Allows user to hit Enter to submit
                            />
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </>
    );
}