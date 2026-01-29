"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex justify-center items-center bg-white relative px-4">

      {/* Background Dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#dcdcdc_1px,transparent_1px)] [background-size:22px_22px] opacity-40"></div>

      {/* Login Card */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl px-12 py-14 z-10">

        {/* Heading */}
        <p className="text-center text-sm font-bold text-indigo-600 uppercase tracking-widest">
          WELCOME BACK!
        </p>

        <h1 className="text-center text-4xl font-extrabold mt-2 mb-12">
          Login to continue
        </h1>

        {/* Form */}
        <form className="space-y-8">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Email or Username
            </label>

            <input
              type="text"
              placeholder="Enter Email or Username"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                required
              />

              {/* Eye Icon */}
              <button
                type="button"
                className="absolute right-4 top-3 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="w-4 h-4" />
              Remember Me
            </label>

            <a href="#" className="text-indigo-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg text-lg font-semibold transition"
          >
            Login
          </button>

          {/* Divider */}
          <p className="text-center text-gray-400 text-sm">
            or login with
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-4">
            <button className="w-12 h-12 border rounded-lg shadow-sm hover:bg-gray-50">
              f
            </button>
            <button className="w-12 h-12 border rounded-lg shadow-sm hover:bg-gray-50 font-bold">
              G
            </button>
            <button className="w-12 h-12 border rounded-lg shadow-sm hover:bg-gray-50">
              
            </button>
          </div>

          {/* Register */}
          <p className="text-center text-sm text-gray-600 pt-4">
            Don’t have an account?{" "}
            <a className="text-indigo-600 font-semibold hover:underline">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
