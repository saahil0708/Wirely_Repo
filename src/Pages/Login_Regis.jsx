import { useState } from "react";
import "./login_regi_ani.css";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("student");

  return (
    <div className="flex items-center justify-center min-h-screen w-full relative overflow-hidden px-6 py-10 md:p-10">
      {/* Background Animation */}
      <div className="animated-background">
        <div className="plane"></div>
        <div className="plane"></div>
        <div className="plane"></div>
        <div className="plane"></div>
        <div className="planet"></div>
        <div className="planet"></div>
        <div className="planet"></div>
      </div>

      {/* Login/Register Box (Removed Floating Animation) */}
      <div className={`flex flex-col md:flex-row w-full max-w-5xl backdrop-blur-md bg-white bg-opacity-20 shadow-2xl rounded-2xl overflow-hidden relative p-6 md:p-10 z-10 transition-transform duration-500 ease-in-out transform ${isLogin ? '' : 'md:flex-row-reverse'}`}>
        {/* Image Section */}
        <div
          className="hidden md:flex w-1/2 flex-col justify-between p-8 bg-cover bg-center text-white transition-all duration-500"
          style={{
            backgroundImage: isLogin
              ? "url('https://i.postimg.cc/jq36qbCS/log2.png')"
              : "url('https://i.postimg.cc/26fcwfnD/Register-Img.png')",
          }}
        ></div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-4 md:p-10">
          <h2 className="text-3xl font-bold text-center mb-4 md:mb-6">{isLogin ? "Login Here" : "Create Account"}</h2>
          <p className="text-center text-gray-600 mb-4 md:mb-6">Welcome to Wirely</p>
          
          {/* Toggle Login/Register */}
          <div className="flex justify-center mb-4">
            <button
              className={`px-4 md:px-6 py-2 rounded-lg text-lg font-semibold transition-all ${isLogin ? "bg-[#fbc800] text-white" : "bg-gray-200"}`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={`px-4 md:px-6 py-2 rounded-lg text-lg font-semibold transition-all ml-2 md:ml-4 ${!isLogin ? "bg-[#fbc800] text-white" : "bg-gray-200"}`}
              onClick={() => setIsLogin(false)}
            >
              Register
            </button>
          </div>
          
          {/* Role Selection */}
          <div className="flex flex-col md:flex-row justify-center items-center mb-4 md:mb-6">
            <span className="text-gray-600 text-lg font-medium mb-2 md:mb-0 md:mr-3">Select Role:</span>
            <div className="flex bg-gray-200 p-1 rounded-full">
              <button
                className={`px-4 md:px-6 py-2 rounded-full text-lg font-semibold transition-all ${role === "student" ? "bg-[#fbc800] text-white" : "text-gray-700"}`}
                onClick={() => setRole("student")}
              >
                Student
              </button>
              <button
                className={`px-4 md:px-6 py-2 rounded-full text-lg font-semibold transition-all ${role === "teacher" ? "bg-[#fbc800] text-white" : "text-gray-700"}`}
                onClick={() => setRole("teacher")}
              >
                Teacher
              </button>
            </div>
          </div>
          
          {/* Forms */}
          {isLogin ? (
            <div>
              <input type="email" placeholder="Email" className="w-full p-3 mb-3 border rounded" />
              <input type="password" placeholder="Password" className="w-full p-3 mb-3 border rounded" />
              <p className="text-right text-sm cursor-pointer mb-4">Forgot password?</p>
              <button className="w-full bg-[#fbc800] text-white p-3 rounded text-lg">Login</button>
              <div className="text-center mt-4 text-gray-600">or</div>
              <button className="w-full border p-3 mt-3 rounded text-lg flex items-center justify-center">
                <img src="https://imagepng.org/wp-content/uploads/2019/08/google-icon.png" alt="Google" className="w-6 h-6 mr-2" /> Login with Google
              </button>
            </div>
          ) : (
            <div>
              <input type="text" placeholder="Name" className="w-full p-3 mb-3 border rounded" />
              <input type="email" placeholder="Email" className="w-full p-3 mb-3 border rounded" />
              <input type="password" placeholder="Password" className="w-full p-3 mb-3 border rounded" />
              <button className="w-full bg-[#fbc800] text-white p-3 rounded text-lg">Register</button>
              <div className="text-center mt-4 text-gray-600">
                Already have an account? <span className="cursor-pointer text-blue-500" onClick={() => setIsLogin(true)}>Login</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
