"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Breadcrumb({ slug }: { slug: string }) {
    return (
        <section
            className="relative py-16 md:py-24 lg:py-28 bg-cover bg-center bg-no-repeat overflow-hidden flex items-center justify-center"
            style={{ backgroundImage: "url('/assets/img/inner-page/breadcroumb.jpg')" }}
        >

            {/* Dark Brand Overlay for maximum text contrast */}
            <div className="absolute inset-0 bg-[#0A2803]/70 z-0"></div>

            {/* INJECT CUSTOM KEYFRAMES FOR FLOATING SHAPES */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes floatY {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-25px); }
                    100% { transform: translateY(0px); }
                }
                @keyframes floatX {
                    0% { transform: translateX(0px); }
                    50% { transform: translateX(-25px); }
                    100% { transform: translateX(0px); }
                }
                .animate-float-y { animation: floatY 7s ease-in-out infinite; }
                .animate-float-x { animation: floatX 7s ease-in-out infinite; }
            `}} />

            {/* Floating Shape 1 (Y-Axis) */}
            <div className="absolute top-10 left-10 opacity-40 z-10 animate-float-y pointer-events-none hidden md:block">
                <Image
                    src="/assets/img/inner-page/shape-1.png"
                    alt="Decorative Leaf"
                    width={100}
                    height={100}
                    className="w-auto h-auto drop-shadow-xl"
                />
            </div>

            {/* Floating Shape 2 (X-Axis) */}
            <div className="absolute bottom-10 right-10 opacity-40 z-10 animate-float-x pointer-events-none hidden md:block">
                <Image
                    src="/assets/img/inner-page/shape-2.png"
                    alt="Decorative Shape"
                    width={100}
                    height={100}
                    className="w-auto h-auto drop-shadow-xl"
                />
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-4 relative z-20 text-center">

                {/* Breadcrumb Links */}
                <motion.ul
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex items-center justify-center gap-3 text-white/90 font-bold uppercase tracking-wider text-sm mb-3"
                >
                    <li>
                        <Link href="/" className="hover:text-[#EDDD5E] transition-colors duration-300">
                            Home
                        </Link>
                    </li>
                    <li className="text-white/40 font-light">/</li>
                    {/* The active page highlights in the brand yellow */}
                    <li className="text-[#EDDD5E]">{slug}</li>
                </motion.ul>

                {/* Page Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="text-4xl md:text-5xl lg:text-6xl font-black text-white capitalize tracking-tight"
                >
                    {slug}
                </motion.h1>

            </div>
        </section>
    );
}