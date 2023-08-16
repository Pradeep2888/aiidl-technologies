import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import CallToActionOne from "@/components/call-to-action-one";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-one";
import serviceS1 from "@/images/s1.jpg";
import serviceS2 from "@/images/s2.jpg";
const Seo = () => {
    return (
        <MenuContextProvider>
            <SearchContextProvider>
                <Layout PageTitle="Service Details Page">
                    <HeaderOne />
                    <PageBanner title="Service Details" name="Service" />
                    <div className="serviceArea">
                        <img src={serviceS1} alt="" />
                        <h2>Seo & Content Writing</h2>
                        <p>
                            If you want to reach potential customers faster, then you must have a catchy and user-friendly website. You may find many website designing company in India who are ready toprovide you with your web designing. But Protech Planner is the expert in solving all your website designing queries and get maximum results. A website includes interface design, logo designing, web graphic design, and many other important factors including search engine optimization.We at Protech Planner keep all of this in mind and create or recreate websites for all types of businesses with a charming brand personality.

                            We understand that each brand needs special care and attention which is our driving force to curate different web designs tailored to your needs. We are a Delhi based website designing company and we provide our services that listen to the worldwide need for web designing. Our combination of innovative thinking ensures value to help you and your business grow and reach a wider audience.
                        </p>
                        <div className="row gaping">
                            <div className="col-lg-6 col-sm-12 col-md-6">
                                <img src={serviceS2} alt="" />
                            </div>
                            <div className="col-lg-6 col-sm-12 col-md-6">
                                <h3>Planning & Strategy</h3>
                                <p>
                                    Website Designing Services Offered Byprotechplanner.
                                </p>
                                <ul>
                                    <li>
                                        <i className="fa fa-check-square"></i>Research beyond the business
                                        plan
                                    </li>
                                    <li>
                                        <i className="fa fa-check-square"></i>Marketing options and rates
                                    </li>
                                    <li>
                                        <i className="fa fa-check-square"></i>The ability to turnaround
                                        consulting
                                    </li>
                                    <li>
                                        <i className="fa fa-check-square"></i>Help companies into more
                                        profitable
                                    </li>
                                    <li>
                                        <i className="fa fa-check-square"></i>Customer engagement matters
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p>
                            Need something changed or is there something not quite working the way
                            you envisaged? Is your van a little old and tired and need refreshing?
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining
                            essentially unchanged.
                        </p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining
                            essentially unchanged.
                        </p>
                    </div>
                    <CallToActionOne extraClassName="ready" />
                    <Footer />
                </Layout>
            </SearchContextProvider>
        </MenuContextProvider>
    );
};

export default Seo;
