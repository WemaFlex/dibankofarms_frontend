"use client";

import CountUp from "react-countup";
// Using lightweight outline icons to match the premium screenshot aesthetic
import { FiPackage, FiUser } from "react-icons/fi";
import { BiLeaf, BiMessageCheck } from "react-icons/bi";

const counterData = [
    {
        id: 1,
        endValue: 6984,
        suffix: "+",
        label: "Bags of Feed Produced",
        icon: <FiPackage />,
        delay: 0,
    },
    {
        id: 2,
        endValue: 69,
        suffix: "K+",
        label: "Healthy Goats Reared",
        icon: <BiLeaf />,
        delay: 150,
    },
    {
        id: 3,
        endValue: 98,
        suffix: "%",
        label: "Quality Assured",
        icon: <BiMessageCheck />,
        delay: 300,
    },
    {
        id: 4,
        endValue: 34,
        suffix: "+",
        label: "Local Farming Partners",
        icon: <FiUser />,
        delay: 450,
    },
];

export default function CounterSection() {
    return (
        // Set to the exact background color from the screenshot
        <section className="relative py-24 md:py-32 bg-[#EDF2EC] z-10">

            {/* TOP SHAPE DIVIDER */}
            <div className="absolute top-0 left-0 w-full -translate-y-[99%] z-20 pointer-events-none">
                <img
                    src="/assets/img/home-1/service/top-shape.png"
                    alt="Top Edge Divider"
                    className="w-full h-auto block"
                />
            </div>

            <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] relative z-30">

                {/* Grid adjusted to match the horizontal flow of the screenshot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

                    {counterData.map((counter) => (
                        <div
                            key={counter.id}
                            className="animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both"
                            style={{ animationDelay: `${counter.delay}ms` }}
                        >
                            {/* Group wrapper for the hover flip effect */}
                            <div className="group flex items-center gap-5 cursor-default">

                                {/* 
                  Exact matched Icon Box: 
                  102px width/height, 28px border radius, 1px dashed border 
                */}
                                <div className="w-[102px] h-[102px] flex-shrink-0 border border-dashed border-[#5B8C51] rounded-[28px] flex items-center justify-center text-[47px] text-[#5B8C51] bg-transparent transition-all duration-400">
                                    {/* The Horizontal Flip Animation (-scale-x-100) on group hover */}
                                    <span className="transform transition-transform duration-500 group-hover:-scale-x-100">
                                        {counter.icon}
                                    </span>
                                </div>

                                {/* Content & Counter */}
                                <div className="flex flex-col pt-1">
                                    <h2 className="text-4xl md:text-5xl font-black text-[#0A2803] mb-1 tracking-tight">
                                        <CountUp
                                            end={counter.endValue}
                                            duration={2.5}
                                            separator=","
                                            enableScrollSpy
                                            scrollSpyOnce
                                        />
                                        <span>{counter.suffix}</span>
                                    </h2>
                                    <p className="text-[#5C6672] font-semibold text-[16px] leading-tight">
                                        {counter.label}
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>

            {/* BOTTOM SHAPE DIVIDER */}
            <div className="absolute bottom-0 left-0 w-full translate-y-[99%] z-20 pointer-events-none">
                <img
                    src="/assets/img/home-1/service/bottom-shape.png"
                    alt="Bottom Edge Divider"
                    className="w-full h-auto block"
                />
            </div>

        </section>
    );
}