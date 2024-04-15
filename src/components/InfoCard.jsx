import React from "react";
import { Link } from "react-router-dom";

function InfoCard({ title, description, buttonText, buttonLink }) {
  return (
    <div className="m-4 flex-1 flex">
      <div className="border-2 border-white bg-transparent hover:bg-gray-900 bg-opacity-50 hover:bg-opacity-90 transition duration-300 hover:rounded-lg p-8 text-white flex flex-col justify-between">
        <div>
          <h2 className="text-2xl text-center font-bold mb-4 hover:underline">
            {title}
          </h2>
          <hr className="w-4/5 mx-auto" />
          <p className="text-sm py-3 text-center">{description}</p>
        </div>
        <div className="w-full flex justify-center my-3">
          <Link
            to={buttonLink}
            className="bg-transparent border border-white rounded-full py-2 px-6 hover:bg-white hover:text-gray-900 hover:border-transparent transition duration-300"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
