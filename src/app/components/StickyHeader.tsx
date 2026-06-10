"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Drawer, Button } from "antd";
import { MenuOutlined, ArrowRightOutlined, EnvironmentOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [drawerVisible, setDrawerVisible] = useState(false);

    // Handle sticky header transition
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Feed Production", path: "/#whatwedo" },
        { name: "Products", path: "/#products" },
        { name: "Projects", path: "/#projects" },
        { name: "Gallery", path: "/gallery" },
        { name: "Team", path: "/team" },
        { name: "About", path: "/about-us" },
    ];

    return (
        <header className={`w-full z-50 transition-all duration-300 ${isScrolled ? "fixed top-0 bg-white shadow-md py-3 lg:py-0" : "relative bg-transparent py-3 lg:py-5"}`}>
            <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between relative">

                {/* Mobile Logo - Perfectly Centered */}
                <div className="absolute left-1/2 -translate-x-1/2 lg:hidden flex items-center">
                    <Link href="/">
                        <Image src="/assets/img/logo/black-logo-bottom.svg" alt="Dibanko Farms" height={250} width={200} />
                    </Link>
                </div>

                {/* Mobile Logo - Left Aligned Icon */}
                <Link href="/" className="lg:hidden flex items-center">
                    <Image src="/assets/img/logo/black-logo-top.svg" alt="Dibanko Farms" height={50} width={50} />
                </Link>

                {/* Desktop Logo - Locked to the Left */}
                <Link href="/" className="lg:flex hidden items-center">
                    <Image src="/assets/img/logo/black-logo.svg" alt="Dibanko Farms" height={120} width={120} />
                </Link>

                {/* Desktop Navigation - Perfectly Centered on Desktop Screens */}
                <nav className="hidden lg:flex items-center gap-8 font-bold text-[#404A3D] absolute left-1/2 -translate-x-1/2">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.path} className="hover:text-[#5B8C51] transition-colors whitespace-nowrap">
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Action Buttons & Mobile Hamburger - Locked to the Right */}
                <div className="flex items-center gap-4 ml-auto">
                    <Link href="/contact-us" className="hidden lg:block">
                        <Button type="primary" size="large" className="bg-[#EDDD5E] text-[#0A2803] border-none font-bold rounded-full px-8 hover:!bg-[#5B8C51] hover:!text-white">
                            Let&apos;s Talk <ArrowRightOutlined />
                        </Button>
                    </Link>

                    {/* Mobile Hamburger */}
                    <Button
                        type="text"
                        icon={<MenuOutlined className="text-2xl" />}
                        className="lg:hidden"
                        onClick={() => setDrawerVisible(true)}
                    />
                </div>
            </div>

            {/* Ant Design Drawer */}
            <Drawer
                title={<Image src="/assets/img/logo/black-logo.svg" alt="Logo" height={40} width={40} />}
                placement="right"
                onClose={() => setDrawerVisible(false)}
                open={drawerVisible}
                width={320}
            >
                <div className="flex flex-col h-full">
                    <h3 className="text-xl font-bold text-[#0A2803] mb-4">Welcome to Dibanko Salifu Farms!</h3>
                    <p className="text-sm text-gray-500 mb-8">Your trusted partner for high-quality crops, well-bred livestock, and fortified animal feed in the Ashanti Region.</p>

                    <div className="flex flex-col gap-4 font-bold text-lg text-[#404A3D] mb-8">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.path} onClick={() => setDrawerVisible(false)}>
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="mt-auto border-t pt-6">
                        <h3 className="font-bold text-lg mb-4">Contact Us</h3>
                        <ul className="flex flex-col gap-4 text-sm font-semibold">
                            <li className="flex items-start gap-3">
                                <PhoneOutlined className="text-[#5B8C51] text-xl mt-1" />
                                <a href="tel:+233244522879">+233 24 452 2879</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MailOutlined className="text-[#5B8C51] text-xl mt-1" />
                                <a href="mailto:dibankosalifu@gmail.com">dibankosalifu@gmail.com</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <EnvironmentOutlined className="text-[#5B8C51] text-xl mt-1" />
                                <span>Ejura, Ashanti Region, Ghana</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Drawer>
        </header>
    );
}