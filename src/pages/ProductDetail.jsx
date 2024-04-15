import React from "react";
import { useParams } from "react-router-dom";
import { mockData } from "@/utils/mockProducts";
import Footer from "@/components/Footer";

export default function ProductDetail() {
  const { id } = useParams();
  const product = mockData[id];
  return (
    <>
      <div className="container mx-auto px-4 py-8 mt-16">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="my-4 rounded-lg"
        />

        <div className="my-4">
          <h2 className="text-xl font-semibold">Price: ${product.price}</h2>
          <p className="text-lg">{product.description}</p>
        </div>

        <div className="my-4">
          <h2 className="text-xl font-semibold">Category:</h2>
        </div>

        <div className="my-4">
          <h2 className="text-xl font-semibold">Tags:</h2>
          <ul className="list-disc pl-6">
            {product.tags.map((tag, index) => (
              <li key={index} className="text-lg">
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="my-4">
          <h2 className="text-xl font-semibold">Customer Reviews:</h2>
          <p>This product has no reviews yet!</p>
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
        <br />
      </div>
      <Footer />
    </>
  );
}
