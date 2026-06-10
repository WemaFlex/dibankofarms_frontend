"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

export default function SearchProduct() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle search routing or state filtering logic here
        console.log("Searching for:", searchTerm);
    };

    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.01)]">
            {/* Widget Title */}
            <h4 className="text-lg font-black text-[#0A2803] mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-[#5B8C51]">
                Search Product
            </h4>

            {/* Search Input Form */}
            <form onSubmit={handleSubmit} className="relative flex items-center">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for feeds, crops..."
                    className="w-full pl-4 pr-12 py-3 bg-[#F9FCF8] rounded-xl border border-gray-200/80 text-sm font-medium text-[#0A2803] placeholder-gray-400 focus:outline-none focus:border-[#5B8C51] focus:ring-4 focus:ring-[#5B8C51]/10 transition-all duration-300"
                />

                {/* Micro-animated Search Button */}
                <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute right-2 w-9 h-9 bg-[#5B8C51] hover:bg-[#0A2803] text-white rounded-lg flex items-center justify-center transition-colors duration-300 shadow-sm cursor-pointer"
                    aria-label="Submit Search"
                >
                    <FaSearch size={13} />
                </motion.button>
            </form>
        </div>
    );
}