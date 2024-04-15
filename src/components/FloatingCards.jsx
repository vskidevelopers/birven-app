import React from "react";
import ChecklistItem from "./CheckListItem";

function FloatingCards({ list, icon, description, title, basis }) {
  return (
    <div className={`${basis} `}>
      <div className="h-full border border-[#24aae1] bg-white p-4 shadow-xl sm:p-6 lg:p-8">
        <div className="flex items-end justify-center md:justify-start">
          {icon}

          <h3 className="mt-3 text-lg font-bold  sm:text-xl">{title}</h3>
        </div>

        {list ? (
          <span className="grid grid-cols-3 gap gap-2">
            {description.map((item, i) => (
              <ChecklistItem
                key={i}
                py="py-1"
                listItem={item}
                icon={<CheckCircleIcon className="h-4 w-4 text-[#24aae1]" />}
              />
            ))}
          </span>
        ) : (
          <p className="mt-4 text-sm  text-gray-900">{description}</p>
        )}
      </div>
    </div>
  );
}

export default FloatingCards;
