import React from 'react'
import LeftSideNewsCardsGenerator from './LeftSideNewsCardsGenerator'

const leftSideNewsCards = () => {
  return (
    <div className='space-y-10'>
      <LeftSideNewsCardsGenerator/>
      <LeftSideNewsCardsGenerator/>
      <LeftSideNewsCardsGenerator/>
    </div>
  )
}

export default leftSideNewsCards