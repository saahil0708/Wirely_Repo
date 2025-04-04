import React from 'react';
import { Star } from 'lucide-react';

const TestimonialGrid = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO, Company Inc.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      review: 'This product completely transformed our workflow. The team is more productive and collaboration has never been easier.This product completely transformed our workflow. The team is more productive and collaboration has never been easier.This product completely transformed our workflow. The team is more productive and collaboration has never been easier.This product completely transformed our workflow. The team is more productive and collaboration has never been easier.',
      rating: 5
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Marketing Director',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      review: 'Incredible service! The support team was responsive and helped us implement the solution quickly.',
      rating: 4
    },
    {
      id: 7,
      name: 'Alex Turner',
      role: 'Operations Manager',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
      review: 'Streamlined our processes and reduced operational costs by 30%. Highly recommended for any growing business.Streamlined our processes and reduced operational costs by 30%. Highly recommended for any growing business Streamlined our processes and reduced operational costs by 30%. Highly recommended for any growing business.Streamlined our processes and reduced operational costs by 30%. Highly recommended for any growing business.',
      rating: 5
    },
    {
      id: 'featured',
      name: 'Robert Johnson',
      role: 'Product Manager',
      image: 'https://randomuser.me/api/portraits/men/67.jpg',
      review: 'We saw immediate results after implementation. The analytics dashboard provides valuable insights that help us make data-driven decisions on a daily basis. The level of detail and customization options exceeded our expectations.',
      rating: 4.5
    },
    {
      id: 4,
      name: 'Emily Davis',
      role: 'UX Designer',
      image: 'https://randomuser.me/api/portraits/women/28.jpg',
      review: 'The user experience is seamless and intuitive.',
      rating: 4
    },
    {
      id: 5,
      name: 'Michael Wilson',
      role: 'CTO',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      review: 'Excellent documentation.',
      rating: 3
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }
    
    return stars;
  };

  return (
    <div className="bg-gray-50 font-[Poppins] py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-yellow-500 text-center mb-6 sm:text-3xl sm:mb-8 md:text-4xl md:mb-12">
          What Our Users Love
        </h2>
        
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3 md:gap-6 md:auto-rows-fr">
          {testimonials.map((testimonial) => {
            const isFeaturedCard = testimonial.id === 'featured';
            const reviewLength = testimonial.review.length;
            
            const cardSizeClass = reviewLength > 100 ? 'md:row-span-2' : 'md:row-span-1';
            
            return (
              <div 
                key={testimonial.id}
                className={`
                  bg-white rounded-lg shadow-sm p-4 
                  hover:shadow-md transition-shadow duration-200
                  ${isFeaturedCard ? 'md:col-start-2' : ''}
                  ${cardSizeClass}
                  flex flex-col
                `}
              >
                <div className={`flex flex-col h-full ${isFeaturedCard ? 'md:p-2' : ''}`}>
                  <div className="flex items-center mb-3">
                    <img 
                      className={`rounded-full object-cover mr-3 h-10 w-10 sm:h-12 sm:w-12 ${isFeaturedCard ? 'md:h-14 md:w-14' : 'md:h-12 md:w-12'}`}
                      src={testimonial.image} 
                      alt={testimonial.name}
                    />
                    <div>
                      <h3 className={`text-sm font-medium text-gray-900 sm:text-base ${isFeaturedCard ? 'md:text-lg' : 'md:text-base'}`}>
                        {testimonial.name}
                      </h3>
                      <p className={`text-xs text-gray-500 sm:text-sm ${isFeaturedCard ? 'md:text-base' : 'md:text-sm'}`}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {renderStars(testimonial.rating)}
                    </div>
                    <span className="ml-2 text-xs text-gray-500 sm:text-sm">
                      {testimonial.rating % 1 === 0 ? `${testimonial.rating}.0` : testimonial.rating}
                    </span>
                  </div>
                  <p className={`text-xs text-gray-600 mt-1 sm:text-sm ${isFeaturedCard ? 'md:text-base' : 'md:text-sm'} ${reviewLength > 200 ? 'line-clamp-4 md:line-clamp-none' : ''}`}>
                    "{testimonial.review}"
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TestimonialGrid;