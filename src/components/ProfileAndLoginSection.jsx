import Link from 'next/link'
import React from 'react'
import { CgProfile } from 'react-icons/cg'

const ProfileAndLoginSection = () => {
  return (
    <div className="flex items-center space-x-2 text-xl font-semibold">
        <button className="text-4xl"><CgProfile /></button>
        <Link href="/authentication/login"><button className="bg-[#403F3F] text-white px-10 py-2 hover:opacity-80">
            Login
        </button></Link>
    </div>
  )
}

export default ProfileAndLoginSection