import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "../Components/Navbar";
import About from "../Components/About";
import Work from "../Components/Work";
import Testimonial from "../Components/Testimonial";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import { FiArrowRight } from "react-icons/fi";

const HomePage = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
