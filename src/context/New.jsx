import React, { useContext, useState } from 'react'
import { Practise } from './Practise'

const New = () => {
  const[setuserid] = useContext(Practise)
  const[display, setdisplay] = useState()
  const Handleclick = (e)=>{
    e.preveDefault()
    setuserid(display)
    setdisplay("")

  }
  const Handlechange = (e)=>{
    setdisplay(e.target.value)
  }
  return (
    <div className='h-[70vh] w-[100%] flex-col justify-center items-center'>
      <form action="" onSubmit={Handleclick}>
        <input type="text" value={display} onChange={Handlechange}/>
      </form>
      
    </div>
  )
}

export default New
