// import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BlogInfo } from "../../types/blogs.type";
import { MdDelete, MdEdit } from "react-icons/md";

interface BlogCardProps {
  blogInfo: BlogInfo;
  removeBlogHandler: (id: number) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ blogInfo, removeBlogHandler }) => {
  // const t = useTranslations("blogs");

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img
          src={blogInfo.thumbnail}
          alt={blogInfo.title}
          className="w-full h-80 object-cover"
        />
        <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => removeBlogHandler(blogInfo.id)}
              className="text-white hover:text-red duration-300"
            >
              <MdDelete />
            </button>
            <button
              type="button"
              className="text-white hover:text-red duration-300"
            >
              <MdEdit />
            </button>
          </div>
        </div>
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
              src={blogInfo.user_avatar}
              alt={blogInfo.user_name}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="text-sm font-medium text-gray-900">
                {blogInfo.user_name.length > 10
                  ? `${blogInfo.user_name.slice(0, 10)}...`
                  : blogInfo.user_name}
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
