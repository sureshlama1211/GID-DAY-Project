import React  from "react"
import {Link} from "react-router-dom"
import {Button} from 'antd'
import { useNavigate } from "react-router-dom"
import background from '../../Images/bgloginsign.jpg'

export default function Beforesignin(){
    const navigate = useNavigate();
    return(
        <div>
            <div  className="bg-white drop-shadow-xl  ">
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
            </div>

           <div style={{backgroundImage: `url(${background})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height:"85vh",
              
      }}>
            <div className="flex justify-center gap-[15%] pt-[10%]">
                <div className="bg-gray-400 rounded-lg hover:drop-shadow-3xl">
                    <div className="bg-white ml-5 mr-5 mt-5 mb-5">
                        <h3 className="pl-[15px] pt-[10px] pr-[15px] text-center text-2xl text-[#B3B63A]">Artist</h3>
                        <hr className="border-2 border-red-400" />
                        <p className="pl-[15px] pb-[20px] pr-[15px] text-[18px] pt-[50px] text-center">Want to Gig and Industry <br/> exposure</p>
                        <Link to="/signup?role=artist">
                        <button  className="text-[15px] bg-[#B3B63A] w-full mt-3">Get Started</button>
                        </Link>
                    </div>

                </div>
                <div className="bg-gray-400 rounded-lg hover:drop-shadow-3xl">
                    <div className="bg-white ml-5 mr-5 mt-5 mb-5">
                        <h3 className="pl-[15px] pt-[10px] pr-[15px] text-center text-2xl text-[#B3B63A]">Restaurant</h3>
                        <hr className="border-2 border-red-400" />
                        <p className="pl-[15px] pb-[20px] pr-[15px] text-[18px] pt-[40px] text-center">Want to find musical <br/>bands  and book for live<br/> music performance </p>
                        <Link to="/signup?role=restaurant">
                        <button className="text-[15px] bg-[#B3B63A] w-full mt-3">Get Started</button>
                        </Link>
                    </div>

                </div>
                <div className="bg-gray-400 rounded-lg hover:drop-shadow-3xl">
                    <div className="bg-white ml-5 mr-5 mt-5 mb-5">
                        <h3 className="pl-[15px] pt-[10px] pr-[15px] text-center text-2xl text-[#B3B63A]">viewer</h3>
                        <hr className="border-2 border-red-400" />
                        <p className="pl-[15px] pb-[20px] pr-[15px] text-[18px] pt-[40px] text-center">Want to find live music<br/> shows and buy tickets of<br/> it. </p>
                        <Link to="/signup?role=viewer">
                        <button  className="text-[15px] bg-[#B3B63A] w-full mt-3">Get Started</button>
                        </Link>
                    </div>

                </div>
            </div>
            </div>
        </div>

    )
}