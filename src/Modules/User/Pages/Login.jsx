import React from 'react'
import LOGO from "../Images/Logo_Bg.png";
import { CiLock, CiMail } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4'>
      <div className='max-w-md w-full'>
        <div className='text-center mb-[32px]'>
          <div className='inline-flex items-center justify-center bg-blue-600 overflow-hidden rounded-full shadow-lg mb-3 w-14 h-14'>
            <img src={LOGO} alt="Logo" className='w-full h-full' />
          </div>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>Welcome Back!</h1>
          <p className='text-gray-600 m-0'>Sign in to continue your journey with TripHarbor</p>
        </div>

        <div className='bg-white rounded-2xl shadow-xl p-8'>
          <form action="" className='space-y-6'>
            <div>
              <label htmlFor="" className='block text-sm font-medium text-gray-700 mb-2'>Email</label>
              <div className='relative'>
                <CiMail className='absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400' />
                <input type="email" className="w-full pl-11 pr-4 py-[12px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="you@example.com" required value="" />
              </div>
            </div>
            <div>
              <label htmlFor="" className='block text-sm font-medium text-gray-700 mb-2'>Password</label>
              <div className='relative'>
                <CiLock className='absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400' />
                <input type="password" className="w-full pl-11 pr-11 py-[12px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your password" required value="" />
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <IoEyeOutline className='w-5 h-5' />
                </button>
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <label htmlFor="" className='flex items-center' >
                <input type="checkbox" name="" id=" " className='w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500' />
                <span className='ml-2 text-sm text-gray-700'>Remember me</span>
              </label>
              <a href="" className='text-sm text-blue-600 hover:text-blue-700 font-medium'>Forget Password?</a>
            </div>
            <button type='submit' className='w-full bg-blue-600 text-white py-[12px] rounded-lg font-semibold hover:bg-blue-700 transition-colors'>Submit</button>
          </form>
          <div className='relative my-6'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-gray-300'></div>
            </div>
            <div className='relative flex justify-center text-sm'>
              <span className='px-2 bg-white text-gray-500'>Or continue with</span>
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

        <p className='text-center text-xs text-gray-500 mt-8'>
          By signing in, you agree to our
          <a href="#" class="text-blue-600 hover:underline"> Terms of Service </a>
          and
          <a href="#" class="text-blue-600 hover:underline"> Privacy Policy</a>
        </p>
      </div>
    </div>
  )
}

export default Login
