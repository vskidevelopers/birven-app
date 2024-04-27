import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { StarIcon as SolidStarIcon } from "@heroicons/react/24/solid";
import { StarIcon as OutlineStarIcon } from "@heroicons/react/24/outline";
import { useReviewsFunctions } from "@/firebase/firbase";
export default function RatingsAndReviewsForm() {
  const form = useRef();
  const [rating, setRating] = useState(0); // Current rating selected
  const [loading, setLoading] = useState(false);
  const { addReviews } = useReviewsFunctions();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleStarClick = (star) => {
    setRating(star);
  };
  const currentDate = new Date();
  const options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };

  const formattedDate = currentDate.toLocaleString("en-US", options);

  const onSubmit = async (data) => {
    // Add the current rating to the form data
    data.rating = rating;
    const dataToUse = { ...data, status: "pending", createdAt: formattedDate };

    // Submit ratings and reviews logic goes here
    setLoading(true);
    console.log("Data from form >>", dataToUse);
    try {
      const addReviewResponse = await addReviews(dataToUse);
      if (addReviewResponse?.success) {
        console.log("add_review_response >> ", addReviewResponse);
        alert(addReviewResponse.message);
      }
      reset();
      setLoading(false);
      setRating(0);
    } catch (error) {
      console.error("an error occurred >> ", error);
    }
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mr-4 mx-auto bg-white shadow-md p-6"
    >
      <div className="max-w-md">
        <div className="grid grid-cols-1 gap-2">
          <label className="block">
            <input
              type="text"
              {...register("name", { required: true })}
              className="
                  mt-0
                  block
                  w-full
                  px-0.5
                  border-0 border-b-2 border-gray-200
                  focus:ring-0 focus:border-[#22c55e]
                  bg-white text-gray-600
                "
              placeholder="Your Name"
            />
            {errors.name && (
              <span className="text-red-500">Name is required</span>
            )}
          </label>
          <label className="block">
            <input
              type="email"
              {...register("email", { required: true })}
              className="
                  mt-0
                  block
                  w-full
                  px-0.5
                  border-0 border-b-2 border-gray-200
                  focus:ring-0 focus:border-[#22c55e]
                  bg-white text-gray-600
                "
              placeholder="Your Email"
            />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
          </label>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => handleStarClick(star)}
                className={`text-yellow-500 ${
                  star <= rating ? "text-yellow-500" : "text-gray-300"
                }`}
              >
                {star <= rating ? (
                  <SolidStarIcon className="h-6 w-6" />
                ) : (
                  <OutlineStarIcon className="h-6 w-6" />
                )}
              </button>
            ))}
          </div>
          <label className="block">
            <textarea
              {...register("review", { required: true })}
              placeholder="Leave your review here..."
              className="
                  mt-0
                  block
                  w-full
                  px-0.5
                  border-0 border-b-2 border-gray-200
                  focus:ring-0 focus:border-[#22c55e]
                  bg-white text-gray-600
                "
            ></textarea>
            {errors.review && (
              <span className="text-red-500">Review is required</span>
            )}
          </label>
        </div>
      </div>
      <button
        disabled={loading}
        type="submit"
        className={`${
          loading ? "bg-[#22c55e]" : "bg-white"
        } mt-4 text-[#22c55e] font-bold py-2 px-4 bg-white border border-[#22c55e] hover:bg-[#22c55e] hover:text-white  `}
      >
        {loading ? "Submitting..." : "Submit Review"}
      </button>
    </form>
  );
}
