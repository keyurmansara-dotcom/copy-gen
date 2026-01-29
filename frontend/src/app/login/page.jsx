"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center 
    bg-gradient-to-br from-[#f8f9ff] to-[#eef3ff] relative px-4">

      {/* ✅ Dotted Background */}
      <div className="absolute inset-0 
      bg-[radial-gradient(#dcdcdc_1px,transparent_1px)] 
      [background-size:24px_24px] opacity-40"></div>

      {/* ✅ Login Card */}
      <div className="relative bg-white w-full max-w-lg 
      rounded-2xl shadow-xl px-10 py-12 z-10">

        {/* ✅ Title */}
        <p className="text-center text-sm font-bold text-indigo-600 uppercase tracking-widest">
          Welcome Back!
        </p>

        <h1 className="text-center text-3xl md:text-4xl font-extrabold mt-2 mb-10">
          Login to continue
        </h1>

        {/* ✅ Form */}
        <form className="space-y-7">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email or Username
            </label>

            <input
              type="text"
              placeholder="Enter Email or Username"
              className="w-full border border-gray-200 rounded-lg 
              px-4 py-3 text-sm focus:ring-2 
              focus:ring-indigo-500 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="w-full border border-gray-200 rounded-lg 
                px-4 py-3 text-sm focus:ring-2 
                focus:ring-indigo-500 outline-none"
              />

              {/* Eye Toggle */}
              <button
                type="button"
                className="absolute right-4 top-3 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="w-4 h-4 rounded" />
              Remember Me
            </label>

            <a href="#" className="text-indigo-600 font-medium hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 
            text-white py-3 rounded-lg font-semibold 
            transition duration-300"
          >
            Login
          </button>

          {/* Divider */}
          <p className="text-center text-gray-400 text-sm">
            or login with
          </p>

          {/* Social Buttons */}
          <div className="flex justify-center gap-4">
            <button className="w-11 h-11 border rounded-lg shadow-sm hover:bg-gray-50 font-bold">
              f
            </button>
            <button className="w-11 h-11 border rounded-lg shadow-sm hover:bg-gray-50 font-bold">
              G
            </button>
            <button className="w-11 h-11 border rounded-lg shadow-sm hover:bg-gray-50 font-bold">
              
            </button>
          </div>

          {/* Register */}
          <p className="text-center text-sm text-gray-600 pt-3">
            Don’t have an account?{" "}
            <span className="text-indigo-600 font-semibold hover:underline cursor-pointer">
              Register
            </span>
          </p>

        </form>
      </div>
    </div>
  );
}
