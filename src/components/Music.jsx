import React, { useContext, useEffect, useState } from 'react'
import {  FaArrowDown, FaArrowUp, FaHeadset,  FaMagnet,  FaMusic, FaPoop, FaRandom, FaSearch } from 'react-icons/fa';
import { Passingtext } from './Passing';
import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { list } from 'postcss';


const Music = () => {
  const[text, settext] = useState(null)
  const Handlefocus = () =>{
    setInterval(() => {
      
      settext( text ? "Music our Therapy" : "Delivering our passion")
    },1000);
  }
  const{setmessage} = useContext(Passingtext)
  const[artist,setartist] = useState("")
  const Handlesubmit = (e) =>{
    e.preventDefault()
    setmessage(!artist)
  



  }
  const Handledisplay = (e) =>{
    setartist(e.target.value)

  }
  const AIMUSIC = [{
    Artist:'DAVIDO',
    Songs:"Assurance",

  },
  {
    Artist:"Wizkid",
    Songs:"wissybaby",
  }
  ]

  const nav = useNavigate()

  const Handlemusicals = () =>{
    setTimeout(() => {
      
      nav("/Catergories")
    },1000);

  }
  const {words,setwords} = useContext(Passingtext)
  const[searchout, Setsearchout] = useState("")
  const Handlesearch = (e) =>{
    e.preventDefault()
    setwords( `It a pleasure to have you chat AI about ${searchout}`)
    Setsearchout("")
    // setwords(!searchout===Artislist.filter((items)=>(
    //   Setsearchout(items.names)
      
    // )))
   
    


    
  }
  const Handleinputsearch = (e) =>{
    Setsearchout(e.target.value)
    setwords("")
    

    
    
  }

  const Artislist = [{
    names:["kiss Daniels","Omar lay","Burna-boy","Adekunle Gold"],

  },
  {
    names:["Wizkid","Fireboy","Davido","P-square","olavibes"]
  },

  ]

  
  


  
  

  


  return (
    <main className="md:grid md:grid-cols-[20%_80%] md:h-[100%]  md:w-[100%] w-[100%] grid-rows-[15vh_100vh] justify-center">
      <header className=" col-start-2 col-end-3 row-start-1 row-end-2 bg-[#212121] w-[100%]">
        <nav className="flex h-[15vh] md:w-[100%] w-[100%] justify-between gap-3 items-center px-[8px]  flex-row py-5 scroll-mx-6 overflow-auto text-white  text-[15px]">
          <div className="w-[60%] gap-[10px] flex justify-center items-center flex-row">
            <button
              onClick={Handlemusicals}
              className="bg-red-500   md:w-[8vw] w-[12vw] h-[5vh]  flex justify-between  flex-row items-center  "
            >
              <FaMusic />
              <p className="w-[100%] text-[8px]">Afrobeat</p>
            </button>
            <button
              onClick={Handlemusicals}
              className="bg-red-500 md:w-[8vw] w-[12vw] h-[5vh]  flex justify-between items-center flex-row "
            >
              <FaHeadset />
              <p className="w-[100%] text-[8px]">Jazz</p>
            </button>
            <button
              onClick={Handlemusicals}
              className="bg-red-500 md:w-[8vw] w-[12vw] h-[5vh]    flex justify-between items-center flex-row "
            >
              <FaPoop />
              <p className="w-[100%] text-[8px]">Hip-Hop</p>
            </button>
            <button
              onClick={Handlemusicals}
              className="bg-red-500 md:w-[8vw] w-[12vw] h-[5vh]   flex justify-between items-center flex-row "
            >
              <FaMagnet />
              <p className="w-[100%] text-[8px]">Electrify</p>
            </button>
            <button
              onClick={Handlemusicals}
              className="bg-red-500 md:w-[8vw] w-[12vw] h-[5vh]    flex justify-between items-center flex-row "
            >
              <FaRandom />
              <p className="w-[100%] text-[8px]">Dance-Hall</p>
            </button>
          </div>
          <form
            action=""
            className=" flex justify-center items-center border-[1px] border-black bg-[#212121] px-2 md:w-[40%] w-[40%]"
            onSubmit={Handlesubmit}
          >
            <input
              onChange={Handledisplay}
              value={artist}
              className="md:w-[20vw] w-[20vw] outline-none border-none bg-[#212121] md:text-[15px] text-[8px]"
              type="text"
              name=""
              id=""
              placeholder="Find an artist/songs"
            />
            <button className="border-none outline-none bg-[#212121]">
              <FaSearch className="w-[5vw] text-white" />
            </button>
          </form>
        </nav>
      </header>
      <div className="col-start-1  col-end-2  row-start-1 row-end-3 bg-red-900">
        <div className="border-r-[3rem] border-b-[2rem] border-l-[2rem] border-r-transparent border-t-[3rem] border-t-transparent border-b-white  border-l-traparent"></div>
        <div
          className="h-[30vh] w-[100%] flex justify-center items-center flex-row"
          onMouseOver={Handlefocus}
        >
          <p className="w-[100%] bg-white h-[15vh] rounded-md font-bold text-[20px] py-5 text-center text-red-900">
            {text}
          </p>
        </div>
      </div>
      <div className="col-start-2  col-end-3  row-start-2 row-end-3 md:flex-row flex-col   flex md:h-[100vh] h-[120vh] px-8 w-[100%] justify-center gap-12 items-center">
        <div className="boreder-[1px] h-[80vh] w-[100%] justify-center flex items-center shadow-md shadow-black rounded-md">
          <div className="flex flex-col justify-center h-[30vh] w-[50%] items-center gap-5">
            <h1 className="font-bold">Ask AI for songs</h1>
            <div>
              {Artislist.map((list, index) => (
                <div key={index}>
                  <p>{list.names}</p>
                </div>
              ))}
            </div>
            <p>{words}</p>

            <form
              action=""
              className="bg-white border-[1px] rounded-sm  py-2 px-5 flex flex-row justify-center gap-4 items-center"
            >
              <input
                type="search"
                name=""
                id=""
                placeholder="search"
                className="bg-white outline-none border-none   "
                onChange={Handleinputsearch}
                value={searchout}
              />
              <button
                className="bg-red-900 md:w-[5vw] w-[10vw] flex justify-center items-center md:h-[5vh] h-[4vh]  border-none rounded-full"
                onClick={Handlesearch}
              >
                <FaArrowDown className="text-white" />
              </button>
            </form>
          </div>
        </div>
        <div className=" h-[80vh] w-[100%] justify-center flex items-center flex-col shadow-md shadow-black rounded-md">
          <div className="w-[10rem] h-[10rem] rounded-full bg-red-900 relative">
            <div className="w-[5rem] h-[5rem] rounded-full bg-white absolute top-[40px] right-[40px]">
              <div className="h-[5vh] w-[12vw] bg-red-900 border-r-[3rem] border-l-[3rem] border-r-transparent border-l-transparent translate-y-8 translate-x-8">
                <div className="relative -translate-y-10 translate-x-10">
                  <p className="text-red-900 font-bold text-[30px]">Mint</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>{setmessage}</p>
      </div>
    </main>
  );
}

export default Music
