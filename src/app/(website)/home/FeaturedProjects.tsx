import Link from "next/link";

export default function FeaturedProjectsSection() {
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
                        Our Impact
                    </span>
                    <h2 className="text-anim">Featured Projects</h2>
                    <p className="wow fadeInUp" data-wow-delay=".2s">
                        Discover the key initiatives driving our mission to revolutionize agribusiness, <br /> improve food security, and empower local farming communities in Ghana.
                    </p>
                </div>

                <div className="service-wrapper">
                    {/* TAB NAVIGATION (Expanded to 5 items) */}
                    <ul className="nav justify-content-center flex-wrap gap-2 mb-4">
                        <li className="nav-item wow fadeInUp" data-wow-delay=".2s">
                            <a href="#thumb1" data-bs-toggle="tab" className="nav-link active">
                                Ginger Farm
                            </a>
                        </li>
                        <li className="nav-item wow fadeInUp" data-wow-delay=".3s">
                            <a href="#thumb2" data-bs-toggle="tab" className="nav-link">
                                Maize Production
                            </a>
                        </li>
                        <li className="nav-item wow fadeInUp" data-wow-delay=".4s">
                            <a href="#thumb3" data-bs-toggle="tab" className="nav-link">
                                Pellet Factory
                            </a>
                        </li>
                        <li className="nav-item wow fadeInUp" data-wow-delay=".5s">
                            <a href="#thumb4" data-bs-toggle="tab" className="nav-link">
                                Feed Distribution
                            </a>
                        </li>
                        <li className="nav-item wow fadeInUp" data-wow-delay=".6s">
                            <a href="#thumb5" data-bs-toggle="tab" className="nav-link">
                                Irrigation Farming
                            </a>
                        </li>
                    </ul>

                    {/* TAB CONTENT */}
                    <div className="tab-content mt-4">

                        {/* PROJECT 1: GINGER FARM */}
                        <div id="thumb1" className="tab-pane fade show active">
                            <div className="row align-items-center g-4">
                                <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="service-content-area">
                                        <div className="icon">
                                            <i className="fas fa-leaf text-success fa-2x"></i>
                                        </div>
                                        <div className="content">
                                            <h3><Link href="/projects">Ejura Ginger Farm Development</Link></h3>
                                            <p>We are developing a large-scale, sustainable ginger farm in Ejura. Focused on high-yield, organic cultivation methods, this project is designed to supply fresh and dried ginger for local processing, retail markets, and future international export.</p>
                                            <Link href="/projects" className="theme-btn">
                                                View Project <i className="far fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="service-image">
                                        {/* Swap with real project image */}
                                        <img style={{ width: "100%", height: 390, objectFit: "cover", borderRadius: "10px" }} src="/images/crop-farming.jpg" alt="Ginger Farm" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* PROJECT 2: MAIZE PRODUCTION */}
                        <div id="thumb2" className="tab-pane fade">
                            <div className="row align-items-center g-4">
                                <div className="col-lg-6">
                                    <div className="service-content-area">
                                        <div className="icon">
                                            <i className="fas fa-tractor text-success fa-2x"></i>
                                        </div>
                                        <div className="content">
                                            <h3><Link href="/projects">Maize Production & Storage</Link></h3>
                                            <p>Cultivating premium white maize backed by advanced, moisture-controlled storage facilities. This critical project ensures a year-round supply of high-quality grains for human consumption and serves as the primary raw material for our livestock feed production.</p>
                                            <Link href="/projects" className="theme-btn">
                                                View Project <i className="far fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="service-image">
                                        <img style={{ width: "100%", height: 390, objectFit: "cover", borderRadius: "10px" }} src="/images/live-stock.jpg" alt="Maize Production" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* PROJECT 3: PELLET FACTORY */}
                        <div id="thumb3" className="tab-pane fade">
                            <div className="row align-items-center g-4">
                                <div className="col-lg-6">
                                    <div className="service-content-area">
                                        <div className="icon">
                                            <i className="fas fa-industry text-success fa-2x"></i>
                                        </div>
                                        <div className="content">
                                            <h3><Link href="/projects">Livestock Feed Pellet Factory</Link></h3>
                                            <p>Operating a state-of-the-art milling and pelletizing facility. This factory allows us to compress raw ingredients into scientifically formulated, nutrient-dense feed pellets tailored for poultry, swine, ruminants, and rabbits with maximum digestibility and zero waste.</p>
                                            <Link href="/projects" className="theme-btn">
                                                View Project <i className="far fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="service-image">
                                        <img style={{ width: "100%", height: 390, objectFit: "cover", borderRadius: "10px" }} src="/images/animal-feed.png" alt="Feed Pellet Factory" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* PROJECT 4: WAREHOUSE DISTRIBUTION */}
                        <div id="thumb4" className="tab-pane fade">
                            <div className="row align-items-center g-4">
                                <div className="col-lg-6">
                                    <div className="service-content-area">
                                        <div className="icon">
                                            <i className="fas fa-warehouse text-success fa-2x"></i>
                                        </div>
                                        <div className="content">
                                            <h3><Link href="/projects">Warehouse & Bagged Distribution</Link></h3>
                                            <p>Establishing a robust logistics network and dedicated warehousing infrastructure. This project enables the safe, moisture-free storage and efficient distribution of our 15kg and 25kg bags of fortified feed to farmers across the Ashanti Region and beyond.</p>
                                            <Link href="/projects" className="theme-btn">
                                                View Project <i className="far fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="service-image">
                                        <img style={{ width: "100%", height: 390, objectFit: "cover", borderRadius: "10px" }} src="/images/wholesale-and-bulk.png" alt="Warehouse Logistics" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* PROJECT 5: IRRIGATION */}
                        <div id="thumb5" className="tab-pane fade">
                            <div className="row align-items-center g-4">
                                <div className="col-lg-6">
                                    <div className="service-content-area">
                                        <div className="icon">
                                            <i className="fas fa-water text-success fa-2x"></i>
                                        </div>
                                        <div className="content">
                                            <h3><Link href="/projects">Irrigation-Supported Agriculture</Link></h3>
                                            <p>Implementing modern, efficient irrigation systems across our fields to overcome seasonal dry spells. This technology ensures the consistent, year-round cultivation of high-value crops, securing our supply chain against unpredictable climate patterns.</p>
                                            <Link href="/projects" className="theme-btn">
                                                View Project <i className="far fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="service-image">
                                        {/* You will need an image for this 5th tab! */}
                                        <img style={{ width: "100%", height: 390, objectFit: "cover", borderRadius: "10px" }} src="/images/irrigation-farming.jpg" alt="Irrigation Farming" />
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