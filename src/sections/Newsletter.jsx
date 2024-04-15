import React from "react";
import { useForm } from "react-hook-form";

export default function Newsletter() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className=" pr-20 pl-0 ">
        <div className="container px-0 md:mx-auto flex flex-wrap md:flex-nowrap">
          <div
            className="relative bg-cover bg-center h-96 flex items-center w-full md:w-2/3"
            style={{
              backgroundImage: `url('https://t4.ftcdn.net/jpg/02/51/45/49/360_F_251454966_MSoiZITSgkSgIs2qGr1SnfJOYdhd6ieJ.jpg')`,
            }}
          >
            <div className="absolute inset-0 bg-black/25"></div>
            <div className="w-4/5 z-10 mx-auto text-center py-10 md:py-20 text-gray-300">
              <h1 className="text-semibold text-6xl md:text-7xl  font-serif mb-3">
                {" "}
                Fitness Store
              </h1>
              <p>
                Elevate your workouts with our premium gym equipment, designed
                for durability and performance. Whether you're setting up a home
                gym or upgrading your commercial facility, our wide range of
                machines and accessories has you covered.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/3 pt-5 pb-10 md:py-20 flex flex-col items-center text-gray-600">
            <h2 className=" font-serif mb-3">sign up for our</h2>
            <h2 className="text-semibold text-3xl md:text-4xl  font-serif mb-3">
              NEWSLETTER
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Your form inputs */}

              <div className="flex flex-col gap-6 w-full items-center">
                <input
                  type="email"
                  name="email"
                  placeholder="Type Your Email... "
                  ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                  className="border-b border-emerald-400 focus:outline-none focus:border-blue-500 bg-transparent w-3/5 py-4"
                />
                {errors.email && <span>Email is required</span>}

                <button
                  type="submit"
                  className="w-1/2 py-3 px-5 md:px-9 ml-3 rounded-full text-emerald-500  border border-emerald-500 hover:bg-emerald-600 transition duration-500 ease-in-out hover:text-white font-bold text-center"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
