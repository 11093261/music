import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from './components/Body'
import { Routes,Route,Router } from 'react-router-dom'
import Music from './components/Music'
import Catergories from './components/Catergories'
import Home from "./components/Home"
import More from "./components/More"
import Adding from './components/Adding'
import pic4 from "/pic4.jpg"
import pic6 from "/pic6.jpg"
import { Passingtext } from './components/Passing'
import { createContext } from 'react'






function App() {
  const[message,setmessage]= useState("")
  const[words,setwords] = useState("")



  

  return (
    <>
      <main>
        <Passingtext.Provider value={{message, setmessage,words,setwords}}>
          <Routes>
            <Route path="/" element={<Body/>}>
              <Route path="/Adding" element={<Adding />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Music" element={<Music />} />
              <Route path="/Catergories" element={<Catergories />} />
              <Route path="/More" element={<More />} />
            </Route>
          </Routes>
        </Passingtext.Provider>
        <div className="md:h-[150vh] h-[150vh] w-[100%] justify-center items-center flex-col flex bg-red-900">
          <h1 className="text-center font-bold text-[30px] text-[white]">
            WE ARE AFROMUSIC
          </h1>
          <div className="md:h-[130vh] h-[100vh] w-[100%] md:w-[100%] justify-between gap-4 items-center flex bg-white">
            <Adding
              text="You are our special guest of honour to see that you are made"
              images={pic4}
              title="we are you music companion"
            />
            <Adding
              text="You are looking for the best music look no more."
              images={pic6}
              title="Let's play you something nice"
            />
      
          </div>
        </div>
      </main>
    </>
  );
}

export default App
