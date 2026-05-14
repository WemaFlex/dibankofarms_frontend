export default function ChooseUsSection() {
    return (
        <section className="choose-us-section section-padding pt-0">
            <div className="shape-1 float-bob-x">
                <img src="/assets/img/home-1/choose/shape-1.png" alt="img" />
            </div>
            <div className="container">
                <div className="choose-us-wrapper">
                    <div className="row align-items-center g-4">
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
                                    <h4>Premium Grade <br /> Farm Products</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="choose-content-items">
                                <div className="section-title mb-0">
                                    <span className="wow fadeInUp"><img src="/assets/img/sub-title.svg" alt="img" />Why Choose Us</span>
                                    <h2 className="text-anim">Committed to Quality Farming & Feed Production in Ejura</h2>
                                </div>
                                <p className="choose-text wow fadeInUp" data-wow-delay=".2s">
                                    At Dibanko Salifu Farms, we believe that sustainable agriculture is the foundation of a healthy community and a thriving economy.
                                </p>
                                <p className="wow fadeInUp" data-wow-delay=".4s">
                                    From the rich soil where we cultivate our maize and beans, to the strict health standards of our goat herds and the precision of our feed pellet production, every step is managed with care. As a proudly Ghanaian startup, we are dedicated to providing ethical, reliable, and farm-fresh solutions that reduce environmental impact while boosting your yields.
                                </p>
                                <div className="progress-wrap">
                                    <div className="pro-items wow fadeInUp" data-wow-delay=".6s">
                                        <div className="pro-head">
                                            <h6 className="title">
                                                Sustainable Agriculture
                                            </h6>
                                            <span className="point">
                                                95%
                                            </span>
                                        </div>
                                        <div className="progress">
                                            {/* Note: Added inline width just in case your template's CSS relies on it to fill the bar */}
                                            <div className="progress-value style-two" style={{ width: "95%" }}></div>
                                        </div>
                                    </div>
                                    <div className="pro-items wow fadeInUp" data-wow-delay=".8s">
                                        <div className="pro-head">
                                            <h6 className="title">
                                                Livestock & Feed Quality
                                            </h6>
                                            <span className="point">
                                                98%
                                            </span>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-value style-two" style={{ width: "98%" }}></div>
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