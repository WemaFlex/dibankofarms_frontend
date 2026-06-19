
export default function PriceFilter() {
    return (
        <div className="single-sidebar-widget">
            <div className="wid-title wow fadeInUp" data-wow-delay=".4s">
                <h3>Filter By Price</h3>
            </div>
            <div className="price-range-wrapper">
                <div className="slider-container">
                    <input type="range" id="min-slider" className="slider" min="130" max="500"
                        value="130" />
                    <input type="range" id="max-slider" className="slider" min="130" max="500"
                        value="250" />
                </div>
                <div className="price-text pt-4 d-flex gap-3">
                    <label htmlFor="amount">Price:</label>
                    <input type="text" id="amount" readOnly style={{ border: "border:0;" }} />
                </div>
            </div>
        </div>
    )
}
