"use client";

import { useEffect, useState } from "react";

const BlogDetailsContent = ({ params }) => {
  const [blogDetails, setBlogDetails] = useState({});

  useEffect(() => {
    async function getBlogDetails() {
      const response = await fetch(
        `https://dummyjson.com/recipes/${params.slug}`
      );
      const blogDetails = await response.json();
      setBlogDetails(blogDetails);
    }

    getBlogDetails();
  }, [params]);

  return (
    <section className="py-[60px]">
      <div className="w-[1140px] m-auto">
        <div className="flex">
          <img
            src={blogDetails.image}
            alt={`blog image ${blogDetails.id}`}
            className="w-[500px] h-auto"
          />
          <div className="px-[30px]">
            <h2 className="text-black font-normal text-[35px]">
              {blogDetails.name}
            </h2>
            <span className="text-red italic">Ingredients</span>
            <p>
              {blogDetails.ingredients &&
                blogDetails.ingredients.map((ingredient, index) => (
                  <span key={index}>{ingredient}, </span>
                ))}
            </p>
            <span className="text-red italic">Instructions</span>
            <p>
              {blogDetails.instructions &&
                blogDetails.instructions.map((instruction, index) => (
                  <span key={index}>{instruction} </span>
                ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsContent;
