import React, { useEffect, useState } from "react";
import image from "../../assets/img/banner__img.svg";
import { ICard } from "../../types/card";
import { useParams, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../helpers/api/api";
import axios from "axios";
import ProductButtonGroup from "../ProductButtonGroup";
import { useAppDispatch, useAppSelector } from "../../helpers/reduxHelper";
import { cartItem, cartSlice } from "../../store/reducers/cartSlice";
import { size } from "../../types/inedx";
import ProductImage from "../ProductImages";
import ProductSizes from "../widgets/ProductSizes";
import ProductDescription from "../ProductDescription";
import ProductReviews from "../ProductReviews";
const ProductPage = () => {
  const dispatch = useAppDispatch();
  const [product, setProduct] = useState<ICard | null>(null);
  const [showDescription, setShowDescription] = useState<boolean>(true);
  const [selectSize, setSelectSize] = useState<size>(size.S);
  const [count, setCount] = useState<number>(1);
  const { id } = useParams();
  const { addItem } = cartSlice.actions;
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}products/${id}`);
        setProduct(data);
      } catch (error) {
        navigate("/");
      }
    })();
  }, [id]);

  const handleAddToCart = () => {
    if (product && selectSize) {
      const item: cartItem = {
        ...product,
        count: count,
        size: selectSize,
      };
      dispatch(addItem({ item, count }));
    }
  };

  if (!product) {
    return <h1>Загрузка...</h1>;
  }
  return (
    <div className="product-page">
      <div className="product-page__container">
        <div className="product">
          <div className="product__container">
            <div className="product__wrapper">
              <ProductImage
                images={product.images}
                mainImage={product.mainImg}
              />
              <div className="product-content">
                <h1 className="product-content__title">{product.name}</h1>
                <div className="product-content__main">
                  <div className="price card__price">{`$ ${product.price}`}</div>
                  <div className="raiting">19 Customer Review</div>
                </div>
                <p className="product-content__desc">
                  <span className="topic">Short Description:</span>
                  The ceramic cylinder planters come with a wooden stand to help
                  elevate your plants off the ground. The ceramic cylinder
                  planters come with a wooden stand to help elevate your plants
                  off the ground.
                </p>
                <ProductSizes
                  size={selectSize}
                  setSize={setSelectSize}
                  sizes={product.sizes}
                />
                <ProductButtonGroup
                  selectedSize={selectSize}
                  count={count}
                  onClick={setCount}
                  addToCart={handleAddToCart}
                />
                <div className="product__local-infos">
                  {product.localInfo.map(({ title, text }, i) => {
                    return (
                      <p className="product__text" key={i}>
                        {`${title}:`}
                        <span className="product__atribut-text">
                          {` ${text}`}
                        </span>
                      </p>
                    );
                  })}
                </div>
                <div className="share">
                  <p className="share__title topic">Share this products:</p>
                  <div className="share__icons">
                    <div className="share__icon facebook"></div>
                    <div className="share__icon twitter"></div>
                    <div className="share__icon linkedin"></div>
                    <div className="share__icon message"></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ProductDescription
                isDescActive={showDescription}
                productInfo={product}
                onShowDesc={setShowDescription}
              />
              <ProductReviews
                isReviewsActive={showDescription}
                reviews={[]}
                onShowDesc={setShowDescription}
              />
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
