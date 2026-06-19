"use client";

import { Descriptions, Typography } from "antd";
import {
    IdcardOutlined, SafetyCertificateOutlined,
    CalendarOutlined
} from "@ant-design/icons";
import dayjs from "dayjs";

const { Title, Text } = Typography;

export default function ProfileInfo({ user }: { user: any }) {
    if (!user) return null;

    return (
        <div className="flex flex-col gap-8 animate-in fade-in duration-500">

            {/* Header Section */}
            <div className="flex flex-col gap-1">
                <Title level={3} style={{ margin: 0, color: '#0A2803', fontWeight: 900, letterSpacing: '-0.02em' }}>
                    Profile Overview
                </Title>
                <Text className="text-[#5C6672] font-medium">
                    Detailed breakdown of your personal information and access levels.
                </Text>
            </div>

            {/* 1. Personal Identity */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-50">
                    <div className="w-10 h-10 rounded-xl bg-[#5B8C51]/10 text-[#5B8C51] flex items-center justify-center text-xl">
                        <IdcardOutlined />
                    </div>
                    <Title level={4} style={{ margin: 0, color: '#0A2803', fontWeight: 800 }}>Personal Identity</Title>
                </div>

                <Descriptions
                    column={{ xxl: 2, xl: 2, lg: 2, md: 1, sm: 1, xs: 1 }}
                    labelStyle={{ fontWeight: 600, color: '#5C6672', width: '140px' }}
                    contentStyle={{ fontWeight: 700, color: '#0A2803' }}
                    size="middle"
                >
                    <Descriptions.Item label="First Name">{user.fName}</Descriptions.Item>
                    <Descriptions.Item label="Last Name">{user.lName}</Descriptions.Item>
                    <Descriptions.Item label="Email Address">{user.email}</Descriptions.Item>
                    <Descriptions.Item label="Phone Number">+{user.phone}</Descriptions.Item>
                    <Descriptions.Item label="Account Created">
                        <span className="flex items-center gap-1.5">
                            <CalendarOutlined className="text-[#5C6672]" />
                            {dayjs(user.createdAt).format("MMMM D, YYYY")}
                        </span>
                    </Descriptions.Item>
                    <Descriptions.Item label="Verification">
                        <div className="flex gap-2">
                            {user.emailVerified && (
                                <span className="bg-[#5B8C51]/10 text-[#5B8C51] border border-[#5B8C51]/20 px-2 py-0.5 rounded-md text-xs font-bold uppercase tracking-wider">
                                    Email Verified
                                </span>
                            )}
                            {user.phoneVerified && (
                                <span className="bg-[#5B8C51]/10 text-[#5B8C51] border border-[#5B8C51]/20 px-2 py-0.5 rounded-md text-xs font-bold uppercase tracking-wider">
                                    Phone Verified
                                </span>
                            )}
                        </div>
                    </Descriptions.Item>
                </Descriptions>
            </div>

            {/* 2. System Access & Roles */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-50">
                    <div className="w-10 h-10 rounded-xl bg-[#EDDD5E]/20 text-[#0A2803] flex items-center justify-center text-xl">
                        <SafetyCertificateOutlined />
                    </div>
                    <Title level={4} style={{ margin: 0, color: '#0A2803', fontWeight: 800 }}>Access Context</Title>
                </div>

                <Descriptions
                    column={1}
                    labelStyle={{ fontWeight: 600, color: '#5C6672', width: '140px' }}
                    contentStyle={{ fontWeight: 600, color: '#0A2803' }}
                    size="middle"
                >
                    <Descriptions.Item label="Assigned Role">
                        <span className="m-0 rounded-md font-black px-3 py-1 uppercase tracking-wider text-[11px] bg-[#0A2803] text-[#EDDD5E] shadow-sm">
                            {user.role?.name || "Standard User"}
                        </span>
                    </Descriptions.Item>
                    <Descriptions.Item label="Role Context">
                        <span className="text-[#5C6672] font-medium">
                            {user.role?.description || "No specific role description provided."}
                        </span>
                    </Descriptions.Item>
                </Descriptions>
            </div>

        </div>
    );
}