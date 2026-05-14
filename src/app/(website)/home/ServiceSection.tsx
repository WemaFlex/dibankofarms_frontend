
export default function ServiceSection() {
    return (
        <section className="service-section section-padding section-bg">
            <div className="top-shape">
                <img src="/assets/img/home-1/service/top-shape.png" alt="img" />
            </div>
            <div className="service-left-shape d-none d-xxl-block float-bob-y">
                <img src="/assets/img/home-1/service/left-shape.png" alt="img" />
            </div>
            <div className="service-right-shape d-none d-xxl-block float-bob-x">
                <img src="/assets/img/home-1/service/right-shape.png" alt="img" />
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <span className="wow fadeInUp">
                        <img src="/assets/img/sub-title.svg" alt="img" />
                        Our Offerings
                    </span>
                    <h2 className="text-anim">Agribusiness Services</h2>
                    <p className="wow fadeInUp" data-wow-delay=".2s">
                        Delivering high-quality agricultural produce, well-bred livestock, and premium animal feed <br /> to support food security and farming excellence.
                    </p>
                </div>

                <div className="service-wrapper">
                    {/* TAB NAVIGATION */}
                    <ul className="nav">
                        <li className="nav-item wow fadeInUp" data-wow-delay=".2s">
                            <a href="#thumb1" data-bs-toggle="tab" className="nav-link active">
                                Crop Production
                            </a>
                        </li>
                        <li className="nav-item wow fadeInUp" data-wow-delay=".4s">
                            <a href="#thumb2" data-bs-toggle="tab" className="nav-link">
                                Livestock Farming
                            </a>
                        </li>
                        <li className="nav-item wow fadeInUp" data-wow-delay=".6s">
                            <a href="#thumb3" data-bs-toggle="tab" className="nav-link">
                                Premium Animal Feed
                            </a>
                        </li>
                        <li className="nav-item wow fadeInUp" data-wow-delay=".8s">
                            <a href="#thumb4" data-bs-toggle="tab" className="nav-link">
                                Wholesale Distribution
                            </a>
                        </li>
                    </ul>

                    {/* TAB CONTENT */}
                    <div className="tab-content">

                        {/* TAB 1: CROPS */}
                        <div id="thumb1" className="tab-pane fade show active">
                            <div className="row align-items-center g-4">
                                <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="service-content-area">
                                        <div className="icon">
                                            <i className="flaticon-agriculture"></i>
                                        </div>
                                        <div className="content">
                                            <h3><a href="/shop?category=crops">Fresh Crop Production</a></h3>
                                            <p>We cultivate and harvest a diverse range of premium crops to meet both local and commercial demands. Our carefully managed fields yield high-quality maize, beans, tomatoes, soybeans, ginger, and cowpeas, ensuring fresh produce straight from the farm to your table or processing facility.</p>
                                            <a href="/shop?category=crops" className="theme-btn">
                                                View Details <i className="far fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="service-image">
                                        <img style={{ width: 560, height: 390 }} src="/images/crop-farming.jpg" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* TAB 2: LIVESTOCK */}
                        <div id="thumb2" className="tab-pane fade">
                            <div className="row align-items-center g-4">
                                <div className="col-lg-6">
                                    <div className="service-content-area">
                                        <div className="icon">
                                            <i className="flaticon-agriculture"></i>
                                        </div>
                                        <div className="content">
                                            <h3><a href="/shop?category=livestock">Quality Livestock Farming</a></h3>
                                            <p>We take pride in raising healthy, strong, and well-cared-for livestock. Currently specializing in high-grade goat farming, we adhere to strict ethical breeding and veterinary standards to provide top-tier livestock for breeding, commercial farming, or direct market consumption.</p>
                                            <a href="/shop?category=livestock" className="theme-btn">
                                                View Details <i className="far fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="service-image">
                                        <img style={{ width: 560, height: 390 }} src="/images/live-stock.jpg" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* TAB 3: ANIMAL FEED */}
                        <div id="thumb3" className="tab-pane fade">
                            <div className="row align-items-center g-4">
                                <div className="col-lg-6">
                                    <div className="service-content-area">
                                        <div className="icon">
                                            <i className="flaticon-agriculture"></i>
                                        </div>
                                        <div className="content">
                                            <h3><a href="/shop?category=animal-feed">Fortified Animal Feed</a></h3>
                                            <p>Optimize your farm&apos;s growth with our nutrient-rich feed formulations. We supply specialized feed for poultry, dairy, beef cattle, goats/sheep, and swine. Available in convenient 15kg to 25kg bags, our feed is designed to maximize animal health and yield at every stage of development.</p>
                                            <a href="/shop?category=animal-feed" className="theme-btn">
                                                View Details <i className="far fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="service-image">
                                        <img style={{ width: 560, height: 390 }} src="/images/animal-feed.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* TAB 4: WHOLESALE / DISTRIBUTION */}
                        <div id="thumb4" className="tab-pane fade">
                            <div className="row align-items-center g-4">
                                <div className="col-lg-6">
                                    <div className="service-content-area">
                                        <div className="icon">
                                            <i className="flaticon-agriculture"></i>
                                        </div>
                                        <div className="content">
                                            <h3><a href="/shop">Wholesale & Bulk Supply</a></h3>
                                            <p>Whether you need reliable feed supplies for a large-scale poultry operation or bulk crop sourcing for manufacturing and retail, we act as a dependable distribution partner. We ensure consistent quality, competitive pricing, and timely delivery for all our wholesale agribusiness clients.</p>
                                            <a href="/shop" className="theme-btn">
                                                View Details <i className="far fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="service-image">
                                        <img src="/images/wholesale-and-bulk.png" alt="img" />
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
