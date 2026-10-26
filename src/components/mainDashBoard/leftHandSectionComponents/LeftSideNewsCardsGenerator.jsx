import Image from 'next/image'
import React from 'react'
import { CiCalendar } from 'react-icons/ci'
import image from "../../../assets/demo-card-thumbnail.png"

const LeftSideNewsCardsGenerator = () => {
  return (
    <div>
        <div className=" w-full ">
          <figure>
            <Image
              src={image} className="rounded-xl"
              alt="Shoes" width={300} height={200} />
          </figure>
          <div className=" border-none shadow-none">
            <h2 className="card-title my-4">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
            <div className="card-actions text-base font-semibold flex items-center gap-2">
                <span className="mr-8">Sports</span><CiCalendar /><span>Nov 27, 2025</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LeftSideNewsCardsGenerator