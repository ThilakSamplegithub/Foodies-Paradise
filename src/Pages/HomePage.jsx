
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

import { useNavigate } from "react-router-dom";

import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'


const HomePage = () => {
  const navigate = useNavigate();

  return (

    <>
      <div>
        <Navbar />
      </div>
      <div style={{ margin: "3rem" }} className="home-container">
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
          </div>
          <div className="home-text-section">
            <h1 className="primary-heading">
              Your Favourite Food Delivered Hot & Fresh
            </h1>
            <p className="primary-text">
              Healthy switcher chefs do all the prep work, like peeding,
              chopping & marinating, so you can cook a fresh food.
            </p>
            <button
              className="secondary-button"
              onClick={() => navigate("/products")}
            >
              Order Now <FiArrowRight />
              {/* <Link to="/products" /> */}
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
    </>
  );
};


export default HomePage;
