import FloatingCards from "@/components/FloatingCards";
import React from "react";
import { StarIcon, EyeIcon, LightBulbIcon } from "@heroicons/react/24/outline";
import HeroSection from "@/sections/HeroSection";
import LeaderDivider from "@/components/LeaderDivider";
import Team from "@/components/Team";

export default function About() {
  return (
    <>
      <HeroSection
        tagline="Build On Teamwork"
        title="About us"
        image="https://images.pexels.com/photos/1181415/pexels-photo-1181415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <div className="py-16 relative">
        <div className="container mx-auto px-5 md:px-20">
          <div className="initial md:absolute -top-32 left-10 container">
            <div className=" flex flex-col md:flex-row justify-between gap gap-3">
              <FloatingCards
                basis="basis-1/4"
                title="Our Mission"
                description="At Birven supplies,
                our mission is top notch , we deliver
                highly efficient gymsolutions and machine
                services that inspire value
                and change."
                icon={<StarIcon className="h-8 w-8 text-emerald-500 mr-5" />}
              />
              <FloatingCards
                basis="basis-1/4"
                title="Our Vision"
                description="Our vision is to be the go-to
                brand for gym-solutions that
                inspire everyone to push their
                limits and transform their lives"
                icon={<EyeIcon className="h-8 w-8 text-emerald-500 mr-5" />}
              />
              <FloatingCards
                basis="basis-1/2"
                title="Our Core Values"
                description="Here, we stand on three core valueprinciples: quality, Reliability & Passion.
                We believe in delivering top-notch produsts
                and services that our customers can rely on.
                We do this with grift and commitment."
                icon={
                  <LightBulbIcon className="h-8 w-8 text-emerald-500 mr-5" />
                }
              />
            </div>
          </div>

          <div className="mt-16">
            <LeaderDivider />
            <Team />
          </div>
        </div>
      </div>
    </>
  );
}
