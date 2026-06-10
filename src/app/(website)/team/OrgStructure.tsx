"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    FaUsers, FaUserTie, FaBuilding, FaShoppingCart,
    FaFileInvoiceDollar, FaBullhorn, FaIndustry,
    FaCheckCircle, FaVideo, FaUsersCog, FaBoxes
} from "react-icons/fa";

export default function OrganizationalStructure() {
    // Departments updated to exactly match your provided organizational structure
    const departments = [
        { name: "Administration", desc: "Overseeing day-to-day farm operations and strategic planning.", icon: <FaBuilding /> },
        { name: "Procurement & Logistics", desc: "Sourcing premium raw materials and managing supply chains.", icon: <FaShoppingCart /> },
        { name: "Accounts", desc: "Managing financial health, payroll, and transparent reporting.", icon: <FaFileInvoiceDollar /> },
        { name: "Sales / Marketing Department", desc: "Connecting our high-quality yields with the local market.", icon: <FaBullhorn /> },
        { name: "Production", desc: "Driving the core cultivation and feed manufacturing processes.", icon: <FaIndustry /> },
        { name: "Quality Department", desc: "Ensuring every product meets strict agricultural standards.", icon: <FaCheckCircle /> },
        { name: "Media", desc: "Documenting and sharing the Dibanko story with the world.", icon: <FaVideo /> },
        { name: "Human Resource Department", desc: "Supporting, training, and empowering our hardworking team.", icon: <FaUsersCog /> },
        { name: "Warehouse & Logistics", desc: "Safely storing and routing our products for distribution.", icon: <FaBoxes /> },
    ];

    // Hierarchy flow animations
    const flowDownVariants = {
        hidden: { opacity: 0, y: -30, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    // Staggered grid animations
    const deptVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: (index % 3) * 0.15,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        })
    };

    return (
        <section className="relative py-20 md:py-32 bg-[#F9FCF8] overflow-hidden z-0">

            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#EDDD5E]/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 -z-10"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#5B8C51]/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 -z-10"></div>

            <div className="container mx-auto px-4 lg:px-8 max-w-[1300px]">

                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="flex items-center justify-center gap-2 text-[#404A3D] font-bold text-xs uppercase tracking-wider mb-3">
                        <Image src="/assets/img/sub-title.svg" alt="Leaf Icon" width={16} height={16} />
                        Our Leadership
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-[#0A2803]">
                        Organizational Structure
                    </h2>
                </motion.div>

                <div className="flex flex-col items-center relative z-10">

                    {/* LEVEL 1: Board of Director */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={flowDownVariants}
                        className="w-full max-w-md cursor-pointer relative z-20"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="relative bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 p-8 text-center overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#EDDD5E] to-[#d4c54b]"></div>
                            <div className="relative z-10">
                                <div className="w-20 h-20 mx-auto bg-[#EDDD5E]/10 group-hover:bg-[#EDDD5E] text-[#EDDD5E] group-hover:text-[#0A2803] rounded-full flex items-center justify-center text-4xl mb-5 transition-all duration-500 shadow-inner">
                                    <FaUsers />
                                </div>
                                <h4 className="text-2xl font-black text-[#0A2803] group-hover:text-[#5B8C51] transition-colors duration-300">Board of Director</h4>
                                <p className="text-[#5C6672] text-sm mt-2 font-medium">Strategic Vision & Governance</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Connector: Board to CEO */}
                    <div className="w-[2px] h-[40px] bg-[#5B8C51]/40 relative">
                        {/* Glowing dot */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#5B8C51] shadow-[0_0_8px_#5B8C51]"></div>
                    </div>

                    {/* LEVEL 2: Chief Executive Officer */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={flowDownVariants}
                        className="w-full max-w-md cursor-pointer relative z-20"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="relative bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 p-8 text-center overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#5B8C51] to-[#3a6332]"></div>
                            <div className="relative z-10">
                                <div className="w-20 h-20 mx-auto bg-[#EDF2EC] group-hover:bg-[#5B8C51] text-[#5B8C51] group-hover:text-white rounded-full flex items-center justify-center text-4xl mb-5 transition-all duration-500 shadow-inner">
                                    <FaUserTie />
                                </div>
                                <h4 className="text-2xl font-black text-[#0A2803] group-hover:text-[#5B8C51] transition-colors duration-300">Chief Executive Officer</h4>
                                <p className="text-[#5C6672] text-sm mt-2 font-medium">Executive Execution & Operations</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Connector: CEO Drop */}
                    <div className="w-[2px] h-[40px] bg-[#5B8C51]/40 relative z-0"></div>

                    {/* LEVEL 3: Department Grid & Horizontal Span Line */}
                    <div className="relative w-full z-0">

                        {/* 
                            Mathematically precise horizontal connecting lines.
                            These widths calculate perfectly to hit the exact center of the outer columns
                            based on the Tailwind gap-x-6 (24px) spacing.
                        */}
                        <div className="hidden sm:block absolute top-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#5B8C51]/40 sm:w-[calc(50%+12px)] lg:w-[calc(66.666%+16px)]">
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#5B8C51] shadow-[0_0_8px_#5B8C51]"></div>
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#5B8C51] shadow-[0_0_8px_#5B8C51]"></div>
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#5B8C51] shadow-[0_0_8px_#5B8C51]"></div>
                        </div>

                        {/* 
                            The pt-[40px] gap ensures the cards sit below the horizontal line.
                            Each card draws its own vertical line upward to meet it!
                        */}
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-[40px] pt-[40px]">
                            {departments.map((dept, index) => (
                                <motion.div
                                    key={index}
                                    custom={index}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-50px" }}
                                    variants={deptVariants}
                                    className="relative h-full z-0"
                                >
                                    {/* 
                                        Continuous Vertical Bus Line:
                                        Reaches up 40px to touch the horizontal span (or the card above it).
                                        Goes all the way to 100% height, passing flawlessly behind the white card to form a continuous line down the column.
                                    */}
                                    <div className="absolute -top-[40px] left-1/2 w-[2px] h-[calc(100%+40px)] bg-[#5B8C51]/30 -z-10"></div>

                                    <div className="relative z-10 group bg-white rounded-2xl shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(91,140,81,0.15)] border border-gray-100 p-8 text-center h-full flex flex-col items-center justify-start transition-all duration-500 overflow-hidden cursor-default hover:-translate-y-1">

                                        {/* Hover Fill Background */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#5B8C51] to-[#3a6332] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                                        {/* Icon Container */}
                                        <div className="relative z-10 w-16 h-16 mb-5 bg-[#F9FCF8] group-hover:bg-white/20 text-[#5B8C51] group-hover:text-[#EDDD5E] rounded-full flex items-center justify-center text-2xl transition-all duration-500 group-hover:scale-110 shadow-sm">
                                            {dept.icon}
                                        </div>

                                        {/* Text Content */}
                                        <div className="relative z-10">
                                            <h6 className="text-lg font-extrabold text-[#0A2803] group-hover:text-white transition-colors duration-300 mb-2">
                                                {dept.name}
                                            </h6>
                                            <p className="text-[#5C6672] group-hover:text-white/80 text-sm font-medium leading-relaxed transition-colors duration-300">
                                                {dept.desc}
                                            </p>
                                        </div>

                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}