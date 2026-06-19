"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function TagsFilter() {
    // Curated tags matching Dibanko Salifu Farms' ecosystem
    const tags = [
        "Poultry Feed",
        "White Maize",
        "Goat Feed",
        "Nutri Pellets",
        "Layer Mash",
        "Soya Beans",
        "Ruminants",
        "Organic Fertilizer",
        "Ejura Fresh"
    ];

    // Track multiple selected tags in an array
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const handleTagClick = (tag: string) => {
        if (selectedTags.includes(tag)) {
            // Remove tag if already selected
            setSelectedTags(selectedTags.filter((t) => t !== tag));
        } else {
            // Add tag to filters
            setSelectedTags([...selectedTags, tag]);
        }
    };

    const clearFilters = () => {
        setSelectedTags([]);
    };

    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.01)]">
            {/* Widget Title Container */}
            <div className="flex items-center justify-between mb-5">
                <h4 className="text-lg font-black text-[#0A2803] relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-[#5B8C51]">
                    Popular Tags
                </h4>

                {/* Clear Filter Action Button */}
                {selectedTags.length > 0 && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        onClick={clearFilters}
                        className="text-xs font-bold text-red-500 hover:text-red-700 hover:underline transition-colors focus:outline-none cursor-pointer"
                    >
                        Clear All
                    </motion.button>
                )}
            </div>

            {/* Tags Flex Wrap List */}
            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => {
                    const isSelected = selectedTags.includes(tag);

                    return (
                        <motion.button
                            key={tag}
                            onClick={() => handleTagClick(tag)}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            className={`px-3 py-2 rounded-xl text-xs font-bold transition-colors duration-200 cursor-pointer border select-none ${isSelected
                                ? "bg-[#0A2803] text-white border-transparent shadow-sm"
                                : "bg-[#F9FCF8] text-[#5C6672] border-gray-100 hover:bg-[#EDF2EC] hover:text-[#0A2803] hover:border-gray-200"
                                }`}
                        >
                            {tag}
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
}