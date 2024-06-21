"use client";

import Image from "next/image";
import ThemeLoader from "../../UI/ThemeLoader";
import { PutBlobResult } from "@vercel/blob";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";

interface EditProductAvatarProps {
  blob: PutBlobResult | null;
  setBlob: (blob: PutBlobResult | null) => void;
  thumbnail: string;
}

const EditProductAvatar: React.FC<EditProductAvatarProps> = ({
  blob,
  setBlob,
  thumbnail,
}) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const t = useTranslations("profile");
  const MAX_FILE_SIZE_MB = 2.5;
  const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    if (!inputFileRef.current?.files) {
      setError("No file selected");
      return;
    }

    const file = inputFileRef.current.files[0];

    if (file.size > MAX_FILE_SIZE_BYTES) {
      setError(`File size should not exceed ${MAX_FILE_SIZE_MB} MB`);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`/api/avatar/upload?filename=${file.name}`, {
        method: "POST",
        body: file,
      });

      const newBlob = (await response.json()) as PutBlobResult;

      setBlob(newBlob);
      setLoading(false);
    } catch (err) {
      setError("Upload failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center p-4 bg-gray-100 rounded-lg shadow-md">
      <Image
        src={blob ? blob.url : thumbnail}
        alt="Edit Product avatar"
        width={100}
        height={100}
        className="w-[100px] h-[100px] rounded mb-4 sm:mb-0 sm:mr-4"
      />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center"
      >
        <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row items-center">
            <input
              name="file"
              ref={inputFileRef}
              type="file"
              required
              className="block w-full text-sm text-red bg-white dark:bg-black rounded-lg border border-gray-300 cursor-pointer placeholder-red dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 mb-4 sm:mb-0 sm:mr-4 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-red file:text-white hover:file:bg-lightred file:cursor-pointer"
            />
            <button
              className="p-[7px] h-10 border border-solid border-red text-[12px] text-white bg-red font-medium duration-300 uppercase hover:text-white rounded-lg hover:bg-lightred w-[120px]"
              type="submit"
            >
              {loading ? <ThemeLoader /> : t("upload")}
            </button>
          </div>
          {error && (
            <p className="text-red-500 text-xs mt-1 text-center">{error}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default EditProductAvatar;
