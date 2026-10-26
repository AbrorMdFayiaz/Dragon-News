import React from 'react'
import styling from "./dashboard.module.css"
import BreakingNewsBar from '@/components/BreakingNewsBar'
import NavBar from '@/components/NavBar'
import ProfileAndLoginSection from '@/components/ProfileAndLoginSection'
import RightHandSection from '@/components/mainDashBoard/RightHandSection'
import CategoryAndDetailsProvider from '@/context/CategoryContext'
const DashBoard = ({ children }) => {
  return (

    <CategoryAndDetailsProvider>
      <div className='container mx-auto'>
          <section className='text-center my-6 space-y-1.5'>
              <h1 className={styling.h1 + " text-6xl"}>The Dragon News</h1>
              <p className='text-lg'>Journalism Without Fear or Favour</p>
              <h6 className='text-[20px]'>Sunday, November 27, 2025</h6>
          </section>
          <BreakingNewsBar/>
          <div className="mt-6 flex justify-between py-2 rounded-lg ml-auto relative ">
              <div className="absolute left-1/2 transform -translate-x-1/2"><NavBar/></div>
              <div className="absolute right-0"><ProfileAndLoginSection/></div>
          </div>
          {/* main content section */}
          <section className='grid grid-cols-4 gap-4 mt-6'>
            <section className='col-span-3'>
              {children}
            </section>
            <RightHandSection/>
          </section>
      </div>
    </CategoryAndDetailsProvider>
  )
}

export default DashBoard