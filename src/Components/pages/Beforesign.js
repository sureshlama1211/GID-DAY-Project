import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import background from "../../Images/bgloginsign.jpg";

export default function Beforesignin() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-white drop-shadow-xl  ">
        <div className=" flex justify-between">
          <div className>
            <Link to="/">
              <img
                alt="photooflanding"
                className="h-[13vh] w-[13vh] relative left-6 "
                src={require("../../Images/gig.png")}
              />
            </Link>
          </div>

          <div className="flex  space-x-10 mr-[25px] mt-[28px]  ">
            <Link to="/login">
              <Button
                className="border-white font-semibold  text-[15px]"
                size="medium"
              >
                Log In
              </Button>
            </Link>
            <Link to="/beforesign">
              <Button
                className="border-white font-semibold text-[15px] "
                size="medium"
              >
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "85vh",
        }}
      >
        <div className="flex justify-center gap-[15%] pt-[10%]">
          <div className="rounded-lg hover:drop-shadow-3xl">
            <div className="bg-white  rounded-lg hover:drop-shadow-3xl px-2 py-8">
              <h3 className="pl-[15px] pt-[10px] pr-[15px] text-center text-2xl text-[#B3B63A]">
                Artist
              </h3>
              <hr className="border-1 border-red-400" />
              <p className="pl-[15px] pb-[20px] pr-[15px] text-[18px] pt-[50px] text-center">
                Want to Gig and Industry <br /> exposure
              </p>
              <Link to="/signup?role=artist">
                <button className="text-[15px] bg-orange-600 w-full mt-3 rounded-md hover:bg-black hover:text-white">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
          <div className=" ">
            <div className="bg-white rounded-lg hover:drop-shadow-3xl p-5 ">
              <h3 className="pl-[15px] pt-[10px] pr-[15px] text-center text-2xl text-[#B3B63A]">
                Restaurant
              </h3>
              <hr className="border-1 border-red-400" />
              <p className="pl-[15px] pb-[20px] pr-[15px] text-[18px] pt-[40px] text-center">
                Want to find musical <br />
                bands and book for live
                <br /> music performance
              </p>
              <Link to="/signup?role=restaurant">
                <button className="text-[15px] rounded-md hover:bg-black hover:text-white bg-orange-600 w-full mt-3">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
          <div className="">
            <div className="bg-white rounded-lg hover:drop-shadow-3xl px-1 py-8">
              <h3 className="pl-[15px] pt-[10px] pr-[15px] text-center text-2xl text-[#B3B63A]">
                viewer
              </h3>
              <hr className="border-1 border-red-400" />
              <p className="pl-[15px] pb-[20px] pr-[15px] text-[18px] pt-[40px] text-center">
                Want to find live music
                <br /> shows and buy tickets of it
              </p>
              <Link to="/signup?role=viewer">
                <button className="text-[15px] rounded-md hover:bg-black hover:text-white bg-orange-600 w-full mt-3">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
