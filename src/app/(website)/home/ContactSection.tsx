"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { FaLeaf } from "react-icons/fa";

export default function ContactSection() {
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

    // Reusable styling for the form inputs
    const inputClasses = "w-full bg-[#EDF2EC]/60 border border-transparent focus:border-[#5B8C51] focus:bg-white focus:ring-4 focus:ring-[#5B8C51]/15 rounded-2xl px-6 py-4 text-[#0A2803] font-medium placeholder:text-[#5C6672]/60 outline-none transition-all duration-300";

    return (
        <section className="relative py-24 md:py-32 bg-white overflow-hidden" ref={sectionRef}>

            {/* TOP SHAPE DIVIDER (To bridge from the previous green section) */}
            <div className="absolute top-0 left-0 w-full -translate-y-[99%] z-20 pointer-events-none">
                <img
                    src="/assets/img/home-1/service/top-shape.png"
                    alt="Top Edge Divider"
                    className="w-full h-auto block"
                />
            </div>

            {/* Floating Background Shape */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes floatY {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                    100% { transform: translateY(0px); }
                }
                .animate-float-y {
                    animation: floatY 7s ease-in-out infinite;
                }
            `}} />

            <div className="absolute top-20 right-10 opacity-20 pointer-events-none animate-float-y z-0 hidden lg:block">
                <img src="/assets/img/home-1/contact-shape.png" alt="Decorative Shape" />
            </div>

            <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT SIDE: Contact Form */}
                    <div className="max-w-xl">

                        {/* Section Header */}
                        <div className={`mb-10 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                            <span className="flex items-center gap-2 text-[#5B8C51] font-bold text-sm uppercase tracking-wider mb-4">
                                <span className="w-7 h-7 rounded-full bg-[#EDF2EC] flex items-center justify-center shadow-sm text-lg">
                                    <FaLeaf />
                                </span>
                                Contact Us
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-black text-[#0A2803] leading-[1.15] mb-4">
                                Contact Us for Organic & Natural Products
                            </h2>
                            <p className="text-[#5C6672] text-[17px] leading-relaxed font-medium">
                                Have questions about our products, bulk orders, or farming practices? Fill out the form below and our team will get back to you promptly.
                            </p>
                        </div>

                        {/* The Form */}
                        <form
                            action="#"
                            id="contact-form"
                            className="flex flex-col gap-5"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {/* Name Input */}
                                <div
                                    className={`transition-all duration-700 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                                    style={{ transitionDelay: '100ms' }}
                                >
                                    <input type="text" name="name" placeholder="Enter name" className={inputClasses} required />
                                </div>

                                {/* Email Input */}
                                <div
                                    className={`transition-all duration-700 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                                    style={{ transitionDelay: '200ms' }}
                                >
                                    <input type="email" name="email" placeholder="Enter email" className={inputClasses} required />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {/* Phone Input */}
                                <div
                                    className={`transition-all duration-700 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                                    style={{ transitionDelay: '300ms' }}
                                >
                                    <input type="tel" name="phone" placeholder="Phone number" className={inputClasses} />
                                </div>

                                {/* Subject Input */}
                                <div
                                    className={`transition-all duration-700 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                                    style={{ transitionDelay: '400ms' }}
                                >
                                    <input type="text" name="subject" placeholder="Your subject" className={inputClasses} required />
                                </div>
                            </div>

                            {/* Message Textarea */}
                            <div
                                className={`transition-all duration-700 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                                style={{ transitionDelay: '500ms' }}
                            >
                                <textarea
                                    name="message"
                                    id="message"
                                    placeholder="Write a message..."
                                    className={`${inputClasses} min-h-[160px] resize-y`}
                                    required
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div
                                className={`mt-2 transition-all duration-700 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                                style={{ transitionDelay: '600ms' }}
                            >
                                <Button
                                    htmlType="submit"
                                    type="primary"
                                    size="large"
                                    className="bg-[#5B8C51] hover:!bg-[#0A2803] border-none px-10 h-14 rounded-full text-[16px] flex items-center gap-3 font-bold shadow-[0_10px_20px_rgba(91,140,81,0.2)] hover:-translate-y-1 transition-transform duration-300 w-fit"
                                >
                                    Send Your Message <SendOutlined className="-rotate-45" />
                                </Button>
                            </div>
                        </form>
                    </div>

                    {/* RIGHT SIDE: Image */}
                    <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}`}>
                        <div className="relative w-full h-[500px] lg:h-[750px] rounded-[32px] overflow-hidden shadow-2xl group">
                            <Image
                                src="/images/crop-holding.jpg"
                                alt="Farmer Holding Crops"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            {/* Subtle dark gradient to make the image feel more grounded */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2803]/40 via-transparent to-transparent"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}