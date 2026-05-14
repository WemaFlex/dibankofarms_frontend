import FooterSection from "../components/FooterSection";
import BackToTop from "../components/BackToTop";
import ContactUsOffCanvas from "../components/ContactUsOffCanvas";
import CustomMouseCursor from "../components/CustomMouseCursor";
import StickyHeader from "../components/StickyHeader";
import TopHeader from "../components/TopHeader";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <PreLoader /> */}
      <BackToTop />
      <CustomMouseCursor />
      <ContactUsOffCanvas />
      <TopHeader />
      <StickyHeader />
      {children}
      <FooterSection />
    </>
  );
}
