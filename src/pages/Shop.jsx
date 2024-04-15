import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import ShopGrid from "@/components/ShopGrid";
import HeroSection from "@/sections/HeroSection";
import React from "react";

export default function Shop() {
  return (
    <div>
      <HeroSection
        tagline="Equip Your Fitness"
        title="Shop"
        image="https://media.istockphoto.com/id/1391410249/photo/sports-and-gym-activities.jpg?s=612x612&w=0&k=20&c=1S-hAmT-CkRtdYV_hcKi1lZdQkXAN_mCy3ebIXlUEnE="
      />
      <div className="w-full flex px-10">
        <div className="w-1/3">
          <h2 className="font-bold text-3xl">Categories</h2>
          <Categories />
        </div>
        <div className="w-2/3 ml-3">
          <ShopGrid />
        </div>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
