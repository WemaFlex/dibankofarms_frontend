"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Form, Button, Typography, message, Alert } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined, SafetyCertificateOutlined } from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";

import PersonalInfoStep from "./PersonalInfoStep";
import PasswordSetup from "./PasswordSetup";
import { register } from "@/actions/auth";
import { AxiosError } from "axios";

const { Title, Text } = Typography;



const variants = {
    initial: { opacity: 0, y: 15, filter: "blur(4px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: -15, filter: "blur(4px)", transition: { duration: 0.2, ease: "easeIn" } },
};

const stepInfo = [
    { title: "Personal Details", desc: "Primary identity and contact info." },
    { title: "Password", desc: "Set a secure password for your account" },
];

export default function NewResidentPage() {
    const [currentStep, setCurrentStep] = useState(0);
    const [form] = Form.useForm();
    const router = useRouter();
    const [errMsg, setErrMsg] = useState<string | null>(null);

    const registerM = useMutation({
        mutationFn: register,
        onSuccess: () => {
            message.success({ content: "Registration successful!", className: "mt-12" });
            // router.push("/auth/sign-in");
        },
        onError: (error: AxiosError<{ message: string }>) => {
            setErrMsg(error.message || "Failed to create resident");
            setTimeout(() => setErrMsg(null), 5000);
        },
    });

    const next = async () => {
        try {
            let fieldsToValidate: any[] = [];
            if (currentStep === 0) fieldsToValidate = ["firstName", "lastName", "phone", "email"];
            if (currentStep === 1) fieldsToValidate = ["password", "confirmPassword"];

            if (fieldsToValidate.length > 0) {
                await form.validateFields(fieldsToValidate);
            }

            setCurrentStep(currentStep + 1);
        } catch (err) {
            // Validation fails silently; Ant Design handles the red UI borders
            return; // IMPORTANT: Add this return so it doesn't advance to the next step if there's an error!
        }
    };

    const prev = () => setCurrentStep(currentStep - 1);

    return (
        <div className="w-full max-w-lg mx-auto pb-12">

            <div className="mb-6 flex">
                <Button
                    type="text"
                    icon={<ArrowLeftOutlined />}
                    onClick={() => router.push("/auth/sign-in")}
                    className="text-slate-400 hover:text-slate-600 transition-colors pl-0 hover:bg-transparent font-medium"
                >
                    Cancel Setup
                </Button>
            </div>

            <div className="mb-8 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-3 mb-1">
                    <Title level={2} style={{ margin: 0, fontWeight: 700, color: "#1e293b", letterSpacing: "-0.02em" }}>
                        {stepInfo[currentStep].title}
                    </Title>
                    <span className="bg-emerald-50 text-emerald-600 font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md border border-emerald-100">
                        Step {currentStep + 1} of {stepInfo.length}
                    </span>
                </div>
                <Text className="text-slate-500 text-base font-medium block">
                    {stepInfo[currentStep].desc}
                </Text>
            </div>

            {errMsg && (
                <Alert
                    showIcon
                    type="error"
                    title={<span className="font-medium">{errMsg}</span>}
                    className="mb-6 rounded-lg border-red-200 bg-red-50 text-red-700"
                />
            )}

            <Form
                form={form}
                layout="vertical"
                onFinish={registerM.mutate}
                initialValues={{ householdSize: 1, residentType: "Tenant" }}
                className="w-full"
                requiredMark={false}
                preserve={true}
            >
                <AnimatePresence mode="wait">
                    <div className="min-h-[315px]">
                        <motion.div
                            key={currentStep}
                            variants={variants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <div className={currentStep === 0 ? "block" : "hidden"}><PersonalInfoStep form={form} /></div>
                            <div className={currentStep === 1 ? "block" : "hidden"}><PasswordSetup form={form} /></div>
                        </motion.div>
                    </div>
                </AnimatePresence>

                <div className="flex flex-col-reverse sm:flex-row justify-between items-center mt-10 pt-8 border-t border-slate-100 gap-4">
                    <Button
                        htmlType="button"
                        size="large"
                        disabled={currentStep === 0}
                        onClick={prev}
                        className={`rounded-xl h-12 px-6 font-semibold w-full sm:w-auto transition-all ${currentStep === 0
                            ? "opacity-0 pointer-events-none"
                            : "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-600"
                            }`}
                    >
                        Go Back
                    </Button>

                    {currentStep < stepInfo.length - 1 ? (
                        <Button
                            htmlType="button"
                            type="primary"
                            size="large"
                            onClick={next}
                            className="rounded-xl h-12 px-8 font-semibold bg-emerald-600 hover:bg-emerald-700 border-none shadow-md hover:shadow-lg shadow-emerald-600/20 w-full sm:w-auto transition-all"
                        >
                            <span className="flex items-center justify-center gap-2">
                                Continue <ArrowRightOutlined />
                            </span>
                        </Button>
                    ) : (
                        <Button
                            type="primary"
                            size="large"
                            onClick={form.submit}
                            loading={registerM.isPending}
                            className="rounded-xl h-12 px-8 font-bold bg-emerald-600 hover:bg-emerald-700 border-none shadow-md hover:shadow-lg shadow-emerald-600/20 w-full sm:w-auto transition-all"
                        >
                            <span className="flex items-center justify-center gap-2">
                                Complete <SafetyCertificateOutlined />
                            </span>
                        </Button>
                    )}
                </div>
            </Form>
        </div>
    );
}