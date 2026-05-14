import HeroSection from "./HeroSection";
import WhatWeDoSection from "./WhatWeDoSection";
import AboutSection from "./AboutSection";
import ChooseUsSection from "./ChooseUsSection";
import CtaSection from "./CtaSection";
import ProductsSection from "./ShopSection";
import ContactSection from "./ContactSection";
import VideoSection from "./VideoSection";
import CounterSection from "./CountSection";
import FarmInnovations from "./FarmInvations";
import VideoGallery from "@/app/components/VideoGallery";
import FeaturedProjectsSection from "./FeaturedProjects";
import WhyChooseUsSection from "./WhyChooseUsSection";

export default function Home() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <WhatWeDoSection />
            <FeaturedProjectsSection />
            <CounterSection />
            <ProductsSection />
            <WhyChooseUsSection />
            <ContactSection />

            {false && <><ChooseUsSection />
                <VideoGallery />
                <CtaSection />
                <FarmInnovations />
                <VideoSection />
            </>}
        </>
    );
}
