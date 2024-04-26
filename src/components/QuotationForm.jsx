import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

export default function QuotationForm() {
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    // Handle form submission and quote request here
    console.log("data from form >> ", data);
    reset();
    setLoading(false);
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
