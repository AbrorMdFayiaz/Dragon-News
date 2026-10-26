import React from 'react'
import SocialLogin from './rightHandSectionComponents/SocialLogin'
import Qzone from './rightHandSectionComponents/Qzone'
import Find from './rightHandSectionComponents/Find'
import darkImage from '../../assets/bg.png';
import Image from 'next/image';

const RightHandSection = () => {
  return (
    <div className='space-y-8'> 
      <SocialLogin/>
      <Find/>
      <Qzone/>
      <Image src={darkImage} alt="" className='w-full h-125'/>
    </div>
  )
}

export default RightHandSection