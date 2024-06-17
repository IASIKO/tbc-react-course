"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
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
  enable,
  setRatingValue,
}: {
  count?: number;
  defaultRating: number;
  icon?: ReactNode;
  color?: string;
  iconSize?: number;
  enable?: boolean;
  setRatingValue?: Dispatch<SetStateAction<number>>;
  reviewRating?: boolean;
}) => {
  const [rating, setRating] = useState(0);
  const [temporaryRating, setTemporaryRating] = useState(0);

  useEffect(() => {
    setRating(defaultRating);
  }, [defaultRating]);

  let stars = Array(count || defaultCount).fill(icon || defaultIcon);

  const handleClick = (rating: number) => {
    if (enable === true) {
      setRating(rating);
      if (setRatingValue) {
        setRatingValue(rating);
      }
    }
  };

  return (
    <div className="flex items-center">
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
            className={`transition-all hover:ease-in-out duration-300 ${
              enable === true && "hover:scale-125 cursor-pointer"
            }`}
            key={index}
            style={{
              fontSize: iconSize ? `${iconSize}px` : "20px",
              color: elementColor,
              filter: `${isActiveColor ? "grayscale(0%)" : "grayscale(100%)"}`,
            }}
            onMouseEnter={() =>
              enable === true && setTemporaryRating(index + 1)
            }
            onMouseLeave={() => enable === true && setTemporaryRating(0)}
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
