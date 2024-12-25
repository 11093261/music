import React, { useContext, useState } from 'react'
import { Practise } from './Practise'

const Old = () => {
  const[{userid}]=useContext(Practise)
  const Handleclick = () =>{
    setpara("bg-yellow-200")
  }
  return (
    <div className='flex flex-col h-[70vh] w-[100%] justify-center items-center'>
        <p> {userid}I am a deligent software developer</p>
        <button onClick={Handleclick}>send</button>
    </div>
  )
}

export default Old
