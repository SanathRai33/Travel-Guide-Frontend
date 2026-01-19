import React from 'react'
import LOGO from "../Images/Logo_Bg.png";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Register = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4'>
      <div className='max-w-2xl w-full'>
        <div className='text-center mb-[32px]'>
          <div className='inline-flex items-center justify-center bg-blue-600 overflow-hidden rounded-full shadow-lg mb-3 w-14 h-14'>
            <img src={LOGO} alt="Logo" className='w-full h-full' />
          </div>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>Create Your Account</h1>
          <p className='text-gray-600 m-0 p-0'>Join TripHarbor and start your adventure today</p>
        </div>
        <div className='bg-white rounded-2xl shadow-xl p-8'>
          <form action="" className='space-y-6'>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <div class="relative">
                  <FaRegUser className='absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400' />
                  <input type="text" class="w-full pl-11 pr-3 py-[12px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="John" required="" value="" />
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <div class="relative">
                  <FaRegUser className='absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400' />
                  <input type="text" class="w-full pl-11 pr-3 py-[12px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Doe" required="" value="" />
                </div>
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <div class="relative">
                  <MdOutlineEmail className='absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400' />
                  <input type="email" class="w-full pl-11 pr-3 py-[12px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="John@gamil.com" required="" value="" />
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <div class="relative">
                  <MdOutlinePhone className='absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400' />
                  <input type="tel" class="w-full pl-11 pr-3 py-[12px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="+91 9876543210" required="" value="" />
                </div>
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div class="relative">
                <CiLock className='absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400' />
                <input type="password" class="w-full pl-11 pr-11 py-[12px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Create a strong password" required="" value="" />
                <button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <IoEyeOutline className='h-5 w-5' />
                </button>
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
              <div class="relative">
                <CiLock className='absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400' />
                <input type="password" class="w-full pl-11 pr-11 py-[12px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Confirm your password" required="" value="" />
                <button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <IoEyeOutline className='h-5 w-5' />
                </button>
              </div>
            </div>
            <div class="space-y-3">
              <label class="flex items-start">
                <input type="checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1" required="" />
                <span class="ml-2 text-sm text-gray-700">I agree to the
                  <a href="#" class="text-blue-600 hover:underline">Terms of Service</a> and
                  <a href="#" class="text-blue-600 hover:underline">Privacy Policy</a>
                </span>
              </label>
              <label class="flex items-start">
                <input type="checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1" />
                <span class="ml-2 text-sm text-gray-700">Send me exclusive travel deals and newsletters</span>
              </label>
            </div>
            <button type="submit" class="w-full bg-blue-600 text-white py-[12px] rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
              <span>Create Account</span>
            </button>
          </form>
          <div className='relative my-6'>
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300">
              </div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500">Or sign up with</span>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <button className='flex items-center justify-center px-3 py-[12px] border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors'>
              <FcGoogle className='h-5 w-5 mr-2' />
              <span className='text-sm font-medium text-gray-700'>Google</span>
            </button>
            <button className='flex items-center justify-center px-3 py-[12px] border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors'>
              <FaFacebook className='h-5 w-5 mr-2 text-blue-600' />
              <span className='text-sm font-medium text-gray-700'>Facebook</span>
            </button>
          </div>
          <p className='text-center text-sm text-gray-600 mt-6 mb-0'>
            Don't have an account?
            <a href="/register" className='text-blue-600 hover:text-blue-700 font-semibold'>{" "}Sign up for free</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
