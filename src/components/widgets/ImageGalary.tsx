import React from "react";

const ImageGalary: React.FC<{
  images: string[];
  onClick(img: string): void;
}> = ({ images, onClick }) => {
  return (
    <div className="product-images__column">
      {images.map((img, i) => {
        return (
          <img
            key={i}
            className={`product-images__column-img ${img}`}
            src={img}
            onClick={() => onClick(img)}
            alt="product-img"
          />
        );
      })}
    </div>
  );
};

export default ImageGalary;
