import FacebookIcon from "@/assets/icons/Facebook";
import InstagramIcon from "@/assets/icons/Instagram";
import TwitterIcon from "@/assets/icons/Twitter";
import { Linkedin } from "lucide-react";
import { useTeamFunctions } from "@/firebase/firbase";
import React, { useEffect, useState } from "react";

function Team() {
  const [membersDetails, setMembersDetails] = useState([]);
  const { fetchTeamMembersDetail } = useTeamFunctions();

  const fetchMembersDetails = async () => {
    const membersResponse = await fetchTeamMembersDetail();
    console.log("members_response >> ", membersResponse);
    const membersData = membersResponse?.data;
    setMembersDetails(membersData);
  };

  useEffect(() => {
    fetchMembersDetails();
  }, []);
  return (
    <div>
      <div className="container mx-auto px-5 md:px-20">
        <div className="relative flex flex-col justify-center items-center py-10">
          <div className="w-full md:w-1/2 text-start md:text-center">
            <h2 className="text-[#FDB715] text-md font-semibold uppercase ">
              Meet the Team
            </h2>
            <h1 className="text-3xl font-bold capitalize">
              Empowering Organizations through Result-Driven Solutions
            </h1>
          </div>
          <div className="absolute top-0 left-0 h-full w-full flex justify-end md:justify-start items-center opacity-10">
            <h1 className="text-7xl md:text-9xl font-bold">Team</h1>
          </div>
        </div>

        {membersDetails.length === 0 ? (
          <div className="text-center my-10">
            <h2 className="text-xl font-bold">
              No team members available at the moment.
            </h2>
            <p>Please check back later for updates.</p>
          </div>
        ) : (
          membersDetails.map((member, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-3 gap-2 my-5"
            >
              <div className="col-span-2 md:col-span-1 flex flex-col-reverse md:flex-row gap-2 items-center">
                <div className="w-1/2 md:w-auto flex justify-evenly md:block gap-5">
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon fill="#000" color="blue" className="h-5" />
                    </a>
                  )}
                  {member.facebook && (
                    <a
                      href={member.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FacebookIcon fill="#000" color="blue" className="h-5" />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TwitterIcon fill="#000" color="blue" className="h-5" />
                    </a>
                  )}

                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin />
                    </a>
                  )}
                </div>
                <div>
                  <div className="rounded-full overflow-clip">
                    <img
                      src={
                        member.profilePicture ||
                        "https://via.placeholder.com/150"
                      }
                      className="h-30 md:h-52 xl:h-60 w-auto"
                      alt={member.name}
                    />
                  </div>
                </div>
              </div>

              {/* Right Div */}
              <div className="col-span-2 flex items-center">
                <div>
                  <h2 className="font-bold mb-2 text-[#FDB715] ">
                    {member.name}
                  </h2>
                  <h2 className="font-serif  mb-1 font-medium">
                    {member.designation}
                  </h2>
                  <h2 className="font-serif  italic mb-1 font-medium underline">
                    {member.email}
                  </h2>
                  <h2>{member.bio}</h2>
                </div>
              </div>

              <div className="mt-5 col-span-3 border border-[#24aae1] border-bottom-2"></div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Team;
