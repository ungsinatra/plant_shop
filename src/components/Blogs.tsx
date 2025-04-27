import React from "react";
import { blog } from "../types/inedx";
import Blog from "./Blog";

const Blogs: React.FC<{ blogs: blog[] }> = ({ blogs }) => {
  return (
    <div className="blogs">
      <div className="blogs__container">
        <h2 className="blogs__title">Our Blog Posts</h2>
        <p className="blogs__subtitle ">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
        <div className="blogs__lists">
          {blogs.map((blog) => {
            return <Blog key={blog.id} blog={blog} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
