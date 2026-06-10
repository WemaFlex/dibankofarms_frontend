"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaStar, FaShoppingCart, FaEye } from "react-icons/fa";

interface ProductCardProps {
    product: {
        id: string | number;
        title: string;
        image: string;
        price: number;
        originalPrice?: number;
        discount?: string;
        badge?: string;
        rating?: number;
    };
    index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
    const {
        id,
        title,
        image,
        price,
        originalPrice,
        discount,
        badge,
        rating = 5
    } = product;

    // Grid entrance animation variants matching the homepage design language
    const cardVariants = {
        hidden: { opacity: 0, y: 35 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: (index % 3) * 0.12,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{ y: -8 }}
            className="group bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_rgba(91,140,81,0.12)] transition-all duration-500 overflow-hidden flex flex-col h-full"
        >
            {/* IMAGE SECTION */}
            <div className="relative w-full aspect-square bg-[#F9FCF8] overflow-hidden z-0">

                {/* Product Image Layer with Hover Scale */}
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                />

                {/* Floating Badges Stack */}
                <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10 pointer-events-none">
                    {badge && (
                        <span className="bg-[#5B8C51] text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                            {badge}
                        </span>
                    )}
                    {discount && (
                        <span className="bg-[#EDDD5E] text-[#0A2803] text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                            {discount}
                        </span>
                    )}
                </div>

                {/* Modern Hover Blur Action Overlay */}
                <div className="absolute inset-0 bg-[#0A2803]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-20">

                    {/* Add to Cart Action */}
                    <Link href="/cart">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-11 h-11 bg-white hover:bg-[#5B8C51] text-[#0A2803] hover:text-white rounded-xl flex items-center justify-center text-lg transition-colors duration-300 shadow-md cursor-pointer"
                        >
                            <FaShoppingCart size={16} />
                        </motion.div>
                    </Link>

                    {/* View Item Details Action */}
                    <Link href={`/shop/item?id=${id}`}>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-11 h-11 bg-white hover:bg-[#5B8C51] text-[#0A2803] hover:text-white rounded-xl flex items-center justify-center text-lg transition-colors duration-300 shadow-md cursor-pointer"
                        >
                            <FaEye size={16} />
                        </motion.div>
                    </Link>

                </div>
            </div>

            {/* CONTENT BODY SECTION */}
            <div className="p-5 md:p-6 flex flex-col flex-grow bg-white z-10">

                {/* Product Star Rating Nodes */}
                <div className="flex items-center gap-1 mb-2.5">
                    {[...Array(5)].map((_, starIdx) => (
                        <FaStar
                            key={starIdx}
                            className={`text-xs ${starIdx < rating ? "text-[#EDDD5E]" : "text-gray-200"}`}
                        />
                    ))}
                </div>

                {/* Title Text Heading Link */}
                <h5 className="text-base md:text-lg font-extrabold text-[#0A2803] hover:text-[#5B8C51] transition-colors duration-300 line-clamp-2 mb-3 leading-tight">
                    <Link href={`/shop/item?id=${id}`}>
                        {title}
                    </Link>
                </h5>

                {/* Price Point Layout Structure */}
                <div className="mt-auto pt-3 border-t border-gray-50 flex items-baseline gap-2.5">
                    <span className="text-lg font-black text-[#5B8C51]">
                        GH¢ {price.toFixed(2)}
                    </span>

                    {originalPrice && (
                        <del className="text-xs font-bold text-gray-400">
                            GH¢ {originalPrice.toFixed(2)}
                        </del>
                    )}
                </div>

            </div>
        </motion.div>
    );
}