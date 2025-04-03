import React from "react";

const categories = [
  { name: "Restaurants", icon: "🍽️" },
  { name: "Hotels", icon: "🏨" },
  { name: "Beauty Spa", icon: "💆" },
  { name: "Home Decor", icon: "🛋️" },
  { name: "Wedding Planning", icon: "💊" },
  { name: "Education", icon: "🎓" },
  { name: "Rent & Hire", icon: "🔑" },
  { name: "Hospitals", icon: "🏥" },
  { name: "Contractors", icon: "👷" },
  { name: "Pet Shops", icon: "🐾" },
  { name: "PG/Hostels", icon: "🛏️" },
  { name: "Estate Agent", icon: "💼" },
  { name: "Dentists", icon: "🦷" },
  { name: "Gym", icon: "🏋️" },
  { name: "Loans", icon: "💰" },
  { name: "Popular Categories", icon: "🎉" },
  { name: "Driving Schools", icon: "🚗" },
  { name: "Packers & Movers", icon: "🛆" },
  { name: "Courier Service", icon: "🛏" },
  { name: "Popular Categories", icon: "📋" },
];

const CategoryGrid = () => {
  return (
    <div className="w-full font-[Poppins] md:w-4/5 mx-auto p-4 md:p-6">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-2 md:gap-3">
        {categories.slice(0, 8).map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex items-center justify-center p-4 md:p-5 border rounded-xl transition-transform transform hover:scale-105 cursor-pointer border-gray-300 w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24">
              <span className="text-4xl md:text-5xl">{category.icon}</span>
            </div>
            <span className="text-sm sm:text-base font-medium mt-2 text-center">{category.name}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-2 md:gap-3 mt-3 md:mt-5">
        {categories.slice(8, 16).map((category, index) => (
          <div key={index + 8} className="flex flex-col items-center">
            <div className="flex items-center justify-center p-4 md:p-5 border rounded-xl transition-transform transform hover:scale-105 cursor-pointer border-gray-300 w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24">
              <span className="text-4xl md:text-5xl">{category.icon}</span>
            </div>
            <span className="text-sm sm:text-base font-medium mt-2 text-center">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
