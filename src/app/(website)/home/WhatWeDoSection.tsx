
export default function WhatWeDoSection() {
    return (
        <section className="feature-section section-padding fix bg-light">
            <div className="container">
                <div className="section-title text-center mb-5">
                    <span className="wow fadeInUp">
                        <img src="/assets/img/sub-title.svg" alt="img" />
                        What We Do
                    </span>
                    <h2 className="text-anim">Comprehensive Agribusiness Solutions</h2>
                </div>

                {/* FIX: Removed 'text-center' from this row so text aligns left natively */}
                <div className="row g-4">

                    {/* ITEM 1 */}
                    <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                        <div className="feature-box-items h-100 p-4">
                            {/* FIX: Removed 'mx-auto' so the icon aligns to the left with the text */}
                            <div
                                className="mb-4 d-flex justify-content-center align-items-center rounded-circle transition-hover"
                                style={{ width: "90px", height: "90px", backgroundColor: "rgba(76, 175, 80, 0.1)" }}
                            >
                                <i className="fas fa-seedling fa-3x text-success"></i>
                            </div>
                            <div className="feature-content">
                                <h3>Crop Farming</h3>
                                <p>Cultivation of high-value crops including maize, ginger, cassava, and seasonal vegetables using modern irrigation.</p>
                            </div>
                        </div>
                    </div>

                    {/* ITEM 2 */}
                    <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                        <div className="feature-box-items h-100 p-4">
                            <div
                                className="mb-4 d-flex justify-content-center align-items-center rounded-circle transition-hover"
                                style={{ width: "90px", height: "90px", backgroundColor: "rgba(76, 175, 80, 0.1)" }}
                            >
                                <i className="fas fa-paw fa-3x text-success"></i>
                            </div>
                            <div className="feature-content">
                                <h3>Livestock Feed Production</h3>
                                <p>Formulating nutrient-dense, high-quality feed solutions tailored for poultry, ruminants, pigs, and rabbits.</p>
                            </div>
                        </div>
                    </div>

                    {/* ITEM 3 */}
                    <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                        <div className="feature-box-items h-100 p-4">
                            <div
                                className="mb-4 d-flex justify-content-center align-items-center rounded-circle transition-hover"
                                style={{ width: "90px", height: "90px", backgroundColor: "rgba(76, 175, 80, 0.1)" }}
                            >
                                <i className="fas fa-cogs fa-3x text-success"></i>
                            </div>
                            <div className="feature-content">
                                <h3>Feed Pellet Manufacturing</h3>
                                <p>Operating advanced milling systems to compress raw ingredients into highly digestible, low-waste feed pellets.</p>
                            </div>
                        </div>
                    </div>

                    {/* ITEM 4 */}
                    <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="feature-box-items h-100 p-4">
                            <div
                                className="mb-4 d-flex justify-content-center align-items-center rounded-circle transition-hover"
                                style={{ width: "90px", height: "90px", backgroundColor: "rgba(76, 175, 80, 0.1)" }}
                            >
                                <i className="fas fa-boxes fa-3x text-success"></i>
                            </div>
                            <div className="feature-content">
                                <h3>Raw Material Sourcing</h3>
                                <p>Ethically sourcing and processing high-quality agricultural raw materials to maintain a reliable supply chain.</p>
                            </div>
                        </div>
                    </div>

                    {/* ITEM 5 */}
                    <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="feature-box-items h-100 p-4">
                            <div
                                className="mb-4 d-flex justify-content-center align-items-center rounded-circle transition-hover"
                                style={{ width: "90px", height: "90px", backgroundColor: "rgba(76, 175, 80, 0.1)" }}
                            >
                                <i className="fas fa-hands-helping fa-3x text-success"></i>
                            </div>
                            <div className="feature-content">
                                <h3>Farmer Support</h3>
                                <p>Providing expert agricultural consulting, technical support, and partnership opportunities for local farmers.</p>
                            </div>
                        </div>
                    </div>

                    {/* ITEM 6 */}
                    <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="feature-box-items h-100 p-4">
                            <div
                                className="mb-4 d-flex justify-content-center align-items-center rounded-circle transition-hover"
                                style={{ width: "90px", height: "90px", backgroundColor: "rgba(76, 175, 80, 0.1)" }}
                            >
                                <i className="fas fa-globe-africa fa-3x text-success"></i>
                            </div>
                            <div className="feature-content">
                                <h3>Export-Ready Processing</h3>
                                <p>Building the infrastructure for future export-ready crop processing to put Ghanaian agriculture on the global map.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}