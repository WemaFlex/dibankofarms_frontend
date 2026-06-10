"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Carousel, Button } from "antd";
import { CarouselRef } from "antd/es/carousel";
import { ArrowRightOutlined } from "@ant-design/icons";

export default function HeroSection() {
    const carouselRef = useRef<CarouselRef>(null);
    const [isMounted, setIsMounted] = useState(false);

    // Forces the initial animation to play by delaying the 'is-mounted' class
    useEffect(() => {
        const timer = setTimeout(() => setIsMounted(true), 50);
        return () => clearTimeout(timer);
    }, []);

    // Staggered directional animation classes requiring BOTH slick-active and is-mounted
    const slideUp = "opacity-0 translate-y-12 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] [.is-mounted_.slick-active_&]:opacity-100 [.is-mounted_.slick-active_&]:translate-y-0";
    const slideInLeft = "opacity-0 -translate-x-20 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] [.is-mounted_.slick-active_&]:opacity-100 [.is-mounted_.slick-active_&]:translate-x-0";
    const slideInRight = "opacity-0 translate-x-20 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] [.is-mounted_.slick-active_&]:opacity-100 [.is-mounted_.slick-active_&]:translate-x-0";
    const expandWidth = "opacity-0 scale-x-50 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] [.is-mounted_.slick-active_&]:opacity-100 [.is-mounted_.slick-active_&]:scale-x-100";

    return (
        <section className={`relative overflow-hidden group w-full ${isMounted ? "is-mounted" : ""}`}>

            {/* CUSTOM NAVIGATION ARROWS */}
            <div className="absolute top-1/2 left-0 right-0 z-20 flex justify-between px-4 md:px-8 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                    onClick={() => carouselRef.current?.prev()}
                    className="w-12 h-12 flex items-center justify-center pointer-events-auto transition-all duration-300 text-white hover:scale-110"
                >
                    <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                    </svg>
                </button>
                <button
                    onClick={() => carouselRef.current?.next()}
                    className="w-12 h-12 flex items-center justify-center pointer-events-auto transition-all duration-300 text-white hover:scale-110"
                >
                    <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                    </svg>
                </button>
            </div>

            {/* ANT DESIGN CAROUSEL */}
            <Carousel ref={carouselRef} autoplay autoplaySpeed={6000} effect="fade" dots={false}>

                {/* SLIDE 1: QUALITY LIVESTOCK */}
                <div>
                    <div
                        className="relative h-[600px] md:h-[750px] w-full bg-cover bg-top flex items-center justify-center text-center"
                        style={{ backgroundImage: "url('/assets/img/home-1/hero/hero-01.png')" }}
                    >
                        {/* Overlay removed as requested */}

                        <div className="container mx-auto px-4 relative z-10">
                            <div className="flex flex-col items-center">

                                <span className={`flex items-center gap-2 text-white text-lg md:text-xl font-semibold mb-2 ${slideUp} delay-100`}>
                                    <img src="/assets/img/home-1/hero/hero-title.svg" alt="Icon" className="w-5 h-5" />
                                    Dibanko Salifu Farms
                                </span>

                                <h1 className={`text-white uppercase text-6xl md:text-[100px] lg:text-[120px] font-black leading-[1.1] tracking-tight mb-0 ${slideInLeft} delay-300`}>
                                    QUALITY
                                </h1>

                                <h2 className={`text-white uppercase text-6xl md:text-[100px] lg:text-[120px] font-black leading-[1.1] tracking-tight mb-4 ${slideInRight} delay-500`}>
                                    LIVESTOCK
                                </h2>

                                <h3 className={`text-white text-3xl md:text-5xl lg:text-[56px] font-bold mb-6 ${expandWidth} delay-[700ms]`}>
                                    Feed Manufacturing
                                </h3>

                                <p className={`text-white/95 text-base md:text-lg max-w-2xl mx-auto font-medium mb-10 ${slideUp} delay-[900ms]`}>
                                    Scientifically formulated poultry, ruminant, rabbit, and pig feeds designed to maximize your herd's health and yield.
                                </p>

                                <div className={`flex flex-col sm:flex-row gap-4 justify-center ${slideUp} delay-[1100ms]`}>
                                    <Link href="/shop">
                                        <Button type="primary" size="large" className="bg-[#5B8C51] hover:!bg-[#0A2803] border-none px-8 h-14 rounded-full text-base flex items-center gap-2 font-bold shadow-lg">
                                            View Our Feeds <ArrowRightOutlined />
                                        </Button>
                                    </Link>
                                    <Link href="/contact-us">
                                        <Button type="primary" size="large" className="bg-transparent text-white hover:!bg-white hover:!text-[#0A2803] border-2 border-white px-8 h-14 rounded-full text-base flex items-center gap-2 font-bold shadow-lg">
                                            Contact Us <ArrowRightOutlined />
                                        </Button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* SLIDE 2: MODERN AGRIBUSINESS */}
                <div>
                    <div
                        className="relative h-[600px] md:h-[750px] w-full bg-cover bg-center flex items-center justify-center text-center"
                        style={{ backgroundImage: "url('/assets/img/home-1/hero/hero-01.png')" }}
                    >
                        {/* Overlay removed as requested */}

                        <div className="container mx-auto px-4 relative z-10">
                            <div className="flex flex-col items-center">

                                <span className={`flex items-center gap-2 text-white text-lg md:text-xl font-semibold mb-2 ${slideUp} delay-100`}>
                                    <img src="/assets/img/home-1/hero/hero-title.svg" alt="Icon" className="w-5 h-5" />
                                    Welcome to Dibanko Salifu Farms
                                </span>

                                <h1 className={`text-white uppercase text-6xl md:text-[100px] lg:text-[120px] font-black leading-[1.1] tracking-tight mb-0 ${slideInLeft} delay-300`}>
                                    MODERN
                                </h1>

                                <h2 className={`text-white uppercase text-6xl md:text-[100px] lg:text-[120px] font-black leading-[1.1] tracking-tight mb-4 ${slideInRight} delay-500`}>
                                    AGRIBUSINESS
                                </h2>

                                <h3 className={`text-white text-3xl md:text-5xl lg:text-[56px] font-bold mb-6 ${expandWidth} delay-[700ms]`}>
                                    in Ejura, Ghana
                                </h3>

                                <p className={`text-white/95 text-base md:text-lg max-w-2xl mx-auto font-medium mb-10 ${slideUp} delay-[900ms]`}>
                                    Focused on sustainable crop production, premium livestock feed manufacturing, and innovative farming solutions for a growing nation.
                                </p>

                                <div className={`flex flex-col sm:flex-row gap-4 justify-center ${slideUp} delay-[1100ms]`}>
                                    <Link href="/about-us">
                                        <Button type="primary" size="large" className="bg-[#5B8C51] hover:!bg-[#0A2803] border-none px-8 h-14 rounded-full text-base flex items-center gap-2 font-bold shadow-lg">
                                            Learn More <ArrowRightOutlined />
                                        </Button>
                                    </Link>
                                    <Link href="/contact-us">
                                        <Button type="primary" size="large" className="bg-[#EDDD5E] text-[#0A2803] hover:!bg-[#5B8C51] hover:!text-white border-none px-8 h-14 rounded-full text-base flex items-center gap-2 font-bold shadow-lg">
                                            Contact Us <ArrowRightOutlined />
                                        </Button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </section>
    );
}