'use client';
import React from 'react';
import chicberrylogo from '$/images/chicberrylogo.png';
import Image from 'next/image';
const page = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-pink-100 via-pink-500 to-indigo-600 py-10">
        <div className="w-full max-w-lg relative top-[-12em] md:top-[-8em] p-8 space-y-6 bg-gradient-to-t from-pink-100 via-pink-200 to-indigo-200 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800 ">
            <Image
              src={chicberrylogo}
              className="w-full h-full"
              alt="logo"
              width={120}
              height={120}
              unoptimized
            />
          </h2>

          <form className="mt-4 space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-black font-semibold"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full px-4 py-2 text-black text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Reset password
            </button>
          </form>

          <div className="flex items-center flex-col justify-between mt-4 text-sm text-gray-600 gap-y-5">
            <p>
              {' '}
              Do not have an account?{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Sign-up here
              </a>{' '}
            </p>

            {/* <a href="#" className="hover:text-blue-600">
              Forgot password?
            </a>
            <span>
              Do not have an account?{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Sign up
              </a>
            </span> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
