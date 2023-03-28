import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { FcAbout, FcBusinessContact } from "react-icons/fc";
import { SiTwitter, SiFacebook } from "react-icons/si";
import { MdNotificationsActive } from "react-icons/md";
import axios from "axios";
import { Dropdown, Menu } from "antd";
import { SlCalender } from "react-icons/sl";
import { AiFillSetting } from "react-icons/ai";
import { MdPassword } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import useUser from "../../../auth/useUser";

export default function DashBoardForViewer() {
  const user = useUser();
  const email = user.email;

  const role = user.role;
  console.log(user);
  //for collpsable setting
  const [show, setShow] = useState(false);
  //state for notification

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
      <div className=" flex justify-between bg-[#adadb167]   drop-shadow-xl">
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
          <button className=" w-[90px] h-[35px] border-transparent mt-[-5px] rounded-2xl  border-2 hover:border-[#A7727D] font-bold text-[15px]  items-center text-center text-white mr-[40px] ">
            DashBoard
          </button>
          <Link to="/findshows">
            <button className=" w-[150px] h-[35px] pt-1 mt-[-5px]  border-transparent rounded-2xl  font-bold text-[15px] hover:border-[#A7727D] border-2 text-center text-white mr-[40px] ">
              Find Shows
            </button>
          </Link>
          {/* gig */}
          <Link to="/viewartist">
            <button className=" w-[150px] h-[35px] pt-1 mt-[-5px]  border-transparent rounded-2xl  font-bold text-[15px] hover:border-[#A7727D] border-2 text-center text-white mr-[40px] ">
              View Artists
            </button>
          </Link>
          {/*  */}
        </div>

        <div className="flex text-center text-white gap-6 items-center">
          <div>
            <MdNotificationsActive className="text-[25px] hover:text-[#7F669D]" />
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
      <div className="flex justify-between">
        <div className="bg-[#adadb12a]  pb-[352px]  drop-shadow-2xl ">
          <h1 className="mt-5  pt-[10px] font-bold  animate-pulse pl-5 pr-2 text-white">
            {role}
          </h1>
          <hr className="mt-20" />
          <div className="flex gap-4 hover:bg-black ">
            <h1
              onClick={() => setShow(!show)}
              className="   cursor-pointer font-medium text-white flex gap-2"
            >
              <AiFillSetting className="mt-1" />
              Setting
            </h1>
            <p className="text-white text-bold ">{show ? "-" : "+"}</p>
          </div>
          <hr />
          {show && (
            <>
              <Link to="/settingforviewer">
                <p className="text-white cursor-pointer hover:bg-black  flex gap-2">
                  <CgProfile className="mt-1" />
                  Edit Profile
                </p>
              </Link>
              <hr />
              <p className="text-white  cursor-pointer hover:bg-black flex gap-2">
                <MdPassword className="mt-1" />
                Reset Password
              </p>
              <hr />
            </>
          )}
        </div>
        <div>
          <div className="pr-[400px] text-orange-700 pt-[140px]  font-extrabold  text-[30px] animate-bounce">
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
