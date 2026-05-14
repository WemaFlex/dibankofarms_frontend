
export default function CtaSection() {
    return (
        <section className="cta-section section-padding pt-0">
            <div className="bottom-shape d-none d-lg-block">
                <img src="/assets/img/home-1/service/bottom-shape.png" alt="img" />
            </div>
            <div className="container">
                {/* FIX: Added the leading slash to the background image URL so Next.js finds it reliably */}
                <div className="cta-wrapper bg-cover" style={{ backgroundImage: "url('/assets/img/home-1/cta/cta-bg.jpg')" }}>
                    <div className="row align-items-center g-4">
                        <div className="col-lg-8 wow fadeInUp" data-wow-delay=".3s">
                            <div className="cta-content">
                                <div className="section-title mb-0">
                                    <span className="text-white">
                                        <img src="/assets/img/sub-title.svg" alt="img" />
                                        Partner With Us
                                    </span>
                                    <h2 className="text-white text-anim">Looking for Reliable Wholesale Supply?</h2>
                                </div>
                                <p className="cta-text">
                                    Whether you need bulk fortified feed for your livestock, fresh crops for your market, or healthy goats for your farm, Dibanko Salifu Farms is ready to supply your needs directly from Ejura.
                                </p>
                                <div className="cta-bottom-area">
                                    {/* FIX: Updated the link to standard Next.js routing */}
                                    <a href="/contact-us" className="theme-btn">
                                        Get in Touch Today <i className="far fa-arrow-right"></i>
                                    </a>
                                    <div className="phone-box-items">
                                        <div className="icon">
                                            <i className="fas fa-phone-alt"></i>
                                        </div>
                                        <div className="content">
                                            <p>Call Us Directly:</p>
                                            <a href="tel:+233540000000">+233 24 452 2879</a><br />
                                            <a href="tel:+233540000000">+233 540 765 641</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInUp" data-wow-delay=".5s">
                            <div className="cta-image">
                                <img src="/assets/img/home-1/cta/cta-01.png" alt="Dibanko Salifu Farms Contact" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}