"use client"
import React, { use, useContext, useEffect, useState } from 'react'
import NewsCardGenerator from './NewsCardGenerator'
import Link from 'next/link';
import { CategoryAndDetailsContext } from '@/context/CategoryContext';
import newsByCategory from "@/../public/data/news-by-category.json"


const NewsCardsDashboard = () => {
  
  const {category,setCategory} = useContext(CategoryAndDetailsContext);
  const [news , setNews] = useState ([])

  useEffect(()=>{
    const fetchData = async () =>{
        const allNewsInACategory = newsByCategory.by_category[`${category}`].data;
        // const allNewsInACategory = await allNewsInACategoryRes.json() ;
        setNews(allNewsInACategory);
        // console.log(787878,newsByCategory, "abcd");
    }
    if(category){
    fetchData();
    }
  },[category])

console.log(556677, news)
  return (
    <div className='flex flex-col gap-4 mt-5'>
      <button><NewsCardGenerator news={news} /></button>
    </div>
  )
}

export default NewsCardsDashboard;