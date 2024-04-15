import React from "react";
import ArrivalCard from "../components/ArrivalCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function NewArrivals() {
  return (
    <div className=" container mx-auto px-10 py-20">
      <div className="flex flex-col items-center w-sceen text-center">
        <div className="py-10">
          {/* text goes here */}
          <p className="text-[#ed1d3c] text-md font-semibold uppercase">
            made the hard way
          </p>
          <h1 className="text-3xl font-bold capitalize mb-6">New Arrivals</h1>
        </div>
        <br />
        <div className="px-20 w-full">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <ArrivalCard />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
