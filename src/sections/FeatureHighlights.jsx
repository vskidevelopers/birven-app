import {
  TruckIcon,
  ClockIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

export default function FeatureHighlights() {
  return (
    <div className="bg-emerald-100/75 py-12">
      <div className="container mx-auto px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8  py-4">
          <div className="flex flex-col items-center">
            <TruckIcon className="h-12 w-12 text-gray-800" />
            <h3 className="text-xl font-semibold mt-4">Secure Delivery</h3>
            <p className="text-gray-600 text-center mt-2">
              Fast and secure delivery options to ensure your products reach you
              safely and on time.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <ClockIcon className="h-12 w-12 text-gray-700" />
            <h3 className="text-xl font-semibold mt-4">24/7 Service</h3>
            <p className="text-gray-700 text-center mt-2">
              Round-the-clock customer service to assist you with any queries or
              concerns.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <ShoppingBagIcon className="h-12 w-12 text-gray-600" />
            <h3 className="text-xl font-semibold mt-4">Free Coupon Codes</h3>
            <p className="text-gray-700 text-center mt-2">
              Exclusive coupon codes for discounts on your favorite gym
              equipment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
