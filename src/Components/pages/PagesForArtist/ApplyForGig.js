import React from "react";
import { Link } from "react-router-dom";
import { FcAbout, FcBusinessContact } from "react-icons/fc";
import { SiTwitter, SiFacebook } from "react-icons/si";
import { MdNotificationsActive } from "react-icons/md";
import { Dropdown, Menu } from "antd";
import useUser from "../../../auth/useUser";
import { useState, useEffect } from "react";
import NavigationPageForArtist from "./NavigationPageForArtist";
//
import { ImLocation2, ImHeadphones } from "react-icons/im";
import { BiTimeFive } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { MdLocationOn } from "react-icons/md";
import { FaHeadphonesAlt } from "react-icons/fa";

import axios from "axios";
export default function ApplyForGig() {
  const user = useUser();
  const email = user.email;

  //
  const [getGig, setGetGig] = useState([]);
  const getAllGig = async () => {
    const GigData = await axios.get("http://localhost:5000/api/allgigs");
    const data = GigData.data.gig;
    setGetGig(data);
    console.log(setGetGig);
  };
  useEffect(() => {
    getAllGig();
  }, []);

  //

  /// testing

  const menu = (
    <Menu>
      <Menu.Item key="1">{email}</Menu.Item>
      <Link to="/login">
        <Menu.Item key="3">Logout</Menu.Item>
      </Link>
    </Menu>
  );

  return (
    <div className="text-center bg-[#010101]">
      <NavigationPageForArtist />
      {/* sidebar for dashboard */}
      {/* contents */}
      <div className="flex gap-[200px]  ">
        <div className=" p-5 border-r-2 border-b-1 border-w-[20px] border-gray-300 bg-[#adadb12a] pb-[222px]">
          <h1 className="text-white">FILTER BY</h1> <br />
          <hr className="w-[100px] " />
          <h2 className="mt-5 text-white">Genre +</h2>
          <br />
          <h2 className="text-white">Band Type +</h2>
          <br />
          <button className="border-2 border-transparent bg-orange-600 w-full rounded-2xl drop-shadow-2xl">
            Apply
          </button>
          <br />
          <br />
          <button className="border-2 border-transparent bg-orange-600 w-full rounded-2xl drop-shadow-2xl">
            Reset
          </button>
        </div>
        <div>
          {/* getall artist registered */}
          <div className="pb-10">
            {/* mapping  */}
            {getGig.map((gig, i) => {
              return (
                <div
                  key={i}
                  className=" flex gap-20 justify-between px-8 py-4 mt-[80px] bg-[#adadb167] rounded-lg"
                >
                  <div>
                    <img
                      className="w-[25vh] h-[25vh] rounded-lg"
                      alt="naruto"
                      src={`http://localhost:5000/${gig.gigProfile}`}
                    />
                  </div>

                  <div>
                    <h1 className="font-bold text-[18px] text-white">
                      {gig.gigName}
                    </h1>
                    <h1 className="text-[15px] font-medium flex gap-2  text-white ">
                      <SlCalender className="mt-1" />
                      {gig.gigdate}
                    </h1>
                    <h1 className="flex justify-center gap-2 text-white ">
                      <BiTimeFive className="mt-1 text-white" />
                      {gig.starttime}-{gig.endtime}
                    </h1>
                    <h1 className="flex justify-center gap-1 text-white">
                      <ImHeadphones className="mt-1 text-white" />{" "}
                      {gig.genreNeeded}
                    </h1>
                    <h1 className=" flex  justify-center gap-1 text-[18] text-white">
                      <ImLocation2 className="mt-1 text-white" />
                      {gig.address}
                    </h1>
                  </div>
                  <div className="">
                    <button className=" mt-[40px] border-2 px-2 rounded-lg bg-orange-600 hover:border-white border-black hover:text-black text-white">
                      Apply Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex justify-between  pt-3 pb-3 bg-[#E3EDEE] ">
        <div className=" ml-4 flex gap-6">
          <p className="text-[12px] flex gap-1 font-semibold cursor-pointer hover:text-[#A75D5D]">
            About Us
            <FcAbout className="mt-0.5 text-lg" />
          </p>
          <p className="text-[12px] flex gap-1 font-semibold cursor-pointer hover:text-[#A75D5D]">
            Contact
            <FcBusinessContact className="mt-0.5 text-lg " />
          </p>
        </div>
        <div className="mr-5 flex gap-6">
          <p className="text-[12px] flex gap-1 font-semibold cursor-pointer hover:text-[#A75D5D]">
            <SiTwitter className="mt-0.5 text-lg" />
            Twitter
          </p>
          <p className="text-[12px] flex gap-1 font-semibold cursor-pointer hover:text-[#A75D5D]">
            <SiFacebook className="mt-0.5 text-lg" />
            Facebook
          </p>
        </div>
      </div>
    </div>
  );
}
