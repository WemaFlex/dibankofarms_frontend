"use client";

import { motion } from "framer-motion";

export default function ContactMapSection() {
    return (
        // Background changed to white so the bottom ragged shape from the details section shows up perfectly
        <section className="relative pb-16 md:pb-24 bg-white z-0 pt-8">

            {/* Full-bleed container: no max-width or padding */}
            <div className="w-full relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    // Full-width styling
                    className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] shadow-[0_15px_40px_rgba(0,0,0,0.08)] z-10 bg-gray-100"
                >
                    <iframe
                        src="https://maps.google.com/maps?q=Ejura,+Ashanti+Region,+Ghana&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Dibanko Salifu Farms Location"
                        className="absolute inset-0 w-full h-full"
                    ></iframe>
                </motion.div>
            </div>

        </section>
    );
}