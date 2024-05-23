import { useTeamFunctions } from "@/firebase/firbase";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddTeamMemberForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [imageUploaded, setImageUploaded] = useState(false);
  const { teamMemberImageURL, uploadTeamMemberImage, addTeamMember } =
    useTeamFunctions();
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

    try {
      if (teamMemberImageURL != null) {
        const teamMemberData = {
          ...data,
          profilePicture: teamMemberImageURL,
          createdAt: formattedDate,
        };
        // Proceed with form submission
        const addTeamMemberResponse = await addTeamMember(teamMemberData);
        console.log("add_team_member()_response >> ", addTeamMemberResponse);
        reset(); // Assuming reset() resets the form
        setLoading(false);
      } else {
        console.log("Images are not uploaded yet.");
        console.log("profile_image_url >> ", teamMemberImageURL);
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
        const uploadResult = await uploadTeamMemberImage(file);
        if (uploadResult?.status === "success") {
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
          <label className="block mb-2">Profile Picture:</label>
          <input
            type="file"
            onChange={handleImageUpload}
            className="block w-full border-sky-400 p-2 rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
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
          <label className="block mb-2">Designation:</label>
          <input
            type="text"
            {...register("designation", { required: true })}
            className="block w-full border-b border-sky-400 rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50 p-2"
          />
          {errors.designation && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2">Bio:</label>
          <textarea
            {...register("bio", { required: true })}
            className="block w-full border-b border-sky-400 rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50 p-2"
            rows="4"
            placeholder="Enter bio..."
          ></textarea>
          {errors.bio && <span className="text-red-500">Bio is required</span>}
        </div>
        <div className="mb-4">
          <label className="block mb-2">LinkedIn:</label>
          <input
            type="text"
            {...register("linkedin")}
            className="block w-full border-b border-sky-400 p-2 rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Twitter:</label>
          <input
            type="text"
            {...register("twitter")}
            className="block w-full border-b border-sky-400 p-2 rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Facebook:</label>
          <input
            type="text"
            {...register("facebook")}
            className="block w-full border-b border-sky-400 p-2 rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Instagram:</label>
          <input
            type="text"
            {...register("instagram")}
            className="block w-full border-b border-sky-400 p-2 rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
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

export default AddTeamMemberForm;
