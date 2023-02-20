import React  from "react"
import {Link} from "react-router-dom"
import {Button} from 'antd'

export default function Beforesignin(){
    return(
        <div>
            <div  className="bg-white drop-shadow-xl  ">
                <div className=" flex justify-between">
                    <div >
                        {/* link to the landing page */}
                        <Link to="/">
                            <img className="h-[14vh] w-[14vh] relative left-6  " alt="logo " src={require('../../Images/gig.png')} />     
                        </Link>
                    </div>
                    <div  className="flex mt-[25px] ">
                    <p className=" w-[70px] h-[20px]  font-bold text-[13px]   text-center text-black mr-[40px] cursor-pointer ">Find Artists</p>
                    <p className=" w-[70px] h-[20px] font-bold text-[13px]    text-center text-black  mr-[20px] ml-[20px]  cursor-pointer">Find Gigs</p>
                    <p className=" w-[70px] h-[20px]  font-bold text-[13px]  text-center text-black ml-[40px]  cursor-pointer">Find Shows</p>
                    </div>
                    <div className="flex  space-x-10 mr-[25px] mt-[25px]  ">
                        <Link to="/login">
                            <Button className="border-white" size="small" >Log In</Button>
                        </Link>
                        <Link to="/beforesign">
                            <Button className="border-white "size="small">Sign Up</Button>
                        </Link>
                    </div>
                </div>
            </div>
           
            <div className="flex justify-center gap-[15%] mt-[60px]">
                <div className="bg-gray-400 rounded-lg hover:drop-shadow-3xl">
                    <div className="bg-white ml-5 mr-5 mt-5 mb-5">
                        <h3 className="pl-[10px] pt-[10px] pr-[10px] text-center text-xl text-[#B3B63A]">Artist</h3>
                        <hr className="border-2 border-red-400" />
                        <p className="pl-[10px] pb-[20px] pr-[10px] text-sm pt-[50px] text-center">Want to Gig and Industry <br/> exposure</p>
                        <Link to="/onsign">
                        <button className="text-sm bg-[#B3B63A] w-full mt-3">Get Started</button>
                        </Link>
                    </div>

                </div>
                <div className="bg-gray-400 rounded-lg hover:drop-shadow-3xl">
                    <div className="bg-white ml-5 mr-5 mt-5 mb-5">
                        <h3 className="pl-[10px] pt-[10px] pr-[10px] text-center text-xl text-[#B3B63A]">Restaurant</h3>
                        <hr className="border-2 border-red-400" />
                        <p className="pl-[10px] pb-[20px] pr-[10px] text-sm pt-[40px] text-center">Want to find musical <br/>bands  and book for live<br/> music performance </p>
                        <Link to="/onsign">
                        <button className="text-sm bg-[#B3B63A] w-full mt-3">Get Started</button>
                        </Link>
                    </div>

                </div>
                <div className="bg-gray-400 rounded-lg hover:drop-shadow-3xl">
                    <div className="bg-white ml-5 mr-5 mt-5 mb-5">
                        <h3 className="pl-[10px] pt-[10px] pr-[10px] text-center text-xl text-[#B3B63A]">Restaurant</h3>
                        <hr className="border-2 border-red-400" />
                        <p className="pl-[10px] pb-[20px] pr-[10px] text-sm pt-[40px] text-center">Want to find live music<br/> shows and buy tickets of<br/> it. </p>
                        <Link to="/onsign">
                        <button className="text-sm bg-[#B3B63A] w-full mt-3">Get Started</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}