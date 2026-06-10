"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaChevronDown, FaSeedling, FaShieldAlt, FaTractor,
    FaTruck, FaTags, FaQuestionCircle, FaArrowRight,
    FaPhoneAlt, FaEnvelope, FaWhatsapp
} from "react-icons/fa";
import { Space } from "antd";
import Link from "next/link";

const faqData = [
    {
        categoryId: "feeds",
        categoryTitle: "About Our Feeds",
        icon: <FaSeedling />,
        questions: [
            { id: "q1", q: "What types of animal feed do you produce?", a: "We produce high-quality feeds for poultry, swine, ruminants (cattle, sheep, goats), and rabbits. Each formulation is tailored for optimal growth and performance." },
            { id: "q2", q: "What makes your feed different?", a: "Our feeds are scientifically formulated, made from quality ingredients, and designed to deliver consistent results. We prioritize performance, safety, and reliability." },
            { id: "q3", q: "Do your feeds contain additives?", a: "Yes, we use approved additives such as vitamins, minerals, enzymes, and mycotoxin binders to improve feed quality and animal health." },
            { id: "q4", q: "Are your feeds suitable for all growth stages?", a: "No. We provide grower, finisher, and specialized feeds depending on your livestock needs." },
            { id: "q5", q: "Can I request a custom feed formulation?", a: "Yes, we offer tailored formulations based on your production goals and available resources." }
        ]
    },
    {
        categoryId: "materials",
        categoryTitle: "Raw Materials & Quality",
        icon: <FaShieldAlt />,
        questions: [
            { id: "q6", q: "Where do you source your ingredients?", a: "We source from trusted suppliers locally and internationally to ensure consistent quality and safety." },
            { id: "q7", q: "How do you ensure feed quality?", a: "Through controlled formulation, proper storage, and strict monitoring during production." },
            { id: "q8", q: "Do you test for contamination?", a: "Yes, we apply best practices and include mycotoxin control measures in our feeds." }
        ]
    },
    {
        categoryId: "farming",
        categoryTitle: "Farming Operations",
        icon: <FaTractor />,
        questions: [
            { id: "q9", q: "What other services do you offer?", a: "We are engaged in mixed farming, hay production, and livestock support services." },
            { id: "q10", q: "Do you supply hay or forage?", a: "Yes, we produce hay to support feeding, especially during dry seasons. (Under Construction - Scaling soon!)" }
        ]
    },
    {
        categoryId: "orders",
        categoryTitle: "Orders & Delivery",
        icon: <FaTruck />,
        questions: [
            { id: "q11", q: "What packaging sizes are available?", a: "Our feeds are available in convenient 15 kg and 25 kg bags." },
            { id: "q12", q: "Do you offer delivery?", a: "Yes, delivery is available depending on your order size and location across Ghana. (Logistics framework expanding soon!)" },
            { id: "q13", q: "How can I place an order?", a: "You can place an order by contacting us directly via phone, WhatsApp, or email." }
        ]
    },
    {
        categoryId: "pricing",
        categoryTitle: "Pricing & Support",
        icon: <FaTags />,
        questions: [
            { id: "q14", q: "Are your feeds affordable?", a: "Absolutely. We offer highly competitive pricing while maintaining the premium quality your livestock needs." },
            { id: "q15", q: "Do you provide technical support?", a: "Yes, our team is happy to guide customers on feed selection and proper livestock nutrition strategies." }
        ]
    },
    {
        categoryId: "general",
        categoryTitle: "General Use",
        icon: <FaQuestionCircle />,
        questions: [
            { id: "q16", q: "How should I store the feed?", a: "Store in a cool, dry place raised off the ground (on pallets) to avoid moisture and pest contamination." },
            { id: "q17", q: "Can I mix your feed with others?", a: "It is not recommended without expert guidance, as mixing can disrupt the carefully balanced nutritional profile." },
            { id: "q18", q: "How soon will I see results?", a: "Results depend on your overall farm management and consistency, but noticeable improvements in weight and health are typically seen within the first few weeks of proper use." }
        ]
    }
];

export default function FaqSection() {
    // Tracks the currently opened question globally across all sections
    const [openQuestionId, setOpenQuestionId] = useState<string | null>("q1");

    const toggleQuestion = (id: string) => {
        setOpenQuestionId(openQuestionId === id ? null : id);
    };

    return (
        <section className="py-20 md:py-32 bg-[#F9FCF8] relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8 max-w-[1000px] relative z-10">

                {/* --- HEADER --- */}
                <div className="text-center mb-16">
                    <span className="flex items-center justify-center gap-2 text-[#404A3D] font-bold text-xs uppercase tracking-wider mb-3">
                        <Image src="/assets/img/sub-title.svg" alt="Leaf Icon" width={16} height={16} />
                        FAQ
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-[#0A2803] mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-[#5C6672] text-base font-medium max-w-2xl mx-auto mb-8">
                        Everything you need to know about our feeds, farming services, and how we support your livestock success in Ejura and beyond.
                    </p>
                    <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[#5B8C51] hover:bg-[#0A2803] text-white font-bold px-7 h-12 rounded-full shadow-md transition-all duration-300 hover:-translate-y-0.5 text-sm">
                        Contact Us <FaArrowRight size={12} />
                    </Link>
                </div>

                {/* --- ACCORDIONS --- */}
                <div className="flex flex-col gap-12">
                    {faqData.map((category) => (
                        <div key={category.categoryId} className="flex flex-col">

                            {/* Category Title Header */}
                            <div className="flex items-center gap-3 text-xl font-black text-[#0A2803] mb-5 border-b border-gray-200/60 pb-3">
                                <span className="text-[#5B8C51] text-2xl">{category.icon}</span>
                                <h3>{category.categoryTitle}</h3>
                            </div>

                            {/* Native Custom Accordion Items */}
                            <div className="flex flex-col gap-3">
                                {category.questions.map((item) => {
                                    const isOpen = openQuestionId === item.id;

                                    return (
                                        <div
                                            key={item.id}
                                            className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.01)] overflow-hidden transition-all duration-300 hover:shadow-md"
                                        >
                                            {/* Accordion Toggle Click Area */}
                                            <button
                                                onClick={() => toggleQuestion(item.id)}
                                                className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 group focus:outline-none"
                                            >
                                                <span className={`font-bold text-base md:text-lg transition-colors duration-300 ${isOpen ? "text-[#5B8C51]" : "text-[#0A2803] group-hover:text-[#5B8C51]"}`}>
                                                    {item.q}
                                                </span>
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-[#F9FCF8] text-[#0A2803] transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180 bg-[#5B8C51] text-white" : ""}`}>
                                                    <FaChevronDown size={12} />
                                                </div>
                                            </button>

                                            {/* Smoothly Animated Content Window */}
                                            <AnimatePresence initial={false}>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.25, ease: "easeInOut" }}
                                                    >
                                                        <div className="text-[#5C6672] text-sm md:text-base leading-relaxed font-medium pt-0 pb-6 px-6 border-t border-gray-50 mt-1">
                                                            {item.a}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    ))}
                </div>

                {/* --- BOTTOM CINEMATIC CTA BOX --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="relative mt-20 rounded-3xl bg-[#0A2803] p-8 md:p-12 text-center overflow-hidden text-white shadow-xl border-t-4 border-[#EDDD5E]"
                >
                    {/* Background Subtle Shape Overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(91,140,81,0.2),transparent_50%)]"></div>

                    <div className="relative z-10 max-w-xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-black mb-2">Still have questions?</h3>
                        <p className="text-white/70 font-medium mb-8">We’re right here to help you secure the ideal livestock solutions.</p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="tel:+233244522879" className="inline-flex items-center justify-center gap-2 px-6 h-12 rounded-full font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-300 text-sm">
                                <FaPhoneAlt size={12} /> Call Now
                            </Link>
                            <Link href="mailto:dibankosalifu@gmail.com" className="inline-flex items-center justify-center gap-2 px-6 h-12 rounded-full font-bold bg-[#5B8C51] hover:bg-[#48703f] text-white transition-all duration-300 text-sm">
                                <FaEnvelope size={12} /> Send Email
                            </Link>
                            <a href="https://wa.me/233244522879" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 h-12 rounded-full font-bold bg-[#25D366] hover:bg-[#1ebd57] text-white transition-all duration-300 text-sm">
                                <Space><FaWhatsapp size={16} /> WhatsApp Us</Space>
                            </a>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}