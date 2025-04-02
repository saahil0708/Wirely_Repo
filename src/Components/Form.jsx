import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Form validation schema
const schema = yup.object().shape({
  name: yup.string().required('Full name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string()
    .required('Phone number is required')
    .matches(/^[0-9]{10,15}$/, 'Phone number must be between 10-15 digits'),
  service: yup.string().required('Please select a service'),
  deviceModel: yup.string().required('Device model is required'),
  date: yup.date()
    .required('Date is required')
    .min(new Date(new Date().setDate(new Date().getDate() - 1)), 'Date cannot be in the past'),
  time: yup.string().required('Time is required'),
  issueDescription: yup.string()
    .required('Issue description is required')
    .min(20, 'Description should be at least 20 characters'),
});

const ServiceBookingForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const repairServices = [
    'Air Conditioner',
    'Television',
    'Refrigerator',
    'Washing Machine',
    'Microwave',
    'Laptop',
    'Smartphone',
    'Computer',
    'Audio System',
    'Camera'
  ];

  const timeSlots = [
    '09:00 AM - 11:00 AM',
    '11:00 AM - 01:00 PM',
    '01:00 PM - 03:00 PM',
    '03:00 PM - 05:00 PM',
    '05:00 PM - 07:00 PM'
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Repair booking submitted:', data);
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Book Repair Service
          </h1>
          <p className="mt-3 text-xl text-gray-600">
            Schedule an appointment with our certified technician
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            {submitSuccess ? (
              <div className="text-center py-8">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="mt-3 text-lg font-medium text-gray-900">
                  Booking Successful!
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Our technician will contact you shortly to confirm your appointment.
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#fbc800] hover:bg-[#e6b400] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fbc800]"
                  >
                    Book Another Service
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    {...register('name')}
                    className={`mt-1 block w-full px-3 py-2 border ${errors.name ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-[#fbc800] focus:border-[#fbc800]`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    {...register('email')}
                    className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-[#fbc800] focus:border-[#fbc800]`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    {...register('phone')}
                    className={`mt-1 block w-full px-3 py-2 border ${errors.phone ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-[#fbc800] focus:border-[#fbc800]`}
                    placeholder="e.g., 1234567890"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                    Repair Service Needed <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    {...register('service')}
                    className={`mt-1 block w-full pl-3 pr-10 py-2 text-base border ${errors.service ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-[#fbc800] focus:border-[#fbc800] rounded-md`}
                  >
                    <option value="">Select repair service</option>
                    {repairServices.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="deviceModel" className="block text-sm font-medium text-gray-700">
                    Device Model/Brand <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="deviceModel"
                    name="deviceModel"
                    type="text"
                    {...register('deviceModel')}
                    className={`mt-1 block w-full px-3 py-2 border ${errors.deviceModel ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-[#fbc800] focus:border-[#fbc800]`}
                    placeholder="e.g., Samsung QLED Q60A 55-inch"
                  />
                  {errors.deviceModel && (
                    <p className="mt-1 text-sm text-red-600">{errors.deviceModel.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      {...register('date')}
                      min={new Date().toISOString().split('T')[0]}
                      className={`mt-1 block w-full px-3 py-2 border ${errors.date ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-[#fbc800] focus:border-[#fbc800]`}
                    />
                    {errors.date && (
                      <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                      Preferred Time Slot <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="time"
                      name="time"
                      {...register('time')}
                      className={`mt-1 block w-full pl-3 pr-10 py-2 text-base border ${errors.time ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-[#fbc800] focus:border-[#fbc800] rounded-md`}
                    >
                      <option value="">Select time slot</option>
                      {timeSlots.map((slot, index) => (
                        <option key={index} value={slot}>{slot}</option>
                      ))}
                    </select>
                    {errors.time && (
                      <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="issueDescription" className="block text-sm font-medium text-gray-700">
                    Issue Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="issueDescription"
                    name="issueDescription"
                    rows={4}
                    {...register('issueDescription')}
                    className={`mt-1 block w-full px-3 py-2 border ${errors.issueDescription ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-[#fbc800] focus:border-[#fbc800]`}
                    placeholder="Describe the problem you're experiencing in detail..."
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Please provide as much detail as possible about the issue.
                  </p>
                  {errors.issueDescription && (
                    <p className="mt-1 text-sm text-red-600">{errors.issueDescription.message}</p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${isSubmitting ? 'bg-[#fbc800]/80' : 'bg-[#fbc800] hover:bg-[#e6b400]'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fbc800]`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : 'Book Repair Service'}
                  </button>
                </div>

                <div className="text-center text-sm text-gray-500">
                  <p>We'll contact you within 24 hours to confirm your appointment.</p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBookingForm;