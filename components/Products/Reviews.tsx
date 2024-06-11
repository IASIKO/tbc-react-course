"use client";

import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import RateStars from "../RateStars";
import Image from "next/image";
import { Product } from "../../types/products-types";
import {
  addReviewAction,
  deleteReviewAction,
  editReviewAction,
  updateRatingAction,
} from "../../lib/actions";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { AuthUser, ReviewsType } from "../../types/profile-types";
import { MdDelete, MdEdit } from "react-icons/md";
import ThemeLoader from "../UI/ThemeLoader";
import { useTranslations } from "next-intl";

interface ReviewsProps {
  productDetails: Product;
  reviews: ReviewsType[];
  authUser: AuthUser;
  starRating: number;
}

const Reviews: React.FC<ReviewsProps> = ({
  productDetails,
  reviews,
  authUser,
  starRating,
}) => {
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [ratingValue, setRatingValue] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);
  const [editReviewId, setEditReviewId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const [review, setReview] = useState({
    prod_id: productDetails.id,
    user_id: authUser && authUser.id,
    rating: ratingValue,
    comment: "",
  });

  const router = useRouter();
  const t = useTranslations("reviews")

  useEffect(() => {
    setReview({ ...review, rating: ratingValue });
  }, [ratingValue]);

  const updateRatingHandler = async () => {
    await updateRatingAction(starRating, productDetails.id);
  };

  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (isUpdate) {
      await editReviewAction(review, editReviewId);
      await updateRatingHandler();
    } else {
      await addReviewAction(review);
      await updateRatingHandler();
    }
    setIsUpdate(false);
    setEditReviewId(null);
    setRatingValue(0);
    setReview({
      prod_id: productDetails.id,
      user_id: authUser && authUser.id,
      rating: ratingValue,
      comment: "",
    });
    setLoading(false);
    setFormIsOpen(false);
  };

  const reviewEditHandler = (id: number) => {
    const index = reviews.findIndex((item) => item.id == id);
    setReview({
      prod_id: productDetails.id,
      user_id: reviews[index].user_id,
      rating: reviews[index].rating,
      comment: reviews[index].comment,
    });
    setRatingValue(reviews[index].rating);
    setFormIsOpen(true);
    setIsUpdate(true);
    setEditReviewId(id);
  };

  return (
    <div className="mt-10">
      <h2 className="flex flex-row flex-nowrap items-center mt-24">
        <span className="flex-grow block border-t border-red"></span>
        <span className="flex-none block mx-4 px-6 py-4 text-xl leading-none font-medium bg-red text-white">
          {t('revs')}
        </span>
        <span className="flex-grow block border-t border-red"></span>
      </h2>
      <div className="mt-9 px-4 lg:px-24 py-8">
        {reviews.map((rev) => (
          <React.Fragment key={rev.id}>
            {((authUser?.role && authUser.role === "admin") ||
              authUser?.sub === rev.sub) && (
              <div className="w-full flex justify-end gap-2 p-2">
                <button
                  type="button"
                  className="text-black hover:text-red dark:text-white"
                  onClick={() => deleteReviewAction(rev.id)}
                >
                  <MdDelete />
                </button>
                <button
                  type="button"
                  onClick={() => reviewEditHandler(rev.id)}
                  className="text-black hover:text-red dark:text-white"
                >
                  <MdEdit />
                </button>
              </div>
            )}
            <div className="mb-4 flex flex-col lg:flex-row">
              <Image
                src={rev.picture}
                alt="image"
                width={80}
                height={80}
                className="rounded-full w-20 h-20 mb-4 lg:mb-0"
              />
              <div className="lg:px-8 flex flex-col gap-3 mb-3">
                <h4 className="text-black dark:text-white text-lg lg:text-xl font-bold">
                  {rev.given_name}
                </h4>
                <div>
                  <RateStars
                    defaultRating={Math.round(rev.rating)}
                    enable={false}
                    color="red"
                  />
                </div>
                <p className="text-md lg:text-lg">{rev.comment}</p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
      <button
        type="button"
        onClick={() => {
          if (!user) {
            router.push("/api/auth/login");
          } else {
            setFormIsOpen(true);
          }
        }}
        className="text-red"
      >
        {t('writeRev')}
      </button>
      {formIsOpen && (
        <form onSubmit={submitHandler} className="mt-4">
          <div className="flex mb-6">
            <span className="text-red">{t('yourRev')}: </span>
            <RateStars
              defaultRating={ratingValue}
              enable={true}
              setRatingValue={setRatingValue}
              color="red"
            />
          </div>
          <div className="flex flex-col mb-6">
            <label
              htmlFor="message"
              className="uppercase text-red text-sm font-medium"
            >
              {t('rev')}
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
              className="w-full text-md rounded shadow-none border-b border-gray focus:outline-none focus:border-red resize-none placeholder-pl-2"
              placeholder={t('rev')}
            />
          </div>
          <button
            type="submit"
            className="p-2 px-5 border border-solid border-red text-lg text-white bg-red hover:bg-lightred font-medium align-middle duration-300 uppercase flex items-center justify-center gap-2 w-[300px]"
          >
            {loading ? <ThemeLoader /> : t('writeRev')}
          </button>
        </form>
      )}
    </div>
  );
};

export default Reviews;
