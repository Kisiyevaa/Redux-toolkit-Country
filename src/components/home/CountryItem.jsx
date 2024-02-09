import React from 'react'
import "../../assets/style.scss"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function CountryItem({item}) {
  const {mode} =useSelector((store)=>store.theme)
  return (
    <div className={`border-2  ${mode ? "boxs-white border-gray-500" :"boxs border-gray-200"}  rounded-sm w-[85%] m-auto md:w-[45%] lg:w-[30%] xl:w-[23%] h-[370px]`}>
       <Link to={`/${item.cca2}`}>
       <img src={item.flags.png} alt=""  className='h-[200px] w-[100%]'/>
      <div className='p-2'>
      <h1 className='text-2xl py-1'><span className='font-medium'>Name:</span> {item.name.common}</h1>
        <p className='text-2xl py-1'><span className='font-medium'>Region:</span> {item.region}</p>
        <p  className='text-md italic py-1'>{item.name.official}</p>
      </div>
       </Link>
    </div>
  )
}

export default CountryItem        