import { useTeamFunctions } from "@/firebase/firbase";
import React, { useEffect, useState } from "react";

export default function LeaderDivider() {
  const [leaderDetails, setLeaderDetails] = useState({});
  const { fetchTeamLeaderDetail } = useTeamFunctions();

  const fetchLeaderDetails = async () => {
    const leaderResponse = await fetchTeamLeaderDetail();
    console.log("leader_respose >> ", leaderResponse);
    const leaderData = leaderResponse?.data[0];
    setLeaderDetails(leaderData);
  };

  useEffect(() => {
    fetchLeaderDetails();
  }, []);

  return (
    <div className="py-20 w-full bg-slate 900">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {!leaderDetails ? (
          <div className="text-center my-10">
            <h2 className="text-xl font-bold">
              No team members available at the moment.
            </h2>
            <p>Please check back later for updates.</p>
          </div>
        ) : (
          <>
            <div>
              {leaderDetails?.profilePicture ? (
                <img src={leaderDetails?.profilePicture} alt="..." />
              ) : (
                <img
                  src="https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg"
                  alt="..."
                />
              )}
            </div>
            <div className="col-span-2">
              <div className="relative flex flex-col justify-center items-center py-10">
                <div className="w-full text-start">
                  <h2 className="text-[#FDB715] text-md font-semibold uppercase ">
                    Meet the Team Leader
                  </h2>
                  <div className="w-full md:w-3/4">
                    <h1 className="text-3xl font-bold capitalize">
                      Empowering Organizations through Result-Driven Solutions
                    </h1>
                  </div>
                </div>

                <div className="absolute top-0 left-0 h-full w-full flex justify-end items-baseline opacity-10">
                  <h1 className="text-7xl md:text-9xl font-bold"> Leader</h1>
                </div>
                <div className="my-5">
                  <h2 className="font-bold mb-2 text-[#FDB715] ">
                    {leaderDetails?.name}
                  </h2>

                  <p>{leaderDetails?.bio}</p>
                </div>
              </div>
            </div>{" "}
          </>
        )}
      </div>
    </div>
  );
}
