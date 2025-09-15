import React from 'react'
import AllRoutes from './components/AllRoutes'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <Navbar/>
    <div className='pt-16'>

    <AllRoutes/>
    </div>
    </>
  )
}

export default App