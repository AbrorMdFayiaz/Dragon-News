"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { authClient } from '../../../../lib/auth-client'

const page = () => {

const signInHandler = async (e)=>{
  e.preventDefault();

  // better-auth
  const { data, error } = await authClient.signIn.email({
        /**
         * The user email
         */
        email:e.target.email.value,
        /*
         * The user password
         */
        password:e.target.password.value,
        /**
         * A URL to redirect to after the user verifies their email (optional)
         */
        callbackURL: "/dashboard",
        /**
         * remember the user session after the browser is closed. 
         * @default true
         */
        // rememberMe: false
}, {
    //callbacks
})

// 
  console.log(data,error);
}


  return (
    <div>
            <div className="pt-20">
              <form onSubmit={(e)=>signInHandler(e)}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-3/4 mx-auto border p-4 ">
        
            <h1 className="text-2xl font-bold mb-4 text-center p-9 border-b-2 border-base-300 ">Login your account</h1>

            <label className="label">Email</label>
            <input name='email' type="email" className="input bg-base-300  w-full" placeholder="Enter your email " />
            
            <label className="label">Password</label>
            <input name='password' type="password" className="input bg-base-300  w-full" placeholder="Enter your password" />
            
            <button className="btn btn-neutral mt-4">Login</button>

            <p className='text-center'>Don't Have An Account ? <Link href="/authentication" className='text-red-500'>Register</Link></p>
        </fieldset>
        </form>
    </div>
    </div>
  )
}

export default page
