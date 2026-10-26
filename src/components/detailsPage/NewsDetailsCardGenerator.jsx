import Image from 'next/image'
import React from 'react'
import userImage from '../../assets/demo-user.png'
import { IoBookmarkOutline, IoShareSocialOutline } from 'react-icons/io5'
import { IoMdEye } from 'react-icons/io'
import { Button } from '@heroui/react'
import { GoArrowLeft } from 'react-icons/go'
import Link from 'next/link'

const NewsDetailsCardGenerator = ({details}) => {
    if(!details){
        return <span>Loading...</span>
    }
    const item = details?.data[0];
    // if(!item){
    //     return <span>Data not found.</span>
    // }
    // console.log(8889 , details, 55,details.data[0]);
  return (
    <div> 
            <div className="card bg-base-100 shadow-sm w-full rounded-t-none">
                <figure className=" py-4">
                  <img
                    src={item.image_url}
                    alt="Shoes"
                    className="rounded-xl" />
                </figure>
                <h1 className="card-title">{item.title}</h1>
                <div className="card-body items-center text-left p-0">
                  <p>{item.details}</p>
                </div>
                <Link href="/dashboard"><button className="btn btn-error w-fit"><span className='text-2xl'><GoArrowLeft /></span>All news in this category</button></Link>
            </div>
    </div>
  )
}

export default NewsDetailsCardGenerator