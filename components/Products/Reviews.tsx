"use client";

import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import RateStars from "../RateStars";
import Image from "next/image";
import { Product } from "../../types/products-types";
import { addReviewAction } from "../../lib/actions";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { ReviewsType } from "../../types/profile-types";

interface ReviewsProps {
  productDetails: Product;
  reviews: ReviewsType[];
}

const Reviews: React.FC<ReviewsProps> = ({ productDetails, reviews }) => {
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [ratingValue, setRatingValue] = useState(0);
  const { user } = useUser();
  const [review, setReview] = useState({
    prod_id: productDetails.id,
    user_id: 1,
    rating: ratingValue,
    comment: "",
  });

  const router = useRouter();

  useEffect(() => {
    setReview({ ...review, rating: ratingValue });
  }, [ratingValue]);

  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addReviewAction(review);
    setFormIsOpen(false);
  };

  return (
    <div className="mt-10">
      <h2 className="flex flex-row flex-nowrap items-center mt-24">
        <span className="flex-grow block border-t border-red"></span>
        <span className="flex-none block mx-4 px-6 py-4 text-xl leading-none font-medium bg-red text-white">
          Reviews
        </span>
        <span className="flex-grow block border-t border-red"></span>
      </h2>
      <div className="mt-9 px-24 py-8">
        {reviews.map((rev) => (
          <div className="mb-4 flex" key={rev.id}>
            <Image
              src={rev.picture}
              alt="image"
              width={80}
              height={80}
              className="rounded-full w-20 h-20"
            />
            <div className="px-8 flex flex-col gap-3 mb-3">
              <h4 className="text-black dark:text-white text-[24px] font-bold">
                {rev.given_name}
              </h4>
              <div>
                <RateStars
                  defaultRating={Math.round(rev.rating * 2) / 2}
                  enable={false}
                  color="red"
                />
              </div>
              <p className="text-[20px]">{rev.comment}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          if (!user) {
            router.push("/api/auth/login");
          } else {
            setFormIsOpen(true);
          }
        }}
        className="text-red"
      >
        Write a review
      </button>
      {formIsOpen && (
        <form onSubmit={submitHandler}>
          <div className="flex mb-[30px]"></div>
          <div className="flex items-center gap-4 mb-[30px]">
            <span className="text-red">Your Rating</span>
            <RateStars
              defaultRating={0}
              enable={true}
              setRatingValue={setRatingValue}
            />
          </div>
          <div className="flex flex-col mb-[30px]">
            <label
              htmlFor="message"
              className="uppercase text-red text-[15px] font-medium"
            >
              Review
              <span className="text-red">*</span>
            </label>
            <textarea
              id="message"
              name="comment"
              value={review.comment}
              onChange={onChangeHandler}
              rows={4}
              cols={50}
              required
              className="w-[100%] text-[17px] rounded-[2px] shadow-none border-b-[1px] border-solid border-gray focus:outline-none focus:border-b-[1px] focus:border-red resize-none placeholder:pl-2"
              placeholder="Review"
            />
          </div>
          <button
            type="submit"
            className="p-[7px] px-[25px] border border-solid border-red text-[18px] text-red font-medium align-middle duration-300 uppercase flex items-center justify-center gap-2"
          >
            Write a review
          </button>
        </form>
      )}
    </div>
  );
};

export default Reviews;
