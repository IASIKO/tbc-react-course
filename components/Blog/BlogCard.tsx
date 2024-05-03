import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { MdStarRate } from "react-icons/md";

interface BlogInfo {
  image: string;
  rating: number;
  name: string;
  ingredients: string;
  id: number;
}


interface BlogCardProps {
  blogInfo: BlogInfo;
}

const BlogCard: React.FC<BlogCardProps> = ({ blogInfo }) => {
  const t = useTranslations('blogs')

  return (
    <div className="mb-[30px] flex">
      <div
        style={{ backgroundImage: `url(${blogInfo.image})` }}
        className="w-[50%] bg-cover bg-no-repeat bg-center"
      ></div>
      <div className="w-[50%] bg-[#f5f4f0] p-[15px]">
        <p className="mb-[10px] flex items-center">
          <MdStarRate />
          <span className="pl-[10px] text-gray">{blogInfo.rating}</span>
        </p>
        <h3 className="text-[27px] font-medium italic mb-[10px] leading-normal text-black">
          {blogInfo.name}
        </h3>
        <p className="mb-[10px]">{blogInfo.ingredients}</p>
        <Link
          href={`/blog/${blogInfo.id}`}
          className="text-red italic font-bold"
        >
          {t('continue')}
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
