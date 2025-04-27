import React, { useEffect, useState } from "react";
import { fetchBlogs } from "../../helpers/api/api";
import { blog } from "../../types/inedx";
import Blogs from "../Blogs";

const BlogsContainer = () => {
  const [blogs, setBlogs] = useState<blog[] | null>(null);

  useEffect(() => {
    (async () => {
      const blogs = await fetchBlogs();
      setBlogs(blogs as blog[]);
    })();
  }, []);

  return <>{blogs && <Blogs blogs={blogs} />}</>;
};

export default BlogsContainer;
