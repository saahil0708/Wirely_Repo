import React, { useState } from 'react';
import { User, Users, Lock, Mail, Eye, EyeOff, Building2, Phone } from 'lucide-react';
// import loginImage from '../assets/login.jpg';
import registerationImage from '../assets/registeration.jpg';
import RegisterTech from '../assets/RegisterTech.png'
// import wirelylogo from "../assets/wirelylogo.png";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [isTechnician, setIsTechnician] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen font-[Poppins] flex items-center justify-center shadow-xl p-4">
      {/* Main container with yellow border */}
      <div className="bg-white rounded-3xl w-full max-w-4xl flex overflow-hidden shadow-lg border border-[#d0d0d0]">
        {/* Image Section */}
        <div 
          className={`hidden md:flex w-1/2 flex-col items-center justify-center relative overflow-hidden ${
            isLogin 
              ? 'rounded-l-3xl rounded-r-[100px]' 
              : 'rounded-r-3xl rounded-l-[100px] order-last'
          }`}
        >
          {/* Logo in top-left corner of image section */}
          {/* <div className="absolute top-6 left-6 z-20">
            <img src={wirelylogo} alt="Wirely Logo" className="h-12 w-auto" />
          </div> */}
          
          {/* Background Image - Changes based on login/register state */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${isLogin ? registerationImage: RegisterTech})` 
            }}
          />
          {/* Light Black Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60" />
          
          {/* Content */}
          <div className="w-full max-w-md text-center p-8 relative z-10">
            <div className="bg-white/10 rounded-full w-24 h-24 mb-8 mx-auto flex items-center justify-center">
              <User className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-4 text-white">
              {isLogin ? "Hello, Welcome Back!" : "Create Your Account!"}
            </h1>
            <p className="text-lg mb-6 text-white">
              {isLogin ? "Don't have an account yet?" : "Already registered with us?"}
            </p>
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="w-full px-6 py-3 bg-white text-yellow-600 rounded-lg font-semibold hover:bg-opacity-90 transition duration-300"
            >
              {isLogin ? "Register Now" : "Sign In"}
            </button>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <div className="flex justify-center mb-8 mt-10">
            <div className="bg-gray-100 p-1.5 rounded-2xl flex gap-1">
              <button
                className={`px-8 py-2.5 rounded-xl flex items-center gap-2 transition duration-300 ${
                  !isTechnician 
                    ? 'bg-white text-yellow-400 shadow-sm' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
                onClick={() => setIsTechnician(false)}
              >
                <User className="h-4 w-4" />
                <span className="font-medium">User</span>
              </button>
              <button
                className={`px-8 py-2.5 rounded-xl flex items-center gap-2 transition duration-300 ${
                  isTechnician 
                    ? 'bg-white text-yellow-400 shadow-sm' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
                onClick={() => setIsTechnician(true)}
              >
                <Users className="h-4 w-4" />
                <span className="font-medium">Technician</span>
              </button>
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-center mb-2">
              {isLogin ? 'Sign In to Your Account' : 'Join Us Today'}
            </h1>
            <p className="text-gray-500 text-center mb-8">
              {isLogin
                ? 'Enter your credentials to access your account'
                : 'Fill in your details to get started'}
            </p>

            <form className="space-y-4">
              {isTechnician && (
                <>
                  <div className="relative group">
                    <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400 transition duration-300"
                    />
                  </div>
                  <div className="relative group">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="tel"
                      placeholder="Contact Number"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400 transition duration-300"
                    />
                  </div>
                </>
              )}

              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400 transition duration-300"
                  required
                />
              </div>

              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400 transition duration-300"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>

              {!isLogin && (
                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400 transition duration-300"
                    required
                  />
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox text-yellow-400 rounded" />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-gray-500 hover:text-yellow-400 transition duration-300">
                    Forgot password?
                  </a>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-yellow-400 text-white py-3 rounded-lg hover:bg-yellow-500 transition duration-300 font-semibold"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </form>

            {!isLogin && (
              <p className="mt-4 text-xs text-gray-500 text-center">
                By registering, you agree to our Terms of Service and Privacy Policy
              </p>
            )}

            <div className="mt-8 text-center">
              <p className="text-gray-500">
                {isLogin ? "Don't have an account? " : 'Already have an account? '}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-yellow-400 font-semibold hover:text-yellow-500 transition duration-300"
                >
                  {isLogin ? 'Register Now' : 'Sign In'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;