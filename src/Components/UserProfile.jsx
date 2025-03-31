import { useState } from 'react';
import { FiUser, FiMail, FiPhone, FiMapPin, FiCalendar, FiClock, FiDollarSign, FiStar, FiFilter, FiSearch, FiTool } from 'react-icons/fi';

const CustomerProfile = () => {
  const [activeTab, setActiveTab] = useState('bookings');
  const [expandedBooking, setExpandedBooking] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Sample customer data
  const customer = {
    name: 'Sarah Miller',
    email: 'sarah.miller@example.com',
    phone: '(555) 987-6543',
    address: '456 Oak Avenue, Apt 12, Boston, MA 02115',
    profileImage: 'https://randomuser.me/api/portraits/women/44.jpg',
    memberSince: 'January 2022',
    totalBookings: 17,
    completedBookings: 14,
    upcomingBookings: 2,
    cancelledBookings: 1,
    favoriteTechnicians: ['Michael Brown', 'David Lee'],
    favoriteCategories: ['Plumbing', 'Electrical'],
    totalSpent: 2150,
  };

  // Sample bookings data from customer perspective
  const bookings = [
    {
      id: 'BK001',
      technician: {
        name: 'Michael Brown',
        specialty: 'Plumbing',
        rating: 4.8,
        experience: '8 years',
        image: 'https://randomuser.me/api/portraits/men/45.jpg',
        company: 'QuickFix Plumbing',
        contact: '(555) 234-5678',
      },
      service: 'Kitchen Sink Repair',
      date: '2023-06-15',
      time: '10:00 AM',
      duration: '2 hours',
      location: customer.address,
      amount: 175,
      status: 'completed',
      problem: 'Kitchen sink was leaking under the cabinet',
      workPerformed: 'Replaced damaged pipe and tightened connections',
      warranty: '90 days on parts and labor',
      rating: 5,
      review: 'Michael arrived right on time and fixed the leak quickly. Very professional and cleaned up after the job.'
    },
    {
      id: 'BK002',
      technician: {
        name: 'David Lee',
        specialty: 'Electrical',
        rating: 4.9,
        experience: '10 years',
        image: 'https://randomuser.me/api/portraits/men/22.jpg',
        company: 'SafeWire Electric',
        contact: '(555) 345-6789',
      },
      service: 'Outlet Installation',
      date: '2023-07-02',
      time: '2:30 PM',
      duration: '1 hour',
      location: customer.address,
      amount: 120,
      status: 'completed',
      problem: 'Needed additional outlets in home office',
      workPerformed: 'Installed two new grounded outlets',
      warranty: '1 year on labor',
      rating: 4,
      review: 'David did a great job with the installation. The outlets work perfectly and he explained everything clearly.'
    },
    {
      id: 'BK003',
      technician: {
        name: 'James Smith',
        specialty: 'HVAC',
        rating: 4.7,
        experience: '6 years',
        image: 'https://randomuser.me/api/portraits/men/51.jpg',
        company: 'CoolBreeze HVAC',
        contact: '(555) 456-7890',
      },
      service: 'AC Maintenance',
      date: '2023-07-20',
      time: '9:00 AM',
      duration: '3 hours',
      location: customer.address,
      amount: 225,
      status: 'upcoming',
      serviceDetails: 'Annual AC system checkup including refrigerant level check, filter replacement, and component inspection'
    },
    {
      id: 'BK004',
      technician: {
        name: 'Emma Wilson',
        specialty: 'Appliance Repair',
        rating: 4.6,
        experience: '5 years',
        image: 'https://randomuser.me/api/portraits/women/33.jpg',
        company: 'FixIt Appliances',
        contact: '(555) 567-8901',
      },
      service: 'Refrigerator Repair',
      date: '2023-05-10',
      time: '11:00 AM',
      duration: '2.5 hours',
      location: customer.address,
      amount: 195,
      status: 'cancelled',
      cancellationReason: 'Technician had an emergency and needed to reschedule'
    }
  ];

  // Filter bookings based on search and status
  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = 
      booking.technician.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || booking.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Booking statistics by month
  const monthlyStats = [
    { month: 'Jan', bookings: 1 },
    { month: 'Feb', bookings: 2 },
    { month: 'Mar', bookings: 1 },
    { month: 'Apr', bookings: 1 },
    { month: 'May', bookings: 2 },
    { month: 'Jun', bookings: 3 },
    { month: 'Jul', bookings: 4 },
    { month: 'Aug', bookings: 1 },
    { month: 'Sep', bookings: 0 },
    { month: 'Oct', bookings: 0 },
    { month: 'Nov', bookings: 0 },
    { month: 'Dec', bookings: 0 },
  ];

  // Service category distribution
  const serviceCategories = [
    { name: 'Plumbing', count: 7 },
    { name: 'Electrical', count: 5 },
    { name: 'HVAC', count: 3 },
    { name: 'Appliance', count: 2 },
  ];

  return (
    <div className="min-h-screen font-[Poppins] mt-20 bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-600 p-6 md:p-8 text-white">
          <div className="flex flex-col md:flex-row items-center">
            <div className="relative mb-4 md:mb-0 md:mr-6">
              <img 
                src={customer.profileImage} 
                alt={customer.name} 
                className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-[#fbc800] object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-[#fbc800] text-gray-900 rounded-full px-2 py-1 text-xs font-bold">
                MEMBER
              </div>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold">{customer.name}</h1>
              <div className="flex items-center justify-center md:justify-start mt-2">
                <span>Member since {customer.memberSince}</span>
                <span className="mx-2">•</span>
                <span>{customer.totalBookings} bookings</span>
              </div>
              <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2">
                {customer.favoriteCategories.map((category, index) => (
                  <span 
                    key={index} 
                    className="bg-[#fbc800] bg-opacity-20 text-[#fbc800] px-3 py-1 rounded-full text-sm"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Customer Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 border-b">
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="text-gray-500 text-sm">Total Bookings</div>
            <div className="text-2xl font-bold text-gray-800">{customer.totalBookings}</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="text-gray-500 text-sm">Completed</div>
            <div className="text-2xl font-bold text-green-600">{customer.completedBookings}</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="text-gray-500 text-sm">Upcoming</div>
            <div className="text-2xl font-bold text-blue-600">{customer.upcomingBookings}</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="text-gray-500 text-sm">Total Spent</div>
            <div className="text-2xl font-bold text-[#fbc800]">${customer.totalSpent}</div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <FiMail className="text-[#fbc800] mr-3" size={20} />
              <div>
                <div className="text-gray-500 text-sm">Email</div>
                <div className="text-gray-800">{customer.email}</div>
              </div>
            </div>
            <div className="flex items-center">
              <FiPhone className="text-[#fbc800] mr-3" size={20} />
              <div>
                <div className="text-gray-500 text-sm">Phone</div>
                <div className="text-gray-800">{customer.phone}</div>
              </div>
            </div>
            <div className="flex items-center">
              <FiMapPin className="text-[#fbc800] mr-3" size={20} />
              <div>
                <div className="text-gray-500 text-sm">Service Address</div>
                <div className="text-gray-800">{customer.address}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b">
          <div className="flex overflow-x-auto">
            <button
              onClick={() => setActiveTab('bookings')}
              className={`px-6 py-4 font-medium text-sm focus:outline-none ${activeTab === 'bookings' ? 'text-[#fbc800] border-b-2 border-[#fbc800]' : 'text-gray-500'}`}
            >
              My Bookings
            </button>
            <button
              onClick={() => setActiveTab('stats')}
              className={`px-6 py-4 font-medium text-sm focus:outline-none ${activeTab === 'stats' ? 'text-[#fbc800] border-b-2 border-[#fbc800]' : 'text-gray-500'}`}
            >
              My Statistics
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`px-6 py-4 font-medium text-sm focus:outline-none ${activeTab === 'settings' ? 'text-[#fbc800] border-b-2 border-[#fbc800]' : 'text-gray-500'}`}
            >
              Account Settings
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {/* Booking History Tab */}
          {activeTab === 'bookings' && (
            <div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <h2 className="text-xl font-semibold text-gray-800">My Technician Bookings</h2>
                <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
                  <div className="relative flex-grow md:w-64">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiSearch className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search my bookings..."
                      className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#fbc800] focus:border-transparent"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <select
                    className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#fbc800] focus:border-transparent"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option value="all">All Statuses</option>
                    <option value="completed">Completed</option>
                    <option value="upcoming">Upcoming</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>

              {filteredBookings.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  No bookings found matching your criteria
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredBookings.map((booking) => (
                    <div 
                      key={booking.id} 
                      className={`border rounded-lg overflow-hidden transition-all duration-200 ${expandedBooking === booking.id ? 'shadow-lg' : 'shadow-sm'}`}
                    >
                      <div 
                        className={`p-4 cursor-pointer flex flex-col md:flex-row md:items-center justify-between ${expandedBooking === booking.id ? 'bg-gray-50' : 'bg-white'}`}
                        onClick={() => setExpandedBooking(expandedBooking === booking.id ? null : booking.id)}
                      >
                        <div className="flex items-center mb-2 md:mb-0">
                          <img 
                            src={booking.technician.image} 
                            alt={booking.technician.name} 
                            className="w-10 h-10 rounded-full mr-3"
                          />
                          <div>
                            <div className="font-medium">{booking.technician.name}</div>
                            <div className="text-sm text-gray-500">{booking.service}</div>
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                          <div className="text-sm">
                            <span className="text-gray-500">ID:</span> {booking.id}
                          </div>
                          <div className="text-sm">
                            <span className="text-gray-500">Date:</span> {new Date(booking.date).toLocaleDateString()}
                          </div>
                          <div>
                            {booking.status === 'completed' && (
                              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                Completed
                              </span>
                            )}
                            {booking.status === 'upcoming' && (
                              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                Upcoming
                              </span>
                            )}
                            {booking.status === 'cancelled' && (
                              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                                Cancelled
                              </span>
                            )}
                          </div>
                          <div className="font-bold text-gray-800">
                            ${booking.amount}
                          </div>
                        </div>
                      </div>
                      
                      {expandedBooking === booking.id && (
                        <div className="p-4 border-t bg-gray-50">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h3 className="font-medium text-gray-800 mb-2">Technician Details</h3>
                              <div className="flex items-start mb-3">
                                <img 
                                  src={booking.technician.image} 
                                  alt={booking.technician.name} 
                                  className="w-12 h-12 rounded-full mr-3"
                                />
                                <div>
                                  <div className="font-medium">{booking.technician.name}</div>
                                  <div className="text-sm text-gray-500">{booking.technician.specialty} • {booking.technician.experience} experience</div>
                                  <div className="text-sm text-gray-500">{booking.technician.company}</div>
                                  <div className="flex items-center mt-1">
                                    <FiStar className="text-[#fbc800] fill-current w-4 h-4" />
                                    <span className="ml-1 text-sm">{booking.technician.rating.toFixed(1)}</span>
                                  </div>
                                  <div className="mt-2 text-sm">
                                    <span className="text-gray-500">Contact:</span> {booking.technician.contact}
                                  </div>
                                </div>
                              </div>
                              {booking.status === 'completed' && (
                                <div className="mt-4">
                                  <h3 className="font-medium text-gray-800 mb-2">Work Details</h3>
                                  <div className="space-y-2">
                                    <div>
                                      <div className="text-sm text-gray-500">Problem Reported</div>
                                      <p className="text-gray-600">{booking.problem}</p>
                                    </div>
                                    <div>
                                      <div className="text-sm text-gray-500">Work Performed</div>
                                      <p className="text-gray-600">{booking.workPerformed}</p>
                                    </div>
                                    <div>
                                      <div className="text-sm text-gray-500">Warranty</div>
                                      <p className="text-gray-600">{booking.warranty}</p>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {booking.status === 'upcoming' && (
                                <div className="mt-4">
                                  <h3 className="font-medium text-gray-800 mb-2">Service Details</h3>
                                  <p className="text-gray-600">{booking.serviceDetails}</p>
                                </div>
                              )}
                              {booking.status === 'cancelled' && (
                                <div className="mt-4">
                                  <h3 className="font-medium text-gray-800 mb-2">Cancellation Reason</h3>
                                  <p className="text-gray-600">{booking.cancellationReason}</p>
                                </div>
                              )}
                            </div>
                            
                            <div>
                              <h3 className="font-medium text-gray-800 mb-2">Booking Summary</h3>
                              <div className="space-y-2">
                                <div className="flex justify-between">
                                  <span className="text-gray-500">Service:</span>
                                  <span>{booking.service}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-500">Date & Time:</span>
                                  <span>{new Date(booking.date).toLocaleDateString()} at {booking.time}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-500">Duration:</span>
                                  <span>{booking.duration}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-500">Location:</span>
                                  <span>{booking.location}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-500">Amount:</span>
                                  <span className="font-bold">${booking.amount}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-500">Status:</span>
                                  <span className="capitalize">{booking.status}</span>
                                </div>
                              </div>
                              
                              {booking.status === 'completed' && booking.review && (
                                <div className="mt-4">
                                  <h3 className="font-medium text-gray-800 mb-2">Your Review</h3>
                                  <div className="flex items-center mb-1">
                                    {[...Array(5)].map((_, i) => (
                                      <FiStar 
                                        key={i} 
                                        className={`${i < booking.rating ? 'text-[#fbc800] fill-current' : 'text-gray-300'} w-4 h-4`}
                                      />
                                    ))}
                                  </div>
                                  <p className="text-gray-600 italic">"{booking.review}"</p>
                                </div>
                              )}
                            </div>
                          </div>
                          
                          <div className="mt-6 flex justify-end gap-3">
                            {booking.status === 'upcoming' && (
                              <>
                                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition">
                                  Reschedule
                                </button>
                                <button className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition">
                                  Cancel Booking
                                </button>
                              </>
                            )}
                            {booking.status === 'completed' && !booking.review && (
                              <button className="px-4 py-2 bg-[#fbc800] text-gray-900 rounded-lg hover:bg-[#e6b400] transition">
                                Leave Review
                              </button>
                            )}
                            {booking.status === 'completed' && (
                              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition">
                                Request Follow-up
                              </button>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Statistics Tab */}
          {activeTab === 'stats' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-6">My Booking Statistics</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-medium text-gray-800 mb-4">Monthly Bookings</h3>
                  <div className="h-64">
                    {/* Chart placeholder - in a real app you would use a charting library */}
                    <div className="flex items-end h-48 gap-1 mt-4">
                      {monthlyStats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center flex-1">
                          <div 
                            className="w-full bg-[#fbc800] rounded-t-sm"
                            style={{ height: `${(stat.bookings / 4) * 100}%` }}
                          ></div>
                          <div className="text-xs text-gray-500 mt-1">{stat.month}</div>
                        </div>
                      ))}
                    </div>
                    <div className="text-center text-sm text-gray-500 mt-2">
                      Your bookings per month over the last year
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-medium text-gray-800 mb-4">Service Categories</h3>
                  <div className="h-64">
                    {/* Pie chart placeholder */}
                    <div className="relative w-40 h-40 mx-auto mt-4">
                      <div className="absolute inset-0 rounded-full border-8 border-[#fbc800]"></div>
                      <div className="absolute inset-0 rounded-full border-8 border-[#fbc800] border-opacity-70" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 50%, 0 50%)' }}></div>
                      <div className="absolute inset-0 rounded-full border-8 border-[#fbc800] border-opacity-50" style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 50%, 50% 50%)' }}></div>
                      <div className="absolute inset-0 rounded-full border-8 border-[#fbc800] border-opacity-30" style={{ clipPath: 'polygon(0 50%, 50% 50%, 50% 100%, 0 100%)' }}></div>
                    </div>
                    <div className="mt-6 space-y-2">
                      {serviceCategories.map((category, index) => (
                        <div key={index} className="flex items-center">
                          <div 
                            className="w-3 h-3 rounded-full mr-2"
                            style={{ 
                              backgroundColor: index === 0 ? '#fbc800' : 
                              index === 1 ? 'rgba(251, 200, 0, 0.7)' : 
                              index === 2 ? 'rgba(251, 200, 0, 0.5)' : 
                              'rgba(251, 200, 0, 0.3)' 
                            }}
                          ></div>
                          <span className="text-sm text-gray-700">{category.name}</span>
                          <span className="ml-auto text-sm font-medium">{category.count} bookings</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-medium text-gray-800 mb-4">My Insights</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-500">Most Booked Service</div>
                      <div className="font-medium">Plumbing (7 bookings)</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Favorite Technician</div>
                      <div className="font-medium">Michael Brown (5 bookings)</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Average Booking Cost</div>
                      <div className="font-medium">$126.47</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Busiest Month</div>
                      <div className="font-medium">July (4 bookings)</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Total Amount Spent</div>
                      <div className="font-bold text-xl">${customer.totalSpent.toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-medium text-gray-800 mb-4">My Favorite Technicians</h3>
                <div className="space-y-3">
                  {bookings
                    .filter(b => b.status === 'completed')
                    .filter((booking, index, self) => 
                      index === self.findIndex(b => b.technician.name === booking.technician.name)
                    )
                    .slice(0, 3)
                    .map((booking, index) => (
                      <div key={index} className="flex items-center p-3 hover:bg-gray-100 rounded-lg transition">
                        <img 
                          src={booking.technician.image} 
                          alt={booking.technician.name} 
                          className="w-12 h-12 rounded-full mr-3"
                        />
                        <div className="flex-1">
                          <div className="font-medium">{booking.technician.name}</div>
                          <div className="text-sm text-gray-500">{booking.technician.specialty} • {booking.technician.company}</div>
                        </div>
                        <div className="flex items-center">
                          <FiStar className="text-[#fbc800] fill-current w-4 h-4" />
                          <span className="ml-1">{booking.technician.rating.toFixed(1)}</span>
                        </div>
                        <button className="ml-4 text-[#fbc800] font-medium text-sm">
                          Book Again
                        </button>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}

          {/* Account Settings Tab */}
          {activeTab === 'settings' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-6">My Account Settings</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium text-gray-800 mb-4">Personal Information</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        defaultValue={customer.name}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fbc800] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">Email</label>
                      <input 
                        type="email" 
                        defaultValue={customer.email}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fbc800] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">Phone</label>
                      <input 
                        type="tel" 
                        defaultValue={customer.phone}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fbc800] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">Service Address</label>
                      <textarea 
                        defaultValue={customer.address}
                        rows={3}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fbc800] focus:border-transparent"
                      />
                    </div>
                    <button 
                      type="button"
                      className="px-6 py-2 bg-[#fbc800] text-gray-900 rounded-lg hover:bg-[#e6b400] transition font-medium"
                    >
                      Save Changes
                    </button>
                  </form>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-800 mb-4">Notification Preferences</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Booking Confirmations</div>
                        <div className="text-sm text-gray-500">Receive notifications when bookings are confirmed</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#fbc800]"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Reminders</div>
                        <div className="text-sm text-gray-500">Receive reminders before scheduled bookings</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#fbc800]"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Technician Updates</div>
                        <div className="text-sm text-gray-500">Receive updates from technicians about your bookings</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#fbc800]"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Review Requests</div>
                        <div className="text-sm text-gray-500">Receive requests to review completed bookings</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#fbc800]"></div>
                      </label>
                    </div>
                  </div>
                  
                  <h3 className="font-medium text-gray-800 mt-8 mb-4">Payment Methods</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center">
                        <div className="w-10 h-6 bg-gray-200 rounded mr-3"></div>
                        <span>•••• •••• •••• 4242</span>
                      </div>
                      <button className="text-red-500 text-sm">Remove</button>
                    </div>
                    <button className="flex items-center text-[#fbc800] font-medium">
                      <span>+ Add Payment Method</span>
                    </button>
                  </div>

                  <h3 className="font-medium text-gray-800 mt-8 mb-4">Account Actions</h3>
                  <div className="space-y-2">
                    <button className="text-left w-full px-4 py-2 text-red-500 hover:bg-red-50 rounded-lg transition">
                      Delete My Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;