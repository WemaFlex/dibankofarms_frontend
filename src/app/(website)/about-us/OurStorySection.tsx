"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLeaf, FaMapMarkerAlt, FaShieldAlt, FaArrowRight } from "react-icons/fa";
import { Button } from "antd";

export default function OurStorySection() {
    // Animation variants for staggered text entrance
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
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8 max-w-[1300px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* LEFT COLUMN: IMAGE & FLOATING BADGE */}
                    <div className="relative z-10 w-full h-[450px] md:h-[550px]">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/dsfassets/CropFarming1.png"
                                alt="Dibanko Salifu Farms in Ejura"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </motion.div>

                        {/* Floating Ejura Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            animate={{ y: [0, -12, 0] }}
                            // @ts-ignore - Framer motion type quirk with repeating animations
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.4 }}
                            className="absolute -bottom-8 -right-4 md:bottom-8 md:-right-8 bg-white p-6 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.1)] max-w-[260px] border-b-4 border-[#EDDD5E] z-20"
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-12 h-12 bg-[#EDDD5E]/20 text-[#0A2803] rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                                    <FaMapMarkerAlt />
                                </div>
                                <h4 className="text-[#0A2803] font-black text-lg leading-tight">
                                    Proudly Based <br /> in Ejura
                                </h4>
                            </div>
                            <p className="text-[#5C6672] text-sm font-medium leading-relaxed mb-0">
                                Supporting the Ashanti Region with sustainable agriculture.
                            </p>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: TEXT CONTENT */}
                    <div className="flex flex-col mt-8 lg:mt-0">

                        {/* Section Header */}
                        <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}>
                            <span className="flex items-center gap-2 text-[#404A3D] font-bold text-xs uppercase tracking-wider mb-3">
                                <Image src="/assets/img/sub-title.svg" alt="Leaf Icon" width={14} height={14} />
                                Our Story
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black text-[#0A2803] leading-[1.15] mb-5">
                                Cultivating a Sustainable Food Future in Ghana
                            </h2>
                            <p className="text-[#5C6672] text-base leading-relaxed font-medium mb-8">
                                Dibanko Salifu Farms began as a startup with a clear vision: to strengthen the local agricultural supply chain. Located in the fertile heartland of Ejura, we recognized the need for a reliable, high-quality source of staple crops, ethically raised livestock, and nutrient-dense animal feed.
                            </p>
                        </motion.div>

                        {/* Core Values List */}
                        <div className="flex flex-col gap-6 mb-8">

                            {/* Value 1 */}
                            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants} className="flex gap-5">
                                <div className="w-14 h-14 bg-[#5B8C51] text-white rounded-full flex items-center justify-center text-2xl flex-shrink-0 shadow-md">
                                    <FaLeaf />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#0A2803] mb-2">Commitment to Quality</h4>
                                    <p className="text-[#5C6672] text-sm leading-relaxed font-medium">
                                        From formulating the perfect 25kg poultry feed to harvesting premium white maize, we refuse to cut corners on the products that feed our communities.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Value 2 */}
                            <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants} className="flex gap-5">
                                <div className="w-14 h-14 bg-[#EDF2EC] text-[#5B8C51] rounded-full flex items-center justify-center text-2xl flex-shrink-0 shadow-sm border border-gray-100">
                                    <FaShieldAlt />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#0A2803] mb-2">Ethical Farming Practices</h4>
                                    <p className="text-[#5C6672] text-sm leading-relaxed font-medium">
                                        Whether we are managing our free-range goat herds or cultivating our fields, we prioritize animal welfare and sustainable land management.
                                    </p>
                                </div>
                            </motion.div>

                        </div>

                        {/* CTA Button */}
                        <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}>
                            <Link href="/shop">
                                <Button type="primary" size="large" className="bg-[#5B8C51] hover:!bg-[#0A2803] border-none px-8 h-14 rounded-full text-base flex items-center gap-2 font-bold shadow-lg transition-transform hover:-translate-y-1 w-max">
                                    Explore Our Products <FaArrowRight />
                                </Button>
                            </Link>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}