import React from "react";
import Blog from "./Blog";

const blogListData = [
  {
    image:
      "https://preview.colorlib.com/theme/liquorstore/images/image_1.jpg.webp",
    date: "23 April 2020",
    title: "The Recipe from a Winemaker’s Restaurent",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    image:
      "https://preview.colorlib.com/theme/liquorstore/images/image_2.jpg.webp",
    date: "23 April 2020",
    title: "The Recipe from a Winemaker’s Restaurent",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    image:
      "https://preview.colorlib.com/theme/liquorstore/images/image_3.jpg.webp",
    date: "23 April 2020",
    title: "The Recipe from a Winemaker’s Restaurent",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    image:
      "https://preview.colorlib.com/theme/liquorstore/images/image_4.jpg.webp",
    date: "23 April 2020",
    title: "The Recipe from a Winemaker’s Restaurent",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    image:
      "https://preview.colorlib.com/theme/liquorstore/images/image_1.jpg.webp",
    date: "23 April 2020",
    title: "The Recipe from a Winemaker’s Restaurent",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    image:
      "https://preview.colorlib.com/theme/liquorstore/images/image_2.jpg.webp",
    date: "23 April 2020",
    title: "The Recipe from a Winemaker’s Restaurent",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    image:
      "https://preview.colorlib.com/theme/liquorstore/images/image_3.jpg.webp",
    date: "23 April 2020",
    title: "The Recipe from a Winemaker’s Restaurent",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    image:
      "https://preview.colorlib.com/theme/liquorstore/images/image_4.jpg.webp",
    date: "23 April 2020",
    title: "The Recipe from a Winemaker’s Restaurent",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    image:
      "https://preview.colorlib.com/theme/liquorstore/images/image_1.jpg.webp",
    date: "23 April 2020",
    title: "The Recipe from a Winemaker’s Restaurent",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    image:
      "https://preview.colorlib.com/theme/liquorstore/images/image_2.jpg.webp",
    date: "23 April 2020",
    title: "The Recipe from a Winemaker’s Restaurent",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    image:
      "https://preview.colorlib.com/theme/liquorstore/images/image_3.jpg.webp",
    date: "23 April 2020",
    title: "The Recipe from a Winemaker’s Restaurent",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    image:
      "https://preview.colorlib.com/theme/liquorstore/images/image_4.jpg.webp",
    date: "23 April 2020",
    title: "The Recipe from a Winemaker’s Restaurent",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    image:
      "https://preview.colorlib.com/theme/liquorstore/images/image_1.jpg.webp",
    date: "23 April 2020",
    title: "The Recipe from a Winemaker’s Restaurent",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    image:
      "https://preview.colorlib.com/theme/liquorstore/images/image_2.jpg.webp",
    date: "23 April 2020",
    title: "The Recipe from a Winemaker’s Restaurent",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    image:
      "https://preview.colorlib.com/theme/liquorstore/images/image_3.jpg.webp",
    date: "23 April 2020",
    title: "The Recipe from a Winemaker’s Restaurent",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    image:
      "https://preview.colorlib.com/theme/liquorstore/images/image_4.jpg.webp",
    date: "23 April 2020",
    title: "The Recipe from a Winemaker’s Restaurent",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
];

const BlogList = () => {
  return (
    <section className="py-[60px] relative">
      <div className="max-w-[1140px] px-[15px] m-auto animate-[fall_2s_ease_100ms]">
        <div className="mb-[30px]">
          <div className="text-center">
            <span className="text-[#a23f25] text-[21px] font-normal italic">
              Blog
            </span>
            <h2 className="text-[40px] font-bold text-black">Recent Blog</h2>
          </div>
        </div>
        <div className="w-[1140px] grid grid-cols-2 gap-4">
          {blogListData.map((listItem, index) => (
            <Blog listItem={listItem} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
