import Link from "next/link";

export default function ChooseUsSection() {

    // The client's 6 specific requested pillars
    const benefits = [
        { id: 1, title: "Locally Grown & Produced", icon: "fa-map-marker-alt" },
        { id: 2, title: "Quality-Focused Processing", icon: "fa-check-circle" },
        { id: 3, title: "Sustainable Farming Practices", icon: "fa-leaf" },
        { id: 4, title: "Reliable Supply Chain", icon: "fa-truck" },
        { id: 5, title: "Farmer-Centered Partnerships", icon: "fa-handshake" },
        { id: 6, title: "Long-Term Vision for Ghana", icon: "fa-globe-africa" }
    ];

    return (
        <section className="choose-us-section section-padding pt-0 mt-5">
            {/* The template's floating background shape */}
            <div className="shape-1 float-bob-x">
                <img src="/assets/img/home-1/choose/shape-1.png" alt="img" />
            </div>

            <div className="container">
                <div className="choose-us-wrapper">
                    <div className="row align-items-center g-4">

                        {/* LEFT SIDE: The template's beautiful floating image cluster */}
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="choose-left-image-items">
                                <img src="/assets/img/home-1/choose/choose-01.jpg" alt="img" />
                                <div className="image-2">
                                    <img src="/assets/img/home-1/choose/choose-02.jpg" alt="img" />
                                </div>
                                <div className="organic-shape">
                                    <img src="/assets/img/home-1/choose/organic-icon.png" alt="img" />
                                </div>
                                <div className="ratting-box">
                                    <div className="ratting-image">
                                        <img src="/assets/img/home-1/choose/ratting-icon.png" alt="img" />
                                    </div>
                                    {/* Updated the badge text to build trust */}
                                    <h4>100% Ghanaian <br /> Owned Farm</h4>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE: The Client's 6 Pillars */}
                        <div className="col-lg-6">
                            <div className="choose-content-items">
                                <div className="section-title mb-0">
                                    <span className="wow fadeInUp"><img src="/assets/img/sub-title.svg" alt="img" />Our Competitive Edge</span>
                                    <h2 className="text-anim">Committed to Quality Farming & Feed Production in Ejura</h2>
                                </div>
                                <p className="choose-text wow fadeInUp" data-wow-delay=".2s">
                                    We don't just grow crops and manufacture feed; we build sustainable partnerships. Here is why businesses and farmers across the Ashanti Region trust us.
                                </p>

                                {/* Swapped progress bars for the 6 Pillars Grid */}
                                <div className="row g-4 mt-2 wow fadeInUp" data-wow-delay=".4s">
                                    {benefits.map((benefit) => (
                                        <div className="col-md-6" key={benefit.id}>
                                            <div className="d-flex align-items-center">
                                                <div
                                                    className="icon-box bg-white text-success shadow-sm rounded-circle d-flex justify-content-center align-items-center me-3 flex-shrink-0"
                                                    style={{ width: "40px", height: "40px" }}
                                                >
                                                    <i className={`fas ${benefit.icon}`}></i>
                                                </div>
                                                <h6 className="mb-0 fw-bold" style={{ fontSize: "15px" }}>{benefit.title}</h6>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-5 wow fadeInUp" data-wow-delay=".6s">
                                    <Link href="/about-us" className="theme-btn">
                                        Learn More About Us <i className="far fa-arrow-right"></i>
                                    </Link>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}