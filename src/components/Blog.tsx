import React from "react";
import { blog } from "../types/inedx";

const Blog: React.FC<{ blog: blog }> = ({ blog }) => {
  const { createAt, img, readTime, subtitle, title } = blog;
  return (
    <div className="blog">
      <div className="blog__container">
        <img className="blog__img" src={img} />
        <div className="blog__content">
          <div className="blog__info">{`${createAt} I Read in ${readTime}`}</div>
          <p className="blog__title">{title}</p>
          <p className="blog__subtitle">{subtitle}</p>
          <button className="blog__button">{`Read More >`}</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
