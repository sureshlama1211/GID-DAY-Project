import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { MdNotificationsActive } from "react-icons/md";
import axios from "axios";
import { Dropdown, Menu } from "antd";

import useUser from "../../../auth/useUser";

export default function NavigationPageForArtist() {
  const user = useUser();
  const email = user.email;

  const role = user.role;
  // console.log(user);
  //for collpsable setting

  //state for notification
  const [notifications, setNotifications] = useState([]);
  const [notificationCount, setNotificationCount] = useState(0);
  const [notiArray, setNotiArray] = useState([]);
  const getmybooking = async (user) => {
    const MyBooking = await axios.get(
      `http://localhost:5000/api/mybooking/${user.id}?role=${user.role}`
    );
    // console.log(MyBooking, "sanchai chu");
    setNotifications(MyBooking.data);
    const data = MyBooking.data;
    console.log(data, "ghar jwai ho");
    setNotiArray(data);
    console.log(notiArray, "sachi ho ta");
    console.log(MyBooking, "jamana kharab cha");
    setNotificationCount(MyBooking.data.length || 0);
  };
  useEffect(() => {
    getmybooking(user);
  }, []);

  //tedting
  const [getInfoArtist, setGetInfoArtist] = useState();
  const Artistinformation = async () => {
    try {
      const ArtistInfo = await axios.get(
        `http://localhost:5000/api/profilebeforeedit/${email}`
      );

      // console.log(ArtistInfo);
      const data = ArtistInfo.data.getprofileinfo;
      // console.log(data);
      setGetInfoArtist(data);
      // console.log(getInfoArtist);
    } catch (error) {
      // console.log(error);
    }
  };
  // console.log(Artistinformation, "dai cha");
  useEffect(() => {
    Artistinformation();
  }, []);
  // console.log(getInfoArtist, "sanibar");
  /// testing

  const menu = (
    <Menu>
      <Menu.Item key="1">{email}</Menu.Item>
      <Link to="/login">
        <Menu.Item key="3">Logout</Menu.Item>
      </Link>
    </Menu>
  );
  const NaviNotification = (
    <Menu>
      {notiArray.map((array, i) => {
        return (
          <div key={i}>
            <Menu.Item key="1" className=" border-2 border-black rounded-2xl">
              {array.bookedBy.firstname} is trying to book you
            </Menu.Item>
          </div>
        );
      })}
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
          <Link to="/dashboardforartist">
            <button className=" w-[90px] h-[35px] border-transparent mt-[-5px] rounded-2xl  border-2 hover:border-[#A7727D] font-bold text-[15px]  items-center text-center text-white mr-[40px] ">
              DashBoard
            </button>
          </Link>
          {/* gig */}
          <Link to="/applyforgig">
            <button className=" w-[150px] h-[35px] pt-1 mt-[-5px]  border-transparent rounded-2xl  font-bold text-[15px] hover:border-[#A7727D] border-2 text-center text-white mr-[40px] ">
              Apply For Gig
            </button>
          </Link>
          {/*  */}
        </div>

        <div className="flex text-center text-white gap-6 items-center">
          <div>
            <Dropdown overlay={NaviNotification} trigger={["click"]}>
              <MdNotificationsActive className="text-[25px] mt-5 hover:text-[#7F669D]" />
            </Dropdown>
            <span>{notificationCount} </span>
          </div>

          <div style={{ position: "relative" }}>
            <Dropdown overlay={menu} trigger={["click"]}>
              <img
                src={`http://localhost:5000/${getInfoArtist?.profile_image}`}
                alt="profile"
                className="w-[7vh] h-[7vh] rounded-[25px]  mr-5 "
              />
            </Dropdown>
          </div>
        </div>
      </div>
      {/* sidebar for dashboard */}
    </div>
  );
}
