import LeftHandSection from '@/components/mainDashBoard/LeftHandSection'
import MiddleSection from '@/components/mainDashBoard/MiddleSection'
import React from 'react'

const page = () => {
  return (
    <>
    <section className='grid grid-cols-3 gap-4'>
    <div className='col-span-1'><LeftHandSection/></div>
    <div className='col-span-2'><MiddleSection/></div>
    </section>
    </>
  )
}

export default page