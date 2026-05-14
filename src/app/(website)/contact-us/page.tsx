import BreadCrum from "@/app/components/BreadCrum";
import ContactDetailsSection from "./ContactDetailsSection";
import ContactFormSection from "./ContactFormSection";
import ContactMapSection from "./ContactMapSection";

export default function ContactUsPage() {
    return (
        <>
            <BreadCrum slug="Contact Us" />
            <ContactDetailsSection />
            <ContactMapSection />
            <ContactFormSection />
        </>
    )
}
