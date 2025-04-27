import React from "react";
import { ICard } from "../types/card";
import { Link } from "react-router-dom";
interface CardProps {
  card: ICard;
  like: boolean;
  onLikeClick(id: string): void;
  onOpen(id: string): void;
}

const Card: React.FC<CardProps> = ({ card, like, onLikeClick, onOpen }) => {
  const { id, name, price, mainImg } = card;

  const handleNavigate = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onOpen(id);
  };

  return (
    <div className="card" onClick={(e) => handleNavigate(e)}>
      <div className="card__container">
        <div className="card__img-wrapper">
          <div className="discount">
            <p className="discount__value">13% OFF</p>
          </div>
          <div
            className="card__img"
            style={{
              backgroundImage: `url(${`${mainImg}`})`,
            }}
          ></div>
        </div>
        <div className="card__info">
          <p className="card__name">{name}</p>
          <div className="card__prices">
            <p className="card__price">{`${price} $`}</p>
            <p className="card__price price__discount">{`${price} $`}</p>
          </div>
        </div>
        <div className="card__features ">
          <div className="card__button">
            <div className="cart-icon"></div>
          </div>
          <div className="card__button">
            <div
              className={` ${like ? "like-active" : ""} like`}
              onClick={() => onLikeClick(id)}
            ></div>
          </div>
          <div className="card__button ">
            <div className="search"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
