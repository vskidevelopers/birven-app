/* eslint-disable react/prop-types */

import logo from "../assets/BirvenLogo.svg";
import { Link } from "react-router-dom";
import CheckListItem from "./CheckListItem";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import CopyRightSection from "../sections/CopyRightSection";
import FacebookIcon from "@/assets/icons/Facebook";
import InstagramIcon from "@/assets/icons/Instagram";
import TwitterIcon from "@/assets/icons/Twitter";
import RatingsandReviews from "./RatingsandReviews";

export default function Footer() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "about" },
    { name: "Blogs", href: "blogs" },
    { name: "Shop", href: "shop" },
    { name: "Contact Us", href: "" },
    { name: "Request a quote", href: "" },
  ];

  const services = [
    {
      title: "Personal Training",
      description:
        "Customized training programs tailored to your fitness goals.",
      icon: "🏋️",
    },
    {
      title: "Group Fitness Classes",
      description:
        "Join our dynamic group classes led by experienced instructors.",
      icon: "👯",
    },
    {
      title: "Nutritional Guidance",
      description:
        "Get expert advice on nutrition to complement your workouts.",
      icon: "🍏",
    },
    {
      title: "Equipment Rental",
      description: "Rent high-quality gym equipment for your home workouts.",
      icon: "🏋️‍♂️",
    },
  ];

  return (
    <>
      <footer className="relative bg-gray-900 text-white py-8">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="absolute z-1 flex items-center justify-center h-full w-full">
          <div className="w-32 h-32 bg-cover bg-center shadow-lg">
            <img
              src={logo}
              alt="Brand Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className=" grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Column 1 */}
            <div className="flex flex-col items-center">
              <div className="mt-3 flex flex-col gap-5 ">
                <CheckListItem
                  listItem="birvensupplies@gmail.com"
                  icon={<EnvelopeIcon className="h-4 text-white" />}
                />
                <CheckListItem
                  list={true}
                  listItem={["+254 769 324 258"]}
                  icon={<PhoneIcon className="h-4 text-white" />}
                />
                <CheckListItem
                  hrefLink="#"
                  listItem="birvensupplies"
                  icon={<FacebookIcon fill="#fff" height="24px" />}
                />
                <CheckListItem
                  listItem="@birvensupplies"
                  social={true}
                  icon={<InstagramIcon fill="#fff" height="24px" />}
                />
                <CheckListItem
                  listItem="birvensupplies"
                  social={true}
                  icon={<TwitterIcon fill="#fff" height="24px" />}
                />
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div className="container mx-auto px-4">
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="list-none flex flex-col gap-3 ">
                {links.map((link, i) => (
                  <span key={i}>
                    <Link to={link.href} className="hover:text-[#29bfff] ">
                      {link.name}
                    </Link>
                  </span>
                ))}
              </ul>
            </div>

            {/* Column 3 - Our Services */}
            <div className="container mx-auto px-4 flex flex-col justify-end items-end text-end md:block md:text-start">
              <h4 className="text-xl font-bold mb-4">Our Services</h4>
              <ul className="list-none flex flex-col gap-3">
                {services.map((service, i) => (
                  <span key={i} id={i}>
                    <Link
                      to={`/service-detail/${i}`}
                      className="hover:text-[#22c55e]"
                    >
                      {service?.title}
                    </Link>
                  </span>
                ))}
              </ul>
            </div>

            {/* Column 4 - Contact Us Form */}
            <div>
              <h4 className="text-xl font-bold mb-4">Leave Feedback</h4>
              <RatingsandReviews />
            </div>
          </div>
        </div>
      </footer>
      <CopyRightSection />
    </>
  );
}
