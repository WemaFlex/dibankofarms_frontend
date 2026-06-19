
export default function BestSellers() {
    return (
        <div className="single-sidebar-widget">
            <div className="wid-title wow fadeInUp" data-wow-delay=".4s">
                <h3>Best Seller</h3>
            </div>
            <div className="popular-posts">
                <div className="single-post-item style-2 wow fadeInUp" data-wow-delay=".3s">
                    <div className="thumb bg-cover" style={{ backgroundImage: "url('assets/img/inner-page/shop/shop-sidber-1.png');" }}></div>
                    <div className="post-content">
                        <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <h4><a href="shop-details.html">Mini Cactus</a></h4>
                        <p>$12.00 – $65.00</p>
                    </div>
                </div>
                <div className="single-post-item style-2 wow fadeInUp" data-wow-delay=".3s">
                    <div className="thumb bg-cover" style={{ backgroundImage: "url('assets/img/inner-page/shop/shop-sidber-2.png');" }}></div>
                    <div className="post-content">
                        <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <h4><a href="shop-details.html">Stylish Bonsai</a></h4>
                        <p>$26.00 – $90.00</p>
                    </div>
                </div>
                <div className="single-post-item style-2 wow fadeInUp" data-wow-delay=".3s">
                    <div className="thumb bg-cover" style={{ backgroundImage: "url('assets/img/inner-page/shop/shop-sidber-3.png');" }}></div>
                    <div className="post-content">
                        <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <h4><a href="shop-details.html">Low-Light</a></h4>
                        <p>$34.00 – $89.00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
