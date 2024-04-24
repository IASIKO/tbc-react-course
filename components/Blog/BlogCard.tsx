import Link from "next/link";
import React from "react";
import { MdStarRate } from "react-icons/md";

interface ListItem {
  image: string;
  rating: number;
  name: string;
  ingredients: string;
  id: number;
}

interface BlogCardProps {
  listItem : ListItem;
}

const BlogCard: React.FC<BlogCardProps> = ({ listItem }) => {
  return (
    <div className="mb-[30px] flex">
      <div
        style={{ backgroundImage: `url(${listItem.image})` }}
        className="w-[50%] bg-cover bg-no-repeat bg-center"
      ></div>
      <div className="w-[50%] bg-[#f5f4f0] p-[15px]">
        <p className="mb-[10px] flex items-center">
          <MdStarRate />
          <span className="pl-[10px] text-gray">{listItem.rating}</span>
        </p>
        <h3 className="text-[27px] font-medium italic mb-[10px] leading-normal text-black">
          {listItem.name}
        </h3>
        <p className="mb-[10px]">{listItem.ingredients}</p>
        <Link href={`/blog/${listItem.id}`} className="text-red italic font-bold">
          Continue
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
