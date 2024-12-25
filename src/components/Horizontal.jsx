import React, { useState } from 'react'
import { Vertical } from './Vertical'

const Horizontal = () => {
    const[para,setpara] =useState(null);
    const HandleClick = (value) =>{
        setpara(para === value ? para: index);

    }

    

  return (
    <main className="h-[70vh] w-[100%] justify-center items-center flex-col bg-teal-200">
      {Vertical.map((items, index) => {
        <div
          key={index}
          className="h-[50vh] w-[80%] justify-center items-center flex-col"
        >
          <div className="h-[15vh] w-[50%] flex  flex-col justify-center items-center bg-[#272728] text-white">
            <p>{items.question}</p>
          </div>
          {para === index && (
            <div className="h-[15vh] w-[50%] flex flex-col justify-center items-center bg-[#272728] text-white">
              <p>{items.answer}</p>
            </div>
          )}
        </div>;
      <div className="flex h-[30vh] w-[100%] justify-center  items-center">
        <div onClick={() => HandleClick(index)}>
          <button>submit {para}</button>
        </div>
      </div>
      })}
    </main>
  );
}

export default Horizontal
