"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ShopSection() {
    // Initialize the Swiper slider specifically for the products
    useEffect(() => {
        if (typeof window !== "undefined" && window.Swiper) {
            new window.Swiper('.product-slider', {
                loop: true,
                slidesPerView: 1, // 1 item on mobile
                spaceBetween: 30, // Gap between cards
                autoplay: {
                    delay: 3500,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    768: { slidesPerView: 2 },  // 2 items on tablets
                    992: { slidesPerView: 3 },  // 3 items on small laptops
                    1200: { slidesPerView: 4 }, // 4 items across on desktop (Matches your original layout!)
                }
            });
        }
    }, []);

    const productsData = [
        { id: 1, name: "Fresh Ginger", price: "Wholesale Pricing", image: "/images/fresh-ginger.jpg", tag: "Fresh", tagColor: "sale-icon" },
        { id: 2, name: "Livestock Feed Pellets", price: "Wholesale Pricing", image: "/images/live-stock-feed-pallets.jpg", tag: "Top Seller", tagColor: "sale-icon" },
        { id: 3, name: "Premium White Maize", price: "Wholesale Pricing", image: "/images/premium-white-maize.jpg", tag: "", tagColor: "" },
        { id: 4, name: "Fortified Poultry Feed", price: "Wholesale Pricing", image: "/images/live-stock-feed-pallets.jpg", tag: "Sale", tagColor: "discount-icon" },
        { id: 5, name: "Dried Ginger", price: "Wholesale Pricing", image: "/images/dried-ginger-1.jpg", tag: "", tagColor: "" },
        { id: 6, name: "Cassava Products", price: "Wholesale Pricing", image: "/images/cassava-1.jpg", tag: "", tagColor: "" },
        { id: 7, name: "Ruminant Feed (Cattle)", price: "Wholesale Pricing", image: "/images/ruminant-feed-1.jpg", tag: "", tagColor: "" },
        { id: 8, name: "Rabbit Feed", price: "Wholesale Pricing", image: "/images/rabit-feed-pallets.jpg", tag: "", tagColor: "" },
        { id: 9, name: "Pig Feed Formulations", price: "Wholesale Pricing", image: "/images/pig-feed-pallets.jpg", tag: "", tagColor: "" }
    ];

    return (
        <section id="products" className="shop-section section-padding fix pt-0 mt-5">
            <div className="container">
                <div className="section-title text-center mb-5">
                    <span className="wow fadeInUp"><img src="/assets/img/sub-title.svg" alt="img" />Direct From Ejura</span>
                    <h2 className="text-anim">Our Featured Farm Products</h2>
                </div>

                {/* SWIPER CONTAINER */}
                <div className="swiper product-slider wow fadeInUp" data-wow-delay=".3s">
                    <div className="swiper-wrapper">

                        {/* Map through ALL 9 products inside the slider */}
                        {productsData.map((product) => (
                            <div className="swiper-slide" key={product.id}>

                                {/* Added h-100 to force uniform card heights */}
                                <div className="shop-box-items h-100 d-flex flex-column">
                                    <div className="shop-image">
                                        {/* Applied fixed height and object-fit: cover */}
                                        <img
                                            style={{ height: "190px", objectFit: "cover", width: "100%" }}
                                            src={product.image}
                                            alt={product.name}
                                            className="w-100"
                                        />

                                        {/* Render tags only if they exist */}
                                        {product.tag && <span className={product.tagColor}>{product.tag}</span>}

                                        <ul className="shop-icon d-flex justify-content-center align-items-center">
                                            <li>
                                                <Link href="/contact">
                                                    <i className="far fa-shopping-cart"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/shop"><i className="far fa-eye"></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* Added flex-grow-1 to push the bottom elements down evenly */}
                                    <div className="content flex-grow-1 d-flex flex-column justify-content-between">
                                        <div>
                                            <div className="star">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <h5><Link href="/shop">{product.name}</Link></h5>
                                        </div>
                                        <ul className="mt-auto">
                                            <li>{product.price}</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        ))}

                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-12 text-center wow fadeInUp" data-wow-delay=".4s">
                        <Link href="/shop" className="theme-btn">
                            View Full Catalog <i className="far fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}