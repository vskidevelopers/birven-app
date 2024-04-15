import React from "react";

const GenderDividerCard = ({ backgroundImage, gender }) => {
  return (
    <div
      className="relative w-2/5 h-52 bg-cover bg-center mr-8 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
      style={{ backgroundImage }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <p className="text-xs uppercase">Top Trending</p>
        <p className="text-lg font-bold">{gender} Collection</p>
      </div>
    </div>
  );
};

export default GenderDividerCard;
