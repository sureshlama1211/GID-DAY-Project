import React from "react";

import { Link } from "react-router-dom";
import { FcAbout, FcBusinessContact } from "react-icons/fc";
import { SiTwitter, SiFacebook } from "react-icons/si";
import { MdNotificationsActive } from "react-icons/md";

import { Dropdown, Menu } from "antd";

import useUser from "../../../auth/useUser";
//
export default function DashBoardForRestaurant() {
  const user = useUser();
  const email = user.email;
  const role = user.role;

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
          <button className=" w-[90px] h-[35px] mt-[-5px] rounded-2xl  border-2 hover:border-[#A7727D] font-bold text-[15px]  items-center text-center text-black mr-[40px] ">
            DashBoard
          </button>
          <Link to="/findartist">
            <button className=" w-[90px] h-[35px] pt-1 mt-[-5px]  rounded-2xl  font-bold text-[15px] hover:border-[#A7727D] border-2 text-center text-black mr-[40px] ">
              Find Artists
            </button>
          </Link>
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
      {/* sidebar for dashboard */}
      <div className="flex justify-between">
        <div className="bg-[#B2BEB5] pb-[250px]  drop-shadow-2xl ">
          <h1 className="mt-5  pt-[10px] font-bold  animate-pulse pl-5 pr-2">
            {role}
          </h1>
          <h1 className="mt-[60px] hover:bg-[#E2E5DE] font-medium cursor-pointer  ">
            Bookings
          </h1>
          <h1 className="mt-5 hover:bg-[#E2E5DE] font-medium cursor-pointer  ">
            Created Gigs
          </h1>
          <h1 className=" mt-5 hover:bg-[#E2E5DE]  cursor-pointer font-medium">
            Setting
          </h1>
        </div>
        <div>
          <div className="pr-[400px] pt-[100px] font-extrabold text-[30px] animate-bounce">
            WELCOME TO THE DASHBOARD
          </div>
        </div>
      </div>

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
