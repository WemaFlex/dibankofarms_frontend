"use client"
import Image from "next/image";
import Link from "next/link";
import { MailOutlined, PhoneOutlined, FacebookFilled, InstagramOutlined, TwitterOutlined } from "@ant-design/icons";

export default function TopHeader() {
    return (
        <div className="hidden lg:block bg-[#FFF9E8] py-2">
            <div className="container mx-auto px-4 max-w-8xl">
                <div className="flex items-center justify-between">

                    {/* Contact Links */}
                    <ul className="flex items-center gap-8 text-[#404A3D] font-semibold text-sm">
                        <li className="flex items-center gap-2 hover:text-[#5B8C51] transition-colors">
                            <MailOutlined className="text-[#5B8C51] text-lg" />
                            <a href="mailto:dibankosalifu@gmail.com">dibankosalifu@gmail.com</a>
                        </li>
                        <li className="flex items-center gap-2 hover:text-[#5B8C51] transition-colors">
                            <PhoneOutlined className="text-[#5B8C51] text-lg" />
                            <a href="tel:+233244522879">+233 24 452 2879 / +233 540 765 641</a>
                        </li>
                    </ul>

                    {/* Centered Desktop Logos */}
                    <Link href="/" className="flex items-center absolute left-1/2 -translate-x-1/2">
                        <Image src="/assets/img/logo/black-logo-bottom.svg" alt="Bottom Logo" height={50} width={220} className="-ml-4 mt-2" />
                    </Link>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4 text-lg text-[#404A3D]">
                        <a href="https://www.facebook.com/dibanksalifufarms" target="_blank" rel="noreferrer" className="hover:text-[#5B8C51] transition-colors"><FacebookFilled /></a>
                        <a href="https://www.instagram.com/dibanksalifufarms" target="_blank" rel="noreferrer" className="hover:text-[#5B8C51] transition-colors"><InstagramOutlined /></a>
                        <a href="https://twitter.com/dibanksalifufarms" target="_blank" rel="noreferrer" className="hover:text-[#5B8C51] transition-colors"><TwitterOutlined /></a>
                    </div>

                </div>
            </div>
        </div>
    );
}