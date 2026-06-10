"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function ContactDetailsSection() {
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: custom * 0.15,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        })
    };

    return (
        // FIXED: Removed 'mb-10' so there is no gap below the section, and increased to 'z-20' 
        // so the bottom shape hangs strictly over the map.
        <section className="relative py-16 md:py-24 bg-[#EDF2EC] z-20 mt-10 overflow-visible">

            {/* TOP SHAPE DIVIDER (Cuts into the Breadcrumb header) */}
            <div className="absolute top-0 left-0 w-full -translate-y-[99%] z-10 pointer-events-none">
                <img
                    src="/assets/img/home-1/service/top-shape.png"
                    alt="Top Edge Divider"
                    className="w-full h-auto block"
                />
            </div>

            <div className="container mx-auto px-4 lg:px-8 max-w-[1300px] relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

                    {/* CARD 1: EMAIL */}
                    <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={cardVariants}>
                        <div className="group relative bg-white rounded-2xl shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(91,140,81,0.12)] border border-gray-50 p-8 md:p-10 h-full flex flex-col transition-all duration-500 overflow-hidden hover:-translate-y-2">
                            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#F9FCF8] rounded-full group-hover:scale-[2.5] transition-transform duration-700 ease-in-out z-0"></div>
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-[#5B8C51] text-white rounded-full flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                        <FaEnvelope />
                                    </div>
                                    <h3 className="text-2xl font-black text-[#0A2803]">Mail Us 24/7</h3>
                                </div>
                                <div className="mt-auto flex flex-col gap-2">
                                    <p className="text-[#5C6672] font-medium text-lg">
                                        <a href="mailto:dibankosalifu@gmail.com" className="hover:text-[#5B8C51] transition-colors duration-300">
                                            dibankosalifu@gmail.com
                                        </a>
                                    </p>
                                    <p className="text-transparent hidden lg:block select-none" aria-hidden="true">Spacer</p>
                                    <p className="text-transparent hidden lg:block select-none" aria-hidden="true">Spacer</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* CARD 2: PHONE */}
                    <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={cardVariants}>
                        <div className="group relative bg-white rounded-2xl shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(91,140,81,0.12)] border border-gray-50 p-8 md:p-10 h-full flex flex-col transition-all duration-500 overflow-hidden hover:-translate-y-2">
                            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#EDDD5E]/20 rounded-full group-hover:scale-[2.5] transition-transform duration-700 ease-in-out z-0"></div>
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-[#EDDD5E] text-[#0A2803] rounded-full flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                        <FaPhoneAlt />
                                    </div>
                                    <h3 className="text-2xl font-black text-[#0A2803]">Call Us Anytime</h3>
                                </div>
                                <div className="mt-auto flex flex-col gap-3">
                                    <p className="text-[#5C6672] font-medium text-lg flex items-center gap-2">
                                        <strong className="text-[#0A2803]">Phone 1:</strong>
                                        <a href="tel:+233244522879" className="hover:text-[#5B8C51] transition-colors duration-300">
                                            +233 24 452 2879
                                        </a>
                                    </p>
                                    <p className="text-[#5C6672] font-medium text-lg flex items-center gap-2">
                                        <strong className="text-[#0A2803]">Phone 2:</strong>
                                        <a href="tel:+233540765641" className="hover:text-[#5B8C51] transition-colors duration-300">
                                            +233 540 765 641
                                        </a>
                                    </p>
                                    <p className="text-[#5C6672] font-medium text-lg flex items-center gap-2">
                                        <FaWhatsapp className="text-[#25D366] text-xl" />
                                        <a href="https://wa.me/233244522879" target="_blank" rel="noopener noreferrer" className="hover:text-[#5B8C51] transition-colors duration-300">
                                            +233 24 452 2879
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* CARD 3: LOCATION */}
                    <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={cardVariants}>
                        <div className="group relative bg-white rounded-2xl shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(91,140,81,0.12)] border border-gray-50 p-8 md:p-10 h-full flex flex-col transition-all duration-500 overflow-hidden hover:-translate-y-2">
                            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#F9FCF8] rounded-full group-hover:scale-[2.5] transition-transform duration-700 ease-in-out z-0"></div>
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-[#5B8C51] text-white rounded-full flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <h3 className="text-2xl font-black text-[#0A2803]">Our Location</h3>
                                </div>
                                <div className="mt-auto flex flex-col gap-3">
                                    <p className="text-[#5C6672] font-medium text-lg leading-relaxed">
                                        Ejura - Ashanti Region, <br /> Ghana.
                                    </p>
                                    <p className="text-[#0A2803] font-bold text-lg mt-2 flex items-center gap-2">
                                        GPS: <span className="text-[#5B8C51]">AJ-1038-8934</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* BOTTOM SHAPE DIVIDER (Increased z-index to overlay the map) */}
            <div className="absolute bottom-0 left-0 w-full translate-y-[99%] z-[50] pointer-events-none">
                <img
                    src="/assets/img/home-1/service/top-shape.png"
                    alt="Bottom Edge Divider"
                    className="w-full h-auto block rotate-180"
                />
            </div>
        </section>
    );
}