import React from "react";
import GenderDividerCard from "@/components/GenderDividerCard";

export default function GenderDeciderDiv() {
  return (
    <div className="bg-gray-100 py-12 px-10 w-full">
      <div className="flex flex-col md:flex-row  md:justify-around ">
        <GenderDividerCard
          backgroundImage="url(https://www.mensjournal.com/.image/t_share/MTk2MTM3MzcxNDQyOTQ3MjE3/6-rowing-machine.jpg)"
          gender="Men"
        />
        <GenderDividerCard
          backgroundImage="url(https://media.istockphoto.com/id/1434733373/photo/strong-woman-doing-fitness-training-for-exercise-at-gym-weights-for-cardio-workout-and.jpg?s=612x612&w=0&k=20&c=ScC5qJ-ZrXRWu-s3_IkUql6-Xrs7T5AFAHmcOJc7gIY=)"
          gender="Ladies"
        />
      </div>
    </div>
  );
}
