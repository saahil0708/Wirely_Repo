import React from 'react';

const TestimonialGrid = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO, Company Inc.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      review: 'This product completely transformed our workflow. The team is more productive and collaboration has never been easier.'
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Marketing Director',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      review: 'Incredible service! The support team was responsive and helped us implement the solution quickly.',
      rating: 4,
      
    },
    {
      id: 3,
      name: 'Robert Johnson',
      role: 'Product Manager',
      image: 'https://randomuser.me/api/portraits/men/67.jpg',
      review: 'We saw immediate results after implementation. The analytics dashboard provides valuable insights that help us make data-driven decisions on a daily basis. We saw immediate results after implementation. The analytics dashboard provides valuable insights that help us make data-driven decisions on a daily basis. We saw immediate results after implementation. The analytics dashboard provides valuable insights that help us make data-driven decisions on a daily basis. '
    },
    {
      id: 4,
      name: 'Emily Davis',
      role: 'UX Designer',
      image: 'https://randomuser.me/api/portraits/women/28.jpg',
      review: 'The user experience is seamless and intuitive. Our customers love the new interface. The user experience is seamless and intuitive. Our customers love the new interface. The user experience is seamless and intuitive. Our customers love the new interface.'
    },
    {
      id: 3,
      name: 'Robert Johnson',
      role: 'Product Manager',
      image: 'https://randomuser.me/api/portraits/men/67.jpg',
      review: 'We saw immediate results after implementation. The analytics dashboard provides valuable insights that help us make data-driven decisions on a daily basis. '
    },
    {
      id: 5,
      name: 'Michael Wilson',
      role: 'CTO',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      review: 'The technical implementation was straightforward and the documentation was excellent.'
    },
    {
      id: 6,
      name: 'Sarah Brown',
      role: 'Customer Support Lead',
      image: 'https://randomuser.me/api/portraits/women/63.jpg',
      review: 'Our support tickets have decreased significantly since using this solution. Highly recommend! The automated features save us hours each week.'
    },
    {
      id: 6,
      name: 'Sarah Brown',
      role: 'Customer Support Lead',
      image: 'https://randomuser.me/api/portraits/women/63.jpg',
      review: 'Our support tickets have decreased significantly since using this solution. Highly recommend! The automated features save us hours each week.'
    }
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-extrabold text-yellow-500 text-center mb-20">What Our Users Love</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`
                flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300
                ${index === 2 ? 'md:row-span-2' : ''}
                h-full
              `}
            >
              <div className={`p-6 flex flex-col h-full ${index === 2 ? 'md:p-8' : ''}`}>
                <div className={`flex items-center mb-4 ${index === 2 ? 'md:mb-6' : ''}`}>
                  <img 
                    className={`rounded-full object-cover mr-4 ${index === 2 ? 'h-16 w-16 md:h-20 md:w-20' : 'h-12 w-12'}`}
                    src={testimonial.image} 
                    alt={testimonial.name}
                  />
                  <div>
                    <h3 className={`${index === 2 ? 'text-xl md:text-2xl' : 'text-lg'} font-medium text-gray-900`}>
                      {testimonial.name}
                    </h3>
                    <p className={`text-gray-500 ${index === 2 ? 'md:text-lg' : ''}`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className={`text-gray-600 mt-4 ${index === 2 ? 'text-lg md:text-xl' : ''}`}>
                  "{testimonial.review}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialGrid;