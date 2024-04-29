import React from "react";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Equipment",
      subcategories: ["Cardio", "Strength Training", "Accessories"],
    },
    {
      id: 2,
      name: "Supplements",
      subcategories: ["Protein", "Vitamins", "Pre-workout"],
    },
    {
      id: 3,
      name: "Clothing",
      subcategories: ["Shirts", "Pants", "Shoes"],
    },
  ];

  return (
    <div className="flex flex-col w-full justify-center">
      {categories.map((category) => (
        <div
          className="m-4 p-4 bg-gray-200 rounded-lg shadow-lg w-full"
          key={category.id}
        >
          <h2 className="text-lg font-bold mb-2">{category.name}</h2>
          <ul className="list-disc ml-4">
            {category.subcategories.map((subcategory) => (
              <li
                key={subcategory}
                className="hover:text-blue-500 cursor-pointer"
              >
                {subcategory}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Categories;
