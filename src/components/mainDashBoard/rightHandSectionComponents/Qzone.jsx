import React from 'react'
import swiming from '../../../assets/swimming.png'
import classroom  from '../../../assets/class.png'
import playground from '../../../assets/playground.png'
import Image from 'next/image'

const Qzone = () => {
  return (
    <div className='bg-base-200 p-4'>
        <h1>Q-zonee</h1>
        <section className="space-y-4 mt-4">
            <Image src={swiming} alt="" />
            <Image src={classroom} alt="" />
            <Image src={playground} alt="" />
        </section>
    </div>
  )
}

export default Qzone