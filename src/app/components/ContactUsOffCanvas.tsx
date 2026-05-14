import Image from "next/image";

export default function ContactUsOffCanvas() {
    return (
        <>
            <div className="fix-area">
                <div className="offcanvas__info">
                    <div className="offcanvas__wrapper">
                        <div className="offcanvas__content">
                            <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                                <div className="offcanvas__logo">
                                    {/* FIX: Updated to Next.js standard home route */}
                                    <a href="/">
                                        <Image src="/assets/img/logo/black-logo.svg" alt="Dibanko Salifu Farms" height={200} width={200} />
                                    </a>
                                </div>
                                <div className="offcanvas__close">
                                    <button>
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>

                            <h3 className="offcanvas-title">Welcome to Dibanko Salifu Farms!</h3>
                            <p>Your trusted partner for high-quality crops, well-bred livestock, and fortified animal feed in the Ashanti Region.</p>

                            <div className="mobile-menu fix mt-15"></div>

                            <div className="social-icon d-flex align-items-center">
                                {/* Changed javascript:void(0) to # to prevent React warnings */}
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-youtube"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>

                            <div className="offcanvas__contact">
                                <h3>Contact Us</h3>
                                <ul className="contact-list">
                                    <li>
                                        <div className="icon">
                                            <i className="far fa-phone-alt"></i>
                                        </div>
                                        <div className="content">
                                            <p>Call Us</p>
                                            <h4><a href="tel:+233244522879">+233 24 452 2879</a></h4>
                                            <h4><a href="tel:+233540765641">+233 540 765 641</a></h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fal fa-envelope"></i>
                                        </div>
                                        <div className="content">
                                            <p>Send Email</p>
                                            {/* Updated Email */}
                                            <h4><a href="mailto:dibankosalifu@gmail.com">dibankosalifu@gmail.com</a></h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fal fa-map-marker-alt"></i>
                                        </div>
                                        <div className="content">
                                            <p>Location</p>
                                            {/* Updated Location */}
                                            <h4>Ejura, Ashanti Region, Ghana</h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* FIX: Updated to Next.js standard contact route */}
                            <a href="/contact" className="theme-btn">
                                Let’s Talk
                                <i className="far fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="offcanvas__overlay"></div>
        </>
    );
}