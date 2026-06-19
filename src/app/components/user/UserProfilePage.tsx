"use client";

import { useState } from "react";
import { Tabs, Avatar, Typography, Card } from "antd";
import {
    UserOutlined,
    LockOutlined,
    SecurityScanOutlined,
    GlobalOutlined,
    EditOutlined,
    MailOutlined,
    PhoneOutlined, ClockCircleOutlined,
    CheckCircleFilled,
    CloseCircleFilled,
    SafetyCertificateOutlined
} from "@ant-design/icons";
import dayjs from "dayjs";
import { useUser } from "@/app/hooks/useUser";

// Import your sub-components
import ProfileInfo from "./ProfileInfo";
import EditProfile from "./EditProfile";
import SecuritySettings from "./SecuritySettings";
import LanguageSettings from "./LanguageSettings";
import TwoFactorSettings from "./twoFA/TwoFactorSettings";

const { Title, Text } = Typography;

export default function UserProfilePage() {
    const { user } = useUser();
    const [activeTab, setActiveTab] = useState("1");

    const items = [
        { key: "1", label: "Profile Overview", icon: <UserOutlined />, children: <ProfileInfo user={user} /> },
        { key: "2", label: "Edit Details", icon: <EditOutlined />, children: <EditProfile user={user} /> },
        { key: "3", label: "Security & Password", icon: <LockOutlined />, children: <SecuritySettings /> },
        { key: "4", label: "2FA Authentication", icon: <SecurityScanOutlined />, children: <TwoFactorSettings /> },
        { key: "5", label: "Preferences", icon: <GlobalOutlined />, children: <LanguageSettings /> },
    ];

    const has2FA = user?.multiFA?.authenticator?.enabled || user?.multiFA?.sms?.enabled;

    return (
        <div className="max-w-7xl mx-auto pb-8 animate-in fade-in duration-500">

            {/* 1. Expanded Header with Metadata Grid */}
            {/* Swapped the default emerald for the Dibanko dark forest green layout */}
            <div className="relative bg-[#0A2803] rounded-3xl p-8 lg:p-10 mb-8 text-white shadow-xl shadow-[#0A2803]/10 overflow-hidden flex flex-col xl:flex-row gap-8 justify-between items-start xl:items-center">

                {/* Decorative Background Elements using brand colors */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#5B8C51]/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#EDDD5E]/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

                {/* Left Side: Primary Identity */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10 w-full xl:w-auto">
                    {/* Updated Avatar to match the yellow/gold theme from the admin header */}
                    <Avatar size={110} src={user?.avatarUrl !== "true" ? user?.avatarUrl : undefined} className="bg-[#EDDD5E] text-[#0A2803] font-black text-4xl shadow-lg border-4 border-[#0A2803] shrink-0">
                        {user?.fName?.substring(0, 2).toUpperCase()}
                    </Avatar>
                    <div className="text-center sm:text-left">
                        <Title level={2} style={{ color: 'white', margin: 0, letterSpacing: '-0.02em' }}>
                            {user?.fName} {user?.lName}
                        </Title>

                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-1.5 mb-4">
                            <span className="text-white/30 mx-1">•</span>
                            <Text className="text-[#5B8C51] font-bold text-[15px]">
                                {user?.role?.name || 'User'}
                            </Text>
                        </div>

                        {/* Status Tags */}
                        <div className="flex flex-wrap items-center gap-3 justify-center sm:justify-start">
                            <span className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase border shadow-sm ${user?.active ? 'bg-[#5B8C51]/20 border-[#5B8C51]/40 text-white' : 'bg-red-500/20 border-red-400/30 text-red-100'}`}>
                                {user?.active ? "Active Account" : "Inactive"}
                            </span>

                            <span className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase border shadow-sm flex items-center gap-1.5 ${has2FA ? 'bg-[#EDDD5E]/20 border-[#EDDD5E]/40 text-[#EDDD5E]' : 'bg-white/10 border-white/20 text-white/70'}`}>
                                <SafetyCertificateOutlined />
                                {has2FA ? "2FA Secured" : "2FA Disabled"}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact & Activity Grid (Glassmorphism) */}
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full xl:w-auto min-w-[350px] bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm shadow-inner">

                    {/* Email Info */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 shadow-sm">
                            <MailOutlined className="text-[#EDDD5E] text-lg" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-white/60 uppercase tracking-widest font-bold mb-0.5">Email Address</span>
                            <span className="text-sm font-semibold flex items-center gap-1.5 text-white">
                                {user?.email}
                                {user?.emailVerified ?
                                    <CheckCircleFilled className="text-[#5B8C51] text-xs" title="Verified" /> :
                                    <CloseCircleFilled className="text-red-400 text-xs" title="Unverified" />
                                }
                            </span>
                        </div>
                    </div>

                    {/* Phone Info */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 shadow-sm">
                            <PhoneOutlined className="text-[#EDDD5E] text-lg" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-white/60 uppercase tracking-widest font-bold mb-0.5">Phone Number</span>
                            <span className="text-sm font-semibold flex items-center gap-1.5 text-white">
                                +{user?.phone}
                                {user?.phoneVerified ?
                                    <CheckCircleFilled className="text-[#5B8C51] text-xs" title="Verified" /> :
                                    <CloseCircleFilled className="text-red-400 text-xs" title="Unverified" />
                                }
                            </span>
                        </div>
                    </div>

                    {/* Last Login */}
                    <div className="flex items-center gap-3 sm:col-span-2 mt-2 pt-4 border-t border-white/10">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 shadow-sm">
                            <ClockCircleOutlined className="text-[#EDDD5E] text-lg" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-white/60 uppercase tracking-widest font-bold mb-0.5">Last Account Login</span>
                            <span className="text-sm font-semibold text-white">
                                {user?.lastLogin ? dayjs(user.lastLogin).format("MMMM D, YYYY • h:mm A") : "First Login Session"}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Expanded Tabbed Content */}
            <Card className="rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border-gray-100 overflow-hidden" bodyStyle={{ padding: 0 }}>
                <Tabs
                    activeKey={activeTab}
                    onChange={setActiveTab}
                    tabPosition="left"
                    /* Strict Ant Design Overrides: 
                        Forces the tabs to use Dibanko Farms colors for active states and borders.
                    */
                    className="min-h-[600px] [&_.ant-tabs-nav]:bg-[#F9FCF8] [&_.ant-tabs-nav]:w-64 [&_.ant-tabs-tab]:py-5 [&_.ant-tabs-tab]:px-6 [&_.ant-tabs-tab-active]:bg-white [&_.ant-tabs-tab-active_.ant-tabs-tab-btn]:!text-[#5B8C51] [&_.ant-tabs-ink-bar]:!bg-[#5B8C51]"
                    items={items.map(item => ({
                        key: item.key,
                        label: (
                            <div className="flex items-center gap-3 text-[15px] font-medium transition-colors">
                                {item.icon}
                                <span>{item.label}</span>
                            </div>
                        ),
                        children: (
                            <div className="p-6 lg:p-10 animate-in fade-in duration-300">
                                {item.children}
                            </div>
                        )
                    }))}
                />
            </Card>
        </div>
    );
}