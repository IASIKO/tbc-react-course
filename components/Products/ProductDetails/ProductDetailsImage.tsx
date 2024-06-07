"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductDetailsImageProps {
  thumbnail: string;
  title: string;
}

const ProductDetailsImage: React.FC<ProductDetailsImageProps> = ({
  thumbnail,
  title,
}) => {
  const [zoomedImage, setZoomedImage] = useState("");

  const openZoomedImage = (imageUrl: string) => {
    setZoomedImage(imageUrl);
    document.body.style.overflow = "hidden";
  };

  const closeZoomedImage = () => {
    setZoomedImage("");
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <div
        onClick={() => openZoomedImage(thumbnail)}
        className="w-full h-auto lg:h-[600px] mb-8 lg:mb-0 cursor-zoom-in"
      >
        <Image
          src={thumbnail}
          alt={title}
          className="w-ful h-auto lg:h-[600px] object-cover mb-8 lg:mb-0"
          width={400}
          height={600}
          priority={true}
        />
      </div>
      {zoomedImage && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center z-50 cursor-pointer `}
          onClick={closeZoomedImage}
        >
          <Image
            src={zoomedImage}
            alt="zoomed-image"
            width={700}
            height={900}
            className="max-w-[90vh] max-h-[90vh] m-auto"
          />
        </div>
      )}
    </>
  );
};

export default ProductDetailsImage;
