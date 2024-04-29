import React, { useEffect, useState } from "react";
import ArrivalCard from "../components/ArrivalCard";
import { mockData } from "@/utils/mockProducts";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useProductFunctions } from "@/firebase/firbase";

export default function NewArrivals() {
  const [newArrivals, setNewArrivals] = useState([]);
  const filter = "new";
  const { fetchFilteredStatusProducts } = useProductFunctions();

  const fetchNewArrivals = async () => {
    const newArrivalProducts = await fetchFilteredStatusProducts(filter);
    console.log("new-arrivals >> ", newArrivalProducts);
    setNewArrivals(newArrivalProducts?.products);
  };

  useEffect(() => {
    fetchNewArrivals();
  }, []);

  return (
    <div className=" container mx-auto px-10 py-20">
      <div className="flex flex-col items-center w-sceen text-center">
        <div className="relative flex flex-col justify-center items-center py-10">
          <div className="w-full md:w-1/2 text-start md:text-center">
            <h2 className="text-nowrap text-rose-500 text-md font-semibold uppercase ">
              Made the Hard WAY!
            </h2>
            <h1 className="text-3xl font-bold capitalize">
              Browse through our new Stock!
            </h1>
          </div>
          <div className="absolute top-0 left-0 h-full w-full flex justify-center md:justify-center items-center opacity-10">
            <h1 className="text-5xl md:text-9xl font-bold text-nowrap">
              New Arrivals
            </h1>
          </div>
        </div>
        <br />
        <div className="px-2 md:px-20 w-full">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {newArrivals.map((data, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <ArrivalCard product={data} />
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
