"use client"; // Required for React state

import { useState, useEffect } from "react";

export default function VideoGallery() {
    // React state to handle the popup modal
    const [activeVideo, setActiveVideo] = useState(null);

    // Prevent background scrolling when the video modal is open
    useEffect(() => {
        if (activeVideo) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [activeVideo]);

    // 1. Your Video Data Array (8 Videos)
    const videos = [
        {
            id: 1,
            title: "Dibanko Farm Overview",
            category: "Operations",
            thumbnail: "/assets/img/home-1/gallery/gallery-01.jpg",
            videoUrl: "https://youtube.com/embed/6tpWrNuQSwk?autoplay=1"
        },
        {
            id: 4,
            title: "Maize Harvest Season",
            category: "Crops",
            thumbnail: "/assets/img/home-1/gallery/gallery-04.jpg",
            videoUrl: "https://youtube.com/embed/dYb5WHhqMkE?autoplay=1"
        },
        {
            id: 5,
            title: "Maize Harvest Season",
            category: "Crops",
            thumbnail: "/assets/img/home-1/gallery/gallery-05.jpg",
            videoUrl: "https://youtube.com/embed/iyXX2FV4KGw?autoplay=1"
        },
        {
            id: 6,
            title: "Strict Quality Control",
            category: "Standards",
            thumbnail: "/assets/img/home-1/gallery/gallery-06.jpg",
            videoUrl: "https://youtube.com/embed/txT3sub9AdM?autoplay=1"
        },
        {
            id: 8,
            title: "Strict Quality Control",
            category: "Standards",
            thumbnail: "/assets/img/inner-page/shop/shop-details-02.jpg",
            videoUrl: "https://youtube.com/embed/KE5oAPwbJaE?autoplay=1"
        },
        {
            id: 7,
            title: "Wholesale Delivery Logistics",
            category: "Standards",
            thumbnail: "/assets/img/inner-page/shop/shop-details-01.jpg",
            videoUrl: "https://youtube.com/embed/JAL6ybPKl-M?autoplay=1"
        },
        {
            id: 2,
            title: "Strict Quality Control",
            category: "Standards",
            thumbnail: "/assets/img/home-1/gallery/gallery-02.jpg",
            videoUrl: "https://youtube.com/embed/JO5d9K659tg?autoplay=1"
        },
        {
            id: 3,
            title: "Strict Quality Control",
            category: "Standards",
            thumbnail: "/assets/img/home-1/gallery/gallery-03.jpg",
            videoUrl: "https://youtube.com/embed/DSPu_N_KOq8?autoplay=1"
        },
    ];

    return (
        <section className="video-gallery-section section-padding bg-light">
            <div className="container">
                <div className="section-title text-center mb-5">
                    <span className="wow fadeInUp"><img src="/assets/img/sub-title.svg" alt="img" />Inside Dibanko</span>
                    <h2 className="text-anim">Our Farm in Motion</h2>
                    <p className="mt-3">See exactly how we produce the highest quality feed and crops in the Ashanti Region.</p>
                </div>

                <div className="row g-4">
                    {videos.map((video, index) => (
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`0.${(index % 4) + 2}s`} key={video.id}>
                            <div
                                className="video-card position-relative rounded overflow-hidden shadow-sm"
                                style={{ cursor: "pointer", height: "250px" }}
                                onClick={() => setActiveVideo(video.videoUrl)}
                            >
                                {/* Thumbnail Image */}
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-100 h-100 object-fit-cover"
                                />

                                {/* Dark Overlay & Play Button */}
                                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-dark bg-opacity-50 transition-hover">
                                    <i className="fas fa-play-circle text-white fa-4x mb-2 hover-scale"></i>
                                </div>

                                {/* Text Label at the bottom */}
                                <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-gradient-dark text-white">
                                    <span className="badge bg-success mb-1">{video.category}</span>
                                    <h6 className="mb-0 text-white">{video.title}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- REACT VIDEO MODAL --- */}
            {/* Only renders if a video is clicked */}
            {activeVideo && (
                <div
                    className="video-modal-overlay d-flex justify-content-center align-items-center"
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "rgba(0, 0, 0, 0.9)",
                        zIndex: 999999
                    }}
                    onClick={() => setActiveVideo(null)} // Click outside to close
                >
                    <div className="video-modal-content position-relative w-100" style={{ maxWidth: "900px", padding: "20px" }}>

                        {/* Close Button */}
                        <button
                            className="btn btn-close btn-close-white position-absolute top-0 end-0 m-3"
                            onClick={(e) => {
                                e.stopPropagation(); // Stop click from triggering the background overlay
                                setActiveVideo(null);
                            }}
                            style={{ width: "30px", height: "30px" }}
                        ></button>

                        {/* Video Player */}
                        <div className="ratio ratio-16x9 shadow-lg rounded overflow-hidden">
                            <iframe
                                src={activeVideo}
                                title="Video Player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}