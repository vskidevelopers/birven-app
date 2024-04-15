import React from "react";

export default function LeaderDivider() {
  return (
    <div className="py-20 w-full bg-slate 900">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <div>
          <img
            src="https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg"
            alt="..."
          />
        </div>

        <div className="col-span-2">
          <div className="relative flex flex-col justify-center items-center py-10">
            <div className="w-full text-start">
              <h2 className="text-[#FDB715] text-md font-semibold uppercase ">
                Meet the Team Leader
              </h2>
              <div className="w-full md:w-3/4">
                <h1 className="text-3xl font-bold capitalize">
                  Empowering Organizations through Result-Driven Solutions
                </h1>
              </div>
            </div>

            <div className="absolute top-0 left-0 h-full w-full flex justify-end items-baseline opacity-10">
              <h1 className="text-7xl md:text-9xl font-bold"> Leader</h1>
            </div>
            <div className="my-5">
              <p>
                This leader is a highly accomplished businessman and team leader
                with a proven track record of success in the business services
                industry. With a wealth of experience and a strategic mindset,
                He has consistently driven growth and profitability for his
                ventures. He possesses excellent leadership skills, an
                entrepreneurial spirit, and a deep understanding of market
                dynamics.He is committed to fostering innovation, building
                high-performing teams, and delivering exceptional results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
