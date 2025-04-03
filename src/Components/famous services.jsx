import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  { 
    name: "Restaurants", 
    image: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png", 
    path: "/restaurants" 
  },
  { 
    name: "Hotels", 
    image: "https://cdn-icons-png.flaticon.com/512/2583/2583344.png", 
    path: "/hotels" 
  },
  { 
    name: "Beauty Spa", 
    image: "https://cdn-icons-png.flaticon.com/512/2964/2964344.png", 
    path: "/beauty-spa" 
  },
  { 
    name: "Home Decor", 
    image: "https://cdn-icons-png.flaticon.com/512/2553/2553628.png", 
    path: "/home-decor" 
  },
  { 
    name: "Wedding Planning", 
    image: "https://cdn-icons-png.flaticon.com/512/2936/2936886.png", 
    path: "/wedding-planning" 
  },
  { 
    name: "Education", 
    image: "data:image/png;base64,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", 
    path: "/education" 
  },
  { 
    name: "Rent & Hire", 
    image: "https://cdn-icons-png.flaticon.com/512/1570/1570887.png", 
    path: "/rent-hire" 
  },
  { 
    name: "Hospitals", 
    image: "https://cdn-icons-png.flaticon.com/256/13297/13297903.png", 
    path: "/hospitals" 
  },
  { 
    name: "Contractors", 
    image: "https://cdn-icons-png.flaticon.com/512/2933/2933245.png", 
    path: "/contractors" 
  },
  { 
    name: "Pet Shops", 
    image: "https://cdn-icons-png.flaticon.com/512/616/616408.png", 
    path: "/pet-shops" 
  },
  { 
    name: "PG/Hostels", 
    image: "https://cdn-icons-png.flaticon.com/512/2548/2548580.png", 
    path: "/pg-hostels" 
  },
  { 
    name: "Estate Agent", 
    image: "https://cdn-icons-png.flaticon.com/512/1570/1570931.png", 
    path: "/estate-agent" 
  },
  { 
    name: "Dentists", 
    image: "https://cdn-icons-png.flaticon.com/512/2964/2964338.png", 
    path: "/dentists" 
  },
  { 
    name: "Gym", 
    image: "https://cdn-icons-png.flaticon.com/512/2936/2936886.png", 
    path: "/gym" 
  },
  { 
    name: "Loans", 
    image: "https://cdn-icons-png.flaticon.com/512/3132/3132693.png", 
    path: "/loans" 
  },
  { 
    name: "Popular Categories", 
    image: "https://2obc5tpwxq.ufs.sh/f/hJxaQGFB6AzQZulZwnh8XDqemLFNJhv4cSQ3iVT7kfb5C0rB", 
    path: "/popular-categories" 
  },
  { 
    name: "Driving Schools", 
    image: "https://cdn-icons-png.flaticon.com/512/2948/2948770.png", 
    path: "/driving-schools" 
  },
  { 
    name: "Packers & Movers", 
    image: "https://cdn-icons-png.flaticon.com/512/1037/1037761.png", 
    path: "/packers-movers" 
  },
  { 
    name: "Courier Service", 
    image: "https://cdn-icons-png.flaticon.com/512/2933/2933245.png", 
    path: "/courier-service" 
  },
  { 
    name: "Popular Categories", 
    image: "https://cdn-icons-png.flaticon.com/512/1570/1570946.png", 
    path: "/popular-categories-2" 
  },
];

const CategoryGrid = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (path) => {
    navigate(path);
  };

  return (
    <div className="w-full font-[Poppins] md:w-4/5 mx-auto p-4 md:p-6">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-2 md:gap-3">
        {categories.slice(0, 8).map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              onClick={() => handleCategoryClick(category.path)}
              className="flex items-center justify-center p-4 md:p-5 border rounded-xl transition-transform transform hover:scale-105 cursor-pointer border-gray-300 w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24"
            >
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-12 h-12 object-contain"
              />
            </div>
            <span className="text-sm sm:text-base font-medium mt-2 text-center">{category.name}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-2 md:gap-3 mt-3 md:mt-5">
        {categories.slice(8, 16).map((category, index) => (
          <div key={index + 8} className="flex flex-col items-center">
            <div
              onClick={() => handleCategoryClick(category.path)}
              className="flex items-center justify-center p-4 md:p-5 border rounded-xl transition-transform transform hover:scale-105 cursor-pointer border-gray-300 w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24"
            >
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-12 h-12 object-contain"
              />
            </div>
            <span className="text-sm sm:text-base font-medium mt-2 text-center">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;