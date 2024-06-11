import { useProductFunctions } from "@/firebase/firbase";
import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";

function EditProductForm({ product }) {
  const { control, handleSubmit, setValue } = useForm();

  const { updateProduct } = useProductFunctions();

  useEffect(() => {
    // Populate form fields with product data
    setValue("description", product.description);
    setValue("image", product.image);
    setValue("status", product.status);
    setValue("instagramLink", product.instagramLink);
    setValue("price", product.price);
    setValue("facebookLink", product.facebookLink);
    setValue("twitterLink", product.twitterLink);
    setValue("tags", product.tags);
    setValue("name", product.name);
  }, [product, setValue]);

  const handleUpdate = async (updatedProduct) => {
    try {
      console.log("current Product >> ", product);
      const newUpdatedProduct = { ...product, ...updatedProduct };
      console.log("newUpdatedProduct >> ", newUpdatedProduct);
      console.log("ready to send updated product to the server");
      const updateProductResponse = await updateProduct(
        product?.id,
        newUpdatedProduct
      );
      console.log("update product response >> ", updateProductResponse);
    } catch (error) {
      console.error("An error occurred while updating items:", error);
    }
  };

  const onSubmit = (data) => {
    console.log("Submit data for update >> ", data);
    // Handle form submission (e.g., send updated data to the server)
    handleUpdate(data);
  };
  return (
    <div className="modal">
      <div className="modal-content h-4/5 overflow-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <Controller
              name="description"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <textarea
                  {...field}
                  rows="3"
                  className="mt-1 py-2 px-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              )}
            />
          </div>

          <div>
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700"
            >
              Status
            </label>

            <Controller
              name="status"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <select
                  {...field}
                  className="block w-full border-b border-sky-400 p-2 rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                >
                  <option value="none">None</option>
                  <option value="new">New</option>
                  <option value="sale">Sale</option>
                  <option value="out_of_stock">Out of Stock</option>
                  {/* Add other status options here */}
                </select>
              )}
            />
          </div>
          <div>
            <label
              htmlFor="instagramLink"
              className="block text-sm font-medium text-gray-700"
            >
              Instagram Link
            </label>
            <Controller
              name="instagramLink"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  className="mt-1 py-2 px-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              )}
            />
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <Controller
              name="price"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="number"
                  {...field}
                  className="mt-1 py-2 px-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              )}
            />
          </div>
          <div>
            <label
              htmlFor="facebookLink"
              className="block text-sm font-medium text-gray-700"
            >
              Facebook Link
            </label>
            <Controller
              name="facebookLink"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  className="mt-1 py-2 px-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              )}
            />
          </div>
          <div>
            <label
              htmlFor="twitterLink"
              className="block text-sm font-medium text-gray-700"
            >
              Twitter Link
            </label>
            <Controller
              name="twitterLink"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  className="mt-1 py-2 px-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              )}
            />
          </div>
          <div>
            <label
              htmlFor="tags"
              className="block text-sm font-medium text-gray-700"
            >
              Tags
            </label>
            <Controller
              name="tags"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  className="mt-1 py-2 px-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              )}
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="submit"
              className="py-2 px-4 bg-indigo-600 text-white rounded-lg shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProductForm;
