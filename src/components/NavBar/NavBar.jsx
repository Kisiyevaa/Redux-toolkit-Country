import React from 'react'
import NavbarLeft from './NavbarLeft'
import NavbarRight from './NavbarRight'
import "../../assets/style.scss"
function NavBar() {
  return (
    <div className='box'>
       <div  className='flex justify-between items-center py-1 px-10 md:px-0 containers m-auto'>
       <NavbarLeft/>
        <NavbarRight/>
       </div>
    </div>
  )
}

export default NavBar