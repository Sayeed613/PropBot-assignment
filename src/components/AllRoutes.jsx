import React from 'react'
import { Routes , Route} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ListingPage from '../pages/ListingPage'
import SignupPage from '../pages/SignupPage'
import LoginPage from '../pages/LoginPage'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/listing' element={<ListingPage />}/>
        <Route path='/signup' element={<SignupPage />}/>
        <Route path='/login' element={<LoginPage />}/>
    </Routes>
  )
}

export default AllRoutes