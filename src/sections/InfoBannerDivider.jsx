import InfoCard from "@/components/InfoCard";
import React from "react";

export default function InfoBannerDivider() {
  const infoData = [
    {
      title: "About Us",
      description:
        "Welcome to Birven supplies. We fully deliver on Gym equipments, machine maintenance and machine service.",
      buttonText: "Read More",
      buttonLink: "/about",
    },
    {
      title: "Products & Services",
      description:
        "Explore our range of gym equipments, maintenance services, and more.",
      buttonText: "Shop Now",
      buttonLink: "/shop",
    },
    {
      title: "Contact Us",
      description: "Get in touch with us for any inquiries or assistance.",
      buttonText: "Contact Us",
      buttonLink: "#",
    },
  ];
  return (
    <div className="overflow-auto scroll-snap-type-y">
      <div
        className="bg-cover bg-center h-96 flex items-center flex-nowrap"
        style={{
          backgroundImage: `url('https://c4.wallpaperflare.com/wallpaper/986/551/672/ass-pose-model-girl-figure-hd-wallpaper-preview.jpg')`,
        }}
      >
        <div className="container absolute h-80 overflow-y-auto flex-col md:flex-row mx-auto px-4 flex flex-nowrap justify-center items-center">
          {infoData.map((info, index) => (
            <InfoCard
              key={index}
              title={info.title}
              description={info.description}
              buttonText={info.buttonText}
              buttonLink={info.buttonLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
