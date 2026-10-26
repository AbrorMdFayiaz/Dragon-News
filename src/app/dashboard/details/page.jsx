import NewsDetailsCards from '@/components/detailsPage/NewsDetailsCards'
import React from 'react'

const page = () => {
  return (
    <div className='space-y-10'>
        <h1 className='text-3xl font-bold'>Dragon News</h1>
        <NewsDetailsCards/>
    </div>
  )
}

export default page