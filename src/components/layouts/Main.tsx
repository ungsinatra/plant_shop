import React from "react";
import bannerImg from "../../assets/img/banner__img.svg";
import bannerImgSmall from "../../assets/img/banner__img-small.svg";
import Shop from "../Shop";
import Blogs from "../Containers/BlogsContainer";
const Main = () => {
  return (
    <div className="main">
      <div className="banner">
        <div className="banner__container">
          <div className="banner__text-content">
            <p className="subtitle banner__subtitle">Welcome to GreenShop</p>
            <h1 className="title banner__title">
              Let’s Make a Better
              <span className="green"> Planet</span>
            </h1>
            <p className="text banner__text">
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use our plants to create an unique Urban Jungle.
              Order your favorite plants!
            </p>
            <div>
              <button className="button banner__buttom">SHOP NOW</button>
            </div>
          </div>
          <div className="banner__img_content">
            <img src={bannerImg} alt="banner-img" className="banner__img" />
            <img src={bannerImgSmall} alt="banner__img" className="small" />
          </div>
        </div>
      </div>
      <Shop />
      <Blogs />
    </div>
  );
};

export default Main;
