import React from 'react'
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
        <h1>Login With</h1>
        <article className='mt-5 mb-3 flex items-center gap-3 border-2 border-blue-400 rounded-[5px] w-full p-2 text-center '><span className='flex items-center gap-3 mx-auto '><FaGoogle />Login with Google</span></article>
        <article className='flex items-center gap-3 border-2 border-black-400 rounded-[5px] w-full p-2 text-center '><span className='flex items-center gap-3 mx-auto '><FaGithub />Login with GitHub</span></article>
    </div>
  )
}

export default SocialLogin