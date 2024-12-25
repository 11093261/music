import React from "react";

const Props = ({ text, images,title,names}) => {
  return (
    <main className="h-[40vh] w-[100%] justify-center items-center flex  flex-col py-16 ">
      <div className="h-[60vh] w-[80%] justify-center items-center flex bg-white flex-col">
        <p className="w-[50%] font-semibold text-[18px]">{text}</p>
        <div className="flex w-[80%] justify-center  items-center flex-row">
          <img  className="w-[50px] h-[50px] rounded-full " src={images} alt=""/>
          <div className="w-[70%] h-[20vh] justify-center flex flex-col items-center">

          <b className="w-[100%] text-blue-600">{title}</b>
          <p className="w-[100%]">{names}</p>
          </div>
        </div>
      </div>
      <div className="border-r-[2rem] border-l-[2rem] border-t-[4rem] border-r-transparent  w-[4rem] h-[4rem] border-l-transparent border-t-white relative -translate-x-12 right-20"></div>
    </main>
  );
};

export default Props;
