// import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Blog } from "../../types/blogs.type";

interface BlogCardProps {
  blogInfo: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blogInfo }) => {
  // const t = useTranslations("blogs");

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
      <div>
        <img
          src={blogInfo.thumbnail}
          alt={blogInfo.title}
          className="w-full h-80 object-cover"
        />
      </div>
      <div className="p-6 flex flex-col justify-between h-[300px]">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
            {blogInfo.title.length > 20
              ? `${blogInfo.title.slice(0, 20)}...`
              : blogInfo.title}
          </h3>
          <p className="text-gray-700 mb-4">
            {blogInfo.description.length > 100
              ? `${blogInfo.description.slice(0, 100)}...`
              : blogInfo.description}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={blogInfo.thumbnail}
              alt={blogInfo.title}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="text-sm font-medium text-gray-900">
                {blogInfo.title.length > 10
                  ? `${blogInfo.title.slice(0, 10)}...`
                  : blogInfo.title}
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <AiOutlineClockCircle />
                <span className="ml-2">24/12/24</span>
              </div>
            </div>
          </div>
          <Link
            href={`/blog/${blogInfo.id}`}
            className="text-red-600 font-bold"
          >
            Read more...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
