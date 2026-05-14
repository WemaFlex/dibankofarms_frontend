import Image from "next/image";
import Link from "next/link"; // Next.js Link imported for instant routing

export default function StickyHeader() {
    return (
        <header id="header-sticky" className="header-1">
            <div className="container">
                <div className="mega-menu-wrapper">
                    <div className="header-main">
                        <form action="#" className="search-form">
                            {/* Updated to Link and routed to "/" */}
                            <Link href="/" className="top-logo flex items-center">
                                <Image src="/assets/img/logo/black-logo-top.svg" alt="Top Logo" height={50} width={100} />
                            </Link>
                        </form>

                        <Link href="/" className="header-logo">
                            <Image src="/assets/img/logo/black-logo.svg" alt="img" height={50} width={50} />
                        </Link>

                        <div className="mean__menu-wrapper">
                            <div className="main-menu">
                                <nav id="mobile-menu">
                                    <ul>
                                        <li><Link href="/">Home</Link></li>
                                        <li><Link href="/about-us">About</Link></li>
                                        <li><Link href="/farms">Farms</Link></li>
                                        <li><Link href="/feed-production">Feed Production</Link></li>
                                        <li><Link href="/shop">Products</Link></li>
                                        <li><Link href="/projects">Projects</Link></li>
                                        <li><Link href="/gallery">Gallery</Link></li>
                                        <li><Link href="/contact-us">Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="header-right d-flex justify-content-end align-items-center">
                            {/* Updated Let's Talk button to match the new /contact route */}
                            <Link href="/contact" className="theme-btn">
                                Let&apos;s Talk
                                <i className="far fa-arrow-right"></i>
                            </Link>
                            <div className="header__hamburger my-auto">
                                <div className="sidebar__toggle">
                                    <div className="header-bar">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}