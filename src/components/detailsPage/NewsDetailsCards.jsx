"use client"
import React, { useContext, useEffect, useState } from 'react'
import NewsDetailsCardGenerator from './NewsDetailsCardGenerator'
import { CategoryAndDetailsContext } from '@/context/CategoryContext';
import newsById from "@/../public/data/news-details-by-id.json"

const NewsDetailsCards = () => {

    const {detailsId , setDetailsId} = useContext(CategoryAndDetailsContext);
    const [details , setDetails] = useState (null)
  
    useEffect(()=>{
      const fetchData = async () =>{
      const newsDetails = newsById ;
      setDetails(newsDetails[`${detailsId}`]);
      // console.log(newsDetails,"aaa" ,details , "abcd");
      }
      if(detailsId){
      fetchData();
      }
    },[detailsId])


  return (
    <div>
        <NewsDetailsCardGenerator details = {details} />
    </div>
  )
}

export default NewsDetailsCards
