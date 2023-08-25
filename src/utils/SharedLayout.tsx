import React from 'react'
import { Outlet } from "react-router-dom";
import { Navbar } from '../components/Navbar';
// import { Propectus } from '../components/Propectus';
import { GlobalUseContext } from './Context';
import { Footer } from '../components/Footer';


export const SharedLayout:React.FC = () => {
  const { handleDropDown } =GlobalUseContext()
  return (
    <section onClick={()=>handleDropDown()}>
        <Navbar />
        {/* <Propectus /> */}
        <Outlet/>
        <Footer />
    </section>
  )
}
