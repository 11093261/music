import React, { useRef, useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa';

const More = () => {
  const News = [
    {
      News:"Singer Olamide is seen as a threat to women",
      Item:"Who cares about that",
    },
    {
      News:"Which singer in Nigeria is the bigegest now",
      Item:"I believe Burnaboy is the big dog now",

    },
    {
      News:"Bigbrother9ja former housemate Boma is commenting on the importance of investing in film making.",
      Item:"I believe Nigeria filming industry lacks investment.",
    },
    {
      News:"Who is the most performing artist in Nigeria music Indusry",
      Item:"We Believe the industry is too big for that",
    }

  ]
  const[adding,setadding]= useState(null)
  const Handleleading = () =>{
    setadding(!adding ? <FaPlus/>:<FaMinus/>)
  }
  

  
  
    
  
  
  return (
    <main className="md:h-[120vh] h-[120vh] md:w-[100%] w-[100%]flex justify-center item-center flex-col bg-red-900">
      <div className="md:h-[100vh] h-[100vh] md:w-[100%] w-[100%] flex justify-center items-center flex-col gap-6">
        <h1 className="text-white text-center text-[20px]">
          News and Headline
        </h1>
        <div className="md:w-[80%] w-[100%]   flex justify-center items-center flex-col md:h-[90vh] h-[100vh] ">
          {News.map((tell, index) => (
            <div className='bg-black h-[20vh] w-[100%] flex justify-center flex-row items-center'>

              <div
                key={index}
                className="bg-black h-[20vh] w-[100%] flex justify-center flex-col gap-1 items-center"
                >
                <div className="flex justify-center gap-3 flex-row items-center w-[100%]">
                  <p className="bg-[#272727] h-[8vh] text-white w-[50%]  text-center font-bold md:text-[15px] flex items-center justify-center text-[8px]">
                    {tell.News}
                  </p>
                  <span onClick={Handleleading} className='text-white'>
                    {!adding ?<FaPlus/>:<FaMinus/>}

                  </span>
                </div>
                <div className="flex justify-center gap-3 flex-row items-center w-[100%]">
                  {adding  &&<p className="bg-[#272727] h-[8vh] text-red-900 md:w-[50%] text-center md:text-[15px] text-[8px] w-[50%] flex items-center justify-center">
                    {tell.Item}
                  </p>}
                  
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default More