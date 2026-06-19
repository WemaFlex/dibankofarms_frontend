"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "antd";
import { EyeFilled, PhoneFilled, ArrowRightOutlined, CheckCircleOutlined } from "@ant-design/icons";
import CountUp from "react-countup";

export default function AboutUsSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        }, { threshold: 0.1 });

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden" ref={sectionRef}>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes floatY {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                    100% { transform: translateY(0px); }
                }
                .animate-float-y { animation: floatY 6s ease-in-out infinite; }
            `}} />

            <div className="container mx-auto px-4 lg:px-8 max-w-[1300px]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-7 relative z-20">
                        <div className={`transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                            <span className="flex items-center gap-2 text-[#404A3D] font-bold text-sm uppercase tracking-wider mb-3">
                                <Image src="/assets/img/sub-title.svg" alt="Leaf Icon" width={16} height={16} />
                                About Dibanko Salifu Farms
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-[#0A2803] leading-[1.1] mb-5">
                                Growing Ghana’s Future Through Sustainable Farming
                            </h2>
                            <p className="text-[#5C6672] text-base leading-relaxed font-medium mb-6">
                                Dibanko Salifu Farms is committed to producing high-quality agricultural products while supporting food security, local farmers, and economic development in Ghana. Our work combines traditional farming knowledge with modern equipment, irrigation, and processing systems.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className={`flex items-start gap-5 transition-all duration-1000 delay-200 transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}>
                                <div className="flex-shrink-0 w-12 h-12 bg-[#5B8C51] text-white rounded-full flex items-center justify-center text-xl">
                                    <EyeFilled />
                                </div>
                                <div>
                                    <h4 className="text-xl font-extrabold text-[#0A2803] mb-1">Our Vision</h4>
                                    <p className="text-[#5C6672] text-sm leading-relaxed">To become a leading agribusiness in Ghana known for quality, sustainability, and innovation.</p>
                                </div>
                            </div>

                            <div className={`flex items-start gap-5 transition-all duration-1000 delay-300 transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}>
                                <div className="flex-shrink-0 w-12 h-12 bg-[#EDDD5E] text-white rounded-full flex items-center justify-center text-xl">
                                    <CheckCircleOutlined />
                                </div>
                                <div>
                                    <h4 className="text-xl font-extrabold text-[#0A2803] mb-1">Our Mission</h4>
                                    <p className="text-[#5C6672] text-sm leading-relaxed">To produce reliable farm products and nutritious livestock feed while creating jobs and supporting farmers.</p>
                                </div>
                            </div>
                        </div>

                        <div className={`flex flex-wrap items-center gap-6 mt-8 transition-all duration-1000 delay-500 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                            <Link href="/about-us">
                                <Button size="large" className="bg-[#5B8C51] hover:!bg-[#0A2803] text-white border-none px-8 h-12 rounded-full font-bold shadow-md">
                                    More About Us <ArrowRightOutlined />
                                </Button>
                            </Link>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-[#EDDD5E] text-[#5B8C51] rounded-full flex items-center justify-center text-lg">
                                    <PhoneFilled />
                                </div>
                                <div>
                                    <p className="text-xs uppercase font-bold text-[#5C6672]">Call Us Today:</p>
                                    <a href="tel:+233244522879" className="text-lg font-black text-[#5B8C51]">+233 24 452 2879</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="lg:col-span-5 relative mt-8 lg:mt-0">
                        {/* Commitment Box */}
                        <div className={`relative z-20 bg-[#EDDD5E] rounded-2xl p-8 mb-6 shadow-sm transition-all duration-1000 delay-300 transform ${isVisible ? "opacity-100 scale-100 animate-float-y" : "opacity-0 scale-95"}`}>
                            <p className="font-bold text-[#0A2803] text-sm mb-1">Our Commitment</p>
                            <h2 className="text-5xl font-black text-[#0A2803] mb-3 flex items-baseline">
                                <CountUp end={100} duration={2.5} enableScrollSpy scrollSpyOnce />%
                            </h2>
                            <div className="border-b border-dashed border-[#0A2803]/30 mb-3"></div>
                            <p className="text-[#0A2803]/80 font-semibold text-sm leading-relaxed">
                                Dedicated to sustainable, high-quality agricultural practices right here in Ghana.
                            </p>
                        </div>

                        {/* Farm Image */}
                        <div className={`relative z-0 w-full h-[350px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 delay-200 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                            <Image
                                src="/dsfassets/GingerInSprout.jpeg"
                                alt="Dibanko Salifu Farm"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}