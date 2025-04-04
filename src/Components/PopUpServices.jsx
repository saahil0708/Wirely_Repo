import React from 'react';

const PopularCategories = () => {
  const categories = [
    {
      title: 'AC Service',
      items: [
        'Car Hire',
        'Courier Services',
        'Dentists',
        'Fabricators',
        'Hobbies',
        'Lawyers',
        'Printing & Publishing Services',
        'Pockets & Movers',
        'Security System'
      ]
    },
    {
      title: 'Astrologers',
      items: [
        'Caterers',
        'Computer & Laptop Repair & Services',
        'Electricians',
        'Furniture Repair Services',
        'Interior Designers',
        'Transporters',
        'Placement Services',
        'Scrap Dealers',
        'Coaching'
      ]
    },
    {
      title: 'Body Massage Centers',
      items: [
        'Chartered Accountant',
        'Car Repair & Services',
        'Event Organizer',
        'Hospitals',
        'Internet Website Designers',
        'Photographers',
        'Pest Control Services',
        'Scrap Buyers',
        'Vocational training'
      ]
    },
    {
      title: 'Beauty Spa',
      items: [
        'Computer Training Institutes',
        'Dermatologists',
        'Red Estate',
        'House keeping Services',
        'Jewellery Showrooms',
        'Nursing Services',
        'Painting Contractors',
        'Registration Consultants'
      ]
    }
  ];

  return (
    <div className="bg-white mt-28 font-[Poppins] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Popular Categories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-600 hover:text-yellow-500 transition-colors">
                    <a href="#" className="block py-1">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;