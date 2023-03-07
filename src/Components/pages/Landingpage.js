
import React from "react";
import { Button } from "antd";
import background from '../../Images/backgroundband.jpg';
import { Link } from "react-router-dom";

export default function Landingpage (){
    return(
      <div  className="bg-white">
        <div className=" flex justify-between">
             <div className>
             <img alt="photooflanding" className="h-[13vh] w-[13vh] relative left-6 " src={require('../../Images/gig.png')} />
             </div>
             <div  className="flex mt-[28px]">
            <p className=" w-[90px] h-[55px]  font-bold text-[15px]  items-center text-center text-black mr-[40px] ">Find Artists</p>
            <p className=" w-[80px] h-[63px] font-bold text-[15px]   items-center text-center text-black  mr-[20px] ml-[20px]">Find Gigs</p>
            <p className=" w-[80px] h-[63px]  font-bold text-[15px]  items-center text-center text-black ml-[40px] ">Find Shows</p>
            </div>
            <div className="flex  space-x-10 mr-[25px] mt-[28px]  ">
              <Link to="/login">
                <Button className="border-white font-semibold  text-[15px]" size="medium" >Log In</Button>
              </Link>
              <Link to="/beforesign">
                <Button className="border-white font-semibold text-[15px] "size="medium">Sign Up</Button>
              </Link>
            </div>
        </div>

        <div style={{backgroundImage: `url(${background})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height:"90vh"
              
      }} className="mt-[-20px]">
          <div  className=" text-center relative top-[35%] ">
          <p className="text-5xl  font-kadwa font-bold text-[#332727]">GIG-DAY</p>
          <p className=" text-[23px] font-bold  text-[#4D3939]">Book Artists for live music and buy show tickets easily   
          </p>
          <p className=" text-[17px] font-bold text-[#4D3939]">Connect Restaurants,Artist and Viewers</p>
          <Link to="/beforesign">
            <Button className="mt-[20px]  bg-[#4D3939] text-white rounded-xl  border-gray-400" size="large">Join Now</Button>
          </Link>
          </div>
        </div>
        </div>
                
    )
}