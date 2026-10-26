import dns from "node:dns"
dns.setServers(['8.8.8.8','8.8.4.4'])
import NavBar from '@/components/NavBar'
import ProfileAndLoginSection from '@/components/ProfileAndLoginSection'
import React from 'react';

const layout = ({ children }) => {
  return (
    <div className='bg-base-300 w-full h-screen p-3 '>
        <div className="mt-2 flex justify-between py-1 rounded-lg ml-auto relative container mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2"><NavBar/></div>
            <div className="absolute right-0"><ProfileAndLoginSection/></div>
        </div>
        {children}
    </div>
  )
}

export default layout