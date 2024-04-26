import { useQuotationFunctions } from "@/firebase/firbase";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

export default function QuotationForm() {
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const { addQuotation } = useQuotationFunctions();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
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

  const onSubmit = async (data) => {
    setLoading(true);
    const generalQuotationData = {
      ...data,
      type: "general",
      createdAt: formattedDate,
      status: "pending",
    };
    // Handle form submission and quote request here
    console.log("data from form >> ", generalQuotationData);
    try {
      const addGeneralQuotationResponse = await addQuotation(
        generalQuotationData
      );
      console.log(
        "add_General_quotation_response >> ",
        addGeneralQuotationResponse
      );
      reset();
      setLoading(false);
    } catch (error) {
      console.error("An error occurred: ", error);
      setLoading(false);
    }
  };
  return (
    <div>
      {" "}
      <form
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            name="full_name"
            {...register("full_name", { required: true })}
            className="w-full border border-sky-400 rounded py-2 px-3"
          />
          {errors.name && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            name="email"
            {...register("email", { required: true })}
            className="w-full border border-sky-400 rounded py-2 px-3"
          />
          {errors.email && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-bold mb-2">
            Phone Number:
          </label>
          <input
            type="tel"
            name="phone_number"
            {...register("phone_number", { required: true })}
            className="w-full border border-sky-400 rounded py-2 px-3"
          />
          {errors.phone && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-bold mb-2">
            Message:
          </label>
          <textarea
            name="message"
            {...register("message", { required: true })}
            className="w-full border border-sky-400 rounded py-2 px-3"
          ></textarea>
          {errors.message && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="text-right">
          <button
            disabled={loading}
            type="submit"
            className="bg-sky-400 text-white py-2 px-4 rounded"
          >
            {loading ? "Please Wait..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
