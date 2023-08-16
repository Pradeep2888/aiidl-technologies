import React, { Fragment } from "react";
import AuthorCard from "@/components/author-card";
import Comments from "@/components/comments";
import blogDetailsImage from "@/images/blog/7.jpg";

const SinglePostCard = () => {
  return (
    <Fragment>
      <div className="single_blog">
        <div className="blog_thumb">
          <img src={blogDetailsImage} alt="" />
        </div>
        <div className="blog_headings">
          <span className="blog_date">20 nov</span>
          <h2>Mastering the Digital Landscape</h2>
          <p className="blog_metas">
            <a href="#">By layerdrops</a>-<a href="#">30 Likes</a>-
            <a href="#">2 Comments</a>
          </p>
        </div>
        <div className="blog_details">
          <p>
          In today's rapidly evolving digital era, staying ahead of the curve is not just a luxury, but a necessity. Aiidl Institute recognizes this need and has carved a niche for itself as a premier training institute in the realms of digital marketing and IT. The institute's commitment to providing holistic and practical education sets it apart, ensuring that its students not only learn but thrive in the dynamic world of technology.
          </p>
          <h2>Learning while Earning: Empowering Aspirants Beyond the Classroom</h2>
          <p>
          Aiidl Institute believes in the philosophy of "Learning while Earning," acknowledging the real-world demands on aspiring professionals. The institute's flexible training programs allow students to pursue their education without compromising their existing commitments. Whether you're a student seeking to upskill or a working professional aiming to enhance your capabilities, Aiidl Institute's programs accommodate various schedules, enabling seamless integration of education into your life.
          </p>
          <h2>100% Practical Training: Bridging Theory and Application</h2>
          <p>The institute prides itself on its 100% practical training approach. In a field like digital marketing and IT, hands-on experience is pivotal for grasping concepts effectively. Aiidl Institute's curriculum is designed to provide students with immersive practical exposure, enabling them to apply theoretical knowledge to real-world scenarios. This emphasis on practical learning not only enhances comprehension but also cultivates problem-solving skills crucial for success in the industry.</p>

          <h2>Internship during Course: Real-world Experience from Day One</h2>
          <p>Aiidl Institute goes beyond theoretical instruction by incorporating internships as an integral part of its training programs. This distinctive feature ensures that students gain valuable real-world experience even while pursuing their education. By working on live projects during the course, students are better prepared to face the challenges of the industry post-graduation.</p>

        </div>
        <div className="blog_tagitems">
          <span>Tags:</span>
          <a href="#">Business</a>, <a href="#">Agency</a>,{" "}
          <a href="#">Digital</a>, <a href="#">Technology</a>
        </div>
        <AuthorCard />
        <Comments />
      </div>
    </Fragment>
  );
};

export default SinglePostCard;
