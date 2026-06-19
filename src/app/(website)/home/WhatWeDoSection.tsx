"use client";

import Image from "next/image";
import { Card, Typography } from "antd";
import { FaSeedling, FaPaw, FaCogs, FaBoxes, FaHandsHelping, FaGlobeAfrica, FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";

const { Title, Paragraph } = Typography;

const servicesData = [
    { id: 1, title: "Crop Farming", description: "Cultivation of high-value crops including maize, ginger, cassava, and seasonal vegetables using modern irrigation.", image: "/dsfassets/CropFarming3.png", icon: <FaSeedling /> },
    { id: 2, title: "Livestock Feed Production", description: "Formulating nutrient-dense, high-quality feed solutions tailored for poultry, ruminants, pigs, and rabbits.", image: "/dsfassets/JuncaoGrass.jpeg", icon: <FaPaw /> },
    { id: 3, title: "Feed Pellet Manufacturing", description: "Operating advanced milling systems to compress raw ingredients into highly digestible, low-waste feed pellets.", image: "/dsfassets/LivestockFeedProductSectionImg1.jpeg", icon: <FaCogs /> },
    { id: 4, title: "Raw Material Sourcing", description: "Ethically sourcing and processing high-quality agricultural raw materials to maintain a reliable supply chain.", image: "/dsfassets/Farm1.png", icon: <FaBoxes /> },
    { id: 5, title: "Farmer Support", description: "Providing expert agricultural consulting, technical support, and partnership opportunities for local farmers.", image: "/dsfassets/Generalimg3.jpeg", icon: <FaHandsHelping /> },
    { id: 6, title: "Export-Ready Processing", description: "Building the infrastructure for future export-ready crop processing to put Ghanaian agriculture on the global map.", image: "/dsfassets/FactoryImage.jpeg", icon: <FaGlobeAfrica /> },
];

export default function WhatWeDoSection() {
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: (index % 3) * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        })
    };

    return (
        <section id="whatwedo" className="relative py-16 md:py-20 bg-[#EDF2EC]">

            <div className="absolute top-0 left-0 w-full -translate-y-[99%] z-10 pointer-events-none">
                <img src="/assets/img/home-1/service/top-shape.png" alt="Top Edge" className="w-full h-auto block" />
            </div>

            <div className="container mx-auto px-4 lg:px-8 max-w-[1200px] relative z-20">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-12"
                >
                    <span className="flex items-center justify-center gap-2 text-[#404A3D] font-bold text-xs uppercase tracking-wider mb-3">
                        <FaLeaf className="text-[#5B8C51] text-sm" /> What We Do
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black text-[#0A2803]">Comprehensive Agribusiness Solutions</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={service.id}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={cardVariants}
                        >
                            <Card
                                hoverable
                                className="group overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-300 rounded-xl h-full flex flex-col cursor-pointer hover:-translate-y-1"
                                styles={{ body: { padding: 0, flexGrow: 1, display: 'flex', flexDirection: 'column' } }}
                            >
                                <div className="relative h-52 w-full overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>

                                <div className="relative p-6 pt-8 flex-grow flex flex-col bg-white">
                                    <div className="absolute -top-6 right-6 w-12 h-12 bg-[#EDDD5E] text-[#0A2803] rounded-full flex items-center justify-center text-xl shadow-md border-2 border-white z-20">
                                        {service.icon}
                                    </div>

                                    <Title level={5} className="!text-[#0A2803] !font-extrabold !mb-2">
                                        {service.title}
                                    </Title>

                                    <div className="w-8 h-0.5 bg-[#5B8C51] mb-4 rounded-full"></div>

                                    <Paragraph className="!text-[#5C6672] !text-[14px] !leading-relaxed !mb-0 flex-grow">
                                        {service.description}
                                    </Paragraph>

                                    {/* <div className="mt-6 flex items-center gap-2 text-[#0A2803] font-bold text-sm">
                                        Learn More
                                        <div className="w-6 h-6 rounded-full bg-[#EDF2EC] flex items-center justify-center group-hover:bg-[#5B8C51] group-hover:text-white transition-colors duration-300">
                                            <ArrowRightOutlined className="text-xs" />
                                        </div>
                                    </div> */}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full translate-y-[99%] z-10 pointer-events-none">
                <img src="/assets/img/home-1/service/top-shape.png" alt="Bottom Edge" className="w-full h-auto block rotate-180" />
            </div>
        </section>
    );
}