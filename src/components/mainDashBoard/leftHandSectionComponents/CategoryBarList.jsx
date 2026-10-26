"use client"
import { CategoryAndDetailsContext } from '@/context/CategoryContext';
import React, { useContext } from 'react'

const CategoryBarList = ({allCategory}) => {
  const {category,setCategory } = useContext(CategoryAndDetailsContext);
  return (
        <div className='flex flex-col gap-2'>
          {
            allCategory.map((item,i)=>{
              return <button onClick={()=>setCategory(item.category_id)} className={`${item.category_id==category?"bg-base-300":""} hover:bg-base-300 p-2.5 rounded-2xl `}  key={i}>{item.category_name}</button>
            })
          }
        </div>
  )
}

export default CategoryBarList;