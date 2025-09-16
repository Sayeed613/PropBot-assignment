import React from 'react'
import AllRoutes from './components/AllRoutes'
import Navbar from './components/Navbar'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
    <Navbar/>
    <div className='pt-16'>

    <AllRoutes/>
          <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

    </div>
    </>
  )
}

export default App