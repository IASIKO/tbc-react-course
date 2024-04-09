"use client";

import { useEffect, useState } from "react";

const BlogDetailsContent = ({ params }) => {
  const [blogDetails, setBlogDetails] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${params.slug}`)
      .then((res) => res.json())
      .then((res) => setBlogDetails(res));
  }, [params]);

  console.log(blogDetails);

  return (
    <section className="py-[60px]">
      <div className="w-[1140px] m-auto">
        <img
          src={blogDetails.image}
          alt={`blog image ${blogDetails.id}`}
          className="w-[500px] h-auto"
        />
      </div>
    </section>
  );
};

export default BlogDetailsContent;
