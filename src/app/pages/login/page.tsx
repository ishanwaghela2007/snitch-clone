'use client'

import Link from 'next/link'
import React, { use, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast, ToastContainer } from 'react-toastify'
import axios from 'axios'

const Login = () => {
  const [user, setUser] = useState({
    password: "",
    phoneNumber:""
  });

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  useEffect(()=>{
    const { password, phoneNumber } = user
    setButtonDisabled(!(password && phoneNumber))
  },[user])
//   useEffect(()=>{
//     if(user.email.length>0&&user.password.length>0){
//        setButtonDisabled(false)
//     }else{
//       setButtonDisabled(true)
//     }
//   },[user])
  const onLogin = async () => {
    //   try {
    //     setLoading(true)
    //     const responce=await axios.post('api/users/login',user)
    //     toast.success("user looged in")
    //     router.push('/dashboard')
    //   } catch (error:any) {
    //     toast.error(error.message)
    //   }finally
    //   {
    //     setLoading(false)
    //   }
    router.push('/pages/UserHome')
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl w-full">
      {/* Left: Form */}
      <div className="w-full md:w-1/2 p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          {loading ? 'Processing...' : 'Login'}
        </h1>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={user.phoneNumber}
              onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
              placeholder="Enter your phone number"
              required
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Enter your password"
              required
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="button"
            onClick={onLogin}
            disabled={buttonDisabled || loading}
            className={`w-full font-semibold py-2 rounded-lg transition ${
              buttonDisabled || loading
                ? 'bg-gray-400 cursor-not-allowed text-white'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          Don&apos;t have an account?{' '}
          <Link href="/pages/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>

      {/* Right: Image */}
      <div className="hidden md:block md:w-1/2">
        <img
          src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-2242.jpg"
          alt="Login illustration"
          className="h-full w-full object-cover"
        />
      </div>
    </div>

    <ToastContainer />
  </div>
  );
};

export default Login;

