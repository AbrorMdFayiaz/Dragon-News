import React from 'react'
import { MdOutlineFacebook } from 'react-icons/md'
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const Find = () => {
  return (
    <div>
        <h1>Login With</h1>
        <article className='mt-5 flex items-center gap-3 border-2 border-base-300 border-b-0 w-full p-2 text-center  rounded-t-[5px]'><MdOutlineFacebook />Facebook</article>
        <article className='flex items-center gap-3 border-2 border-base-300 border-b-0 w-full p-2 text-center '><AiFillTwitterCircle />Twitter</article>
        <article className='flex items-center gap-3 border-2 border-base-300 w-full p-2 text-center rounded-b-[5px] '><BsInstagram />Instagram</article>
    </div>
  )
}

export default Find