import BreadCrum from "@/app/components/BreadCrum";

export default function ShopItemDetailsPage() {
    return (
        <>
            <BreadCrum slug="Products Page" />

            <section className="shop-details-section section-padding">
                <div className="container">
                    <div className="shop-details-wrapper">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="shop-details-image">
                                    <div className="tab-content">
                                        <div id="thumb1" className="tab-pane fade show active">
                                            <div className="shop-thumb">
                                                <img src="/assets/img/inner-page/shop/shop-details-01.jpg" alt="img" />
                                            </div>
                                        </div>
                                        <div id="thumb2" className="tab-pane fade">
                                            <div className="shop-thumb">
                                                <img src="/assets/img/inner-page/shop/shop-details-01.jpg" alt="img" />
                                            </div>
                                        </div>
                                        <div id="thumb3" className="tab-pane fade">
                                            <div className="shop-thumb">
                                                <img src="/assets/img/inner-page/shop/shop-details-01.jpg" alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="nav mb-5">
                                        <li className="nav-item">
                                            <a href="#thumb1" data-bs-toggle="tab" className="nav-link ps-0 active">
                                                <img src="/assets/img/inner-page/shop/shop-details-02.jpg" alt="img" />
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#thumb2" data-bs-toggle="tab" className="nav-link">
                                                <img src="/assets/img/inner-page/shop/shop-details-03.jpg" alt="img" />
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#thumb3" data-bs-toggle="tab" className="nav-link">
                                                <img src="/assets/img/inner-page/shop/shop-details-04.jpg" alt="img" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="product-details-content">
                                    <div className="star pb-3 wow fadeInUp">
                                        <a href="#"> <i className="fas fa-star"></i></a>
                                        <a href="#"><i className="fas fa-star"></i></a>
                                        <a href="#"> <i className="fas fa-star"></i></a>
                                        <a href="#"><i className="fas fa-star"></i></a>
                                        <a href="#"><i className="fas fa-star"></i></a>
                                        <span>(02)</span>
                                    </div>
                                    <h2 className="pb-3 text-anim">Organic Sweet Banana</h2>
                                    <p className="mb-3 wow fadeInUp" data-wow-delay=".2s">
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    </p>
                                    <div className="price-list wow fadeInUp" data-wow-delay=".4s">
                                        <ul>
                                            <li>
                                                $899.00
                                            </li>
                                            <li>
                                                <del>$999.00</del>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="cart-quantity wow fadeInUp" data-wow-delay=".6s">
                                        <p className="qty">
                                            <button className="qtyminus" aria-hidden="true">−</button>
                                            <input type="number" name="qty" id="qty2" min="1" max="10" step="1" value="1" />
                                            <button className="qtyplus" aria-hidden="true">+</button>
                                        </p>
                                        <a href="shop-details.html" className="shop-btn theme-btn">Add to cart</a>
                                        <div className="icon-item">
                                            <a href="shop-details.html" className="icon">
                                                <i className="far fa-heart"></i>
                                            </a>
                                            <a href="shop-details.html" className="icon">
                                                <i className="far fa-share"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <h6 className="details-info"><span>SKU:</span> <a href="shop-details.html">124224</a></h6>
                                    <h6 className="details-info"><span>Categories:</span> <a href="shop-details.html">Crux Indoor Fast and Easy</a></h6>
                                    <h6 className="details-info"><span>Tags:</span> <a href="shop-details.html">accessories, business</a></h6>
                                </div>
                            </div>
                        </div>
                        <div className="single-tab">
                            <ul className="nav mb-5">
                                <li className="nav-item">
                                    <a href="#description" data-bs-toggle="tab" className="nav-link ps-0 active">
                                        <h6>Description</h6>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#additional" data-bs-toggle="tab" className="nav-link">
                                        <h6>Additional Information  </h6>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#review" data-bs-toggle="tab" className="nav-link">
                                        <h6>reviews (3)</h6>
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div id="description" className="tab-pane fade show active">
                                    <div className="description-items">
                                        <div className="description-content">
                                            <h3>Product descriptions</h3>
                                            <p className="mb-4">
                                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                                praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                                                excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                                                officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                                                rerum facilis est et expedita distinctio.  When purchasing or selling a handcrafted
                                                painting, it&apos;s essential to have a clear understanding of these product details to
                                                make an informed decision and to provide potential buyers with a comprehensive
                                                description of the artwork. Additionally, the value and significance of a handcrafted
                                                painting can be influenced by factors like the artist&apos;s reputation, the rarity of the
                                                piece, and the demand for their work in the
                                                art market.
                                            </p>
                                            <p>
                                                When purchasing or selling a handcrafted painting, it&apos;s essential to have a clear
                                                understanding of these product details to make an informed decision and to provide
                                                potential buyers with a comprehensive description of the artwork. Additionally, the
                                                value and significance of a handcrafted painting can be influenced by factors like the
                                                artist&apos;s reputation, the rarity of the piece, and the demand for their work in the
                                                art market.painting can be influenced by factors like the artist&apos;s reputation, the
                                                rarity of the piece, and the demand for their work in the
                                                art market.
                                            </p>
                                            <div className="description-list-items d-flex justify-content-between">
                                                <ul className="description-list">
                                                    <li>
                                                        Model wears:
                                                        <span>UK 10/ EU 38/ US 6</span>
                                                    </li>
                                                    <li>
                                                        Occasion:
                                                        <span> Lifestyle, Sport</span>
                                                    </li>
                                                    <li>
                                                        Country:
                                                        <span>Italy</span>
                                                    </li>
                                                </ul>
                                                <ul className="description-list">
                                                    <li>
                                                        Model wears:
                                                        <span>UK 10/ EU 38/ US 6</span>
                                                    </li>
                                                    <li>
                                                        Occasion:
                                                        <span> Lifestyle, Sport</span>
                                                    </li>
                                                    <li>
                                                        Country:
                                                        <span>Italy</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="additional" className="tab-pane fade">
                                    <div className="table-responsive mb-15">
                                        <table className="table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <td>Weight</td>
                                                    <td>240 Ton</td>
                                                </tr>
                                                <tr>
                                                    <td>Dimensions</td>
                                                    <td>20 × 30 × 40 cm</td>
                                                </tr>
                                                <tr>
                                                    <td>Colors</td>
                                                    <td>Black, Blue, Green</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div id="review" className="tab-pane fade">
                                    <div className="review-items">
                                        <div className="admin-items d-flex flex-wrap flex-md-nowrap align-items-center pb-4">
                                            <div className="admin-img pb-4 pb-md-0 me-4">
                                                <img src="/assets/img/inner-page/shop/client-01.jpg" alt="image" />
                                            </div>
                                            <div className="content p-4">
                                                <div className="head-content pb-1 d-flex flex-wrap justify-content-between">
                                                    <h5>miklos salsa<span>27June 2025 at 5.44pm</span></h5>
                                                    <div className="star">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>
                                                </div>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="admin-items d-flex flex-wrap flex-md-nowrap align-items-center pb-4">
                                            <div className="admin-img pb-4 pb-md-0 me-4">
                                                <img src="/assets/img/inner-page/shop/client-02.jpg" alt="image" />
                                            </div>
                                            <div className="content p-4">
                                                <div className="head-content pb-1 d-flex flex-wrap justify-content-between">
                                                    <h5>Ethan Turner <span>27June 2025 at 5.44pm</span></h5>
                                                    <div className="star">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>
                                                </div>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="admin-items d-flex flex-wrap flex-md-nowrap align-items-center pb-4">
                                            <div className="admin-img pb-4 pb-md-0 me-4">
                                                <img src="/assets/img/inner-page/shop/client-03.png" alt="image" />
                                            </div>
                                            <div className="content p-4">
                                                <div className="head-content pb-1 d-flex flex-wrap justify-content-between">
                                                    <h5>Devid Miller<span>27June 2025 at 5.44pm</span></h5>
                                                    <div className="star">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>
                                                </div>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="review-title mt-5 py-15 mb-30">
                                            <h4>add a review</h4>
                                            <div className="rate-now d-flex align-items-center">
                                                <p>Rate this product? *</p>
                                                <div className="star">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="review-form">
                                            <form action="#" id="contact-form" method="POST">
                                                <div className="row g-4">
                                                    <div className="col-lg-6">
                                                        <div className="form-clt">
                                                            <input type="text" name="name" id="name" placeholder="Full Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-clt">
                                                            <input type="text" name="email" id="email" placeholder="email addres" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 wow fadeInUp" data-wow-delay=".8">
                                                        <div className="form-clt-big form-clt">
                                                            <textarea name="message" id="message" placeholder="message"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".9">
                                                        <button type="submit" className="theme-btn">
                                                            Post Submit <i className="far fa-arrow-right"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}





// "use client";
// import { useState } from "react";
// import { useSearchParams } from "next/navigation";
// import Link from "next/link";
// import BreadCrum from "@/app/components/BreadCrum";
// import { products } from "../data";


// export default function ShopItemDetailsPage() {
//     // Grab the ID from the URL (e.g., /shop/item?id=poultry-feed-25kg)
//     const searchParams = useSearchParams();
//     const id = searchParams.get("id");

//     // Fetch the product data
//     const product = products.find((p) => p.id === id);
//     console.log("Fetched product:", product); // Debugging log to check if we got the right product data
//     // React State for interactivity
//     const [quantity, setQuantity] = useState(1);
//     const [activeTab, setActiveTab] = useState("description"); // 'description', 'additional', or 'review'
//     const [mainImage, setMainImage] = useState(product?.images[0] || "");

//     // Handlers for the quantity buttons
//     const handleIncrease = () => setQuantity(prev => (prev < 100 ? prev + 1 : prev));
//     const handleDecrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

//     // If the URL has an invalid ID, show a fallback screen
//     if (!product) {
//         return (
//             <div className="container text-center py-5 mt-5">
//                 <h2>Product Not Found</h2>
//                 <p>We could not find the agricultural product you are looking for.</p>
//                 <a href="/shop" className="theme-btn mt-3">Back to Shop</a>
//             </div>
//         );
//     }

//     return (
//         <>
//             <BreadCrum slug={product.title} />

//             <section className="shop-details-section section-padding">
//                 <div className="container">
//                     <div className="shop-details-wrapper">
//                         <div className="row">

//                             {/* --- LEFT COLUMN: IMAGE GALLERY --- */}
//                             <div className="col-lg-5">
//                                 <div className="shop-details-image">
//                                     {/* Main Image */}
//                                     <div className="shop-thumb mb-4">
//                                         <img src={mainImage} alt={product.title} className="w-100 rounded" />
//                                     </div>

//                                     {/* Thumbnails */}
//                                     <ul className="nav mb-5 d-flex gap-3">
//                                         {product.images.map((imgSrc, index) => (
//                                             <li className="nav-item" key={index}>
//                                                 <button
//                                                     onClick={() => setMainImage(imgSrc)}
//                                                     className={`nav-link p-0 border-0 bg-transparent ${mainImage === imgSrc ? 'border border-success' : ''}`}
//                                                     style={{ cursor: "pointer" }}
//                                                 >
//                                                     <img src={imgSrc} alt={`Thumbnail ${index + 1}`} style={{ width: "80px", height: "80px", objectFit: "cover" }} />
//                                                 </button>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             </div>

//                             {/* --- RIGHT COLUMN: PRODUCT INFO --- */}
//                             <div className="col-lg-7">
//                                 <div className="product-details-content">
//                                     <div className="star pb-3 wow fadeInUp">
//                                         {[...Array(5)].map((_, index) => (
//                                             <i key={index} className={index < product.rating ? "fas fa-star" : "far fa-star"}></i>
//                                         ))}
//                                         <span className="ms-2">(0{product.reviewsCount}) Reviews</span>
//                                     </div>

//                                     <h2 className="pb-3 text-anim">{product.title}</h2>

//                                     <p className="mb-3 wow fadeInUp" data-wow-delay=".2s">
//                                         {product.shortDescription}
//                                     </p>

//                                     <div className="price-list wow fadeInUp" data-wow-delay=".4s">
//                                         <ul>
//                                             <li>GH¢ {product.price.toFixed(2)}</li>
//                                             {product.originalPrice && (
//                                                 <li><del>GH¢ {product.originalPrice.toFixed(2)}</del></li>
//                                             )}
//                                         </ul>
//                                     </div>

//                                     <div className="cart-quantity wow fadeInUp" data-wow-delay=".6s">
//                                         <p className="qty d-flex align-items-center">
//                                             <button onClick={handleDecrease} className="qtyminus" type="button">−</button>
//                                             <input type="number" name="qty" id="qty2" value={quantity} readOnly className="text-center" style={{ width: "50px" }} />
//                                             <button onClick={handleIncrease} className="qtyplus" type="button">+</button>
//                                         </p>
//                                         <button className="shop-btn theme-btn border-0">Add to cart</button>
//                                         <div className="icon-item">
//                                             <a href="#" className="icon"><i className="far fa-heart"></i></a>
//                                         </div>
//                                     </div>

//                                     <h6 className="details-info mt-4"><span>SKU:</span> {product.sku}</h6>
//                                     <h6 className="details-info"><span>Categories:</span> {product.categories.join(", ")}</h6>
//                                     <h6 className="details-info"><span>Tags:</span> {product.tags.join(", ")}</h6>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* --- BOTTOM SECTION: TABS --- */}
//                         <div className="single-tab mt-5">
//                             <ul className="nav mb-4 gap-4 border-bottom pb-2">
//                                 <li className="nav-item">
//                                     <button
//                                         onClick={() => setActiveTab("description")}
//                                         className={`nav-link p-0 border-0 bg-transparent ${activeTab === "description" ? "text-success fw-bold" : "text-dark"}`}
//                                     >
//                                         <h6>Description</h6>
//                                     </button>
//                                 </li>
//                                 <li className="nav-item">
//                                     <button
//                                         onClick={() => setActiveTab("additional")}
//                                         className={`nav-link p-0 border-0 bg-transparent ${activeTab === "additional" ? "text-success fw-bold" : "text-dark"}`}
//                                     >
//                                         <h6>Additional Information</h6>
//                                     </button>
//                                 </li>
//                                 <li className="nav-item">
//                                     <button
//                                         onClick={() => setActiveTab("review")}
//                                         className={`nav-link p-0 border-0 bg-transparent ${activeTab === "review" ? "text-success fw-bold" : "text-dark"}`}
//                                     >
//                                         <h6>Reviews ({product.reviewsCount})</h6>
//                                     </button>
//                                 </li>
//                             </ul>

//                             <div className="tab-content mt-4">
//                                 {/* Tab: Description */}
//                                 {activeTab === "description" && (
//                                     <div className="description-items fade show active">
//                                         <div className="description-content">
//                                             <h3>Product Information</h3>
//                                             <p className="mb-4">{product.longDescription}</p>
//                                         </div>
//                                     </div>
//                                 )}

//                                 {/* Tab: Additional Info */}
//                                 {activeTab === "additional" && (
//                                     <div className="table-responsive mb-15 fade show active">
//                                         <table className="table table-bordered">
//                                             <tbody>
//                                                 <tr>
//                                                     <td className="fw-bold bg-light" style={{ width: "200px" }}>Weight</td>
//                                                     <td>{product.weight}</td>
//                                                 </tr>
//                                                 <tr>
//                                                     <td className="fw-bold bg-light">Dimensions</td>
//                                                     <td>{product.dimensions}</td>
//                                                 </tr>
//                                                 <tr>
//                                                     <td className="fw-bold bg-light">Origin</td>
//                                                     <td>Ejura, Ashanti Region, Ghana</td>
//                                                 </tr>
//                                             </tbody>
//                                         </table>
//                                     </div>
//                                 )}

//                                 {/* Tab: Reviews (Simplified for now) */}
//                                 {activeTab === "review" && (
//                                     <div className="review-items fade show active">
//                                         <p>No reviews yet. Be the first to review this product!</p>
//                                         {/* You can paste the review form back in here when you are ready to handle form submissions! */}
//                                     </div>
//                                 )}
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }