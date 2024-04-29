import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { StarIcon } from "@heroicons/react/24/outline";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";

export default function Reviews() {
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
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          centeredSlides={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper h-full w-5/6"
        >
          <SwiperSlide>
            <div className="py-10 md:py-20 md:px-28 ">
              <div className="flex justify-center py-3">
                <StarIcon className="h-4 w-4 text-emerald-900" />
                <StarIcon className="h-4 w-4 text-emerald-900" />
                <StarIcon className="h-4 w-4 text-emerald-900" />
                <StarIcon className="h-4 w-4 text-emerald-900" />
                <StarIcon className="h-4 w-4 text-emerald-900" />
              </div>
              <div className="text-center my-3">
                <p className="font-serif text-xl md:text-2xl">
                  “Top-notch customer experience! From browsing the website to
                  delivery, everything was smooth and efficient. The equipment
                  arrived in perfect condition, and I'm thrilled with my
                  purchase.”
                </p>
              </div>

              <div className="text-center">
                <p className="text-sm mt-5 font-medium text-teal-600 uppercase">
                  Ben Muchemi, Ke
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-10 md:py-20 md:px-28">
              <div className="flex justify-center py-3">
                <StarIcon className="h-4 w-4 text-emerald-900" />
                <StarIcon className="h-4 w-4 text-emerald-900" />
                <StarIcon className="h-4 w-4 text-emerald-900" />
                <StarIcon className="h-4 w-4 text-emerald-900" />
                <StarIcon className="h-4 w-4 text-emerald-900" />
              </div>
              <div className="text-center my-3">
                <p className="font-serif text-xl md:text-2xl ">
                  “Great variety and excellent service! I found everything I
                  needed for my home gym setup at this store. The staff were
                  knowledgeable and helped me make the right choices”
                </p>
              </div>

              <div className="text-center">
                <p className="text-sm mt-5 font-medium text-teal-600 uppercase">
                  {" "}
                  Maurice Mwangi, Ke
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-10 md:py-20 md:px-28">
              <div className="flex justify-center py-3">
                <StarIcon className="h-4 w-4 text-emerald-900" />
                <StarIcon className="h-4 w-4 text-emerald-900" />
                <StarIcon className="h-4 w-4 text-emerald-900" />
                <StarIcon className="h-4 w-4 text-emerald-900" />
                <StarIcon className="h-4 w-4 text-emerald-900" />
              </div>
              <div className="text-center my-3">
                <p className="font-serif text-xl md:text-2xl">
                  “Exceptional quality equipment! I purchased a treadmill from
                  this store, and I'm blown away by its durability and
                  performance. Highly recommended!”!
                </p>
              </div>

              <div className="text-center">
                <p className="text-sm mt-5 font-medium text-teal-600 uppercase">
                  Jane Doe, Ke
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10">
          <button className="swiper-button-prev"></button>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10">
          <button className="swiper-button-next"></button>
        </div>
      </div>
    </>
  );
}
