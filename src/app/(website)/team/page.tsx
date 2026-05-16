import BreadCrum from "@/app/components/BreadCrum";
import OrganizationalStructure from "./OrgStructure";
import TeamMembersSection from "./TeamMembersSection";

export default function FAQsPage() {
    return (
        <>
            <BreadCrum slug="Our Team" />
            <TeamMembersSection />
            <OrganizationalStructure />
        </>
    )
}
