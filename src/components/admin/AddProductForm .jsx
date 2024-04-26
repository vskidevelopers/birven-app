import { useProductFunctions } from "@/firebase/firbase";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddProductForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [imageUploaded, setImageUploaded] = useState(false);
  const { productImageURL, uploadProductImage, addProduct } =
    useProductFunctions();
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
  console.log(formattedDate);

  const onSubmit = async (data) => {
    console.log("submit data >> ", data);
    setLoading(true);

    try {
      if (productImageURL != null) {
        const productData = {
          ...data,
          image: productImageURL,
          createdAt: formattedDate,
        };
        // Proceed with form submission
        const addProductResponse = await addProduct(productData);
        console.log("add_product()_response >> ", addProductResponse);
        reset(); // Assuming reset() resets the form
        setLoading(false);
      } else {
        console.log("Images are not uploaded yet.");
        console.log("product_image_url >> ", productImageURL);
      }
    } catch (error) {
      console.error("An error occurred: ", error);
      setLoading(false);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        console.log("Uploading image...");
        const uploadResult = await uploadProductImage(file);
        if (uploadResult.status === "success") {
          console.log("Image uploaded successfully");
          setImageUploaded(true);
        } else {
          console.error("Image upload failed.");
        }
      } catch (error) {
        console.error("An error occurred during image upload: ", error);
      }
    } else {
      console.error("No image selected.");
    }
  };
  return (
    <div className="max-h-96 overflow-y-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md"
      >
        <div className="mb-4">
          <label className="block mb-2">Image:</label>
          <input
            type="file"
            onChange={handleImageUpload}
            className="block w-full border-sky-400 p-2  rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Name:</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="block w-full border-b border-sky-400 rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50 p-2"
          />
          {errors.name && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2">Description:</label>
          <textarea
            {...register("description", { required: true })}
            className="block w-full border-b border-sky-400 rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50 p-2"
            rows="4"
            placeholder="Enter description..."
          ></textarea>
          {errors.description && (
            <span className="text-red-500">Description is required</span>
          )}
        </div>

        <div className="flex justify-between">
          <div className="mb-4">
            <label className="block mb-2">Status:</label>
            <select
              {...register("status", { required: true })}
              className="block w-full border-b border-sky-400 p-2 rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
            >
              <option value="none">None</option>
              <option value="new">New</option>
              <option value="sale">Sale</option>
              <option value="out_of_stock">Out of Stock</option>
              {/* Add other status options here */}
            </select>
            {errors.status && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-2">Price:</label>
            <input
              type="number"
              {...register("price", { required: true })}
              className="block w-full border-b border-sky-400 p-2  rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
            />
            {errors.price && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Tags:</label>
          <input
            type="text"
            {...register("tags")}
            className="block w-full border-b border-sky-400 p-2  rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Instagram Link:</label>
          <input
            type="text"
            {...register("instagramLink")}
            className="block w-full border-b border-sky-400 p-2  rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Twitter Link:</label>
          <input
            type="text"
            {...register("twitterLink")}
            className="block w-full border-b border-sky-400 p-2  rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Facebook Link:</label>
          <input
            type="text"
            {...register("facebookLink")}
            className="block w-full border-b border-sky-400 p-2  rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
          />
        </div>

        <button
          type="submit"
          className={`w-full py-2 px-4 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-300 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
