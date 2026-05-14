
export default function FarmInnovations() {
    return (
        <section className="service-section fix section-padding">
            <div className="container">
                <div className="section-title text-center">
                    <span className="wow fadeInUp"><img src="/assets/img/sub-title.svg" alt="img" />Our Agricultural Edge</span>
                    <h2 className="text-anim">Science-Backed Nutrition <br /> for Maximum Yield</h2>
                </div>

                <div className="row g-4 justify-content-center">

                    {/* INNOVATION 1: NUTRI PELLETS */}
                    <div className="col-xl-6 col-lg-6 col-md-12 wow fadeInUp" data-wow-delay=".3s">
                        <div className="service-box-items h-100 p-5 bg-light rounded" style={{ borderTop: "5px solid #4CAF50" }}>
                            <div className="icon mb-4">
                                <i className="flaticon-leaf fa-3x text-success"></i>
                            </div>
                            <div className="content">
                                <h3>Dibanko Nutri Pellets</h3>
                                <p className="mb-4">
                                    Unlike standard feeds that simply crush maize and soy, our Nutri Pellets are scientifically formulated. The difference is in our <strong>proprietary premix</strong>.
                                </p>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i> <strong>Essential Amino Acids:</strong> Balanced for rapid, healthy weight gain.</li>
                                    <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i> <strong>Fortified Vitamins & Minerals:</strong> Strengthens bone density and immunity.</li>
                                    <li><i className="fas fa-check-circle text-success me-2"></i> <strong>Superior Conversion:</strong> Formulated so livestock absorb more nutrients per bite, saving you money.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* INNOVATION 2: JUNCAO GRASS & HAY */}
                    <div className="col-xl-6 col-lg-6 col-md-12 wow fadeInUp" data-wow-delay=".5s">
                        <div className="service-box-items h-100 p-5 bg-light rounded" style={{ borderTop: "5px solid #FF9800" }}>
                            <div className="icon mb-4">
                                <i className="flaticon-farmer fa-3x text-warning"></i>
                            </div>
                            <div className="content">
                                <h3>Juncao Grass & Premium Hay</h3>
                                <p className="mb-4">
                                    We are pioneering the use of the "Miracle Grass" in the Ashanti Region. By expertly cultivating and sourcing Juncao, we produce a revolutionary roughage for ruminants.
                                </p>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-2"><i className="fas fa-check-circle text-warning me-2"></i> <strong>High Crude Protein:</strong> Significantly outperforms traditional local grasses.</li>
                                    <li className="mb-2"><i className="fas fa-check-circle text-warning me-2"></i> <strong>Boosts Output:</strong> Directly increases daily milk yields and meat quality in cattle, sheep, and goats.</li>
                                    <li><i className="fas fa-check-circle text-warning me-2"></i> <strong>Year-Round Supply:</strong> Processed into premium hay to ensure your herd never goes hungry during the dry season.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}