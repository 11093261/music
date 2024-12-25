import React from 'react'

const Adding = ({text,images,title}) => {
  return (
    <main className='md:h-[70vh] h-[100vh] w-[100%] justify-center items-center flex flex-col'>
        <div className='md:h-[80vh] h-[70vh] md:w-[30%] w-[80%] justify-center flex flex-col rounded-md gap-6 items-center bg-red-900'>
            <p className='w-[50%] text-center font-medium text-[white] md:text-[12px] text-[10px]'>{text}</p>
            <img src={images} alt="" className='w-[50px] h-[50px] rounded-full' />
            <b className='w-[100%] text-center font-medium md:text-[15px] text-[10px]'>{title}</b>
            <div className='md:w-[10rem] w-[5rem]  md:h-[10rem] h-[5rem] border-r-[2rem] border-t-[2rem] border-b-[10rem] border-l-[2rem] border-r-transparent border-t-transparent '>

            </div>


        </div>
        
      
    </main>
  )
}

export default Adding
