"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLeaf, FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaShareAlt } from "react-icons/fa";

export default function TeamMembersSection() {

    const teamData = [
        { id: 1, name: "Mr. Ishmael Salifu", role: "Board of Directors", image: "/images/team/Mr. Ishmael Salifu.jpg" },
        { id: 6, name: "Moira Duverneau-Salifu", role: "Board of Directors", image: "/images/team/Moira Duverneau-Salifu.jpeg" },
        // Changed ID to 7 to prevent React key conflicts
        { id: 7, name: "David Yao Sabadu", role: "Chief Executive Officer", image: "/images/team/David Yao Sabadu.jpeg" },
        { id: 4, name: "Felix Amoako-Debrah", role: "Sales Manager", image: "/images/team/Felix Amoako-Debrah.jpg" },
        { id: 2, name: "Frank Ohene Debrah", role: "Sales Rep (Eastern Region)", image: "/images/team/Frank Ohene Debrah.jpg" },
        { id: 3, name: "Osmanu Ayishetu", role: "Sales Personnel", image: "/images/team/Osmanu Ayishetu.jpg" },
        { id: 5, name: "Elvis Eyim Wireko", role: "Sales Personnel", image: "/images/team/Elvis Eyim Wireko.jpg" },
    ];

    // Staggered animation variants for the cards
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: (index % 3) * 0.15, // Staggers in rows of 3
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        })
    };

    return (
        // Added 'relative' to anchor the absolute positioned shape dividers
        <section className="relative py-16 md:py-20 bg-[#EDF2EC] overflow-visible mt-10 mb-10">

            {/* TOP SHAPE DIVIDER */}
            <div className="absolute top-0 left-0 w-full -translate-y-[99%] z-10 pointer-events-none">
                <img
                    src="/assets/img/home-1/service/top-shape.png"
                    alt="Top Edge Divider"
                    className="w-full h-auto block"
                />
            </div>

            {/* Added relative z-20 to ensure content stays above overlapping shapes */}
            <div className="container mx-auto px-4 lg:px-8 max-w-[1300px] relative z-20">

                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-12"
                >
                    <span className="flex items-center justify-center gap-2 text-[#404A3D] font-bold text-xs uppercase tracking-wider mb-2">
                        <FaLeaf className="text-[#5B8C51] text-sm" />
                        Our Team
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black text-[#0A2803]">
                        Meet Our Hardworking Team
                    </h2>
                </motion.div>

                {/* Flexbox Layout */}
                <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
                    {teamData.map((member, index) => (
                        <motion.div
                            key={member.id}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={cardVariants}
                            className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)] max-w-[360px]"
                        >
                            <div className="group h-full flex flex-col items-center">

                                {/* Image Container */}
                                <div className="relative w-full h-[320px] md:h-[360px] rounded-2xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-300 z-0">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-[800ms] group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />

                                    {/* Hover Social Overlay */}
                                    <div className="absolute inset-0 bg-[#0A2803]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="flex gap-3 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                            <Link href="#!" className="w-9 h-9 rounded-full bg-white text-[#0A2803] hover:bg-[#EDDD5E] flex items-center justify-center transition-colors duration-300">
                                                <FaTwitter size={14} />
                                            </Link>
                                            <Link href="#!" className="w-9 h-9 rounded-full bg-white text-[#0A2803] hover:bg-[#EDDD5E] flex items-center justify-center transition-colors duration-300">
                                                <FaFacebookF size={14} />
                                            </Link>
                                            <Link href="#!" className="w-9 h-9 rounded-full bg-white text-[#0A2803] hover:bg-[#EDDD5E] flex items-center justify-center transition-colors duration-300">
                                                <FaInstagram size={14} />
                                            </Link>
                                            <Link href="#!" className="w-9 h-9 rounded-full bg-white text-[#0A2803] hover:bg-[#EDDD5E] flex items-center justify-center transition-colors duration-300">
                                                <FaLinkedinIn size={14} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Info Box */}
                                <div className="relative z-10 bg-white w-[88%] rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.06)] p-5 -mt-10 text-center group-hover:-translate-y-2 transition-transform duration-300">
                                    <p className="text-[#5B8C51] font-bold text-[11px] uppercase tracking-wider mb-1.5">
                                        {member.role}
                                    </p>
                                    <h3 className="text-[18px] font-black text-[#0A2803] group-hover:text-[#5B8C51] transition-colors duration-300">
                                        <Link href="#!">{member.name}</Link>
                                    </h3>

                                    {/* Share icon */}
                                    <div className="absolute -top-4 right-4 w-8 h-8 bg-[#EDDD5E] text-[#0A2803] rounded-full flex items-center justify-center shadow-md group-hover:bg-[#5B8C51] group-hover:text-white transition-colors duration-300">
                                        <FaShareAlt size={12} />
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>

            {/* BOTTOM SHAPE DIVIDER */}
            <div className="absolute bottom-0 left-0 w-full translate-y-[99%] z-10 pointer-events-none">
                <img
                    src="/assets/img/home-1/service/top-shape.png"
                    alt="Bottom Edge Divider"
                    className="w-full h-auto block rotate-180"
                />
            </div>
        </section>
    );
}