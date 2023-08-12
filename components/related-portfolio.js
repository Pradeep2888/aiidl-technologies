import React from "react";
import { PortfolioData } from "@/data";
import PortfolioCard from "@/components/portfolio-card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const RelatedPortfolio = () => {
  const carouselOptions = {
    spaceBetween: 0,
    slidesPerView: 1,
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1
      },
      576: {
        spaceBetween: 30,
        slidesPerView: 2
      },
      992: {
        spaceBetween: 30,
        slidesPerView: 3
      }
    }
  };
  return (
    <section className="commonSection relatedPortfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h4 className="sub_title">our portfolio</h4>
            <h2 className="sec_title">related work</h2>
            <p className="sec_desc">
              <b>Innovation:</b> We approach each project with fresh perspectives and embrace emerging technologies to deliver solutions that stand out in the digital landscape. <br />
              <b>Results-Driven:</b> Our projects are not just endeavors; they are journeys with measurable outcomes. Every success story is backed by data and tangible results. <br/>
              <b>Collaboration:</b>Our partnerships with clients are built on open communication and shared goals. We collaborate closely to ensure the final product aligns with their vision and objectives.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Swiper className="related_slider" {...carouselOptions}>
              {PortfolioData.map((post, index) => (
                <SwiperSlide key={index}>
                  <PortfolioCard data={post} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedPortfolio;
