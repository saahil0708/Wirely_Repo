// import Link from "next/link";
// import { Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function Footer() {
//   const socialLinks = [
//     { Component: Facebook, label: "Facebook" },
//     { Component: Twitter, label: "Twitter" },
//     { Component: Linkedin, label: "LinkedIn" },
//     { Component: Youtube, label: "YouTube" },
//     { Component: Instagram, label: "Instagram" },
//   ];

//   return (
//     <footer className="w-full">
//       {/* CTA Section */}
//       <div className="w-full bg-indigo-300 py-10">
//         <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
//           <div className="mb-4 md:mb-0">
//             <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Ready for your next project?</h2>
//             <p className="text-gray-700">Let's get started!</p>
//           </div>
//           <Button className="bg-gray-800 hover:bg-gray-700 text-white transition-all duration-300 transform hover:scale-105">
//             Contact us
//           </Button>
//         </div>
//       </div>

//       {/* Main Footer */}
//       <div className="w-full bg-gray-900 text-gray-300 py-12">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
//             {/* Brand Column */}
//             <div className="col-span-1">
//               <Link href="/" className="inline-block">
//                 <h2 className="text-xl font-bold text-white tracking-wider">COLORLIB</h2>
//               </Link>
//               <p className="mt-2 text-sm">© {new Date().getFullYear()}</p>
//             </div>

//             {/* Customers Column */}
//             <div className="col-span-1">
//               <h3 className="text-white font-medium mb-4">Customers</h3>
//               <ul className="space-y-2">
//                 <li><Link href="#" className="text-gray-400 hover:text-white">Buyer</Link></li>
//                 <li><Link href="#" className="text-gray-400 hover:text-white">Supplier</Link></li>
//                 <li><Link href="#" className="text-gray-400 hover:text-white">Partners</Link></li>
//               </ul>
//             </div>

//             {/* Company Column */}
//             <div className="col-span-1">
//               <h3 className="text-white font-medium mb-4">Company</h3>
//               <ul className="space-y-2">
//                 <li><Link href="#" className="text-gray-400 hover:text-white">About us</Link></li>
//                 <li><Link href="#" className="text-gray-400 hover:text-white">Careers</Link></li>
//                 <li><Link href="#" className="text-gray-400 hover:text-white">Contact us</Link></li>
//                 <li><Link href="#" className="text-gray-400 hover:text-white">Blog</Link></li>
//               </ul>
//             </div>

//             {/* Further Information Column */}
//             <div className="col-span-1">
//               <h3 className="text-white font-medium mb-4">Further Information</h3>
//               <ul className="space-y-2">
//                 <li><Link href="#" className="text-gray-400 hover:text-white">Terms & Conditions</Link></li>
//                 <li><Link href="#" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
//                 <li><Link href="#" className="text-gray-400 hover:text-white">FAQ</Link></li>
//                 <li><Link href="#" className="text-gray-400 hover:text-white">Support</Link></li>
//               </ul>
//             </div>

//             {/* Social Media Column */}
//             <div className="col-span-1">
//               <h3 className="text-white font-medium mb-4">Follow us</h3>
//               <div className="flex space-x-3">
//                 {socialLinks.map(({ Component, label }, index) => (
//                   <Link key={index} href="#" className="bg-gray-700 p-2 rounded-full hover:bg-indigo-600" aria-label={label}>
//                     <Component className="h-5 w-5 text-white" />
//                   </Link>
//                 ))}
//               </div>
//               <div className="mt-6">
//                 <h4 className="text-sm font-medium text-white mb-2">Subscribe to our newsletter</h4>
//                 <div className="flex mt-2">
//                   <input
//                     type="email"
//                     placeholder="Your email"
//                     className="bg-gray-800 text-white px-3 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-indigo-500"
//                   />
//                   <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-r-md">
//                     Subscribe
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Bottom Bar */}
//           <div className="border-t border-gray-800 mt-10 pt-6 text-center md:flex md:justify-between md:items-center">
//             <p className="text-sm text-gray-500">© {new Date().getFullYear()} COLORLIB. All rights reserved.</p>
//             <ul className="flex space-x-6 mt-4 md:mt-0">
//               <li><Link href="#" className="text-sm text-gray-500 hover:text-white">Sitemap</Link></li>
//               <li><Link href="#" className="text-sm text-gray-500 hover:text-white">Cookies</Link></li>
//               <li><Link href="#" className="text-sm text-gray-500 hover:text-white">Accessibility</Link></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
