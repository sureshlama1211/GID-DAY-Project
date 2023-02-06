
import React from "react";
import { Button } from "antd";
import background from '../../Images/backgroundband.jpg';
import { Link } from "react-router-dom";

export default function Landingpage (){
    return(
      <div  className="bg-white">
        <div className=" flex justify-between">
             <div className>
             <img className="h-[15vh] w-[15vh] relative left-6 " src={require('../../Images/gig.png')} />
             </div>
             <div  className="flex mt-[28px]">
            <p className=" w-[70px] h-[55px]  font-bold text-[12px]  items-center text-center text-black mr-[40px] ">Find Artists</p>
            <p className=" w-[70px] h-[63px] font-bold text-[12px]   items-center text-center text-black  mr-[20px] ml-[20px]">Find Gigs</p>
            <p className=" w-[70px] h-[63px]  font-bold text-[12px]  items-center text-center text-black ml-[40px] ">Find Shows</p>
            </div>
            <div className="flex  space-x-10 mr-[25px] mt-[28px]  ">
              <Link to="/login">
                <Button className="border-white" size="small" >Log In</Button>
              </Link>
              <Link to="/signup">
                <Button className="border-white "size="small">Sign Up</Button>
              </Link>
            </div>
        </div>

        <div style={{backgroundImage: `url(${background})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height:"90vh"
              
      }} className="mt-[-25px] text-center">
          <div  className=" relative top-[120px]">
          <p className="text-4xl  font-kadwa font-bold text-[#332727]">GIG-DAY</p>
          <p className=" text-[19px] font-bold  text-[#4D3939]">Book Artists for live music and buy show tickets easily   
          </p>
          <p className=" text-[14px] font-bold text-[#4D3939]">Connect Restaurants,Artist and Viewers</p>
          <Link to="/signup">
            <Button className="mt-[20px]  bg-[#4D3939] text-white rounded-xl border-gray-400">Join Now</Button>
          </Link>
          </div>
        </div>
        </div>
                
    )
}