"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

export default function ChooseUsSection() {
    // Shared staggered animation for text elements
    const fadeUpVariants = {
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
        <section className="relative py-16 md:py-24 bg-white overflow-hidden z-0">

            {/* Floating Background Shape */}
            <motion.div
                animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                className="absolute top-10 left-[-5%] z-[-1] opacity-50 hidden lg:block"
            >
                <Image
                    src="/assets/img/home-1/choose/shape-1.png"
                    alt="Decorative Shape"
                    width={150}
                    height={150}
                    className="object-contain"
                />
            </motion.div>

            <div className="container mx-auto px-4 lg:px-8 max-w-[1300px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* LEFT COLUMN: OVERLAPPING IMAGES */}
                    <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[600px] z-10 mt-8 lg:mt-0">

                        {/* Main Background Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="absolute top-0 left-0 w-[85%] h-[80%] rounded-3xl overflow-hidden shadow-xl"
                        >
                            <Image
                                src="/assets/img/home-1/choose/choose-01.jpg"
                                alt="Dibanko Salifu Farms Fields"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </motion.div>

                        {/* Secondary Overlapping Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="absolute bottom-0 right-0 w-[55%] h-[55%] rounded-3xl overflow-hidden shadow-2xl border-[8px] border-white z-20"
                        >
                            <Image
                                src="/assets/img/home-1/choose/choose-02.jpg"
                                alt="Farm Products"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 50vw, 25vw"
                            />
                        </motion.div>

                        {/* Floating Rating Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            animate={{ y: [0, -10, 0] }}
                            // @ts-ignore
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                            className="absolute top-[60%] left-[-10px] md:left-[-30px] -translate-y-1/2 bg-white px-6 py-5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.12)] z-30 flex items-center gap-4"
                        >
                            <div className="w-14 h-14 bg-[#EDDD5E] text-[#0A2803] rounded-full flex items-center justify-center text-2xl shadow-inner flex-shrink-0">
                                <FaStar />
                            </div>
                            <div>
                                <h4 className="text-[#0A2803] font-black text-[17px] leading-tight mb-1">
                                    Premium Grade <br /> Farm Products
                                </h4>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: TEXT CONTENT & PROGRESS BARS */}
                    <div className="flex flex-col">

                        <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}>
                            <span className="flex items-center gap-2 text-[#404A3D] font-bold text-xs uppercase tracking-wider mb-3">
                                <Image src="/assets/img/sub-title.svg" alt="Leaf Icon" width={14} height={14} />
                                Why Choose Us
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black text-[#0A2803] leading-[1.15] mb-5">
                                Committed to Quality Farming & Feed Production in Ejura
                            </h2>
                        </motion.div>

                        <motion.p custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants} className="text-[#5B8C51] text-[18px] font-bold leading-relaxed mb-4">
                            At Dibanko Salifu Farms, we believe that sustainable agriculture is the foundation of a healthy community and a thriving economy.
                        </motion.p>

                        <motion.p custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants} className="text-[#5C6672] text-base leading-relaxed font-medium mb-10">
                            From the rich soil where we cultivate our maize and beans, to the strict health standards of our goat herds and the precision of our feed pellet production, every step is managed with care. As a proudly Ghanaian startup, we are dedicated to providing ethical, reliable, and farm-fresh solutions that reduce environmental impact while boosting your yields.
                        </motion.p>

                        {/* PROGRESS BARS */}
                        <div className="flex flex-col gap-6">

                            {/* Progress Item 1 */}
                            <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}>
                                <div className="flex justify-between items-end mb-2">
                                    <h6 className="text-[#0A2803] font-bold text-[16px] m-0">Sustainable Agriculture</h6>
                                    <span className="text-[#5B8C51] font-black text-[16px]">95%</span>
                                </div>
                                <div className="w-full h-2.5 bg-[#EDF2EC] rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "95%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
                                        className="h-full bg-[#5B8C51] rounded-full relative"
                                    >
                                        {/* Optional shine effect on the progress bar */}
                                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Progress Item 2 */}
                            <motion.div custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}>
                                <div className="flex justify-between items-end mb-2">
                                    <h6 className="text-[#0A2803] font-bold text-[16px] m-0">Livestock & Feed Quality</h6>
                                    <span className="text-[#5B8C51] font-black text-[16px]">98%</span>
                                </div>
                                <div className="w-full h-2.5 bg-[#EDF2EC] rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "98%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
                                        className="h-full bg-[#5B8C51] rounded-full relative"
                                    >
                                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-100%] animate-[shimmer_2s_infinite_0.5s]"></div>
                                    </motion.div>
                                </div>
                            </motion.div>

                        </div>

                    </div>
                </div>
            </div>

            {/* Inject Shimmer Animation for Progress Bars */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes shimmer {
                    100% { transform: translateX(100%); }
                }
            `}} />
        </section>
    );
}