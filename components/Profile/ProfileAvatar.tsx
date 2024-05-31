"use client";

import type { PutBlobResult } from "@vercel/blob";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const ProfileAvatar = ({ picture }: { picture: string }) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const MAX_FILE_SIZE_MB = 4.5;
  const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (!inputFileRef.current?.files) {
      setError("No file selected");
      return;
    }

    const file = inputFileRef.current.files[0];

    if (file.size > MAX_FILE_SIZE_BYTES) {
      setError(`File size should not exceed ${MAX_FILE_SIZE_MB} MB`);
      return;
    }

    try {
      const response = await fetch(`/api/avatar/upload?filename=${file.name}`, {
        method: "POST",
        body: file,
      });

      const newBlob = (await response.json()) as PutBlobResult;

      setBlob(newBlob);
    } catch (err) {
      setError("Upload failed. Please try again.");
    }
  };

  useEffect(() => {
    if (blob !== null) {
    }
  }, [blob]);

  return (
    <div className="flex items-center">
      <form onSubmit={handleSubmit}>
        <input name="file" ref={inputFileRef} type="file" required />
        <button
          className="p-[7px] px-[25px] border border-solid border-red text-[12px] text-red font-medium align-middle duration-300 uppercase hover:bg-red hover:text-white"
          type="submit"
        >
          Upload
        </button>
      </form>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      <Image
        src={blob ? blob.url : picture}
        alt="Profile avatar"
        width={100}
        height={100}
        className="w-[100px] h-[100px] rounded-full"
      />
    </div>
  );
};

export default ProfileAvatar;
