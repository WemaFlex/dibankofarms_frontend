"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tabs, Button, ConfigProvider } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { FaLeaf, FaTractor, FaIndustry, FaWarehouse, FaWater } from "react-icons/fa";

const projectData = [
    { key: "1", label: "Ginger Farm", title: "Ejura Ginger Farm Development", description: "We are developing a large-scale, sustainable ginger farm in Ejura. Focused on high-yield, organic cultivation methods, this project is designed to supply fresh and dried ginger for local processing, retail markets, and future international export.", image: "/images/ginger-farming.jpg", icon: <FaLeaf /> },
    { key: "2", label: "Maize Production", title: "Maize Production & Storage", description: "Cultivating premium white maize backed by advanced, moisture-controlled storage facilities. This critical project ensures a year-round supply of high-quality grains for human consumption and serves as the primary raw material for our livestock feed production.", image: "/images/maize-farming.jpg", icon: <FaTractor /> },
    { key: "3", label: "Pellet Factory", title: "Livestock Feed Pellet Factory", description: "Operating a state-of-the-art milling and pelletizing facility. This factory allows us to compress raw ingredients into scientifically formulated, nutrient-dense feed pellets tailored for poultry, swine, ruminants, and rabbits with maximum digestibility and zero waste.", image: "/images/animal-feed-2.jpeg", icon: <FaIndustry /> },
    { key: "4", label: "Feed Distribution", title: "Warehouse & Bagged Distribution", description: "Establishing a robust logistics network and dedicated warehousing infrastructure. This project enables the safe, moisture-free storage and efficient distribution of our 15kg and 25kg bags of fortified feed to farmers across the Ashanti Region and beyond.", image: "/images/logistics.png", icon: <FaWarehouse /> },
    { key: "5", label: "Irrigation Farming", title: "Irrigation-Supported Agriculture", description: "Implementing modern, efficient irrigation systems across our fields to overcome seasonal dry spells. This technology ensures the consistent, year-round cultivation of high-value crops, securing our supply chain against unpredictable climate patterns.", image: "/images/irigation-farming.jpg", icon: <FaWater /> },
];

export default function FeaturedProjectsSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => observer.disconnect();
    }, []);

    return (
        // Changed background to bg-white to provide clear visual separation
        <section id="projects" className="relative py-24 md:py-32 bg-white" ref={sectionRef}>

            {/* INJECTED CUSTOM ANIMATIONS & PILL TAB STYLES */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes smoothSlideFade {
                    0% { opacity: 0; transform: translateY(30px) scale(0.98); }
                    100% { opacity: 1; transform: translateY(0) scale(1); }
                }
                .tab-animate-in {
                    animation: smoothSlideFade 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                
                /* Override Ant Design Tabs to create premium pill buttons */
                .custom-pill-tabs .ant-tabs-nav::before {
                    display: none !important;
                }
                .custom-pill-tabs .ant-tabs-tab {
                    padding: 10px 24px !important;
                    border-radius: 50px !important;
                    margin: 0 4px !important;
                    transition: all 0.3s ease !important;
                    background-color: transparent;
                }
                .custom-pill-tabs .ant-tabs-tab:hover {
                    background-color: #EDF2EC !important;
                }
                .custom-pill-tabs .ant-tabs-tab-active {
                    background-color: #5B8C51 !important;
                    box-shadow: 0 4px 15px rgba(91, 140, 81, 0.3) !important;
                }
                .custom-pill-tabs .ant-tabs-tab-active .ant-tabs-tab-btn {
                    color: white !important;
                }
                .custom-pill-tabs .ant-tabs-ink-bar {
                    display: none !important;
                }
            `}} />

            {/* TOP SHAPE DIVIDER */}
            <div className="absolute top-0 left-0 w-full -translate-y-[99%] z-10 pointer-events-none">
                <img
                    src="/assets/img/home-1/service/top-shape.png"
                    alt="Top Edge Divider"
                    className="w-full h-auto block"
                />
            </div>

            <div className="container mx-auto px-4 lg:px-8 max-w-[1200px] relative z-20">

                {/* Section Title */}
                <div className={`text-center mb-12 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <span className="flex items-center justify-center gap-2 text-[#5B8C51] font-bold text-sm uppercase tracking-wider mb-4">
                        <Image src="/assets/img/sub-title.svg" alt="Icon" width={18} height={18} />
                        Our Impact
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-[#0A2803] mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-[#5C6672] text-lg font-medium max-w-2xl mx-auto">
                        Discover the key initiatives driving our mission to revolutionize agribusiness, improve food security, and empower local farming communities in Ghana.
                    </p>
                </div>

                {/* Project Showcase Wrapper */}
                <div className={`bg-white rounded-[32px] p-6 md:p-12 shadow-[0_20px_60px_rgba(10,40,3,0.06)] border border-[#5B8C51]/10 transition-all duration-1000 transform delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>

                    <ConfigProvider
                        theme={{
                            components: {
                                Tabs: {
                                    itemColor: '#5C6672',
                                    titleFontSize: 16,
                                },
                            },
                        }}
                    >
                        <Tabs
                            defaultActiveKey="1"
                            centered
                            className="font-bold custom-pill-tabs"
                            items={projectData.map((project) => ({
                                label: project.label,
                                key: project.key,
                                children: (
                                    // The 'key' forces React to remount this div, triggering the CSS animation every time the tab changes
                                    <div key={project.key} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mt-10 tab-animate-in">

                                        {/* Content Column */}
                                        <div className="flex flex-col sm:flex-row gap-6 lg:pr-4">
                                            {/* Floating Animated Icon */}
                                            <div className="w-[80px] h-[80px] rounded-full bg-[#EDF2EC] flex items-center justify-center text-[#5B8C51] text-3xl flex-shrink-0 group hover:bg-[#EDDD5E] hover:text-[#0A2803] transition-all duration-500 shadow-inner cursor-default">
                                                <span className="transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-12">
                                                    {project.icon}
                                                </span>
                                            </div>

                                            {/* Text Block */}
                                            <div className="pt-2">
                                                <h3 className="text-2xl md:text-3xl font-extrabold text-[#0A2803] mb-4 hover:text-[#5B8C51] transition-colors cursor-pointer">
                                                    <Link href="/projects">{project.title}</Link>
                                                </h3>
                                                <p className="text-[#5C6672] text-[17px] font-medium leading-relaxed mb-8">
                                                    {project.description}
                                                </p>
                                                <Link href="/projects">
                                                    <Button type="primary" size="large" className="bg-[#5B8C51] hover:!bg-[#0A2803] hover:!scale-105 transition-all duration-300 border-none px-8 h-14 rounded-full text-base flex items-center gap-2 font-bold shadow-lg shadow-[#5B8C51]/30">
                                                        View Project <ArrowRightOutlined />
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Image Column with Complex Hover Zoom */}
                                        <div className="relative h-[350px] md:h-[450px] w-full rounded-[24px] overflow-hidden shadow-xl shadow-[#0A2803]/10 group cursor-pointer">
                                            <div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-transparent transition-colors duration-700"></div>
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                                            />
                                        </div>

                                    </div>
                                ),
                            }))}
                        />
                    </ConfigProvider>
                </div>

            </div>
        </section>
    );
}