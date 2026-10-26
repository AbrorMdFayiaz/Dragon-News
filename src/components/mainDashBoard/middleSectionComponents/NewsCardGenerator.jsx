"use client"
import Image from 'next/image'
import React, { useContext } from 'react'
import user from "../../../assets/demo-user.png"
import { IoBookmarkOutline, IoShareSocialOutline } from 'react-icons/io5'
import { IoMdEye } from 'react-icons/io'
import { FaStar } from 'react-icons/fa6'
import Link from 'next/link'
import { CategoryAndDetailsContext } from '@/context/CategoryContext'


const NewsCardGenerator = ({news}) => {

    const {setDetailsId} = useContext(CategoryAndDetailsContext);

    console.log('mappp' , news);
    return (
    <> 

      {
        news.map((item,i)=>{
            const a = item.rating.number;
          return <Link key={i} onClick={()=>setDetailsId(item._id)} href="/dashboard/details">


         <section className="flex justify-between bg-base-300 rounded-t-2xl p-5 items-center">
            <div className="flex gap-3">
                <Image
                    src={`${item.author.img}`}
                    alt="author image"
                    className="rounded-xl"
                    width={50}
                    height={10}
                />
                <article className="">
                    <h3>{item.author.name}</h3>
                    <p>{(item.author.published_date)?.slice(0,10)}</p>
                </article>
            </div>
            <div className="flex gap-3 text-2xl">
                <IoBookmarkOutline />
                <IoShareSocialOutline />
            </div>
        </section>
        <div className="card bg-base-100 shadow-sm w-full rounded-t-none">
            <h1 className="card-title">{item.title}</h1>
            <figure className=" py-4">
              <img
                src={item.thumbnail_url}
                alt="Shoes"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-left border-b-2 border-base-300 p-0">
              <p>{item.details}</p>
              <p className="text-orange-500  cursor-pointer text-left mr-auto">Read More</p>
              <div className="card-actions">
              </div>
            </div>
            <section className="flex justify-between py-3 text-lg">
                <div className="flex items-center gap-2 text-orange-500">
                    { a<1.5 ? <FaStar /> 
                    : a<2.5 
                    ? <><FaStar /><FaStar /></>
                    : a<3.5 
                    ? <><FaStar /><FaStar /><FaStar /></>
                    : a<4.6 
                    ? <><FaStar /><FaStar /><FaStar /><FaStar /></>
                    : <><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></>
                    }
                <span className="text-lg text-gray-500 font-semibold">{a}</span></div>
                <div className="flex items-center gap-2"><IoMdEye /> {item.total_view}</div>
            </section>
        </div>




          </Link>
        })
      }





    </>
  )
}

export default NewsCardGenerator