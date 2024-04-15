import FacebookIcon from "@/assets/icons/Facebook";
import InstagramIcon from "@/assets/icons/Instagram";
import TwitterIcon from "@/assets/icons/Twitter";
import React from "react";

function Team() {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-5">
          <div className="col-span-2 md:col-span-1 flex flex-col-reverse md:flex-row gap-2 items-center">
            <div className="w-1/2 md:w-auto  flex justify-evenly md:block gap-5">
              <InstagramIcon fill="#000" color="blue" className="h-5" />
              <FacebookIcon fill="#000" color="blue" className="h-5" />
              <TwitterIcon fill="#000" color="blue" className="h-5" />
            </div>

            <div>
              <div className="rounded-full overflow-clip">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCrRCifRP7_nRLJPH0F-hj2nI3i9qUVnkRuHwip5mrOQ&s"
                  className="h-30 md:h-52 xl:h-60 w-auto"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* Right Div */}
          <div className="col-span-2 flex items-center">
            <div>
              <h2 className="font-bold mb-2 text-[#FDB715] ">Jane Doe</h2>
              <h2 className="font-serif  mb-1 font-medium">
                Sales and Marketing
              </h2>
              <h2 className="font-serif  italic mb-1 font-medium underline">
                sales@birvensupplies.co.ke
              </h2>
              <h2>
                Jane Doe is a seasoned sales and marketing professional with a
                strong track record of driving business growth and exceeding
                targets. With several years of experience in the industry, she
                possesses a deep understanding of various sales and marketing
                strategies, customer acquisition, and market analysis. Jane Doe
                is highly skilled in developing and implementing effective sales
                plans, creating innovative marketing campaigns, and building
                strong relationships with clients and stakeholders. Her
                exceptional communication and negotiation abilities, coupled
                with her strategic thinking, make her a valuable asset in our
                sales and marketing team.
              </h2>
            </div>
          </div>

          <div className="mt-5 col-span-3 border border-[#24aae1] border-bottom-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Team;
