import React, { useState } from 'react'

const Practise = () => {
    const [groove,setgroove] = useState(null)
    const[display,setdisplay] = useState(null)
    const handlegroove = () => {
        const paint = !groove ? "reset" : null
        setgroove(paint)
    }
    const handlechange = (e) => {
        setdisplay(e.target.min || e.target.max)

    }
  return (
    <main>
        <form action="">
            <input type={!groove ? "reset" : null} value="display" onClick={handlegroove} min={30} max={90} onChange={handlechange}/>

        </form>
      
    </main>
  )
}

export default Practise
