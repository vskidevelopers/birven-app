import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useProductFunctions } from "@/firebase/firbase";
import Footer from "@/components/Footer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import QuotationForm from "@/components/PrimaryQuotationForm";

export default function ProductDetail() {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  const [tags, setTags] = useState([]);
  const { id } = useParams();
  const { fetchProductDetail } = useProductFunctions();

  const fetchProductDetails = async () => {
    setLoading(true);
    try {
      const productDetail = await fetchProductDetail(id);
      console.log("requested_product >> ", productDetail);
      setProduct(productDetail.data);
      const tagsString = productDetail?.data?.tags;
      const tagsArray = tagsString.split(",").map((tag) => tag.trim());
      setTags(tagsArray);
    } catch (err) {
      throw new Error("Failed to load product details");
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  return (
    <>
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 py-8 mt-16">
        <div className="w-full lg:w-1/2 lg:mr-8">
          <img
            src={product.image}
            alt={product.name}
            className="my-4 rounded-lg  object-contain w-full"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="my-4">
            <h2 className="text-xl font-semibold">Price: ${product.price}</h2>
            <p className="text-lg">{product.description}</p>
          </div>
          <div className="my-4">
            <h2 className="text-xl font-semibold">Category:</h2>
          </div>
          <div className="my-4">
            <h2 className="text-xl font-semibold">Tags:</h2>
            <ul className="list-disc pl-6 flex justify-between md:flex-col">
              {tags.map((tag, index) => (
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
          <div className="my-4">
            <Link
              to="/shop"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
            >
              Back to Shop
            </Link>
            <Dialog>
              <DialogTrigger className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Request a Quote
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    Enter your details and we&apos;ll reach back
                  </DialogTitle>
                  <DialogDescription>
                    <QuotationForm product={product} />
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
