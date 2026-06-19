"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaLeaf, FaTimes } from "react-icons/fa";

export default function VideoGallery() {
    // React state to handle the popup modal
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    // Prevent background scrolling when the video modal is open
    useEffect(() => {
        if (activeVideo) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [activeVideo]);

    const videos = [
        { id: 1, title: "Dibanko Farm Overview", category: "Crops", thumbnail: "/dsfassets/farm/WhatsApp Image 2026-06-07 at 18.29.43.jpeg", videoUrl: "https://youtube.com/embed/6tpWrNuQSwk?autoplay=1" },
        { id: 2, title: "Strict Quality Control", category: "Farm", thumbnail: "/dsfassets/farm/WhatsApp Image 2026-06-07 at 18.29.43 (1).jpeg", videoUrl: "https://youtube.com/embed/JO5d9K659tg?autoplay=1" },
        { id: 3, title: "Strict Quality Control", category: "Farm", thumbnail: "/dsfassets/farm/WhatsApp Image 2026-06-07 at 18.29.42.jpeg", videoUrl: "https://youtube.com/embed/DSPu_N_KOq8?autoplay=1" },
        { id: 4, title: "Maize Harvest Season", category: "Crops", thumbnail: "/dsfassets/farm/WhatsApp Image 2026-06-07 at 18.29.42 (1).jpeg", videoUrl: "https://youtube.com/embed/dYb5WHhqMkE?autoplay=1" },
        { id: 5, title: "Maize Harvest Season", category: "Standards", thumbnail: "/dsfassets/farm/WhatsApp Image 2026-06-07 at 18.29.41.jpeg", videoUrl: "https://youtube.com/embed/iyXX2FV4KGw?autoplay=1" },
        { id: 6, title: "Strict Quality Control", category: "Farm", thumbnail: "/dsfassets/farm/WhatsApp Image 2026-06-07 at 18.29.41 (1).jpeg", videoUrl: "https://youtube.com/embed/txT3sub9AdM?autoplay=1" },
        { id: 7, title: "Strict Quality Control", category: "Standards", thumbnail: "/dsfassets/farm/WhatsApp Image 2026-06-07 at 18.29.39.jpeg", videoUrl: "https://youtube.com/embed/KE5oAPwbJaE?autoplay=1" },

        { id: 8, title: "Wholesale Delivery Logistics", category: "Standards", thumbnail: "/dsfassets/farm/WhatsApp Image 2026-06-07 at 18.29.40.jpeg", videoUrl: "https://youtube.com/embed/JAL6ybPKl-M?autoplay=1" },

        { id: 9, title: "Wholesale Delivery Logistics", category: "Standards", thumbnail: "/dsfassets/farm/WhatsApp Image 2026-06-07 at 18.29.38.jpeg", videoUrl: "https://youtube.com/embed/xBE50uzr1zo" },
        { id: 10, title: "Wholesale Delivery Logistics", category: "Standards", thumbnail: "/dsfassets/farm/WhatsApp Image 2026-06-07 at 18.29.39 (1).jpeg", videoUrl: "https://youtube.com/embed/PJGYH_y2qDk" },
        { id: 11, title: "Wholesale Delivery Logistics", category: "Farm", thumbnail: "/dsfassets/farm/WhatsApp Image 2026-06-07 at 18.29.39 (1).jpeg", videoUrl: "https://youtube.com/embed/xinmaar7cEw" },
        { id: 12, title: "Wholesale Delivery Logistics", category: "Standards", thumbnail: "/dsfassets/farm/WhatsApp Image 2026-06-07 at 18.29.39 (1).jpeg", videoUrl: "https://youtube.com/embed/W0U899Q_9gc" },
        { id: 13, title: "Wholesale Delivery Logistics", category: "Crops", thumbnail: "/dsfassets/farm/WhatsApp Image 2026-06-07 at 18.29.39 (1).jpeg", videoUrl: "https://youtube.com/embed/lu885yx08cY" },
        { id: 14, title: "Wholesale Delivery Logistics", category: "Crops", thumbnail: "/dsfassets/images/livestock/LivestockImg12.jpeg", videoUrl: "https://youtube.com/embed/nOW9vW5ycIg" },
        { id: 15, title: "Wholesale Delivery Logistics", category: "Standards", thumbnail: "/dsfassets/images/livestock/LivestockImg14.jpeg", videoUrl: "https://youtube.com/embed/aamViZ-Ombg" },
        { id: 16, title: "Wholesale Delivery Logistics", category: "Standards", thumbnail: "/dsfassets/farm/WhatsApp Image 2026-06-07 at 18.29.38.jpeg", videoUrl: "https://youtube.com/embed/IqzACyxQCV0" },
    ];

    // Framer motion variants for the staggered grid
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: (index % 4) * 0.1, // Staggers row by row (4 items per row on desktop)
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        })
    };

    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">

                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-12 md:mb-16"
                >
                    <span className="flex items-center justify-center gap-2 text-[#404A3D] font-bold text-sm uppercase tracking-wider mb-3">
                        <FaLeaf className="text-[#5B8C51] text-lg" />
                        Inside Dibanko
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-[#0A2803] mb-4">
                        Our Farm in Motion
                    </h2>
                    <p className="text-[#5C6672] text-[16px] max-w-2xl mx-auto font-medium">
                        See exactly how we produce the highest quality feed and crops in the Ashanti Region.
                    </p>
                </motion.div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {videos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={cardVariants}
                        >
                            <div
                                className="group relative w-full h-[250px] md:h-[280px] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
                                onClick={() => setActiveVideo(video.videoUrl)}
                            >
                                {/* Thumbnail Image */}
                                <Image
                                    src={video.thumbnail}
                                    alt={video.title}
                                    fill
                                    className="object-cover transition-transform duration-[800ms] group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                />

                                {/* Dark Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2803]/90 via-[#0A2803]/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Center Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm group-hover:bg-[#5B8C51] rounded-full flex items-center justify-center text-white text-xl border-2 border-white/50 group-hover:border-[#5B8C51] group-hover:scale-110 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                                        <FaPlay className="ml-1" />
                                    </div>
                                </div>

                                {/* Bottom Text */}
                                <div className="absolute bottom-0 left-0 w-full p-5 transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                                    <span className="inline-block px-3 py-1 bg-[#EDDD5E] text-[#0A2803] text-xs font-bold uppercase tracking-wide rounded-md mb-2 shadow-sm">
                                        {video.category}
                                    </span>
                                    {/* <h6 className="text-white text-lg font-bold leading-tight">
                                        {video.title}
                                    </h6> */}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* --- ANIMATED REACT VIDEO MODAL --- */}
            <AnimatePresence>
                {activeVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[999999] bg-black/95 backdrop-blur-sm flex justify-center items-center p-4 md:p-10"
                        onClick={() => setActiveVideo(null)} // Click background to close
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="relative w-full max-w-5xl bg-black rounded-xl md:rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-white/10"
                            onClick={(e) => e.stopPropagation()} // Prevent clicks on video from closing modal
                        >

                            {/* Close Button */}
                            <button
                                className="absolute -top-12 right-0 md:top-4 md:-right-16 text-white/70 hover:text-white transition-colors duration-300 z-50 p-2"
                                onClick={() => setActiveVideo(null)}
                                aria-label="Close video"
                            >
                                <FaTimes className="text-3xl md:text-4xl" />
                            </button>

                            {/* 16:9 Video Container */}
                            <div className="relative w-full aspect-video bg-black">
                                <iframe
                                    src={activeVideo}
                                    title="Video Player"
                                    className="absolute inset-0 w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}