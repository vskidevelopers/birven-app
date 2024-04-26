import React from "react";
import { Link } from "react-router-dom";
import { HeartIcon, ArrowsPointingOutIcon } from "@heroicons/react/24/outline";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ArrivalCard({ product }) {
  const handleAddToWish = () => {
    alert("WishList is not yet active");
  };
  return (
    <div className="w-[270px] px-4 mb-4 group ">
      <Dialog>
        <div className="text-center relative">
          {/* Badge tag */}
          <div className="absolute top-1 right-2 z-30 bg-[#dcb14a] uppercase py-1 px-2 text-white">
            {product?.status === "none" ? "" : product?.status}
          </div>

          {/* Product image */}
          <img
            className="max-w-full h-auto"
            src={product.image}
            alt="Product"
          />

          {/* Hover overlay */}
          <div className="opacity-0 group-hover:opacity-15 absolute inset-0 bg-gradient-to-r from-black/50"></div>

          {/* Actions */}
          <div className="w-full absolute left-0 bottom-0 flex items-end justify-center px-4 py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ul className="mb-0 flex justify-around">
              {/* Favorite */}
              <li className="flex items-center m-0 px-1 hover:text-white ">
                <buton
                  onClick={handleAddToWish}
                  className="font-normal py-2 px-3 border-2 border-black hover:rounded hover:bg-black group-hover:text-white transition duration-300 text-black bg-transparent text-sm hover:text-white "
                >
                  <HeartIcon className="w-4 h-auto text-black hover:text-white  " />
                </buton>
              </li>
              {/* Product name */}
              <li className="flex items-center m-0 p-0">
                <Link
                  className="font-normal py-2 px-4 rounded border border-transparent transition duration-300 text-white bg-black text-sm"
                  to={`/shop/${product.id}`}
                >
                  Ksh {product.price}
                </Link>
              </li>
              {/* View details */}
              <li className="flex items-center mr-0 px-1 hover:text-white ">
                <DialogTrigger className="font-normal py-2 px-2 border-2 hover:bg-black hover:rounded hover:text-white  transition duration-300 text-black bg-transparent border-black text-sm">
                  <ArrowsPointingOutIcon className="w-4 h-auto text-black hover:text-white " />
                </DialogTrigger>
              </li>
            </ul>
          </div>
        </div>
        {/* Product details */}
        <div>
          <h6>
            <DialogTrigger className="reset-anchor">
              {product.name}
            </DialogTrigger>
          </h6>
          <p className="small font-mono"></p>
        </div>
        <DialogContent>
          <div className="flex">
            {/* image */}
            <div className="w-1/2">
              <img
                className="max-w-full h-auto"
                src={product.image}
                alt="Product"
              />
            </div>
            {/* Product Details */}
            <div className="w-1/2 pl-4">
              <DialogHeader>
                <DialogTitle>{product.name}</DialogTitle>
                <DialogDescription>
                  <p>
                    <span className="font-bold">Ratings: </span>
                    {product.ratings}
                  </p>
                  <p>
                    <span className="font-bold">Description: </span>
                    {product.description}
                  </p>
                  <p>
                    <span className="font-bold">Category: </span>
                    {product.category}
                  </p>
                  <p>
                    <span className="font-bold">Tags: </span>
                    {Array.isArray(product.tags) ? product.tags.join(", ") : ""}
                  </p>
                  <p>
                    <span className="font-bold">Price: Ksh </span>
                    {product.price}
                  </p>
                  <p>
                    <span className="font-bold">Instagram: </span>
                    <a href={product.instagramLink}>{product.instagramLink}</a>
                  </p>
                  <p>
                    <span className="font-bold">Twitter: </span>
                    <a href={product.twitterLink}>{product.twitterLink}</a>
                  </p>
                  <p>
                    <span className="font-bold">Facebook: </span>
                    <a href={product.facebookLink}>{product.facebookLink}</a>
                  </p>
                </DialogDescription>
              </DialogHeader>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
