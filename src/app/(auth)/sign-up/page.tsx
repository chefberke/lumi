"use client";

import Logo from "@/components/common/Logo";
import Link from "next/link";
import React, { useState } from "react";

import { GoArrowUpRight } from "react-icons/go";
import { signup } from "./action";

function Page() {
  const [error, setError] = useState<string | null>(null);

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const response = await signup(formData);

    if (response?.error) {
      setError(response.error);
      return;
    } else {
      setError(null);
    }
  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100 overflow-y-hidden">
      <div className="mb-12">
        <Logo />
      </div>
      <div className="relative flex flex-col items-center justify-center z-10 bg-white border border-white/50 rounded-2xl shadow-md max-w-[400px] w-[90%] h-[500px]">
        <div>
          <h2 className="text-2xl font-medium">Sign Up</h2>
        </div>
        <div>
          <p className="text-gray-500 pt-1">to get started</p>
        </div>
        <div className="pt-6">
          <form onSubmit={handleSignup} className="px-14">
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="bg-gray-100 text-[14px] rounded-md px-4 w-full h-[2.8rem] focus:outline-[#4B4EE7] mb-2 placeholder:text-[15px]"
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="bg-gray-100 text-[14px] rounded-md px-4 w-full h-[2.8rem] focus:outline-[#4B4EE7] mb-2 placeholder:text-[15px]"
            />
            <input
              name="password-confirm"
              type="password"
              placeholder="Confirm Password"
              className="bg-gray-100 text-[14px] rounded-md px-4 w-full h-[2.8rem] focus:outline-[#4B4EE7] mb-2 placeholder:text-[15px]"
            />
            <div>{error !== null ? <p className="text-red-600 text-sm text-center mb-1 mt-1">{error}</p> : null}</div>
            <div className="flex items-center justify-center pt-4 pb-1">
              <div className="relative w-full max-w-xs group">
                <button className="text-white bg-[#4B4EE7] rounded-md w-full py-2 transition-all duration-300 group-hover:pr-4">Sign up</button>
                <div className="absolute top-1/2 right-24 transform -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  <GoArrowUpRight className="text-white" size={24} />
                </div>
              </div>
            </div>
            <div>
              <p className="text-[13px] pt-3">
                Have already account?{" "}
                <Link href={"/sign-in"} className="text-[#8276FF] transition-all">
                  Sign in
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="relative z-0">
        <div className="w-64 h-64 bg-gradient-to-r from-[#8276FF] to-[#4B4EE7] blur-[200px] absolute inset-0"></div>
      </div>
    </div>
  );
}

export default Page;
