import React from "react";

const getStatusColor = (status) => {
  switch (status) {
    case "fulfilled":
      return "bg-green-500";
    case "declined":
      return "bg-red-500";
    case "pending":
      return "bg-yellow-500";
    case "refunded":
      return "bg-blue-500";
    default:
      return "bg-gray-500";
  }
};

const QuotationStatusBadge = ({ status }) => {
  const colorClass = getStatusColor(status);

  return (
    <span
      className={`text-xs px-2 py-1 rounded-full font-semibold text-white ${colorClass}`}
    >
      {status}
    </span>
  );
};

export default QuotationStatusBadge;
