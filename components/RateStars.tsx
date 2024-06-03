"use client";

import { ReactNode, useState } from "react";
import { MdStarRate } from "react-icons/md";

const defaultCount = 5;
const defaultIcon = <MdStarRate />;
const defaultUnselectedColor = "gray";
const defaultColor = "yellow";

const RateStars = ({
  count,
  defaultRating,
  icon,
  color,
  iconSize,
}: {
  count?: number;
  defaultRating: number;
  icon?: ReactNode;
  color?: string;
  iconSize?: number;
}) => {
  const [rating, setRating] = useState(defaultRating);
  const [temporaryRating, setTemporaryRating] = useState(0);

  let stars = Array(count || defaultCount).fill(icon || defaultIcon);

  const handleClick = (rating: number) => {
    setRating(rating);
  };

  return (
    <div className="flex">
      {stars.map((_, index) => {
        const isActiveColor =
          (rating || temporaryRating) &&
          (index < rating || index < temporaryRating);

        let elementColor = "";

        if (isActiveColor) {
          elementColor = color || defaultColor;
        } else {
          elementColor = defaultUnselectedColor;
        }

        return (
          <div
            className="cursor-pointer transition-all hover:ease-in-out duration-300 hover:scale-125"
            key={index}
            style={{
              fontSize: iconSize ? `${iconSize}px` : "20px",
              color: elementColor,
              filter: `${isActiveColor ? "grayscale(0%)" : "grayscale(100%)"}`,
            }}
            onMouseEnter={() => setTemporaryRating(index + 1)}
            onMouseLeave={() => setTemporaryRating(0)}
            onClick={() => handleClick(index + 1)}
          >
            {icon ? icon : defaultIcon}
          </div>
        );
      })}
    </div>
  );
};

export default RateStars;
