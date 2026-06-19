"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Pagination() {
    // Local pagination state tracker (Mocking a 3-page catalog list)
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 3;

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            // Connect this to your parent state or product filtering queries as needed
            console.log("Navigating to catalog page:", page);
        }
    };

    return (
        <div className="flex items-center justify-center gap-2 mt-6 select-none">

            {/* PREVIOUS PAGE BUTTON */}
            <motion.button
                whileHover={currentPage > 1 ? { scale: 1.05 } : {}}
                whileTap={currentPage > 1 ? { scale: 0.95 } : {}}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 border ${currentPage === 1
                    ? "bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed"
                    : "bg-white text-[#0A2803] border-gray-100 hover:bg-[#EDF2EC] hover:border-gray-200 cursor-pointer"
                    }`}
                aria-label="Previous Page"
            >
                <FaArrowLeft size={11} />
            </motion.button>

            {/* DYNAMIC PAGE NUMBERS */}
            {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                const isActive = currentPage === pageNumber;

                return (
                    <motion.button
                        key={pageNumber}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => handlePageChange(pageNumber)}
                        className={`w-11 h-11 rounded-xl flex items-center justify-center text-sm font-black transition-all duration-300 border cursor-pointer ${isActive
                            ? "bg-[#5B8C51] text-white border-transparent shadow-md shadow-[#5B8C51]/20"
                            : "bg-white text-[#0A2803] border-gray-100 hover:bg-[#EDF2EC] hover:border-gray-200"
                            }`}
                    >
                        {pageNumber < 10 ? `0${pageNumber}` : pageNumber}
                    </motion.button>
                );
            })}

            {/* NEXT PAGE BUTTON */}
            <motion.button
                whileHover={currentPage < totalPages ? { scale: 1.05 } : {}}
                whileTap={currentPage < totalPages ? { scale: 0.95 } : {}}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 border ${currentPage === totalPages
                    ? "bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed"
                    : "bg-white text-[#0A2803] border-gray-100 hover:bg-[#EDF2EC] hover:border-gray-200 cursor-pointer"
                    }`}
                aria-label="Next Page"
            >
                <FaArrowRight size={11} />
            </motion.button>

        </div>
    );
}