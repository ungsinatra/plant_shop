import React from "react";
import { size } from "../../types/inedx";

type TProductSize = {
  sizes: size[];
  size: size;
  setSize: React.Dispatch<React.SetStateAction<size>>;
};

const ProductSizes: React.FC<TProductSize> = ({ setSize, size, sizes }) => {
  return (
    <>
      <p className="topic">Size</p>
      <div className="size">
        {size &&
          sizes.map((currentSize, i) => {
            return (
              <div
                key={i}
                className={`${
                  size === currentSize
                    ? " size__value-active size__value"
                    : "size__value"
                }`}
                onClick={() => setSize(currentSize)}
              >
                {currentSize}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ProductSizes;
