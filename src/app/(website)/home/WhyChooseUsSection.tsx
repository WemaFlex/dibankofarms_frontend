"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { FiMapPin, FiCheckCircle, FiTruck } from "react-icons/fi";
import { FaLeaf, FaHandshake, FaGlobeAfrica } from "react-icons/fa";

const benefits = [
    { id: 1, title: "Locally Grown & Produced", icon: <FiMapPin /> },
    { id: 2, title: "Quality-Focused Processing", icon: <FiCheckCircle /> },
    { id: 3, title: "Sustainable Farming Practices", icon: <FaLeaf /> },
    { id: 4, title: "Reliable Supply Chain", icon: <FiTruck /> },
    { id: 5, title: "Farmer-Centered Partnerships", icon: <FaHandshake /> },
    { id: 6, title: "Long-Term Vision for Ghana", icon: <FaGlobeAfrica /> }
];

export default function ChooseUsSection() {
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
        // FIX: Removed 'overflow-hidden' so the top and bottom negative margins don't get clipped
        <section className="relative py-24 md:py-32 bg-[#EDF2EC] z-10" ref={sectionRef}>

            {/* TOP SHAPE DIVIDER */}
            <div className="absolute top-0 left-0 w-full -translate-y-[99%] z-20 pointer-events-none">
                <img
                    src="/assets/img/home-1/service/top-shape.png"
                    alt="Top Edge Divider"
                    className="w-full h-auto block"
                />
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes slowFloat {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                    100% { transform: translateY(0px); }
                }
                .animate-float {
                    animation: slowFloat 6s ease-in-out infinite;
                }
            `}} />

            {/* Top Background Shape Effect */}
            <div className="absolute top-10 left-10 opacity-20 pointer-events-none animate-float" style={{ animationDelay: '1s' }}>
                <img src="/assets/img/home-1/choose/shape-1.png" alt="Decorative Shape" />
            </div>

            <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

                    {/* LEFT SIDE: Floating Image Cluster */}
                    <div className={`relative h-[500px] sm:h-[600px] lg:h-[700px] w-full transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"}`}>

                        <div className="absolute top-0 left-0 w-[80%] h-[80%] rounded-[32px] overflow-hidden shadow-2xl z-10">
                            <Image
                                src="/dsfassets/Farm2.png"
                                alt="Dibanko Salifu Farming"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 80vw, 40vw"
                            />
                        </div>

                        <div className="absolute bottom-0 right-0 w-[55%] h-[55%] rounded-[32px] overflow-hidden shadow-2xl border-[10px] border-[#EDF2EC] z-20">
                            <Image
                                src="/dsfassets/Generalimg1.jpeg"
                                alt="Quality Feed Production"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 50vw, 25vw"
                            />
                        </div>

                        <div className="absolute top-[15%] sm:top-[20%] -right-4 sm:-right-8 bg-white p-4 sm:p-5 rounded-2xl shadow-[0_20px_50px_rgba(10,40,3,0.15)] flex items-center gap-4 z-30 animate-float border border-[#5B8C51]/10">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#EDDD5E] rounded-full flex items-center justify-center flex-shrink-0">
                                <img src="/assets/img/home-1/choose/ratting-icon.png" alt="Star Rating" className="w-6 sm:w-7" />
                            </div>
                            <div>
                                <h4 className="text-[#0A2803] font-black text-sm sm:text-lg leading-tight uppercase tracking-wide">
                                    100% Ghanaian <br />
                                    <span className="text-[#5B8C51]">Owned Farm</span>
                                </h4>
                            </div>
                        </div>

                        <div className="absolute bottom-[20%] -left-8 z-30 animate-float" style={{ animationDelay: '2s' }}>
                            <img src="/assets/img/home-1/choose/organic-icon.png" alt="Organic" className="w-20 sm:w-24 drop-shadow-xl" />
                        </div>

                    </div>

                    {/* RIGHT SIDE: Content & 6 Pillars */}
                    <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}`}>

                        <div className="mb-8">
                            <span className="flex items-center gap-2 text-[#5B8C51] font-bold text-sm uppercase tracking-wider mb-4">
                                <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm text-lg">
                                    <FaLeaf />
                                </span>
                                Our Competitive Edge
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-black text-[#0A2803] leading-[1.15] mb-6">
                                Committed to Quality Farming & Feed Production in Ejura
                            </h2>
                            <p className="text-[#5C6672] text-[17px] leading-relaxed font-medium">
                                We don't just grow crops and manufacture feed; we build sustainable partnerships. Here is why businesses and farmers across the Ashanti Region trust us.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 mb-10">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={benefit.id}
                                    className={`flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-transparent hover:border-[#5B8C51]/30 hover:shadow-md transition-all duration-300 group`}
                                >
                                    <div className="w-12 h-12 bg-[#EDF2EC] group-hover:bg-[#5B8C51] text-[#5B8C51] group-hover:text-white transition-colors duration-300 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                                        {benefit.icon}
                                    </div>
                                    <h6 className="mb-0 font-extrabold text-[#0A2803] text-[15px] leading-snug">
                                        {benefit.title}
                                    </h6>
                                </div>
                            ))}
                        </div>

                        <div>
                            <Link href="/about-us">
                                <Button type="primary" size="large" className="bg-[#5B8C51] hover:!bg-[#0A2803] border-none px-10 h-14 rounded-full text-[16px] flex items-center gap-2 font-bold shadow-md hover:-translate-y-1 transition-transform duration-300">
                                    Learn More About Us <ArrowRightOutlined />
                                </Button>
                            </Link>
                        </div>

                    </div>

                </div>
            </div>

            {/* BOTTOM SHAPE DIVIDER */}
            <div className="absolute bottom-0 left-0 w-full translate-y-[99%] z-20 pointer-events-none">
                <img
                    src="/assets/img/home-1/service/top-shape.png"
                    alt="Bottom Edge Divider"
                    className="w-full h-auto block rotate-180"
                />
            </div>

        </section>
    );
}