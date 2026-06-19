"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    FaTractor, FaPaw, FaCogs, FaTruck,
    FaShieldAlt, FaThermometerHalf, FaBalanceScale
} from "react-icons/fa";

export default function OperationsAndStandards() {

    // Arrays for clean mapping and easy future updates
    const operations = [
        { id: 1, title: "Farm & Crop Management", desc: "Overseeing sustainable soil health, seed selection, and daily cultivation of maize, beans, and Juncao grass.", icon: <FaTractor /> },
        { id: 2, title: "Livestock & Vet Oversight", desc: "Dedicated animal welfare specialists ensuring strict vaccination, breeding, and health protocols for our herds.", icon: <FaPaw /> },
        { id: 3, title: "Feed Mill Production", desc: "Managing the scientific formulation, moisture control, and precise mixing of our proprietary Nutri Pellets.", icon: <FaCogs /> },
        { id: 4, title: "Logistics & Distribution", desc: "Ensuring affordable, on-time delivery of bulk feed and crops to our partners across the Ashanti Region.", icon: <FaTruck /> },
    ];

    const standards = [
        { id: 1, title: "100% Vet-Checked Livestock", desc: "No animal leaves our farm without a clean bill of health.", icon: <FaShieldAlt /> },
        { id: 2, title: "Strict Moisture Control", desc: "Feed and grains are scientifically dried to prevent aflatoxins and spoilage.", icon: <FaThermometerHalf /> },
        { id: 3, title: "Precision Batching", desc: "Every bag of Nutri Pellets contains the exact guaranteed nutritional profile.", icon: <FaBalanceScale /> },
    ];

    // Animation Variants
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: custom * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        })
    };

    return (
        <section className="relative py-20 md:py-32 bg-[#F9FCF8] overflow-hidden z-0">

            {/* TOP SHAPE DIVIDER */}
            <div className="absolute top-0 left-0 w-full -translate-y-[99%] z-10 pointer-events-none">
                <img
                    src="/assets/img/home-1/service/top-shape.png"
                    alt="Top Edge Divider"
                    className="w-full h-auto block"
                />
            </div>

            <div className="container mx-auto px-4 lg:px-8 max-w-[1300px] relative z-20">

                {/* ========================================== */}
                {/* PART 1: ORGANIZATIONAL STRUCTURE (PILLARS) */}
                {/* ========================================== */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeUpVariants}
                    custom={0}
                    className="text-center mb-12 lg:mb-16"
                >
                    <span className="flex items-center justify-center gap-2 text-[#404A3D] font-bold text-xs uppercase tracking-wider mb-3">
                        <Image src="/assets/img/sub-title.svg" alt="Leaf Icon" width={16} height={16} />
                        Our Structure
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A2803] mb-5">
                        How Dibanko Salifu Farms Operates
                    </h2>
                    <p className="text-[#5C6672] text-base leading-relaxed font-medium max-w-2xl mx-auto">
                        Our ability to keep prices competitive without sacrificing quality comes down to our highly organized leadership and operational structure.
                    </p>
                </motion.div>

                {/* Operations Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 lg:mb-24">
                    {operations.map((op, index) => (
                        <motion.div
                            key={op.id}
                            custom={index + 1}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={fadeUpVariants}
                            className="group bg-white rounded-2xl shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(91,140,81,0.12)] border border-gray-50 p-8 text-center h-full flex flex-col items-center transition-all duration-500 hover:-translate-y-2 cursor-default"
                        >
                            <div className="w-16 h-16 mb-6 bg-[#EDF2EC] group-hover:bg-[#5B8C51] text-[#5B8C51] group-hover:text-white rounded-full flex items-center justify-center text-3xl transition-colors duration-500">
                                {op.icon}
                            </div>
                            <h5 className="text-xl font-extrabold text-[#0A2803] mb-3 group-hover:text-[#5B8C51] transition-colors duration-300">
                                {op.title}
                            </h5>
                            <p className="text-[#5C6672] text-sm leading-relaxed font-medium mb-0">
                                {op.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Subtle visual divider */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16 lg:mb-24"></div>

                {/* ========================================== */}
                {/* PART 2: QUALITY STANDARDS                  */}
                {/* ========================================== */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* LEFT: Text & List */}
                    <div>
                        <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}>
                            <span className="flex items-center gap-2 text-[#404A3D] font-bold text-xs uppercase tracking-wider mb-3">
                                <Image src="/assets/img/sub-title.svg" alt="Leaf Icon" width={16} height={16} />
                                Strict Protocols
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black text-[#0A2803] leading-[1.15] mb-5">
                                World-Class Standards, Local Affordability
                            </h2>
                            <p className="text-[#5C6672] text-base leading-relaxed font-medium mb-8">
                                We believe that every Ghanaian farmer deserves access to top-tier agricultural supplies. By maintaining strict in-house protocols, we eliminate middle-man costs and pass the savings directly to you.
                            </p>
                        </motion.div>

                        {/* Staggered List Items */}
                        <div className="flex flex-col gap-5">
                            {standards.map((std, index) => (
                                <motion.div
                                    key={std.id}
                                    custom={index + 2}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUpVariants}
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-50"
                                >
                                    <div className="w-12 h-12 bg-[#5B8C51] text-white rounded-full flex items-center justify-center text-xl flex-shrink-0 shadow-sm mt-1">
                                        {std.icon}
                                    </div>
                                    <div>
                                        <strong className="block text-lg font-bold text-[#0A2803] mb-1">
                                            {std.title}:
                                        </strong>
                                        <span className="text-[#5C6672] text-sm leading-relaxed font-medium">
                                            {std.desc}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="/dsfassets/Livestock2.jpeg"
                            alt="Dibanko Quality Standards"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        {/* Decorative Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2803]/40 to-transparent pointer-events-none"></div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}