import React from "react";
import IntroBanner from "../sections/IntroBanner";
import IntroDivider from "../sections/IntroDivider";
import GenderDeciderDiv from "../sections/GenderDeciderDiv";
import WhyChooseUs from "../sections/WhyChooseUs";
import NewArrivals from "../sections/NewArrivals";
import QuotationDivider from "@/sections/QuotationDivider";
import InfoBannerDivider from "@/sections/InfoBannerDivider";
import Reviews from "@/sections/Reviews";
import Newsletter from "@/sections/Newsletter";
import FeatureHighlights from "@/sections/FeatureHighlights";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      {/* Intro banner */}
      <IntroBanner />

      {/* GenderDeciderDiv */}
      <GenderDeciderDiv />
      <FeatureHighlights />

      {/* New Arrivals */}
      <NewArrivals />
      {/* why choose us */}
      <WhyChooseUs />
      <QuotationDivider />

      {/*Info banner */}
      <InfoBannerDivider />
      <Reviews />
      <Newsletter />

      {/* Footer */}
      <Footer />
    </div>
  );
}
