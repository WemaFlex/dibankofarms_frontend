import Image from "next/image";

export default function TopHeader() {
    return (
        <div className="header-top-section p-1">
            <div className="container">
                <div className="header-top-wrapper">
                    <ul className="header-contact-list">
                        <li>
                            <i className="fal fa-envelope"></i>
                            <a href="mailto:dibankosalifu@gmail.com">
                                dibankosalifu@gmail.com
                            </a>
                        </li>
                        <li>
                            <i className="far fa-phone-alt"></i>
                            <a href="tel:+233244522879">
                                +233 24 452 2879 / +233 540 765 641
                            </a>
                        </li>
                    </ul>
                    <a href="/home" className="top-logo flex items-center">
                        <Image src="/assets/img/logo/black-logo-top.svg" alt="Top Logo" height={43} width={50} />
                        <Image src="/assets/img/logo/black-logo-bottom.svg" alt="Bottom Logo" height={50} width={220} className="-ml-4 mt-2" />
                    </a>
                    <div className="head-right">
                        <div className="social-icon">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-dribbble"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
