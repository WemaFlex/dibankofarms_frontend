"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Spin } from "antd";
import { useUser } from "@/app/hooks/useUser"; // Adjust to your actual auth hook path
import {
    ShoppingOutlined,
    EnvironmentOutlined,
    SafetyCertificateOutlined
} from "@ant-design/icons";

// Storefront Marketing Slides for Dibanko Farms
const marketingSlides = [
    {
        tag: "High Quality Produce",
        icon: <ShoppingOutlined />,
        title: "Fresh, premium farm produce delivered directly to you.",
        highlight: "Farm to Table",
        desc: "Experience the best quality livestock and crops sourced straight from our sustainable farms.",
        color: "emerald",
        image: "/dsfassets/FactoryImage.jpeg"
    },
    {
        tag: "Sustainable Farming",
        icon: <EnvironmentOutlined />,
        title: "Committed to eco-friendly and sustainable agriculture.",
        highlight: "Eco-Conscious",
        desc: "We prioritize the health of our soil, animals, and community in every harvest.",
        color: "green",
        image: "/dsfassets/CEO_WithGoat.jpeg"
    },
    {
        tag: "Seamless Experience",
        icon: <SafetyCertificateOutlined />,
        title: "Secure, fast, and reliable ordering for all your needs.",
        highlight: "Shop with Confidence",
        desc: "Manage your orders, track deliveries, and access exclusive wholesale deals effortlessly.",
        color: "teal",
        image: "/dsfassets/LivestockFeedProductSectionImg1.jpeg"
    }
];

export default function StorefrontAuthLayout({ children }: { children: React.ReactNode }) {
    const { user, loading } = useUser();
    const router = useRouter();

    const [mounted, setMounted] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [prevSlide, setPrevSlide] = useState(0);
    const [typedTitle, setTypedTitle] = useState("");

    useEffect(() => {
        setMounted(true);
        // Redirect authenticated users to the shop/dashboard
        if (!loading && user) {
            router.replace("/shop");
        }
    }, [user, loading, router]);

    // Auto-advance slides smoothly
    useEffect(() => {
        const slideTimer = setInterval(() => {
            setCurrentSlide((prev) => {
                setPrevSlide(prev);
                return (prev + 1) % marketingSlides.length;
            });
        }, 7000);
        return () => clearInterval(slideTimer);
    }, []);

    // Premium Typewriter effect
    useEffect(() => {
        let currentStr = "";
        setTypedTitle("");
        let i = 0;
        const fullText = marketingSlides[currentSlide].title;

        const typeInterval = setInterval(() => {
            if (i < fullText.length) {
                currentStr += fullText.charAt(i);
                setTypedTitle(currentStr);
                i++;
            } else {
                clearInterval(typeInterval);
            }
        }, 45);

        return () => clearInterval(typeInterval);
    }, [currentSlide]);

    if (loading || user) {
        return (
            <div className="flex h-screen w-screen flex-col items-center justify-center bg-[#EDF2EC] gap-4 overflow-hidden">
                {/* Using your primary color for the spinner */}
                <Spin size="large" className="[&_.ant-spin-dot-item]:bg-[#5B8C51]" />
                <p className="text-[#5C6672] font-medium animate-pulse text-sm" style={{ fontFamily: '"Nunito", sans-serif' }}>
                    Preparing your storefront...
                </p>
            </div>
        );
    }

    const activeSlide = marketingSlides[currentSlide];

    return (
        // STRICT LOCK: h-screen, w-screen, overflow-hidden stops ALL page-level scrolling
        <div className="flex h-screen w-screen bg-[#ffffff] overflow-hidden" style={{ fontFamily: '"Nunito", sans-serif' }}>

            {/* ========================================== */}
            {/* LEFT SIDE: Form Container                 */}
            {/* ========================================== */}
            <div className="relative w-full lg:w-5/12 xl:w-4/12 flex flex-col justify-between px-6 py-8 sm:px-10 lg:px-12 z-50 bg-[#ffffff] shadow-[20px_0_40px_rgba(0,0,0,0.04)] h-screen overflow-y-auto no-scrollbar">

                {/* Subtle background glow using Dibanko's primary color */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#5B8C51]/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4 pointer-events-none" />

                {/* Dynamic Logo Area */}
                <div className={`relative z-10 shrink-0 mb-6 transition-all duration-700 ease-out transform ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
                    <div className="flex flex-col items-center gap-3">
                        {/* Logo */}
                        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg p-2 border border-[#CAD2D2]/50">
                            <img
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                src="/assets/img/logo/black-logo.svg" // <-- Point this to your actual Dibanko logo
                                alt="Dibanko Farms Logo"
                            />
                        </div>

                        <div className="text-center mt-1">
                            <span className="block text-2xl font-black tracking-tight text-[#0A2803]">
                                Dibanko Farms
                            </span>
                            <span className="block text-xs font-bold uppercase tracking-widest mt-1 text-[#5B8C51]">
                                High Quality Agribusiness
                            </span>
                        </div>
                    </div>
                </div>

                {/* Main Auth Content (Forms will be injected here) */}
                <div className={`relative z-10 flex-1 flex flex-col justify-center my-auto transition-all duration-700 delay-100 ease-out transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    {children}
                </div>

                {/* Footer Area */}
                <div className={`relative z-10 shrink-0 mt-8 pt-6 border-t border-[#CAD2D2]/30 transition-all duration-700 delay-200 ease-out transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold text-[#5C6672] mb-3">
                        <a href="#!" className="hover:text-[#5B8C51] transition-colors">Terms of Service</a>
                        <a href="#!" className="hover:text-[#5B8C51] transition-colors">Privacy Policy</a>
                        <a href="#!" className="hover:text-[#5B8C51] transition-colors">Support</a>
                    </div>
                    <p className="text-xs text-[#5C6672]/70 font-semibold">
                        © {new Date().getFullYear()} Dibanko Farms. All rights reserved.
                    </p>
                </div>
            </div>

            {/* ========================================== */}
            {/* RIGHT SIDE: Visual Storytelling Area      */}
            {/* ========================================== */}
            <div className="hidden lg:flex lg:w-7/12 xl:w-8/12 relative h-screen items-center justify-center p-12 overflow-hidden bg-[#0A2803]">

                {/* Crossfading Background Images */}
                {marketingSlides.map((slide, idx) => (
                    <div
                        key={idx}
                        className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${idx === currentSlide
                            ? "opacity-100 z-20"
                            : idx === prevSlide
                                ? "opacity-100 z-10"
                                : "opacity-0 z-0"
                            }`}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center scale-[1.15] hover:scale-[1.25] transition-transform duration-[30s] ease-linear opacity-85"
                            style={{ backgroundImage: `url('${slide.image}')` }}
                        />
                    </div>
                ))}

                {/* Gradients to darken the image underneath the text using Deep Green */}
                <div className="absolute inset-0 z-30 bg-gradient-to-t from-[#0A2803] via-[#0A2803]/40 to-transparent mix-blend-multiply pointer-events-none" />
                <div className="absolute inset-0 z-30 bg-gradient-to-r from-[#0A2803]/90 via-[#0A2803]/20 to-transparent pointer-events-none" />

                {/* Floating Text Container */}
                <div className={`relative z-40 w-full max-w-2xl transition-all duration-1000 delay-300 ease-out transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    <div key={currentSlide} className="animate-fade-in-up">

                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold tracking-wide text-xs uppercase mb-6`}>
                            {activeSlide.icon} {activeSlide.tag}
                        </div>

                        <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 leading-[1.15] tracking-tight min-h-[140px] drop-shadow-lg">
                            {typedTitle}
                            {/* Typewriter Cursor styled with your Yellow Accent color */}
                            <span className="inline-block w-1 h-[0.8em] bg-[#EDDD5E] ml-1 animate-pulse align-middle opacity-90" />
                        </h2>

                        <div className="flex items-center gap-4 mt-8 pb-4">
                            <div>
                                <p className="text-white font-bold text-lg leading-none drop-shadow-md tracking-wide">
                                    {activeSlide.highlight}
                                </p>
                                <p className="text-white/80 font-medium text-base mt-2 drop-shadow-md leading-relaxed">
                                    {activeSlide.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Progress Dots */}
                <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-3 z-40">
                    {marketingSlides.map((_, idx) => (
                        <div
                            key={idx}
                            onClick={() => {
                                setPrevSlide(currentSlide);
                                setCurrentSlide(idx);
                            }}
                            className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer shadow-lg ${currentSlide === idx ? "w-8 bg-[#EDDD5E]" : "w-2 bg-white/40 hover:bg-white/80"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}