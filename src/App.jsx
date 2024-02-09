import React from 'react'
import {useRoutes} from "react-router-dom"
import { routes } from './routes/routes'
import NavBar from './components/NavBar/NavBar'
import PageContainer from './container/PageContainer'
import { useSelector } from 'react-redux'

function App() {

  const {mode}=useSelector((store)=>store.theme)
  const {countryItem}=useSelector((store)=>store.card)

  const rout=useRoutes(routes)
  return (
    <div className={`${mode ? 'dark' : ''} ${countryItem ? '' : 'h-screen'}`}>
      <NavBar/>
      <PageContainer>
      {rout}
      </PageContainer>
    </div>
  )
}

export default App