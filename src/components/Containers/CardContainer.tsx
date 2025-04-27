import React, { useState, useEffect } from "react";
import Card from "../Card";
import { ICard } from "../../types/card";
import { fetchLikeCard } from "../../helpers/utils";
import { isCardLiked } from "../../helpers/utils";
import { useNavigate } from "react-router-dom";
interface ICardsContainerProps {
  card: ICard;
}
const CardContainer: React.FC<ICardsContainerProps> = ({ card }) => {
  const [like, setLike] = useState(Boolean);
  const navigate = useNavigate();
  const handleLikeClick = (id: string) => {
    setLike(!like);
    fetchLikeCard(id, card);
  };

  const handleOpenProduct = (id: string) => {
    navigate(`/shop/product/${id}`);
  };

  useEffect(() => {
    const jsonListLike = localStorage.getItem("likedCards");
    if (jsonListLike) {
      const likedList = JSON.parse(jsonListLike);
      const isLiked = isCardLiked(card.id, likedList);
      setLike(isLiked);
    }
  }, []);
  return (
    <>
      <Card
        card={card}
        like={like}
        onLikeClick={handleLikeClick}
        onOpen={handleOpenProduct}
      />
    </>
  );
};

export default CardContainer;
