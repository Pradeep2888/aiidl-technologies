import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import CallToActionOne from "@/components/call-to-action-one";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-one";
import GraphicDetails from "@/components/graphic-details";


const Graphic = () => {
    return (
        <MenuContextProvider>
        <SearchContextProvider>
          <Layout PageTitle="Service Details Page">
            <HeaderOne />
            <PageBanner title="Service Details" name="Service" />
            <GraphicDetails/>
            <CallToActionOne extraClassName="ready" />
            <Footer />
          </Layout>
        </SearchContextProvider>
      </MenuContextProvider>
    );
};

export default Graphic;
