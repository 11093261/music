import React from 'react'
import Adding from './Adding'
import pic4 from "/pic4.jpg"
import pic6 from "/pic6.jpg"
import Music from './Music'
import Header from './Header'
import { Outlet } from 'react-router-dom'



const Body = () => {
  return (
    <main className="">
      <Header />
      <Outlet />
      
    </main>
  );
}

export default Body
