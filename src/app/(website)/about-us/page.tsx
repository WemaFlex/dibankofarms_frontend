import BreadCrum from "@/app/components/BreadCrum";
import CounterSection from "../home/CountSection";
import ShopSection from "../home/ShopSection";
import OurStorySection from "./OurStorySection";
import ChooseUsSection from "../home/ChooseUsSection";
import OperationsAndStandards from "./OperationsAndStadards";
import VideoGallery from "@/app/components/VideoGallery";

export default function AboutUsPage() {
    return (
        <>
            <BreadCrum slug="About Us" />
            <OurStorySection />
            <CounterSection />
            <ChooseUsSection />
            <ShopSection />
            {/* <TestimonialSection /> */}
            <OperationsAndStandards />
            {/* <GallerySection /> */}
            <VideoGallery />
        </>
    )
}
