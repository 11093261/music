import React from 'react'
import ben from "/ben.jpeg"

const About = () => {
  return (
    <main className='h-[70vh] flex flex-col justify-center items-center bg-[whitesmoke]'>
        <h1 className='text-[30px] font-semibold'></h1>
        <div className='w-[70%] bg-white justify-around flex h-[50vh] items-center flex-col'>
            <p className='w-[50%]'>{text}</p>
            <div className='flex flex-col justify-center items-center w-[10%] gap-5'>
                <figure className='flex justify-center items-center flex-row'>
                    <img src={ben} alt="" className='w-[100px] h-[100px] rounded-full' />
                    <b>John Deo</b>
                    <p>HR Manager</p>
                </figure>
            </div>

        </div>

    </main>
  )
}

export default About
