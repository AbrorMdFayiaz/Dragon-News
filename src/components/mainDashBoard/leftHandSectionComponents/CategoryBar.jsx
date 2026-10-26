import { CategoryAndDetailsContext } from '@/context/CategoryContext';
import React, { useContext } from 'react'
import CategoryBarList from './CategoryBarList';
import categoryNews from "@/../public/data/allCategory.json"

const CategoryBar = async () => {
  const newsCategoryres = await  categoryNews;
  // const newsCategory = await newsCategoryres.json() ;
  const allCategory = newsCategoryres.data.news_category;
  // console.log(category)

  return (

    // <div className='space-y-8'>
      <CategoryBarList allCategory={allCategory} />
      // {
      //   allCategory.map((item,i)=>{
      //     return <h3 key={i}>{item.category_name}</h3>
      //   })
      // }
    // </div>
  )
}

export default CategoryBar