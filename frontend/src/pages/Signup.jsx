import React from 'react'
import { useState } from 'react';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  return (
   
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Register a user
      </h2>
    </div>


    

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form  className="space-y-6 gap-3">
      <div>
        
        <label  className="block text-sm font-medium leading-6 text-gray-900">
      Full name
        </label>
        <div className="mt-2">
          <input
            id="name"
          placeholder=''
            type="String"
            required
            autoComplete="name"
            className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        
          <label  className="block text-sm font-medium leading-6 text-gray-900">
           CBE ID
          </label>
          <div className="mt-2">
            <input
              id="cbeid"
            placeholder='059...'
              type="String"
              required
              autoComplete="cbeid"
              className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>




        <div>
          <label  className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
            placeholder='cbe_email@cbe.com.et'
              type="email"
              required
              autoComplete="email"
              className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label  className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
     
          </div>
          <div className="mt-2">
            <input
              id="password"
             defaultValue='Welcome2cbe'
             type={showPassword ? 'text' : 'password'}
             required
              autoComplete="current-password"
              className="  px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
             
          </div>
          <div className="flex mt-2">
    
          <label className='text-sm font-medium leading-6 text-gray-900'>
        
         <input className="mr-2"
          type="checkbox"
          checked={showPassword}
          onChange={togglePasswordVisibility}
        />
  
        Show Password
      </label>
      </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 gap-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Register
          </button>
        </div>
      </form>

    
    </div>
  </div>
  )
}

export default Signup