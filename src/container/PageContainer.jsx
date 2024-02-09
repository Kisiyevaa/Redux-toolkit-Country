import React from 'react'
import "../assets/style.scss"

function PageContainer({children}) {
  return (
    <div className='containers'>{children}</div>
  )
}

export default PageContainer