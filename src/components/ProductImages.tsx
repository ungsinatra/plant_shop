import React from "react";
import MainImage from "./widgets/MainImage/MainImage";
import ImageGalary from "./widgets/ImageGalary";

const ProductImage: React.FC<{ images: string[]; mainImage: string }> = ({
  images,
}) => {
  const [currentImg, setCurrentImage] = React.useState<string>(images[0]);

  const handelChangeImg = (img: string) => {
    setCurrentImage(img);
  };

  return (
    <div className="product-images">
      <ImageGalary images={images} onClick={handelChangeImg} />
      <MainImage img={currentImg} />
    </div>
  );
};

export default ProductImage;
