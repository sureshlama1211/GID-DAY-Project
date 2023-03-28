import React from "react";
import { Link } from "react-router-dom";
import { FcAbout, FcBusinessContact } from "react-icons/fc";
import { SiTwitter, SiFacebook } from "react-icons/si";
import { MdNotificationsActive } from "react-icons/md";
import { Dropdown, Menu } from "antd";
import useUser from "../../../auth/useUser";
import { useState, useEffect } from "react";
//
import { ImLocation2, ImHeadphones } from "react-icons/im";
import { BiTimeFive } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { MdLocationOn } from "react-icons/md";
import { FaHeadphonesAlt } from "react-icons/fa";

import axios from "axios";
export default function FindShows() {
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
      <div className=" flex justify-between bg-[#adadb167]  drop-shadow-xl">
        <div>
          <Link to="/">
            <img
              className="h-[14vh] w-[14vh] relative left-6   pointer-cursor "
              alt="logo "
              src={require("../../../Images/gig.png")}
            />
          </Link>
        </div>
        <div className="flex mt-[28px]">
          <Link to="/dashboardforviewer">
            <button className=" w-[90px] h-[35px] border-transparent mt-[-5px] rounded-2xl  border-2 hover:border-[#A7727D] font-bold text-[15px]  items-center text-center text-white mr-[40px] ">
              DashBoard
            </button>
          </Link>

          <button className=" w-[150px] h-[35px] pt-1 mt-[-5px]  border-transparent rounded-2xl  font-bold text-[15px] hover:border-[#A7727D] border-2 text-center text-white mr-[40px] ">
            Find Shows
          </button>

          {/* gig */}
          <Link to="/viewartist">
            <button className=" w-[150px] h-[35px] pt-1 mt-[-5px]  border-transparent rounded-2xl  font-bold text-[15px] hover:border-[#A7727D] border-2 text-center text-white mr-[40px] ">
              View Artists
            </button>
          </Link>
          {/*  */}
        </div>

        <div className="flex text-center gap-6 items-center">
          <div>
            <MdNotificationsActive className="text-[25px] text-white hover:text-[#7F669D]" />
          </div>

          <div style={{ position: "relative" }}>
            <Dropdown overlay={menu} trigger={["click"]}>
              <img
                src={require("../../../Images/profile.png")}
                alt="profile"
                className="w-[7vh] h-[7vh] rounded-[25px]  mr-5 "
              />
            </Dropdown>
          </div>
        </div>
      </div>
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
                      className="w-5vh h-5vh rounded-lg"
                      alt="naruto"
                      src="https://play.google.com/store/apps/details?id=com.bandainamcoent.ninjavoltage_app&hl=en_US"
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
                    <button className=" relative top-10 border-2 px-2 rounded-lg bg-orange-600 hover:border-white border-black hover:text-black text-white">
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
