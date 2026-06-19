"use client";

import { useState } from "react";
import { Form, Select, Button, Typography, message } from "antd";
import { TranslationOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

export default function LanguageSettings() {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const onFinish = (values: any) => {
        setLoading(true);

        // Simulating a network request to save the preference
        setTimeout(() => {
            message.success({ content: "Language preferences saved successfully.", className: "mt-12" });
            setLoading(false);
        }, 800);
    };

    return (
        <div className="flex flex-col gap-8 animate-in fade-in duration-500 max-w-2xl">

            {/* Header Section */}
            <div className="flex flex-col gap-1">
                <Title level={3} style={{ margin: 0, color: '#0A2803', fontWeight: 900, letterSpacing: '-0.02em' }}>
                    System Preferences
                </Title>
                <Text className="text-[#5C6672] font-medium">
                    Customize your regional settings and platform language.
                </Text>
            </div>

            {/* Form Section */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-50">
                    <div className="w-10 h-10 rounded-xl bg-[#5B8C51]/10 text-[#5B8C51] flex items-center justify-center text-lg shadow-sm border border-[#5B8C51]/20">
                        <TranslationOutlined />
                    </div>
                    <Title level={4} style={{ margin: 0, color: '#0A2803', fontWeight: 800 }}>Language Settings</Title>
                </div>

                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    initialValues={{ language: 'en' }} // Pre-select English
                    requiredMark={false}
                >
                    <Form.Item
                        name="language"
                        label={<span className="font-semibold text-[#5C6672] text-xs uppercase tracking-wider">Display Language</span>}
                        extra={<span className="text-[#5C6672]/80 text-[11px] font-medium mt-1.5 block">Currently, English is the only supported language. Additional languages will be supported in future updates.</span>}
                    >
                        <Select
                            size="large"
                            className="h-12 [&_.ant-select-selector]:rounded-xl [&_.ant-select-selector]:bg-[#F9FCF8] [&_.ant-select-selector]:border-gray-200 hover:[&_.ant-select-selector]:!border-[#5B8C51] focus:[&_.ant-select-selector]:!border-[#5B8C51] transition-colors"
                            options={[
                                {
                                    value: 'en',
                                    label: (
                                        <div className="flex items-center gap-2 font-bold text-[#0A2803]">
                                            <span className="text-lg">🇬🇧</span> English (Default)
                                        </div>
                                    )
                                },
                            ]}
                        />
                    </Form.Item>

                    <div className="flex justify-end pt-4 mt-8 border-t border-gray-50">
                        <Button
                            type="primary"
                            htmlType="submit"
                            size="large"
                            loading={loading}
                            className="rounded-xl px-8 font-bold bg-[#5B8C51] hover:!bg-[#0A2803] border-none shadow-md shadow-[#5B8C51]/20 transition-all duration-300"
                        >
                            Save Preferences
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}