import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
      <>
      
      <nav className="text-[#dadada] bg-transparent pt-[5vh] font-[Gilroy-Regular] flex fixed  w-screen z-[100] place-content-between">

            <div className="bg-transparent pl-[4.68vw] hover:scale-125" id="logo">
                <img src={logo} className="w-[2vw] h-15 bg-transparent" />
            </div>


            <ul className=" bg-transparent flex px-[3rem] text-[1.35vw] place-content-between items-end">
                
                <li className="bg-transparent mx-[2.92vw] hover:text-[#fff] hover:text-[1.7vw] hover:cursor-pointer drop-shadow-[0_5px_3px_rgba(0,0,0,1)]">work</li>
                <li className="bg-transparent mx-[2.92vw] hover:text-[#fff] hover:text-[1.7vw] hover:cursor-pointer drop-shadow-[0_5px_3px_rgba(0,0,0,1)]">about</li>
                <li className="bg-transparent mx-[2.92vw] hover:text-[#fff] hover:text-[1.7vw] hover:cursor-pointer drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">blog</li>
                <li className="bg-transparent mx-[2.92vw] hover:text-[#fff] hover:text-[1.7vw] hover:cursor-pointer drop-shadow-[0_5px_3px_rgba(0,0,0,1)]">contact</li>
                <li className="bg-transparent mx-[2.92vw] hover:text-[#fff] hover:text-[1.7vw] hover:cursor-pointer drop-shadow-[0_5px_3px_rgba(0,0,0,1)]">light</li>
            </ul>
        </nav>















        {/* <div className="mt-[4rem] ml-[5rem] z-0 bg-transparent">
        
        <h1 id="logo">d</h1>
        <h1 className="font-[Geo] text-[#f5f5f7] text-[55px] non-italic font-medium leading-none">d</h1>
        </div> */}

      </>
  );
};

export default Navbar;
