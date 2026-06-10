'use client'
import StickyHeader from "../components/StickyHeader";
import TopHeader from "../components/TopHeader";
import BreadCrum from "../components/BreadCrum";
import { FloatButton } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <FloatButton.BackTop
        duration={400}
        type="primary"
        shape="square"
        icon={<ArrowUpOutlined />}
        style={{ right: 30, bottom: 30 }}
      />
      <TopHeader />
      <StickyHeader />
      <BreadCrum slug="Shop" />
      {children}
      <Footer />
    </>
  );
}
