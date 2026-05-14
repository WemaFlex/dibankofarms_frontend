import Link from "next/link";

export default function AboutSection() {
    return (
        <section className="about-section section-padding fix pt-0 mt-5">
            <div className="container">
                <div className="about-wrapper">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-7 pe-xl-5">
                            <div className="about-left-content">
                                <div className="section-title mb-0">
                                    <span className="wow fadeInUp">
                                        <img src="/assets/img/sub-title.svg" alt="img" />
                                        About Dibanko Salifu Farms
                                    </span>
                                    <h2 className="text-anim">Growing Ghana’s Future Through Sustainable Farming</h2>
                                </div>
                                <p className="about-text wow fadeInUp" data-wow-delay=".2s">
                                    Dibanko Salifu Farms is committed to producing high-quality agricultural products while supporting food security, local farmers, and economic development in Ghana. Our work combines traditional farming knowledge with modern equipment, irrigation, and processing systems.
                                </p>

                                {/* VISION AND MISSION BLOCKS */}
                                <div className="mt-4 wow fadeInUp" data-wow-delay=".4s">
                                    <div className="d-flex align-items-start mb-4">
                                        <div className="icon-box bg-success text-white rounded-circle d-flex justify-content-center align-items-center me-3 flex-shrink-0" style={{ width: "50px", height: "50px" }}>
                                            <i className="fas fa-eye fa-lg"></i>
                                        </div>
                                        <div>
                                            <h4 className="mb-2">Our Vision</h4>
                                            <p className="text-muted mb-0">To become a leading agribusiness in Ghana known for quality, sustainability, and innovation.</p>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-start">
                                        <div className="icon-box bg-warning text-white rounded-circle d-flex justify-content-center align-items-center me-3 flex-shrink-0" style={{ width: "50px", height: "50px" }}>
                                            <i className="fas fa-bullseye fa-lg"></i>
                                        </div>
                                        <div>
                                            <h4 className="mb-2">Our Mission</h4>
                                            <p className="text-muted mb-0">To produce reliable farm products and nutritious livestock feed while creating jobs, supporting farmers, and strengthening Ghana’s agricultural value chain.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="about-bottom-area mt-5">
                                    <Link href="/about-us" className="theme-btn wow fadeInUp" data-wow-delay=".6s">
                                        More About Us <i className="far fa-arrow-right"></i>
                                    </Link>
                                    <div className="phone-box-items wow fadeInUp" data-wow-delay=".8s">
                                        <div className="icon">
                                            <i className="fas fa-phone-alt"></i>
                                        </div>
                                        <div className="content">
                                            <p>Call Us Today:</p>
                                            <a href="tel:+233244522879">+233 24 452 2879</a><br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="about-right-items">
                                <div className="about-top-box wow fadeInUp" data-wow-delay=".3s">
                                    <p>Our Commitment</p>
                                    <h2><span className="odometer" data-count="100">100</span>%</h2>
                                    <p className="text">
                                        Dedicated to sustainable, high-quality agricultural practices right here in Ghana.
                                    </p>
                                </div>

                                <div className="about-image wow fadeInUp" data-wow-delay=".5s">
                                    {/* Update with a real farm image */}
                                    <img width={100} src="/assets/img/home-1/about/about-01.jpg" alt="Dibanko Salifu Farmer" className="w-100 rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}