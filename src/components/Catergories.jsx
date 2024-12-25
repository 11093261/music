import React from 'react'

const Catergories = () => {
  return (
    <main className='md:h-[70vh] h-[100vh] md:w-[100%] w-[100%] justify-center items-center flex flex-col bg-red-900'>
      <div className='md:h-[50vh] h-[70vh] md:w-[50%] w-[100%] grid grid-cols-3 px-[10px]'>
        <div className='col-start-1 col-end-2'>
          <h2 className='font-bold w-[100%] text-white text-[10px] text-center'>Most Popular Artist</h2>
          <div className='text-center w-[100%]'>

            <p>Burnaboy</p>
            <p>Wizkid</p>
            <p>Omar Lay</p>
            <p>P-square</p>
            <p>Banky-W</p>
            <p>2Face</p>
            <p>Davido</p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>

        </div>
        <div className='col-start-2 col-end-3'>
          <h2 className='w-[100%] font-bold text-white text-[10px] text-center'>Upcoming Artist</h2>
          <div className='text-center'>

            <p>Fireboy</p>
            <p>Asake</p>
            <p>Chike</p>
            <p>Berlashda</p>
            <p>Kecee</p>
          </div>

        </div>
        <div className='col-start-3 col-end-4'>
          <h2 className='w-[100%] text-[10px] font-bold text-white text-center'>Most Played songs in 2024</h2>
          <div className='text-center w-[100%]'>

            <p>Burna-boys still remains the top banger in the whole of Africa now.</p>
          </div>

        </div>



      </div>
      
    </main>
  )
}

export default Catergories
