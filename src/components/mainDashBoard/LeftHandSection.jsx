import React from 'react'
import CategoryBar from './leftHandSectionComponents/CategoryBar'
import LeftSideNewsCards from './leftHandSectionComponents/LeftSideNewsCards'

const LeftHandSection = () => {
  return (
    <div className='space-y-15'>
        <h1>All Caterogy</h1>
        <section className='text-center'>
            <CategoryBar/>
        </section>
        <section className=''>
            <LeftSideNewsCards/>
        </section>
    </div>
  )
}

export default LeftHandSection