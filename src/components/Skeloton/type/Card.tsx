import React from "react";
import ContentLoader from "react-content-loader";

const Card = (props: any) => {
  return (
    <ContentLoader
      speed={2}
      width={258}
      height={366}
      viewBox="0 0 258 366"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="-1" y="335" rx="0" ry="0" width="258" height="18" />
      <rect x="0" y="308" rx="0" ry="0" width="258" height="22" />
      <rect x="0" y="0" rx="0" ry="0" width="258" height="300" />
    </ContentLoader>
  );
};

export default Card;
