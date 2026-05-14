"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function HeroSection() {

    useEffect(() => {
        // Initialize Swiper safely for Next.js production
        if (typeof window !== "undefined" && window.Swiper) {
            new window.Swiper('.banner-active', {
                loop: true,
                slidesPerView: 1,
                effect: "fade",
                autoplay: {
                    delay: 6000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".array-next",
                    prevEl: ".array-prev",
                },
            });
        }
    }, []);

    return (
        <section className="hero-section hero-1 fix">
            <div className="array-button">
                <button className="array-prev">
                    <svg width="55" height="28" viewBox="0 0 55 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.363503 12.9368L12.8632 0.436946C13.3122 -0.087371 14.1013 -0.148493 14.6257 0.30063C15.15 0.749646 15.2111 1.53875 14.762 2.06307C14.7201 2.11195 14.6745 2.1576 14.6257 2.19939L4.26339 12.5742H53.7501C54.4403 12.5742 55 13.1339 55 13.8243C55 14.5147 54.4403 15.0742 53.7501 15.0742H4.26339L14.6257 25.4365C15.15 25.8855 15.2111 26.6746 14.762 27.1989C14.3129 27.7232 13.5238 27.7844 12.9995 27.3352C12.9507 27.2933 12.905 27.2478 12.8632 27.1989L0.363396 14.6991C-0.121178 14.2117 -0.121174 13.4243 0.363503 12.9368Z" fill="white" />
                    </svg>
                </button>
                <button className="array-next">
                    <svg width="55" height="28" viewBox="0 0 55 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M54.6365 12.9368L42.1368 0.436946C41.6878 -0.087371 40.8987 -0.148493 40.3743 0.30063C39.85 0.749646 39.7889 1.53875 40.238 2.06307C40.2799 2.11195 40.3255 2.1576 40.3743 2.19939L50.7366 12.5742H1.24994C0.559658 12.5742 0 13.1339 0 13.8243C0 14.5147 0.559658 15.0742 1.24994 15.0742H50.7366L40.3743 25.4365C39.85 25.8855 39.7889 26.6746 40.238 27.1989C40.6871 27.7232 41.4762 27.7844 42.0005 27.3352C42.0493 27.2933 42.095 27.2478 42.1368 27.1989L54.6366 14.6991C55.1212 14.2117 55.1212 13.4243 54.6365 12.9368Z" fill="white" />
                    </svg>
                </button>
            </div>

            <div className="swiper banner-active">
                <div className="swiper-wrapper">

                    {/* SLIDE 1: MAIN CLIENT BRIEF */}
                    <div className="swiper-slide">
                        <div className="hero-height">
                            <div className="hero-bg bg-cover" style={{ backgroundImage: "url('/assets/img/home-1/hero/hero-01.png')" }}></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="hero-content">
                                            <span>
                                                <img src="/assets/img/home-1/hero/hero-title.svg" alt="img" />
                                                Welcome to Dibanko Salifu Farms
                                            </span>
                                            <h1>Modern Agribusiness</h1>
                                            <h2>in Ejura, Ghana</h2>
                                            <p className="text-white mt-4 fs-5 mx-auto" style={{ maxWidth: "800px" }} >
                                                Focused on sustainable crop production, premium livestock feed manufacturing, and innovative farming solutions for a growing nation.
                                            </p>
                                        </div>
                                        {/* Dual Buttons */}
                                        <div className="hero-button d-flex flex-wrap gap-3 mt-4">
                                            <Link href="/about-us" className="theme-btn">
                                                Learn More <i className="far fa-arrow-right"></i>
                                            </Link>
                                            <Link href="/contact-us" className="theme-btn" style={{ backgroundColor: "var(--theme-color-2)", color: "var(--header)" }}>
                                                Contact Us <i className="far fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SLIDE 2: FEED FOCUS (Using the same layout but highlighting feed) */}
                    <div className="swiper-slide">
                        <div className="hero-height">
                            {/* Remember to update this bg image to feed bags or livestock */}
                            <div className="hero-bg bg-cover" style={{ backgroundImage: "url('/assets/img/home-1/hero/hero-01.png')" }}></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="hero-content">
                                            <span>
                                                <img src="/assets/img/home-1/hero/hero-title.svg" alt="img" />
                                                Dibanko Salifu Farms
                                            </span>
                                            <h1>Quality Livestock</h1>
                                            <h2>Feed Manufacturing</h2>
                                            <p className="text-white mt-4 fs-5 mx-auto" style={{ maxWidth: "800px" }}>
                                                Scientifically formulated poultry, ruminant, rabbit, and pig feeds designed to maximize your herd's health and yield.
                                            </p>
                                        </div>
                                        <div className="hero-button d-flex flex-wrap gap-3 mt-4">
                                            <Link href="/shop" className="theme-btn">
                                                View Our Feeds <i className="far fa-arrow-right"></i>
                                            </Link>
                                            <Link href="/contact-us" className="theme-btn" style={{ backgroundColor: "var(--theme-color-2)", color: "var(--header)" }}>
                                                Contact Us <i className="far fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}