import React from "react";
import ContentLoader from "react-content-loader";
import CardSkeleton from "./type/Card";
import BlogSkeleton from "./type/blog";
import style from "./skeleton.module.scss";

const Skeleton: React.FC<{ type: string }> = ({ type }) => {
  if (type === "card") {
    return <CardSkeleton />;
  }
  if (type === "blog") {
    return <BlogSkeleton />;
  }

  return <></>;
};

export default Skeleton;
