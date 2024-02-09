import React from 'react'
import { IoMoon } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { MdWbSunny } from "react-icons/md";
import { toggleDarkMode } from '../../redux/themeSlice';

function NavbarRight() {

  const dispatch=useDispatch()
  const {mode} =useSelector((state)=>state.theme)

  return (
    <div>
      {
        mode ?
       <p className='flex items-center'> <MdWbSunny size={25}  className='pt-1 mx-2' onClick={()=>dispatch(toggleDarkMode())}/> Light Mood</p>
        :
        <p  className='flex items-center'><IoMoon size={25}  className='pt-1 mx-2' onClick={()=>dispatch(toggleDarkMode())}/> Dark Mood</p>
      }
    </div>
  )
}

export default NavbarRight