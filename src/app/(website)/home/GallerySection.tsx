"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLeaf, FaArrowRight } from "react-icons/fa";

const galleryData = [
    { id: 1, category: "Livestock", title: "Healthy Goat Herds", image: "/assets/img/home-1/gallery/gallery-01.jpg", link: "/gallery" },
    { id: 2, category: "Crops", title: "Fresh Maize Harvest", image: "/assets/img/home-1/gallery/gallery-02.jpg", link: "/gallery" },
    { id: 3, category: "Animal Feed", title: "Premium Feed Pellets", image: "/assets/img/home-1/gallery/gallery-03.jpg", link: "/gallery" },
    { id: 4, category: "Crops", title: "Sustainable Bean Farming", image: "/assets/img/home-1/gallery/gallery-04.jpg", link: "/gallery" },
    { id: 5, category: "Operations", title: "Ejura Farm Facilities", image: "/assets/img/home-1/gallery/gallery-05.jpg", link: "/gallery" },
    { id: 6, category: "Livestock", title: "Ethical Breeding", image: "/assets/img/home-1/gallery/gallery-06.jpg", link: "/gallery" },
];

export default function GallerySection() {
    // Animation variants for the staggered grid entrance
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: (index % 3) * 0.15, // Creates a 1-2-3 left-to-right stagger effect
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        })
    };

    return (
        <section className="relative py-20 md:py-28 bg-[#EDF2EC]">

            {/* TOP SHAPE DIVIDER */}
            <div className="absolute top-0 left-0 w-full -translate-y-[99%] z-10 pointer-events-none">
                <img src="/assets/img/home-1/service/top-shape.png" alt="Top Edge Divider" className="w-full h-auto block" />
            </div>

            <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] relative z-20">

                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <span className="flex items-center justify-center gap-2 text-[#404A3D] font-bold text-sm uppercase tracking-wider mb-3">
                        <FaLeaf className="text-[#5B8C51] text-lg" />
                        Inside Dibanko Salifu Farms
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-[#0A2803]">
                        Our Farm in Action
                    </h2>
                </motion.div>

                {/* Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

                    {galleryData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={cardVariants}
                        >
                            <Link href={item.link} className="block group">
                                <div className="relative h-[320px] sm:h-[380px] w-full rounded-2xl overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-500">

                                    {/* Image */}
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-[800ms] group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />

                                    {/* Dark Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2803] via-[#0A2803]/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

                                    {/* Text Content */}
                                    <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                                        <p className="text-[#EDDD5E] font-bold text-sm uppercase tracking-wider mb-2 transform transition-all duration-500 opacity-80 group-hover:opacity-100">
                                            {item.category}
                                        </p>
                                        <div className="flex items-end justify-between gap-4">
                                            <h3 className="text-white text-2xl md:text-3xl font-extrabold leading-tight">
                                                {item.title}
                                            </h3>

                                            {/* Hover Arrow Icon */}
                                            <div className="w-12 h-12 rounded-full bg-[#5B8C51] text-white flex items-center justify-center flex-shrink-0 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100">
                                                <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </Link>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}