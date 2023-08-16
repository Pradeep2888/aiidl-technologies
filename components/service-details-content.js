import React from "react";
import serviceS1 from "@/images/home_1/WD-1.png";
import serviceS2 from "@/images/home_1/webdev.webp";
const ServiceDetailsContent = () => {
  return (
    <div className="serviceArea">
      <img src={serviceS1} alt="" />
      <h2>Website Development</h2>
      <p>
        Having a website doesn’t benefit you until it is user-friendly, captivating, mobile-friendly, and load faster when a visitor comes to it. We at AIIDL Technologies, a well-known Website Development Company in Delhi are experts in grabbing visitor’s attention by creating fantastic websites for our clients. We are working with multiple industries and can create an e-commerce website, informative website, education site, health site, and many others. We offer customized web development solutions at a reasonable price that will bring your more visitors and sales.

        Having a catchy, professionals, and user-friendly website is of utmost importance for every business. Our main focus is to provide you a high-quality website that can stand out among the crowd. We have a large team of proficient designers who are highly experienced and connect you to your requirements. After understanding your business and expectations, our developers initiate the work on your website. We as Web Development Company ensure that you are provided with a site map before finalizing the design for your website.
      </p>
      <div className="row gaping">
        <div className="col-lg-6 col-sm-12 col-md-6">
          <img src={serviceS2} alt="" />
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6">
          <h3>Planning & Strategy</h3>
          <p>
            Website Designing Services Offered By AIIDL Technologies.
          </p>
          <ul>
            <li>
              <i className="fa fa-check-square"></i>CMS Web Development
              
            </li>
            <li>
              <i className="fa fa-check-square"></i>E-Commerce Website Development
            </li>
            <li>
              <i className="fa fa-check-square"></i>Portal Web Development
              
            </li> <br/>
            <li>
              <i className="fa fa-check-square"></i>PHP Web Development 
              
            </li> <br/>
            <li>
              <i className="fa fa-check-square"></i>WordPress Development
            </li> <br/>
            <li>
              <i className="fa fa-check-square"></i>ASP Web Development
            </li> <br/>
            <li>
              <i className="fa fa-check-square"></i>B2B/B2C Web Development
            </li>
          </ul>
        </div>
      </div>
      <p>
      We understand that each brand needs special care and attention which is our driving force to curate different web designs tailored to your needs. We are a Delhi based website designing company and we provide our services that listen to the worldwide need for web designing. Our combination of innovative thinking ensures value to help you and your business grow and reach a wider audience.
      </p>
      <p>
      We have served 500+ clients across the globe and are known as the best e-Commerce Website Development Company in India. We have worked for startups, as well as, for well-developed businesses that are doing great today! Our happy customers are our strength and we would love to bring a smile on your face too! So, if you are looking for web development services with affordable prices and expertise, connect us over call or email to discuss the project.
      </p>
    </div>
  );
};

export default ServiceDetailsContent;
