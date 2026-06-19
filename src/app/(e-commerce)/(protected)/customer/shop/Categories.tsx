"use client";

import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Categories() {
    // Mock categories tailored to Dibanko Salifu Farms' offerings
    const categories = [
        { id: "all", name: "All Products", count: 18 },
        { id: "feeds", name: "Animal Feeds", count: 8 },
        { id: "crops", name: "Staple Crops", count: 4 },
        { id: "livestock", name: "Livestock & Herds", count: 3 },
        { id: "forage", name: "Forage & Hay", count: 3 },
    ];

    const [activeCategory, setActiveCategory] = useState("all");

    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.01)]">
            {/* Widget Title */}
            <h4 className="text-lg font-black text-[#0A2803] mb-5 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-[#5B8C51]">
                Product Categories
            </h4>

            {/* Categories List */}
            <ul className="flex flex-col gap-2">
                {categories.map((cat) => {
                    const isActive = activeCategory === cat.id;

                    return (
                        <li key={cat.id}>
                            <button
                                onClick={() => setActiveCategory(cat.id)}
                                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 group ${isActive
                                    ? "bg-[#5B8C51] text-white shadow-md shadow-[#5B8C51]/20"
                                    : "bg-[#F9FCF8] text-[#0A2803] hover:bg-[#EDF2EC]"
                                    }`}
                            >
                                {/* Left side: Icon + Text */}
                                <div className="flex items-center gap-2 overflow-hidden">
                                    <motion.span
                                        initial={{ x: -15, opacity: 0 }}
                                        animate={{ x: isActive ? 0 : -15, opacity: isActive ? 1 : 0 }}
                                        className={`flex-shrink-0 ${isActive ? "block" : "hidden group-hover:block"}`}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <FaChevronRight size={10} className={isActive ? "text-white" : "text-[#5B8C51]"} />
                                    </motion.span>

                                    <motion.span
                                        animate={{ x: isActive ? 0 : 0 }}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    >
                                        {cat.name}
                                    </motion.span>
                                </div>

                                {/* Right side: Count Badge */}
                                <span
                                    className={`text-xs font-black px-2.5 py-1 rounded-md transition-colors duration-300 ${isActive
                                        ? "bg-white/20 text-white"
                                        : "bg-white text-[#5B8C51] border border-gray-100 group-hover:bg-[#5B8C51] group-hover:text-white group-hover:border-transparent"
                                        }`}
                                >
                                    {cat.count}
                                </span>
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}