import React from "react";
import { ICard } from "../types/card";

const ProductDescription: React.FC<{
  productInfo: ICard;
  isDescActive: boolean;
  onShowDesc: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isDescActive, productInfo, onShowDesc }) => {
  const handleShowCardDescription = () => {
    onShowDesc(true);
  };
  const handleShowReviews = () => {
    onShowDesc(false);
  };

  return (
    <div className="description">
      <div className="description__titles">
        <p
          className={`description__title ${
            isDescActive && "description__title-active"
          } `}
          onClick={handleShowCardDescription}
        >
          Product Description
        </p>
        <p
          className={`description__title ${
            !isDescActive && "description__title-active"
          } `}
          onClick={handleShowReviews}
        >
          {`Reviews (19)`}{" "}
        </p>
      </div>

      {isDescActive && (
        <>
          <p className="text description__text">
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            fringilla augue nec est tristique auctor. Donec non est at libero
            vulputate rutrum. Morbi ornare lectus quis justo gravida semper.
            Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.
            Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat
            sem, quis fermentum turpis eros eget velit. Donec ac tempus ante.
            Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis
            vulputate, sapien libero hendrerit est, sed commodo augue nisi non
            neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in
            accumsan elit odio quis mi. Cras neque metus, consequat et blandit
            et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet
            ligula euismod eget. The ceramic cylinder planters come with a
            wooden stand to help elevate your plants off the ground.{" "}
          </p>
          <span className="topic">Living Room:</span>
          <p className="text">
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <span className="Dining Room:">Dining Room:</span>
          <p className="text">
            The benefits of houseplants are endless. In addition to cleaning the
            air of harmful toxins, they can help to improve your mood, reduce
            stress and provide you with better sleep. Fill every room of your
            home with houseplants and their restorative qualities will improve
            your life.
          </p>
          <span className="Office:">Dining Room:</span>
          <p className="text">
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </>
      )}
    </div>
  );
};

export default ProductDescription;
