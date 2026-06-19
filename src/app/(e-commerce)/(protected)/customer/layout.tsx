"use client";

import React from "react";
import Link from "next/link";
import { Layout, Button, Badge } from "antd";
import { ShoppingCartOutlined, SearchOutlined, HeartOutlined } from "@ant-design/icons";
import FooterSection from "@/app/components/Footer";

const { Header, Content, Footer } = Layout;

export default function CustomerLayout({ children }: { children: React.ReactNode }) {
    return (
        <Layout className="min-h-screen bg-[#F9FCF8]">

            {/* Sticky Header */}
            <Header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 flex items-center justify-between h-20 shadow-sm">
                {/* Logo Area */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[#5B8C51] rounded-lg flex items-center justify-center text-white">
                        <span className="font-black text-lg">D</span>
                    </div>
                    <span className="text-[#0A2803] font-black text-xl tracking-tight">Dibanko<span className="text-[#5B8C51]">Farms</span></span>
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8 font-bold text-[#0A2803]">
                    <Link href="/shop" className="hover:text-[#5B8C51] transition-colors">Shop</Link>
                    <Link href="/about" className="hover:text-[#5B8C51] transition-colors">Our Farm</Link>
                    <Link href="/contact" className="hover:text-[#5B8C51] transition-colors">Contact</Link>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4">
                    <Button type="text" icon={<SearchOutlined className="text-xl" />} />
                    <Link href="/wishlist">
                        <Button type="text" icon={<HeartOutlined className="text-xl" />} />
                    </Link>
                    <Badge count={2} size="small" offset={[-2, 2]} color="#5B8C51">
                        <Button type="text" icon={<ShoppingCartOutlined className="text-xl" />} />
                    </Badge>
                    <Link href="/auth/sign-in">
                        <Button className="bg-[#0A2803] text-white rounded-xl h-10 px-6 font-bold hover:!bg-[#5B8C51] border-none">
                            My Account
                        </Button>
                    </Link>
                </div>
            </Header>

            {/* Main Content */}
            <Content className="w-full max-w-7xl mx-auto px-4 md:px-8 py-10">
                {children}
            </Content>

            <Footer style={{ padding: 0 }}>
                <FooterSection />
            </Footer>
        </Layout>
    );
}