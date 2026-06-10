"use client";

import Pagination from "./Pagination";
import ProductCard from "./ProductItem";
import { products } from "./data";

export default function Products() {
    return (
        <div className="w-full flex flex-col gap-12">

            {/* 
                Tailwind CSS Grid Layout 
                Adapts seamlessly: 1 column on mobile, 2 columns on tablets, 3 columns on modern widescreen monitors.
            */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                {products.map((product, index) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        index={index}
                    />
                ))}
            </div>

            {/* Pagination Alignment Wrapper */}
            <div className="flex justify-center items-center mt-4">
                <Pagination />
            </div>

        </div>
    );
}