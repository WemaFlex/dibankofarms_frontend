"use client";

import { Form, Input, FormInstance } from "antd";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";

export default function PersonalInfoStep({ form }: { form: FormInstance }) {
    const inputClasses = "rounded-xl bg-slate-50/50 border-slate-200 hover:border-emerald-400 focus:border-emerald-500 focus:bg-white focus:shadow-[0_0_0_2px_rgba(79,70,229,0.1)] h-12 text-base transition-all";

    return (
        <div className="flex flex-col w-full">

            {/* Grouped names side-by-side to save vertical space */}
            <div className="flex gap-4">
                <Form.Item
                    name="firstName"
                    label={<span className="font-semibold text-slate-700 text-sm">First Name</span>}
                    rules={[{ required: true, message: "Required" }]}
                    className="w-1/2 mb-4" // Overrides default AntD margin
                >
                    <Input size="large" placeholder="e.g. John" className={inputClasses} />
                </Form.Item>

                <Form.Item
                    name="lastName"
                    label={<span className="font-semibold text-slate-700 text-sm">Last Name</span>}
                    rules={[{ required: true, message: "Required" }]}
                    className="w-1/2 mb-4"
                >
                    <Input size="large" placeholder="e.g. Doe" className={inputClasses} />
                </Form.Item>
            </div>

            <Form.Item
                name="phone"
                label={<span className="font-semibold text-slate-700 text-sm">Phone Number</span>}
                rules={[{ required: true, message: "Required" }]}
                className="mb-4"
            >
                <Input prefix={<PhoneOutlined className="text-slate-400 mr-2" />} size="large" placeholder="+233 XXXXXXXXX" className={inputClasses} />
            </Form.Item>

            <Form.Item
                name="email"
                label={<span className="font-semibold text-slate-700 text-sm">Email Address</span>}
                rules={[{ required: false, type: "email", message: "Enter a valid email" }]}
                className="mb-0"
            >
                <Input prefix={<MailOutlined className="text-slate-400 mr-2" />} size="large" placeholder="johndoe@domain.com" className={inputClasses} />
            </Form.Item>

        </div>
    );
}