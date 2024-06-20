import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { StarIcon } from "@heroicons/react/24/outline";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import { useReviewsFunctions } from "@/firebase/firbase";

export default function Reviews() {
  const { getAllReviewsbyStatus } = useReviewsFunctions();
  const [reviews, setReviews] = useState([]);
  const reviewStatus = "approved";
  const getApprovedReviews = async () => {
    const approvedReviews = await getAllReviewsbyStatus(reviewStatus);
    console.log("approvedReviews >> ", approvedReviews);
    setReviews(approvedReviews?.data);
  };

  useEffect(() => {
    getApprovedReviews();
  }, []);

  return (
    <>
      <h2 className="text-center text-3xl font-semibold py-8">
        What People Like You Say About Us
      </h2>
      <div className="relative">
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          centeredSlides={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper h-full w-5/6"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="py-10 md:px-28 ">
                <div className="flex justify-center py-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 text-emerald-900" />
                  ))}
                </div>
                <div className="text-center my-3">
                  <p className="font-serif text-xl md:text-2xl">
                    "{review.review}"
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-sm mt-5 font-medium text-teal-600 uppercase">
                    {review.name}, KE{" "}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10">
          <button className="swiper-button-prev">&#8592;</button>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10">
          <button className="swiper-button-next">&#8594;</button>
        </div>
      </div>
    </>
  );
}
