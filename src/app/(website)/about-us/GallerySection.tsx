
export default function GallerySection() {
    return (
        <section className="section-padding section-bg">
            <div className="container">
                <div className="section-title text-center">
                    <span className="wow fadeInUp">
                        <img src="/assets/img/sub-title.svg" alt="img" />
                        Inside Dibanko Salifu Farms
                    </span>
                    <h2 className="text-anim">Our Farm in Action</h2>
                </div>

                {/* FIX: Moved the row inside the container to prevent horizontal scrolling bugs */}
                <div className="row">

                    {/* GALLERY 1: Goats */}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp">
                        <div className="gallery-image-items">
                            <img src="/assets/img/home-1/gallery/gallery-01.jpg" alt="Livestock" />
                            <div className="content">
                                <p>Livestock</p>
                                <h3><a href="/gallery">Healthy Goat Herds</a></h3>
                            </div>
                        </div>
                    </div>

                    {/* GALLERY 2: Maize */}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                        <div className="gallery-image-items">
                            <img src="/assets/img/home-1/gallery/gallery-02.jpg" alt="Maize Harvest" />
                            <div className="content">
                                <p>Crops</p>
                                <h3><a href="/gallery">Fresh Maize Harvest</a></h3>
                            </div>
                        </div>
                    </div>

                    {/* GALLERY 3: Feed */}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                        <div className="gallery-image-items">
                            <img src="/assets/img/home-1/gallery/gallery-03.jpg" alt="Feed Production" />
                            <div className="content">
                                <p>Animal Feed</p>
                                <h3><a href="/gallery">Premium Feed Pellets</a></h3>
                            </div>
                        </div>
                    </div>

                    {/* GALLERY 4: Beans/Crops */}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                        <div className="gallery-image-items">
                            <img src="/assets/img/home-1/gallery/gallery-04.jpg" alt="Bean Farming" />
                            <div className="content">
                                <p>Crops</p>
                                <h3><a href="/gallery">Sustainable Bean Farming</a></h3>
                            </div>
                        </div>
                    </div>

                    {/* GALLERY 5: Farm Operations */}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                        <div className="gallery-image-items">
                            <img src="/assets/img/home-1/gallery/gallery-05.jpg" alt="Ejura Farm Operations" />
                            <div className="content">
                                <p>Operations</p>
                                <h3><a href="/gallery">Ejura Farm Facilities</a></h3>
                            </div>
                        </div>
                    </div>

                    {/* GALLERY 6: Livestock Breeding */}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".9s">
                        <div className="gallery-image-items">
                            <img src="/assets/img/home-1/gallery/gallery-06.jpg" alt="Livestock Breeding" />
                            <div className="content">
                                <p>Livestock</p>
                                <h3><a href="/gallery">Ethical Breeding</a></h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}