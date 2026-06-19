"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Carousel, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { FaLeaf, FaStar } from "react-icons/fa";
import { FiHeart, FiShoppingCart, FiEye } from "react-icons/fi";

const productsData = [
    { id: 1, name: "Fresh Ginger", price: "Wholesale Pricing", image: "/images/fresh-ginger.jpg", tag: "Fresh", tagColor: "sale-icon" },
    { id: 2, name: "Livestock Feed Pellets", price: "Wholesale Pricing", image: "/images/live-stock-feed-pallets.jpg", tag: "Top Seller", tagColor: "sale-icon" },
    { id: 3, name: "Premium White Maize", price: "Wholesale Pricing", image: "/images/premium-white-maize.jpg", tag: "", tagColor: "" },
    { id: 4, name: "Fortified Poultry Feed", price: "Wholesale Pricing", image: "/images/live-stock-feed-pallets.jpg", tag: "Sale", tagColor: "discount-icon" },
    { id: 5, name: "Dried Ginger (5g)", price: "Wholesale Pricing", image: "/images/products/dried-ginger-powder-5g.jpeg", tag: "", tagColor: "" },
    { id: 6, name: "Dried Ginger (100g)", price: "Wholesale Pricing", image: "/images/products/dried-ginger-powder-100g.jpeg", tag: "", tagColor: "" },
    { id: 7, name: "Cassava Products", price: "Wholesale Pricing", image: "/images/cassava-1.jpg", tag: "", tagColor: "" },
    { id: 8, name: "Ruminant Feed (Cattle)", price: "Wholesale Pricing", image: "/images/ruminant-feed-1.jpg", tag: "", tagColor: "" },
    { id: 9, name: "Rabbit Feed", price: "Wholesale Pricing", image: "/images/rabit-feed-pallets.jpg", tag: "", tagColor: "" },
    { id: 10, name: "Pig Feed Formulations", price: "Wholesale Pricing", image: "/images/pig-feed-pallets.jpg", tag: "", tagColor: "" }
];

export default function ShopSection() {
    const [isVisible, setIsVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    // State to physically force the number of slides based on screen width
    const [slidesCount, setSlidesCount] = useState(4);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsMounted(true);

        // 1. Function to calculate slides based on actual browser width
        const updateSlidesCount = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setSlidesCount(1); // Mobile: 1 item
            } else if (width < 1024) {
                setSlidesCount(2); // Tablet: 2 items
            } else if (width < 1280) {
                setSlidesCount(3); // Small Laptop: 3 items
            } else {
                setSlidesCount(4); // Desktop: 4 items
            }
        };

        // 2. Run it immediately on mount
        updateSlidesCount();

        // 3. Listen for window resizing
        window.addEventListener("resize", updateSlidesCount);

        // Setup scroll observer for section animations
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        }, { threshold: 0.1 });

        if (sectionRef.current) observer.observe(sectionRef.current);

        // Cleanup listeners
        return () => {
            window.removeEventListener("resize", updateSlidesCount);
            observer.disconnect();
        };
    }, []);

    return (
        <section id="products" className="relative py-24 md:py-32 bg-white" ref={sectionRef}>

            <style dangerouslySetInnerHTML={{
                __html: `
                .ant-carousel .slick-dots li button {
                    background-color: #CAD2D2 !important;
                    height: 6px !important;
                    border-radius: 10px !important;
                }
                .ant-carousel .slick-dots li.slick-active button {
                    background-color: #5B8C51 !important;
                    width: 24px !important;
                }
            `}} />

            <div className="container mx-auto px-4 max-w-[1400px]">

                <div className={`text-center mb-12 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <span className="flex items-center justify-center gap-2 text-[#5B8C51] font-bold text-sm uppercase tracking-wider mb-4">
                        <span className="w-6 h-6 rounded-full !bg-white flex items-center justify-center shadow-sm">
                            <FaLeaf />
                        </span>
                        Direct From Ejura
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-[#0A2803] mb-4">
                        Our Featured Farm Products
                    </h2>
                </div>

                <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>

                    {/* We only render the carousel after the client has verified the screen width */}
                    {isMounted && (
                        <div className="w-full min-w-0 overflow-hidden">
                            <Carousel
                                dots={true}
                                infinite={true}
                                autoplay={true}
                                autoplaySpeed={3500}
                                swipeToSlide={true}
                                // Dynamically injecting the mathematically calculated slides
                                slidesToShow={slidesCount}
                                slidesToScroll={1}
                                className="pb-12"
                            >
                                {productsData.map((product) => (
                                    <div key={product.id} className="px-4 py-4">
                                        <div className="group h-full flex flex-col !bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(91,140,81,0.12)] transition-all duration-500 overflow-hidden cursor-pointer hover:-translate-y-2">

                                            <div className="relative h-[240px] w-full overflow-hidden !bg-white">
                                                <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                                />

                                                {product.tag && (
                                                    <div className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold uppercase tracking-wide rounded-md z-10 ${product.tagColor === "sale-icon"
                                                        ? "bg-[#EDDD5E] text-[#0A2803]"
                                                        : "bg-[#5B8C51] text-white"
                                                        }`}>
                                                        {product.tag}
                                                    </div>
                                                )}

                                                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex items-start gap-2 sm:gap-3 group-hover:bottom-6 transition-all duration-500 z-20">
                                                    <Link href="#" className="w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] !bg-white rounded-full flex items-center justify-center text-[#333333] text-xl shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:!bg-[#5B8C51] hover:text-white transition-colors duration-300">
                                                        <FiHeart />
                                                    </Link>
                                                    <Link href="/shop" className="w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] !bg-white rounded-full flex items-center justify-center text-[#333333] text-xl shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:!bg-[#5B8C51] hover:text-white transition-colors duration-300 mt-4">
                                                        <FiShoppingCart />
                                                    </Link>
                                                    <Link href="/shop" className="w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] !bg-white rounded-full flex items-center justify-center text-[#333333] text-xl shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:!bg-[#5B8C51] hover:text-white transition-colors duration-300">
                                                        <FiEye className="hover:!bg-[#5B8C51]" />
                                                    </Link>
                                                </div>

                                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
                                            </div>

                                            <div className="p-6 flex flex-col flex-grow">
                                                <div className="flex items-center gap-1 text-[#EDDD5E] text-sm mb-3">
                                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                                </div>
                                                <h3 className="text-[20px] font-extrabold text-[#0A2803] mb-4 group-hover:text-[#5B8C51] transition-colors duration-300 line-clamp-2">
                                                    <Link href="/shop">{product.name}</Link>
                                                </h3>
                                                <div className="mt-auto pt-4 border-t border-dashed border-gray-200">
                                                    <span className="text-[#5C6672] font-bold text-[16px]">
                                                        {product.price}
                                                    </span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    )}
                </div>

                <div className={`flex justify-center mt-6 transition-all duration-1000 delay-500 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <Link href="/shop">
                        <Button type="primary" size="large" className="bg-[#5B8C51] hover:!bg-[#0A2803] border-none px-10 h-14 rounded-full text-[16px] flex items-center gap-2 font-bold shadow-md">
                            View Full Catalog <ArrowRightOutlined />
                        </Button>
                    </Link>
                </div>

            </div>
        </section>
    );
}