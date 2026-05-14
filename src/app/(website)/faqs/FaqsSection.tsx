"use client";

import Link from "next/link";

const faqData = [
    {
        categoryId: "feeds",
        categoryTitle: "About Our Feeds",
        icon: "flaticon-wheat",
        questions: [
            { id: "q1", q: "What types of animal feed do you produce?", a: "We produce high-quality feeds for poultry, swine, ruminants (cattle, sheep, goats), and rabbits. Each formulation is tailored for optimal growth and performance." },
            { id: "q2", q: "What makes your feed different?", a: "Our feeds are scientifically formulated, made from quality ingredients, and designed to deliver consistent results. We prioritize performance, safety, and reliability." },
            { id: "q3", q: "Do your feeds contain additives?", a: "Yes, we use approved additives such as vitamins, minerals, enzymes, and mycotoxin binders to improve feed quality and animal health." },
            { id: "q4", q: "Are your feeds suitable for all growth stages?", a: "No. We provide grower, finisher, and specialized feeds depending on your livestock needs." },
            { id: "q5", q: "Can I request a custom feed formulation?", a: "Yes, we offer tailored formulations based on your production goals and available resources." }
        ]
    },
    {
        categoryId: "materials",
        categoryTitle: "Raw Materials & Quality",
        icon: "flaticon-food-safety",
        questions: [
            { id: "q6", q: "Where do you source your ingredients?", a: "We source from trusted suppliers locally and internationally to ensure consistent quality and safety." },
            { id: "q7", q: "How do you ensure feed quality?", a: "Through controlled formulation, proper storage, and strict monitoring during production." },
            { id: "q8", q: "Do you test for contamination?", a: "Yes, we apply best practices and include mycotoxin control measures in our feeds." }
        ]
    },
    {
        categoryId: "farming",
        categoryTitle: "Farming Operations",
        icon: "flaticon-farmer",
        questions: [
            { id: "q9", q: "What other services do you offer?", a: "We are engaged in mixed farming, hay production, and livestock support services." },
            { id: "q10", q: "Do you supply hay or forage?", a: "Yes, we produce hay to support feeding, especially during dry seasons. (Under Construction - Scaling soon!)" }
        ]
    },
    {
        categoryId: "orders",
        categoryTitle: "Orders & Delivery",
        icon: "flaticon-delivery",
        questions: [
            { id: "q11", q: "What packaging sizes are available?", a: "Our feeds are available in convenient 15 kg and 25 kg bags." },
            { id: "q12", q: "Do you offer delivery?", a: "Yes, delivery is available depending on your order size and location across Ghana. (Logistics framework expanding soon!)" },
            { id: "q13", q: "How can I place an order?", a: "You can place an order by contacting us directly via phone, WhatsApp, or email." }
        ]
    },
    {
        categoryId: "pricing",
        categoryTitle: "Pricing & Support",
        icon: "flaticon-like",
        questions: [
            { id: "q14", q: "Are your feeds affordable?", a: "Absolutely. We offer highly competitive pricing while maintaining the premium quality your livestock needs." },
            { id: "q15", q: "Do you provide technical support?", a: "Yes, our team is happy to guide customers on feed selection and proper livestock nutrition strategies." }
        ]
    },
    {
        categoryId: "general",
        categoryTitle: "General Use",
        icon: "flaticon-leaf",
        questions: [
            { id: "q16", q: "How should I store the feed?", a: "Store in a cool, dry place raised off the ground (on pallets) to avoid moisture and pest contamination." },
            { id: "q17", q: "Can I mix your feed with others?", a: "It is not recommended without expert guidance, as mixing can disrupt the carefully balanced nutritional profile." },
            { id: "q18", q: "How soon will I see results?", a: "Results depend on your overall farm management and consistency, but noticeable improvements in weight and health are typically seen within the first few weeks of proper use." }
        ]
    }
];

export default function FaqSection() {
    return (
        <section className="faq-section section-padding">
            <div className="container">

                {/* --- HERO HEADER --- */}
                <div className="section-title text-center mb-5">
                    <span className="wow fadeInUp"><img src="/assets/img/sub-title.svg" alt="img" />FAQ</span>
                    <h2 className="text-anim">Frequently Asked Questions</h2>
                    <p className="mt-3 mx-auto" style={{ maxWidth: "700px" }}>
                        Everything you need to know about our feeds, farming services, and how we support your livestock success in Ejura and beyond.
                    </p>
                    <div className="mt-4 wow fadeInUp" data-wow-delay=".3s">
                        <Link href="/contact-us" className="theme-btn">
                            Contact Us <i className="far fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>

                {/* --- ACCORDION LAYOUT --- */}
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        {faqData.map((category, catIndex) => (
                            <div key={category.categoryId} className="mb-5 wow fadeInUp" data-wow-delay={`0.${(catIndex * 2) + 2}s`}>

                                {/* Category Header */}
                                <h3 className="mb-4 pb-2 border-bottom text-success">
                                    <i className={`${category.icon} me-3`}></i>
                                    {category.categoryTitle}
                                </h3>

                                {/* Bootstrap Accordion */}
                                <div className="accordion" id={`accordion-${category.categoryId}`}>
                                    {category.questions.map((item, index) => (
                                        <div className="accordion-item mb-3 border-0 shadow-sm rounded" key={item.id}>
                                            <h2 className="accordion-header" id={`heading-${item.id}`}>
                                                <button
                                                    className={`accordion-button ${index !== 0 ? 'collapsed' : ''} bg-white rounded fw-bold`}
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#collapse-${item.id}`}
                                                    aria-expanded={index === 0 ? "true" : "false"}
                                                    aria-controls={`collapse-${item.id}`}
                                                >
                                                    {item.q}
                                                </button>
                                            </h2>
                                            <div
                                                id={`collapse-${item.id}`}
                                                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                                aria-labelledby={`heading-${item.id}`}
                                                data-bs-parent={`#accordion-${category.categoryId}`}
                                            >
                                                <div className="accordion-body text-muted pt-0 pb-4 px-4">
                                                    {item.a}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

                {/* --- BOTTOM CTA SECTION --- */}
                <div className="row mt-5 pt-4">
                    <div className="col-12 text-center wow fadeInUp" data-wow-delay=".8s">
                        <div className="p-5 bg-light rounded" style={{ borderTop: "5px solid #4CAF50" }}>
                            <h3 className="mb-2">Still have questions?</h3>
                            <p className="mb-4">We’re here to help you succeed.</p>

                            <div className="d-flex justify-content-center gap-3 flex-wrap">
                                <Link href="tel:+233244522879" className="theme-btn bg-dark text-white border-0">
                                    <i className="fas fa-phone-alt me-2"></i> Call Now
                                </Link>
                                <Link href="mailto:dibankosalifu@gmail.com" className="theme-btn">
                                    <i className="fas fa-envelope me-2"></i> Send Email
                                </Link>
                                {/* Update this link with your actual WhatsApp link format */}
                                <Link href="https://wa.me/233244522879" target="_blank" className="theme-btn bg-success border-0 text-white">
                                    <i className="fab fa-whatsapp me-2"></i> WhatsApp Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}