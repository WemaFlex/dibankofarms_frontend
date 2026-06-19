"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Layout,
    Menu,
    Button,
    Dropdown,
    ConfigProvider,
    Divider
} from "antd";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from "@ant-design/icons";
import {
    FaChartPie,
    FaSeedling,
    FaBoxOpen,
    FaUsers,
    FaTractor,
    FaCog,
    FaSignOutAlt,
    FaUserEdit,
    FaUserCircle
} from "react-icons/fa";
import { useLogout } from "@/app/hooks/useLogout";

const { Header, Sider, Content } = Layout;

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const [collapsed, setCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [greeting, setGreeting] = useState("Welcome back");

    const [logout, isLoggingOut] = useLogout();
    const pathname = usePathname();

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) setGreeting("Good morning");
        else if (hour < 18) setGreeting("Good afternoon");
        else setGreeting("Good evening");
    }, []);

    const handleMenuClick = () => {
        if (isMobile) {
            setCollapsed(true);
        }
    };

    const menuItems = [
        {
            key: "/admin/dashboard", icon: <FaChartPie size={18} />,
            label: <Link href="/admin/dashboard" onClick={handleMenuClick}>Dashboard</Link>
        },
        {
            key: "/admin/inventory",
            icon: <FaSeedling size={18} />,
            label: <Link href="/admin/inventory" onClick={handleMenuClick}>Inventory & Feeds</Link>
        },
        {
            key: "/admin/orders",
            icon: <FaBoxOpen size={18} />,
            label: <Link href="/admin/orders" onClick={handleMenuClick}>Orders</Link>
        },
        {
            key: "/admin/customers",
            icon: <FaUsers size={18} />,
            label: <Link href="/admin/customers" onClick={handleMenuClick}>Customers</Link>
        },
        {
            key: "/admin/operations",
            icon: <FaTractor size={18} />,
            label: <Link href="/admin/operations" onClick={handleMenuClick}>Farm Operations</Link>
        },
    ];

    const userMenuItems = [
        {
            key: "header",
            label: (
                <div className="flex flex-col items-center text-center py-4 px-6 cursor-default min-w-[200px]">
                    <div className="w-16 h-16 rounded-full bg-[#EDDD5E] text-[#0A2803] flex items-center justify-center text-4xl shadow-sm border-2 border-gray-100 mb-3">
                        <FaUserCircle />
                    </div>
                    <span className="text-base font-black text-[#0A2803] leading-tight">Admin User</span>
                    <span className="text-sm font-medium text-[#5C6672] mt-1">admin@dibankofarms.com</span>
                </div>
            ),
            style: { cursor: 'default', backgroundColor: 'transparent' }
        },
        {
            type: "divider",
        },
        {
            key: "profile",
            icon: <FaUserEdit className="text-lg text-[#5C6672]" />,
            label: <Link href="/admin/user" className="font-semibold text-[#5C6672]">Account</Link>,
            className: "py-3 px-4"
        },
        {
            key: "logout",
            icon: <FaSignOutAlt className="text-lg text-red-500" />,
            label: <span className="font-semibold text-red-500">{isLoggingOut ? "Logging out..." : "Logout"}</span>,
            className: "py-3 px-4 hover:!bg-red-50",
            onClick: () => logout(),
        },
    ];

    // Determine if settings is the active route to highlight it just like menu items
    const isSettingsActive = pathname.startsWith("/admin/settings");

    return (
        <ConfigProvider
            theme={{
                components: {
                    Layout: {
                        siderBg: "#0A2803",
                        headerBg: "#ffffff",
                        bodyBg: "#F9FCF8",
                    },
                    Menu: {
                        darkItemBg: "#0A2803",
                        darkItemSelectedBg: "#5B8C51",
                        darkItemColor: "rgba(255, 255, 255, 0.65)",
                        darkItemHoverColor: "#ffffff",
                        darkItemSelectedColor: "#ffffff",
                    },
                },
            }}
        >
            <Layout className="h-screen overflow-hidden">

                {/* --- UNIFIED SIDER --- */}
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    breakpoint="lg"
                    onBreakpoint={(broken) => {
                        setIsMobile(broken);
                        setCollapsed(broken);
                    }}
                    width={isMobile ? "100%" : 280}
                    collapsedWidth={isMobile ? 0 : 80}
                    className={`${isMobile ? "absolute z-50 h-full" : "shadow-xl z-20"}`}
                >
                    <div className="flex flex-col h-full">
                        <div className={`h-20 flex items-center ${collapsed && !isMobile ? 'justify-center' : 'justify-between px-6'} border-b border-white/10 flex-shrink-0 transition-all duration-300`}>
                            <Link href="/admin" className="flex items-center gap-3 overflow-hidden">
                                <div className="w-10 h-10 bg-[#5B8C51] rounded-lg flex items-center justify-center text-white shadow-md flex-shrink-0">
                                    <FaTractor size={20} />
                                </div>
                                <span className={`text-white font-black text-lg tracking-wide uppercase whitespace-nowrap transition-all duration-300 ${(collapsed && !isMobile) ? 'w-0 opacity-0 hidden' : 'w-auto opacity-100 block'}`}>
                                    Dibanko <span className="text-[#EDDD5E]">Farms</span>
                                </span>
                            </Link>

                            {isMobile && !collapsed && (
                                <Button
                                    type="text"
                                    icon={<span className="text-white text-xl">✕</span>}
                                    onClick={() => setCollapsed(true)}
                                    className="flex items-center justify-center hover:bg-white/10"
                                />
                            )}
                        </div>

                        <div className="flex-1 overflow-y-auto custom-scrollbar">
                            <Menu theme="dark" mode="inline" selectedKeys={[pathname]} items={menuItems} className="pt-4 border-none" />
                        </div>

                        {/* --- FIXED BOTTOM ACTIONS --- */}
                        <div className="p-4 border-t border-white/10 flex-shrink-0 flex flex-col gap-2">

                            {/* Settings Link */}
                            <Link
                                href="/admin/user"
                                onClick={handleMenuClick}
                                className={`flex items-center ${(collapsed && !isMobile) ? 'justify-center px-0' : 'gap-3 px-4'} py-3.5 w-full rounded-xl font-semibold transition-all duration-300 group ${isSettingsActive
                                    ? "bg-[#5B8C51] text-white shadow-md shadow-[#5B8C51]/20"
                                    : "text-white/70 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                <FaCog size={18} className={`transition-transform duration-500 ${!isSettingsActive && 'group-hover:rotate-90'}`} />
                                {!(collapsed && !isMobile) && <span>Settings</span>}
                            </Link>

                            {/* Logout Button */}
                            <button
                                onClick={() => logout()}
                                disabled={isLoggingOut as boolean}
                                className={`flex items-center ${(collapsed && !isMobile) ? 'justify-center px-0' : 'gap-3 px-4'} py-3.5 w-full rounded-xl font-semibold "bg-[#5B8C51] hover:bg-red-500/10 transition-colors duration-300 group ${isLoggingOut ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                <FaSignOutAlt size={18} className={`${isLoggingOut ? 'animate-pulse' : 'group-hover:scale-110 transition-transform'}`} />
                                {!(collapsed && !isMobile) && <span>{isLoggingOut ? "Logging out..." : "Logout"}</span>}
                            </button>

                        </div>
                    </div>
                </Sider>

                {/* --- MAIN PAGE WRAPPER --- */}
                <Layout>

                    <Header style={{ padding: 20 }} className="h-20 flex items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)] z-10 leading-normal">

                        <div className="flex items-center">

                            <div className="text-lg w-10 h-10 flex items-center justify-center bg-[#F9FCF8] hover:bg-[#EDF2EC] rounded-lg text-[#0A2803] transition-colors">
                                <Button
                                    type="text"
                                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                    onClick={() => setCollapsed(!collapsed)}
                                    className="w-full h-full flex items-center justify-center"
                                />
                            </div>

                            <Divider orientation="vertical" className="mx-4" />

                            <div className="hidden sm:block leading-tight">
                                <h2 className="text-xl md:text-2xl font-black text-[#0A2803] m-0">
                                    {greeting}, <span className="text-[#5B8C51]">Admin</span>
                                </h2>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 md:gap-6">
                            <Dropdown menu={{ items: userMenuItems }} trigger={['click']} placement="bottomRight">
                                <div className="flex items-center gap-3 cursor-pointer pl-2 md:pl-6 border-l border-gray-100 group">
                                    <div className="text-right hidden md:block leading-tight">
                                        <p className="text-sm font-bold text-[#0A2803] m-0 group-hover:text-[#5B8C51] transition-colors">Admin User</p>
                                        <p className="text-xs text-[#5C6672] m-0">Farm Manager</p>
                                    </div>
                                    <div className="w-11 h-11 rounded-full bg-[#EDDD5E] text-[#0A2803] flex items-center justify-center text-2xl shadow-sm border-2 border-white group-hover:border-[#5B8C51] transition-all">
                                        <FaUserCircle />
                                    </div>
                                </div>
                            </Dropdown>
                        </div>

                    </Header>

                    <Content className="p-4 md:p-6 lg:p-8 overflow-y-auto relative custom-scrollbar">
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </ConfigProvider>
    );
}