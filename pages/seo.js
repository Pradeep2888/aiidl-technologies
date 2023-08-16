import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import CallToActionOne from "@/components/call-to-action-one";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-one";
import SeoDetails from "@/components/seo-details";



const Seo = () => {
    return (
        <MenuContextProvider>
        <SearchContextProvider>
          <Layout PageTitle="Service Details Page">
            <HeaderOne />
            <PageBanner title="Service Details" name="Service" />
            <SeoDetails/>
            <CallToActionOne extraClassName="ready" />
            <Footer />
          </Layout>
        </SearchContextProvider>
      </MenuContextProvider>
    );
};

export default Seo;
