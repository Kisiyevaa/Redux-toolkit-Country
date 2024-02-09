import React from 'react'
import { useSelector } from 'react-redux'
function Loading() {
    const {mode}=useSelector((store)=>store.theme)
  return (
    <div className={`${mode ? "dark h-[100vh]" :false} py-20  text-center text-xl font-medium`}>Loading...</div>
  )
}

export default Loading