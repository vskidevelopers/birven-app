import React from "react";

export default function WhyChooseUs() {
  return (
    <div className="bg-gray-300 py-10">
      <div className="container mx-auto px-32">
        <div className="text-center">
          <h2 className="text-[#24aae1] text-md font-semibold uppercase">
            Why Choose Us
          </h2>
          <h1 className="text-3xl font-bold capitalize mt-2 mb-6">
            Why Choose Birven Supplies?
          </h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Customer Satisfaction
              </h3>
              <p className="text-gray-700">
                We are committed to ensuring our customers' satisfaction by
                providing exceptional service and support.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Equipment Maintenance
              </h3>
              <p className="text-gray-700">
                Our team responds quickly and efficiently to equipment
                maintenance needs, ensuring minimal downtime for your business.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Partnership
              </h3>
              <p className="text-gray-700">
                We believe in building strong partnerships with our clients,
                based on trust, reliability, and mutual respect.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Trust and Reliability
              </h3>
              <p className="text-gray-700">
                At Birven Supplies, you can trust us to deliver quality products
                and services consistently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
