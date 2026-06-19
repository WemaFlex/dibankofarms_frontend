"use client";

import { SafetyOutlined } from "@ant-design/icons";
import { Form, Input, FormInstance } from "antd";
import PasswordRules from "./PasswordRules";

export default function PasswordSetup({ form }: { form: FormInstance }) {
    const inputClasses = "rounded-xl bg-slate-50 hover:border-emerald-400 focus:bg-white transition-colors";

    return (
        <div className="flex flex-col w-full">
            <Form.Item
                name="password"
                label={<span className="font-semibold text-slate-600 text-xs uppercase tracking-wider">New Password</span>}
                // Updated rules to enforce uppercase, lowercase, and numbers
                rules={[
                    { required: true, message: "Please enter a new password" },
                    { min: 8, message: "Password must be at least 8 characters long" },
                    { pattern: /[A-Z]/, message: "Password must contain at least one uppercase letter" },
                    { pattern: /[a-z]/, message: "Password must contain at least one lowercase letter" },
                    { pattern: /[0-9]/, message: "Password must contain at least one number" }
                ]}
            >
                <Input.Password
                    size="large"
                    prefix={<SafetyOutlined className="text-slate-400 mr-2" />}
                    placeholder="Create a new strong password"
                    className={inputClasses}
                />
            </Form.Item>

            <Form.Item
                name="confirmPassword"
                label={<span className="font-semibold text-slate-600 text-xs uppercase tracking-wider">Confirm New Password</span>}
                dependencies={['password']}
                rules={[
                    { required: true, message: "Please confirm your new password" },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error("The two passwords do not match"));
                        },
                    }),
                ]}
            >
                <Input.Password
                    size="large"
                    prefix={<SafetyOutlined className="text-slate-400 mr-2" />}
                    placeholder="Re-type your new password"
                    className={inputClasses}
                />
            </Form.Item>

            {/* Visual indicator for the user */}
            <div className="mt-5">
                <PasswordRules form={form} />
            </div>
        </div>
    );
}