"use client";

import Link from "next/link";
import React from "react";
import { FaCalendar } from "react-icons/fa";
import { BlogInfo } from "../../types/blogs.type";
import { MdDelete, MdEdit } from "react-icons/md";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { AuthUser } from "../../types/profile-types";

interface BlogCardProps {
  blogInfo: BlogInfo;
  removeBlogHandler: (id: number) => void;
  authUser: AuthUser;
}

const BlogCard: React.FC<BlogCardProps> = ({
  blogInfo,
  removeBlogHandler,
  authUser,
}) => {
  const t = useTranslations("blogs");
  const router = useRouter();

  const onEditBlogClickHandler = (id: number) => {
    router.push(`/blog/edit-blog/${id}`);
  };
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img
          src={blogInfo.thumbnail}
          alt={blogInfo.title}
          className="w-full h-80 object-cover"
        />
        {((authUser?.role && authUser.role === "admin") ||
          authUser?.sub === blogInfo.sub) && (
          <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">
            <div className="flex items-center">
              <button
                type="button"
                aria-label="Blog delete"
                onClick={() => removeBlogHandler(blogInfo.id)}
                className="text-white hover:text-red duration-300"
              >
                <MdDelete />
              </button>
              <button
                type="button"
                aria-label="Blog edit"
                onClick={() => onEditBlogClickHandler(blogInfo.id)}
                className="text-white hover:text-red duration-300"
              >
                <MdEdit />
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col justify-between sm:h-[300px] h-auto">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-black">
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
              src={blogInfo.picture}
              alt={`User ${blogInfo.given_name} avatar`}
              width={10}
              height={10}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="text-sm font-medium text-gray-900">
                {blogInfo.given_name.length > 10
                  ? `${blogInfo.given_name.slice(0, 10)}...`
                  : blogInfo.given_name}
              </p>
              <div className="flex text-sm text-gray-500 pt-1">
                <FaCalendar />
                <span className="ml-2">{blogInfo.added_on.slice(0, 10)}</span>
              </div>
            </div>
          </div>
          <Link
            href={`/blog/${blogInfo.id}`}
            className="text-red-600 font-bold"
          >
            {t("see")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
