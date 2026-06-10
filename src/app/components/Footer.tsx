"use client";

import Image from "next/image";
import Link from "next/link";
import { Input } from "antd";
import { EnvironmentFilled, MailFilled, PhoneFilled, FacebookFilled, InstagramOutlined, TwitterOutlined } from "@ant-design/icons";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-[#0A2803] text-white pt-20 pb-0 bg-cover bg-center" style={{ backgroundImage: "url('/assets/img/home-1/footer-bg.jpg')" }}>
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-[#0A2803]/90 z-0"></div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">

                {/* Top Subscription Row */}
                <div className="flex flex-col lg:flex-row justify-between items-center border-b border-white/20 pb-10 mb-12 gap-8">
                    <Link href="/">
                        <Image src="/assets/img/logo/white-logo.svg" alt="Dibanko Farms" width={250} height={80} />
                    </Link>
                    <div className="flex flex-col md:flex-row items-center gap-6 w-full lg:w-auto">
                        <h3 className="font-bold text-xl lg:text-2xl text-center md:text-left">Subscribe To Our Newsletter</h3>

                        {/* Ant Design Search Input styled as a Subscribe bar */}
                        <Input.Search
                            placeholder="Your email address"
                            enterButton="Subscribe"
                            size="large"
                            className="max-w-md w-full"
                            style={{ borderRadius: 8 }}
                        />
                    </div>
                </div>

                {/* Main Footer Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">

                    {/* Contact Info */}
                    <div>
                        <h5 className="text-xl font-bold mb-6">Contact Us</h5>
                        <ul className="flex flex-col gap-6">
                            <li className="flex items-start gap-4">
                                <div className="bg-[#EDDD5E] text-[#5B8C51] p-3 rounded-full flex items-center justify-center"><MailFilled /></div>
                                <div>
                                    <h6 className="text-sm text-gray-400">Email us:</h6>
                                    <p className="font-bold"><a href="mailto:dibankosalifu@gmail.com" className="hover:text-[#EDDD5E] transition-colors">dibankosalifu@gmail.com</a></p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="bg-[#EDDD5E] text-[#5B8C51] p-3 rounded-full flex items-center justify-center"><EnvironmentFilled /></div>
                                <div>
                                    <h6 className="text-sm text-gray-400">Location:</h6>
                                    <p className="font-bold">Ejura, Ashanti Region, Ghana</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="bg-[#EDDD5E] text-[#5B8C51] p-3 rounded-full flex items-center justify-center"><PhoneFilled /></div>
                                <div>
                                    <h6 className="text-sm text-gray-400">Phone:</h6>
                                    <p className="font-bold"><a href="tel:+233244522879" className="hover:text-[#EDDD5E] transition-colors">+233 24 452 2879</a></p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Products & Services */}
                    <div>
                        <h5 className="text-xl font-bold mb-6">Our Products</h5>
                        <ul className="flex flex-col gap-4 font-semibold text-gray-300">
                            <li><Link href="/#products" className="hover:text-[#EDDD5E] transition-colors">Agriculture Foods</Link></li>
                            <li><Link href="/#products" className="hover:text-[#EDDD5E] transition-colors">Livestock</Link></li>
                            <li><Link href="/#products" className="hover:text-[#EDDD5E] transition-colors">Animal Feed</Link></li>
                        </ul>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h5 className="text-xl font-bold mb-6">Useful Links</h5>
                        <ul className="flex flex-col gap-4 font-semibold text-gray-300">
                            <li><Link href="/team" className="hover:text-[#EDDD5E] transition-colors">Meet The Team</Link></li>
                            <li><Link href="/faqs" className="hover:text-[#EDDD5E] transition-colors">Our FAQs</Link></li>
                            <li><Link href="/contact-us" className="hover:text-[#EDDD5E] transition-colors">24/7 Support</Link></li>
                            <li><Link href="/about-us" className="hover:text-[#EDDD5E] transition-colors">About Us</Link></li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Copyright Bar */}
            <div className="bg-[#1E3917] py-6 relative z-10">
                <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-300 text-sm text-center md:text-left">
                        © {currentYear} Dibanko Salifu Farms. Developed by <a href="https://www.wemaflex.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-white">Wemaflex</a>.
                    </p>
                    <div className="flex items-center gap-6 text-xl">
                        <a href="https://www.facebook.com/dibanksalifufarms" target="_blank" rel="noreferrer" className="hover:text-[#EDDD5E] transition-colors"><FacebookFilled /></a>
                        <a href="https://www.instagram.com/dibanksalifufarms" target="_blank" rel="noreferrer" className="hover:text-[#EDDD5E] transition-colors"><InstagramOutlined /></a>
                        <a href="https://twitter.com/dibanksalifufarms" target="_blank" rel="noreferrer" className="hover:text-[#EDDD5E] transition-colors"><TwitterOutlined /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}