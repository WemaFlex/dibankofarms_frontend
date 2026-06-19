"use client"
import React from "react";
// import { FloatButton } from "antd";
import TopHeader from "../components/TopHeader";
import Header from "../components/StickyHeader";
import Footer from "../components/Footer";
import { FloatButton } from 'antd';
import { ArrowUpOutlined } from "@ant-design/icons";


export default function RootWebsiteLayout({ children }: { children: React.ReactNode }) {
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
      <Header />

   
        {children}
   

      <Footer />
    </>
  );
}