"use client";

import Categories from "./Categories";
import SearchProduct from "./SearchProduct";
import TagsFilter from "./TagsFilter";
import Products from "./Products";
import { motion } from "framer-motion";

export default function ShopPage() {
    return (
        /* 
            CRITICAL CSS FIX: Changed 'overflow-hidden' to 'lg:overflow-visible'.
            This instantly allows the browser to track the viewport scroll position 
            so the sidebar can lock firmly in place.
        */
        <section className="py-16 md:py-24 bg-[#F9FCF8] relative overflow-x-hidden lg:overflow-visible">
            <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">

                {/* 
                    'items-start' ensures the sidebar column doesn't stretch, 
                    allowing it to float freely inside the tall products area.
                */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

                    {/* SIDEBAR WRAPPER */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        /* 
                            Adjust 'lg:top-28' to match the exact height of your StickyHeader 
                            so it docks beautifully without overlapping your navigation menu.
                        */
                        className="w-full lg:w-[320px] xl:w-[350px] flex-shrink-0 order-2 lg:order-1 lg:sticky lg:top-28 z-30"
                    >
                        {/* 
                            This box remains perfectly fixed on your screen now. 
                            The 'max-h' and 'overflow-y-auto' ensure that if your filters ever 
                            get too long for small laptop screens, the sidebar handles its own 
                            scrolling without shaking or pulling the rest of the web page.
                        */}
                        <div className="flex flex-col gap-8 lg:max-h-[calc(100vh-140px)] lg:overflow-y-auto lg:pr-2 lg:[&::-webkit-scrollbar]:w-1 lg:[&::-webkit-scrollbar-thumb]:bg-gray-200 lg:[&::-webkit-scrollbar-thumb]:rounded-full">
                            <SearchProduct />
                            <Categories />
                            <TagsFilter />
                        </div>
                    </motion.div>

                    {/* PRODUCTS WRAPPER */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="w-full flex-grow order-1 lg:order-2"
                    >
                        <Products />
                    </motion.div>

                </div>

            </div>
        </section>
    );
}