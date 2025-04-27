import React from "react";

type TProductReviews = {
  reviews: any[];
  isReviewsActive: boolean;
  onShowDesc: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProductReviews: React.FC<TProductReviews> = ({isReviewsActive,onShowDesc,reviews}) => {
  return <div className={"product__reviews"}></div>;
};

export default ProductReviews;
