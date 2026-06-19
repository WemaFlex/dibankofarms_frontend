import BreadCrum from "@/app/components/BreadCrum";
import VideoGallery from "./VideoGallery";
import GallerySection from "../home/GallerySection";
import FarmGallerySection from "./FarmGallerySection";

export default function GalleryPage() {
    return (
        <>
            <BreadCrum slug="Gallery" />
            <GallerySection />
            <FarmGallerySection />
            <VideoGallery />
        </>
    )
}
