import React, { useState } from 'react';
import { User, Users, Lock, Mail, Eye, EyeOff, Building2, Phone } from 'lucide-react';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [isTechnician, setIsTechnician] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen font-['Open_Sans'] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-4xl flex overflow-hidden">
        {/* Left/Right Content Section with subtle inner curve */}
        <div 
          className={`hidden md:flex w-1/2 p-6 flex-col items-center justify-center text-white bg-yellow-400 ${
            isLogin 
              ? 'rounded-l-3xl rounded-r-[100px]' 
              : 'rounded-r-3xl rounded-l-[100px] order-last'
          }`}
        >
          <div className="w-full max-w-md text-center">
            <div className="bg-white/10 rounded-full w-24 h-24 mb-8 mx-auto flex items-center justify-center">
              <User className="w-12 h-12" />
            </div>
            <h1 className="text-3xl font-bold mb-4">
              {isLogin ? "Hello, Welcome!" : "Welcome Back!"}
            </h1>
            <p className="text-lg mb-6">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </p>
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="w-full px-6 py-3 bg-white text-yellow-400 rounded-lg font-semibold hover:bg-opacity-90"
            >
              {isLogin ? "Register" : "Sign In"}
            </button>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <div className="flex justify-center mb-8">
            <div className="bg-gray-50 p-1.5 rounded-2xl flex gap-1 shadow-inner">
              <button
                className={`px-8 py-2.5 rounded-xl flex items-center gap-2 ${
                  !isTechnician 
                    ? 'bg-white shadow-lg text-yellow-400' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
                onClick={() => setIsTechnician(false)}
              >
                <User className="h-4 w-4" />
                <span className="font-medium">User</span>
              </button>
              <button
                className={`px-8 py-2.5 rounded-xl flex items-center gap-2 ${
                  isTechnician 
                    ? 'bg-white shadow-lg text-yellow-400' 
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
              {isLogin ? 'Welcome Back!' : 'Create Account'}
            </h1>
            <p className="text-gray-500 text-center mb-8">
              {isLogin
                ? 'Hey, Enter your details to sign in to your account'
                : 'Please fill in the form to create your account'}
            </p>

            <form className="space-y-4">
              {isTechnician && (
                <>
                  <div className="relative group">
                    <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400"
                    />
                  </div>
                  <div className="relative group">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="tel"
                      placeholder="Contact Number"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400"
                    />
                  </div>
                </>
              )}

              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400"
                />
              </div>

              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Passcode"
                  className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>

              {!isLogin && (
                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="password"
                    placeholder="Confirm Passcode"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400"
                  />
                </div>
              )}

              {isLogin && (
                <div className="text-right">
                  <a href="#" className="text-sm text-gray-500 hover:text-yellow-400">
                    Having trouble in sign in?
                  </a>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-yellow-400 text-white py-3 rounded-lg hover:bg-yellow-500"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-500">
                {isLogin ? "Don't have an account? " : 'Already have an account? '}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-yellow-400 font-semibold hover:text-yellow-500"
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