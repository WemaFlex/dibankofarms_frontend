import BreadCrum from "@/app/components/BreadCrum";
import ContactDetailsSection from "./ContactDetailsSection";
// import ContactFormSection from "./ContactFormSection";
import ContactMapSection from "./ContactMapSection";
import ContactSection from "../home/ContactSection";
// import ContactSection from "./ContactFormSection";

export default function ContactUsPage() {
    return (
        <>
            <BreadCrum slug="Contact Us" />
            <ContactDetailsSection />
            <ContactMapSection />
            {/* <ContactFormSection /> */}
            <ContactSection />
        </>
    )
}
