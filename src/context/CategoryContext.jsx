"use client"
import React, { Children, createContext, useContext, useState } from 'react'

export const CategoryAndDetailsContext = createContext("");

const CategoryAndDetailsProvider = ({children}) => {

    const [category , setCategory] = useState("08")
    const [detailsId , setDetailsId] = useState("0282e0e58a5c404fbd15261f11c2ab6a")


  return (
    <CategoryAndDetailsContext.Provider value={{category , setCategory , detailsId , setDetailsId }} >
        {children}
    </CategoryAndDetailsContext.Provider>
  )
}

export default CategoryAndDetailsProvider;