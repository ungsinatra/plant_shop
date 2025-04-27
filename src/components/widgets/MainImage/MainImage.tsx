import React from "react";
import styles from "./index.module.scss";
const MainImage: React.FC<{ img: string }> = ({ img }) => {
  return (
    <div className={`product-images__main-img-wrapper ${styles.container}`}>
      <img
        src={img}
        alt="product-img-large"
        className="product-images__main-image"
      />
    </div>
  );
};

export default MainImage;

//
