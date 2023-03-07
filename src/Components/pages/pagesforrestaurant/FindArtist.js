import React from "react";

import { Link } from "react-router-dom";
import { FcAbout, FcBusinessContact } from "react-icons/fc";
import { SiTwitter, SiFacebook } from "react-icons/si";
import { MdNotificationsActive } from "react-icons/md";

import { Dropdown, Menu } from "antd";

import useUser from "../../../auth/useUser";
//
export default function FindArtist() {
  const user = useUser();
  const email = user.email;

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
    <div className="text-center">
      <div className=" flex justify-between bg-white drop-shadow-xl">
        <div>
          <Link to="/">
            <img
              className="h-[14vh] w-[14vh] relative left-6  pointer-cursor "
              alt="logo "
              src={require("../../../Images/gig.png")}
            />
          </Link>
        </div>
        <div className="flex mt-[28px]">
          <Link to="/dashboardforrestaurant">
            <button className=" w-[90px] h-[35px] mt-[-5px] rounded-2xl  border-2 hover:border-[#A7727D] font-bold text-[15px]  items-center text-center text-black mr-[40px] ">
              DashBoard
            </button>
          </Link>
          <button className=" w-[90px] h-[35px] pt-1 mt-[-5px]  rounded-2xl  font-bold text-[15px] hover:border-[#A7727D] border-2 text-center text-black mr-[40px] ">
            Find Artists
          </button>
          <button className=" w-[100px] h-[40px] font-bold text-[15px]  border-2 rounded-md hover:border-[#A7727D] mt-[-10px]    text-center text-black  mr-[20px] ml-[20px]">
            + Create Gig
          </button>
          {/*  */}
        </div>

        <div className="flex text-center gap-6 items-center">
          <div>
            <MdNotificationsActive className="text-[25px] hover:text-[#7F669D]" />
          </div>

          <div style={{ position: "relative" }}>
            <Dropdown overlay={menu} trigger={["click"]}>
              <img
                src={require("../../../Images/profile.png")}
                alt="profile"
                className="w-[7vh] h-[7vh] rounded-2xl  mr-5 "
              />
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="flex gap-10">
        <div className=" p-5 border-x-2 border-b-2 border- border-w-[20px] border-gray-600">
          <h1>FILTER BY</h1> <br />
          <hr className="w-[100px] " />
          <h2 className="mt-5">Genre +</h2>
          <br />
          <h2>Band Type +</h2>
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
          <div>
            <input
              className="relative top-[30px]  w-full px-[190px]  h-[30px] rounded-lg placeholder:text-center drop-shadow-2xl border-transparent border-gray-400 border-1"
              type="text"
              placeholder="Search Artist Here "
            ></input>
          </div>
          {/* getall artist registered */}
          <div className=" flex gap-[100px] mt-[80px] bg-gray-200 rounded-lg ">
            <div>
              <img
                className="w-5vh h-5vh rounded-lg"
                alt="naruto"
                src="https://play.google.com/store/apps/details?id=com.bandainamcoent.ninjavoltage_app&hl=en_US"
              />
            </div>
            <div className=" flex pb-5">
              <div>
                <h1>Name</h1>
                <h1>Artist Type</h1>
                <h1>Skill Level</h1>
                <h1>Genre</h1>
                <h1>Address</h1>
              </div>
              <div>
                <button className="mt-24 relative left-40  border-2 px-2 rounded-lg bg-orange-600 hover:border-black border-white">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-[200px] pt-3 pb-3 bg-[#E3EDEE] ">
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
