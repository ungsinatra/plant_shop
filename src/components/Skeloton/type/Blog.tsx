import React from "react";
import ContentLoader from "react-content-loader";

const Blog = (props: any) => {
  return (
    <ContentLoader
      speed={2}
      width={268}
      height={362}
      viewBox="0 0 268 362"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="122" y="94" rx="0" ry="0" width="2" height="12" />
      <rect x="0" y="0" rx="0" ry="0" width="268" height="195" />
      <rect x="0" y="228" rx="0" ry="0" width="268" height="28" />
      <rect x="0" y="261" rx="0" ry="0" width="268" height="51" />
      <rect x="135" y="200" rx="0" ry="0" width="131" height="20" />
      <rect x="0" y="199" rx="0" ry="0" width="111" height="20" />
      <rect x="0" y="321" rx="0" ry="0" width="131" height="28" />
    </ContentLoader>
  );
};

export default Blog;
