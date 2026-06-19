"use client";

import { useEffect, useState } from "react";
import { Form, Input, Button, Typography, message, Avatar, Upload, Spin } from "antd";
import {
    UserOutlined,
    PhoneOutlined, EditOutlined, CameraOutlined,
    LoadingOutlined,
    MailOutlined
} from "@ant-design/icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// Ensure you import your actual actions here
import { updateProfile, updateAvatar } from "@/actions/auth"; // Adjust path as needed
import { uploadFile } from "@/actions/fileUpload";

const { Title, Text } = Typography;

export default function EditProfile({ user }: { user: any }) {
    const [form] = Form.useForm();
    const queryClient = useQueryClient();
    const [isUploading, setIsUploading] = useState(false);

    // Pre-fill the form when the user object is available
    useEffect(() => {
        if (user) {
            form.setFieldsValue({
                fName: user.fName,
                lName: user.lName,
                phone: user.phone,
            });
        }
    }, [user, form]);

    // 1. Mutation for Text Details
    const updateMutation = useMutation({
        mutationFn: (values: any) => updateProfile(values),
        onSuccess: () => {
            message.success({ content: "Your profile details have been updated.", className: "mt-12" });
            queryClient.invalidateQueries({ queryKey: ["current-user"] });
        },
        onError: (error: any) => {
            message.error({ content: error.message || "Failed to update profile.", className: "mt-12" });
        }
    });

    // 2. Mutation for Avatar URL
    const avatarMutation = useMutation({
        mutationFn: (url: string) => updateAvatar(url), // e.g. updateAvatar({ avatarUrl: url }) depending on your backend
        onSuccess: () => {
            message.success("Profile photo updated successfully!");
            queryClient.invalidateQueries({ queryKey: ["current-user"] });
        },
        onError: (error: any) => {
            message.error(error.message || "Failed to save the new profile photo.");
        }
    });

    const onFinish = (values: any) => {
        updateMutation.mutate(values);
    };

    // 3. Custom File Upload Handler
    const handleAvatarUpload = async (options: any) => {
        const { file, onSuccess, onError } = options;
        setIsUploading(true);

        try {
            const formData = new FormData();
            formData.append("file", file);

            const avatarUrl = await uploadFile(file);
            await avatarMutation.mutateAsync(avatarUrl);

            onSuccess("ok");
        } catch (error: any) {
            onError(error);
            message.error("Failed to upload the image. Please try again.");
        } finally {
            setIsUploading(false);
        }
    };

    const isValidAvatar = user?.avatarUrl && user.avatarUrl.length > 5 && user.avatarUrl.includes("http");

    if (!user) return null;

    return (
        <div className="flex flex-col gap-8 animate-in fade-in duration-500 max-w-3xl">

            {/* Header Section */}
            <div className="flex flex-col gap-1">
                <Title level={3} style={{ margin: 0, color: '#0A2803', fontWeight: 900, letterSpacing: '-0.02em' }}>
                    Edit Profile Details
                </Title>
                <Text className="text-[#5C6672] font-medium">
                    Update your personal information, contact details, and profile photo.
                </Text>
            </div>

            {/* Editable Form Section */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">

                {/* Profile Photo Uploader Section */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-10 pb-8 border-b border-gray-50">
                    <Upload
                        name="avatar"
                        showUploadList={false}
                        customRequest={handleAvatarUpload}
                        accept="image/png, image/jpeg, image/jpg, image/webp"
                        disabled={isUploading}
                    >
                        <div className="relative group cursor-pointer rounded-full overflow-hidden shadow-sm border-4 border-white hover:border-[#5B8C51]/30 transition-all duration-300">
                            {isUploading ? (
                                <div className="w-24 h-24 bg-[#F9FCF8] flex items-center justify-center">
                                    <Spin indicator={<LoadingOutlined style={{ fontSize: 28, color: '#5B8C51' }} spin />} />
                                </div>
                            ) : (
                                <>
                                    <Avatar
                                        size={96}
                                        src={isValidAvatar ? user.avatarUrl : undefined}
                                        className="bg-[#EDDD5E] text-[#0A2803] font-black text-3xl flex items-center justify-center border border-gray-100"
                                    >
                                        {!isValidAvatar && user?.fName?.substring(0, 2).toUpperCase()}
                                    </Avatar>

                                    {/* Hover Overlay with Camera Icon */}
                                    <div className="absolute inset-0 bg-[#0A2803]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                        <CameraOutlined className="text-white text-2xl" />
                                    </div>
                                </>
                            )}
                        </div>
                    </Upload>
                    <div className="text-center sm:text-left flex flex-col justify-center">
                        <Title level={5} style={{ margin: 0, color: '#0A2803', fontWeight: 800 }}>Profile Photo</Title>
                        <Text className="text-[#5C6672] text-sm mt-1 mb-2 block max-w-sm">
                            We recommend an image of at least 300x300px. Formats accepted: JPG, PNG, WEBP.
                        </Text>
                        <Text className="text-xs font-bold text-[#5B8C51] uppercase tracking-widest cursor-pointer hover:text-[#0A2803] transition-colors">
                            Click on the photo to change
                        </Text>
                    </div>
                </div>

                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#5B8C51]/10 text-[#5B8C51] flex items-center justify-center text-lg shadow-sm border border-[#5B8C51]/20">
                        <EditOutlined />
                    </div>
                    <Title level={4} style={{ margin: 0, color: '#0A2803', fontWeight: 800 }}>Personal Information</Title>
                </div>

                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    requiredMark={false}
                    className="flex flex-col gap-2"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                        <Form.Item
                            name="fName"
                            label={<span className="font-semibold text-[#5C6672] text-xs uppercase tracking-wider">First Name</span>}
                            rules={[{ required: true, message: "Please enter your first name" }]}
                        >
                            <Input
                                size="large"
                                prefix={<UserOutlined className="text-[#5C6672]/60 mr-2" />}
                                placeholder="Enter your first name"
                                className="h-12 rounded-xl bg-[#F9FCF8] border-gray-200 hover:border-[#5B8C51] focus:border-[#5B8C51] focus:bg-white transition-colors"
                            />
                        </Form.Item>

                        <Form.Item
                            name="lName"
                            label={<span className="font-semibold text-[#5C6672] text-xs uppercase tracking-wider">Last Name</span>}
                            rules={[{ required: true, message: "Please enter your last name" }]}
                        >
                            <Input
                                size="large"
                                prefix={<UserOutlined className="text-[#5C6672]/60 mr-2" />}
                                placeholder="Enter your last name"
                                className="h-12 rounded-xl bg-[#F9FCF8] border-gray-200 hover:border-[#5B8C51] focus:border-[#5B8C51] focus:bg-white transition-colors"
                            />
                        </Form.Item>
                    </div>

                    <Form.Item
                        name="phone"
                        label={<span className="font-semibold text-[#5C6672] text-xs uppercase tracking-wider">Phone Number</span>}
                        rules={[{ required: true, message: "Please enter your phone number" }]}
                    >
                        <Input
                            size="large"
                            prefix={<PhoneOutlined className="text-[#5C6672]/60 mr-2" />}
                            placeholder="e.g. 233249747585"
                            className="h-12 rounded-xl bg-[#F9FCF8] border-gray-200 hover:border-[#5B8C51] focus:border-[#5B8C51] focus:bg-white transition-colors"
                        />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label={<span className="font-semibold text-[#5C6672] text-xs uppercase tracking-wider">Email</span>}
                        rules={[{ required: true, type: "email", message: "Please enter your email" }]}
                    >
                        <Input
                            size="large"
                            prefix={<MailOutlined className="text-[#5C6672]/60 mr-2" />}
                            placeholder="e.g. johndoe@gmail.com"
                            className="h-12 rounded-xl bg-[#F9FCF8] border-gray-200 hover:border-[#5B8C51] focus:border-[#5B8C51] focus:bg-white transition-colors"
                        />
                    </Form.Item>

                    <div className="flex justify-end pt-4 mt-2 border-t border-gray-50">
                        <Button
                            type="primary"
                            htmlType="submit"
                            size="large"
                            loading={updateMutation.isPending}
                            className="rounded-xl px-8 font-bold bg-[#5B8C51] hover:!bg-[#0A2803] border-none shadow-md shadow-[#5B8C51]/20 transition-all duration-300"
                        >
                            Save Changes
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}