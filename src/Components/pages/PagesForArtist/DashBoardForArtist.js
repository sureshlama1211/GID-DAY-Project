import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { FcAbout, FcBusinessContact } from "react-icons/fc";
import { SiTwitter, SiFacebook } from "react-icons/si";
import { FaRegSmileWink } from "react-icons/fa";
import axios from "axios";
import { Dropdown, Menu } from "antd";
import { SlCalender } from "react-icons/sl";
import { AiFillSetting } from "react-icons/ai";
import { MdPassword } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import useUser from "../../../auth/useUser";
import NavigationPageForArtist from "./NavigationPageForArtist";

export default function DashBoardForArtist() {
  const user = useUser();
  const email = user.email;

  const role = user.role;
  console.log(user);
  //for collpsable setting
  const [show, setShow] = useState(false);
  //state for notification
  // const [notifications, setNotifications] = useState([]);
  // const [notificationCount, setNotificationCount] = useState(0);
  // const getmybooking = async (user) => {
  //   const MyBooking = await axios.get(
  //     `http://localhost:5000/api/mybooking/${user.id}?role=${user.role}`
  //   );
  //   console.log(MyBooking, "sanchai chu");
  //   setNotifications(MyBooking.data);
  //   console.log(setNotifications, "happy mula");
  //   setNotificationCount(MyBooking.data.length || 0);
  // };
  // useEffect(() => {
  //   getmybooking(user);
  // }, []);

  //tedting
  const [getInfoArtist, setGetInfoArtist] = useState();
  const Artistinformation = async () => {
    try {
      const ArtistInfo = await axios.get(
        `http://localhost:5000/api/profilebeforeedit/${email}`
      );

      console.log(ArtistInfo);
      const data = ArtistInfo.data.getprofileinfo;
      // console.log(data);
      setGetInfoArtist(data);
      // console.log(getInfoArtist);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(Artistinformation, "dai cha");
  useEffect(() => {
    Artistinformation();
  }, []);
  // console.log(getInfoArtist, "sanibar");
  /// testing

  // const menu = (
  //   <Menu>
  //     <Menu.Item key="1">{email}</Menu.Item>
  //     <Link to="/login">
  //       <Menu.Item key="3">Logout</Menu.Item>
  //     </Link>
  //   </Menu>
  // );

  return (
    <div className="text-center bg-[#010101]">
      <NavigationPageForArtist className="fixed inset-0 bg-black opacity-80 backdrop-blur-3xl flex justify-center pt-[20px]" />
      {/* sidebar for dashboard */}
      <div className="flex justify-between">
        <div className="bg-[#adadb12a]  pb-[270px] ">
          <h1 className="flex gap-2 mt-5 pt-[10px] font-bold animate-pulse   pl-5 pr-2 text-red-900">
            Welcome
            <FaRegSmileWink className="mt-1 animate-pulse" />
          </h1>
          <h1 className=" pt-[10px] font-bold animate-pulse   pl-1 pr-2 text-[#BACDDB]">
            {getInfoArtist?.firstname}_{getInfoArtist?.lastname}
          </h1>
          <hr className="mt-20 " />
          <h1 className=" hover:bg-black font-medium cursor-pointer text-white  ">
            Gig Applied Details
          </h1>
          <hr />
          <hr className="mt-4" />
          <h1 className=" hover:bg-black text-white font-medium cursor-pointer flex gap-2  ">
            <SlCalender className="mt-1" />
            Events Date
          </h1>
          <hr />
          <hr className="mt-4" />
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
              <Link to="/settingforartist">
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
          <div className="pr-[400px] text-orange-700 pt-[140px]  font-extrabold  text-[30px] ">
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
