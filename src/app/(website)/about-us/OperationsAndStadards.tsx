export default function OperationsAndStandards() {
    return (
        <section className="gallery-section section-padding section-bg">
            <div className="top-shape">
                <img src="/assets/img/home-1/service/top-shape.png" alt="img" />
            </div>
            <div className="container">
                {/* PART 1: ORGANIZATIONAL STRUCTURE */}
                <div className="section-title text-center mb-5">
                    <span className="wow fadeInUp"><img src="/assets/img/sub-title.svg" alt="img" />Our Structure</span>
                    <h2 className="text-anim">How Dibanko Salifu Farms Operates</h2>
                    <p className="mt-3 mx-auto" style={{ maxWidth: "700px" }}>
                        Our ability to keep prices competitive without sacrificing quality comes down to our highly organized leadership and operational structure.
                    </p>
                </div>

                <div className="row g-4 mb-5 pb-5 border-bottom">
                    {/* Pillar 1 */}
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                        <div className="p-4 bg-white rounded shadow-sm text-center h-100">
                            <div className="icon-box mb-3"><i className="fas fa-tractor fa-2x text-success"></i></div>
                            <h5>Farm & Crop Management</h5>
                            <p className="small text-muted">Overseeing sustainable soil health, seed selection, and daily cultivation of maize, beans, and Juncao grass.</p>
                        </div>
                    </div>
                    {/* Pillar 2 */}
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                        <div className="p-4 bg-white rounded shadow-sm text-center h-100">
                            <div className="icon-box mb-3"><i className="fas fa-paw fa-2x text-success"></i></div>
                            <h5>Livestock & Vet Oversight</h5>
                            <p className="small text-muted">Dedicated animal welfare specialists ensuring strict vaccination, breeding, and health protocols for our herds.</p>
                        </div>
                    </div>
                    {/* Pillar 3 */}
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                        <div className="p-4 bg-white rounded shadow-sm text-center h-100">
                            <div className="icon-box mb-3"><i className="fas fa-cogs fa-2x text-success"></i></div>
                            <h5>Feed Mill Production</h5>
                            <p className="small text-muted">Managing the scientific formulation, moisture control, and precise mixing of our proprietary Nutri Pellets.</p>
                        </div>
                    </div>
                    {/* Pillar 4 */}
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                        <div className="p-4 bg-white rounded shadow-sm text-center h-100">
                            <div className="icon-box mb-3"><i className="fas fa-truck fa-2x text-success"></i></div>
                            <h5>Logistics & Distribution</h5>
                            <p className="small text-muted">Ensuring affordable, on-time delivery of bulk feed and crops to our partners across the Ashanti Region.</p>
                        </div>
                    </div>
                </div>

                {/* PART 2: QUALITY STANDARDS */}
                <div className="row align-items-center mt-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="section-title mb-0">
                            <span className="wow fadeInUp"><img src="/assets/img/sub-title.svg" alt="img" />Strict Protocols</span>
                            <h2 className="text-anim">World-Class Standards, Local Affordability</h2>
                        </div>
                        <p className="mt-3 mb-4">
                            We believe that every Ghanaian farmer deserves access to top-tier agricultural supplies. By maintaining strict in-house protocols, we eliminate middle-man costs and pass the savings directly to you.
                        </p>
                        <ul className="list-unstyled">
                            <li className="mb-3 d-flex align-items-center">
                                <div className="bg-success text-white rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: "40px", height: "40px" }}>
                                    <i className="fas fa-shield-check"></i>
                                </div>
                                <strong>100% Vet-Checked Livestock:</strong> No animal leaves our farm without a clean bill of health.
                            </li>
                            <li className="mb-3 d-flex align-items-center">
                                <div className="bg-success text-white rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: "40px", height: "40px" }}>
                                    <i className="fas fa-temperature-low"></i>
                                </div>
                                <strong>Strict Moisture Control:</strong> Feed and grains are scientifically dried to prevent aflatoxins and spoilage.
                            </li>
                            <li className="mb-3 d-flex align-items-center">
                                <div className="bg-success text-white rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: "40px", height: "40px" }}>
                                    <i className="fas fa-balance-scale"></i>
                                </div>
                                <strong>Precision Batching:</strong> Every bag of Nutri Pellets contains the exact guaranteed nutritional profile.
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                        {/* Drop a nice image of your operations, warehouse, or feed bags here */}
                        <img src="/assets/img/home-1/about/about-01.jpg" alt="Dibanko Quality Standards" className="w-100 rounded shadow" />
                    </div>
                </div>

            </div>
        </section>
    );
}