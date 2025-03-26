import { useState } from "react";
import "./login_regi_ani.css"; // Import the CSS file

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("student");

  return (
    <div className="flex items-center justify-center min-h-screen w-full relative overflow-hidden p-10">
      
      {/* Background Animation */}
      <div className="animated-background">
        <div className="plane"></div>
        <div className="plane"></div>
        <div className="plane"></div>
        <div className="planet"></div>
        <div className="planet"></div>
        <div className="planet"></div>
      </div>

      {/* Transparent Login/Register Box */}
      <div className="flex w-full max-w-5xl backdrop-blur-md bg-white bg-opacity-20 shadow-2xl rounded-2xl overflow-hidden relative p-10 z-10 border-8 border-black transition-transform duration-500 ease-in-out transform animate-floating">
        
        {/* Image Side */}
        <div 
          className={`w-1/2 hidden md:flex flex-col justify-between p-8 bg-cover bg-center text-white transition-all duration-500 ${isLogin ? 'order-first' : 'order-last'}`} 
          style={{ backgroundImage: isLogin ? "url('https://www.absolinsoft.com/wp-content/uploads/2021/08/Mobile-login-rafiki-768x768.png')" : "url('https://static.vecteezy.com/system/resources/previews/006/867/066/non_2x/online-register-mobile-registration-app-vector.jpg')" }}
        >
        </div>
        
        {/* Form Side */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-bold text-center mb-6">{isLogin ? "Hi Designer" : "Create Account"}</h2>
          <p className="text-center text-gray-600 mb-6">Welcome to UISOCIAL</p>
          
          <div className="flex justify-center mb-4">
            <button
              className={`px-6 py-2 rounded-lg text-lg font-semibold transition-all ${
                isLogin ? "bg-red-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={`px-6 py-2 rounded-lg text-lg font-semibold transition-all ml-4 ${
                !isLogin ? "bg-red-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setIsLogin(false)}
            >
              Register
            </button>
          </div>
          
          <div className="flex justify-center items-center mb-6">
  <span className="text-gray-600 text-lg font-medium mr-3">I am a:</span>
  <div className="flex bg-gray-200 p-1 rounded-full">
    <button
      className={`px-6 py-2 rounded-full text-lg font-semibold transition-all ${
        role === "student" ? "bg-red-500 text-white" : "text-gray-700"
      }`}
      onClick={() => setRole("student")}
    >
      Student
    </button>
    <button
      className={`px-6 py-2 rounded-full text-lg font-semibold transition-all ${
        role === "teacher" ? "bg-red-500 text-white" : "text-gray-700"
      }`}
      onClick={() => setRole("teacher")}
    >
      Teacher
    </button>
  </div>
</div>


          {isLogin ? (
            <div>
              <input type="email" placeholder="Email" className="w-full p-3 mb-3 border rounded" />
              <input type="password" placeholder="Password" className="w-full p-3 mb-3 border rounded" />
              <p className="text-right text-sm text-red-500 cursor-pointer mb-4">Forgot password?</p>
              <button className="w-full bg-red-500 text-white p-3 rounded text-lg">Login</button>
              <div className="text-center mt-4 text-gray-600">or</div>
              <button className="w-full border p-3 mt-3 rounded text-lg flex items-center justify-center">
                <img src="https://source.unsplash.com/random/30x30?google" alt="Google" className="w-6 h-6 mr-2" /> Login with Google
              </button>
            </div>
          ) : (
            <div>
              <input type="text" placeholder="Name" className="w-full p-3 mb-3 border rounded" />
              <input type="email" placeholder="Email" className="w-full p-3 mb-3 border rounded" />
              <input type="password" placeholder="Password" className="w-full p-3 mb-3 border rounded" />
              <button className="w-full bg-red-500 text-white p-3 rounded text-lg">Register</button>
              <div className="text-center mt-4 text-gray-600">Already have an account? <span className="text-red-500 cursor-pointer" onClick={() => setIsLogin(true)}>Login</span></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}



//url('https://www.absolinsoft.com/wp-content/uploads/2021/08/Mobile-login-rafiki-768x768.png')" : "url('https://static.vecteezy.com/system/resources/previews/006/867/066/non_2x/online-register-mobile-registration-app-vector.jpg

