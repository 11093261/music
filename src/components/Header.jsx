import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Road } from './Road'
import { useContext } from 'react'
import { Passingtext } from './Passing'

const Header = () => {
  const[moving, setmoving] = useState(null)
  const handlemove = () => {
    const move = !moving ? ("moving"): null
    setmoving(move)
    
  }
  
  return (
    <main className="h-[15vh] md:w-[100%] w-[100%]  flex justify-center items-center" onLoad={handlemove}>
      <div className=" h-[15vh] md:w-[100%]  w-screen justify-around flex-row px-2 flex items-center text-[white] bg-[#272727] border-[1px] border-black">
        <div className="md:w-[5rem] w-[4rem] md:h-[5rem] h-[4rem] rounded-full bg-red-900 relative ">
          <div className="md:w-[2.5rem] w-[2.5rem] md:h-[2.5rem] h-[2.5rem] rounded-full bg-white absolute md:top-[20px] top-[12px] md:right-[20px] right-[12px]  ">
            <div className="md:h-[2vh] h-[1rem] md:w-[2vw] w-[1rem]  bg-red-900 border-r-[3rem]  border-l-[3rem] border-r-transparent border-l-transparent translate-y-4 translate-x-4">
               <div className='relative md:-translate-y-8 md:translate-x-2 -translate-y-6'>
                <p className='text-red-900 font-bold text-[15px] '>Mint</p>

              </div>
            </div>
          </div>
        </div>
        <nav className="flex flex-row gap-[20px]  justify-between items-center md:w-[50%] w-[50%]  px-[10px] md:text-[20px] text-[10px]">
          {Road.map((item, index) => (
            <NavLink key={index} to={item.path}>
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </main>
  );
}

export default Header
