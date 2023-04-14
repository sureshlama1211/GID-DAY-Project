import React, { useState } from "react";

import { Link } from "react-router-dom";
import { FcAbout, FcBusinessContact } from "react-icons/fc";
import { SiTwitter, SiFacebook } from "react-icons/si";
import { MdNotificationsActive } from "react-icons/md";
import { useEffect } from "react";
import axios from "axios";
import { Dropdown, Menu } from "antd";
import { FaRegSmileWink } from "react-icons/fa";

import useUser from "../../../auth/useUser";
//
import { AiFillSetting } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { IoIosMicrophone } from "react-icons/io";
import { MdPassword } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import NavbarForRestaurant from "./NavbarForRestaurant";
//

export default function DashBoardForRestaurant() {
  const user = useUser();
  const email = user.email;
  console.log(user, "k cha");
  const role = user.role;

  //
  //for collapsable on setting
  const [show, setShow] = useState(false);

  //to show the name of the user in dashboard
  const [getRestaurantName, setGetRestaurantName] = useState();
  const Restaurantinformation = async () => {
    try {
      const RestaurantInfo = await axios.get(
        `http://localhost:5000/api/profilebeforeedit/${email}`
      );
      const data = RestaurantInfo.data.getprofileinfo;
      setGetRestaurantName(data);
    } catch (error) {}
  };
  useEffect(() => {
    Restaurantinformation();
  }, []);

  // for getting the booking details
  const [bookingArray, setBookingArray] = useState([]);
  const bookingdetails = async (user) => {
    const bookingdetail = await axios.get(
      `http://localhost:5000/api/bookingdetail/${user.id}`
    );
    const data = bookingdetail.data;
    console.log(data, "sathi ho");
    setBookingArray(data);
  };
  console.log(bookingArray, "dami ma");
  useEffect(() => {
    bookingdetails(user);
  }, []);

  return (
    <div className="text-center bg-[#010101]">
      <NavbarForRestaurant />
      {/* sidebar for dashboard */}
      <div className="flex justify-between ">
        <div className="bg-[#adadb12a] pb-[270px]   border-r-2 border-r-white">
          <h1 className="flex gap-2 mt-5 pt-[10px] font-bold animate-pulse   pl-5 pr-2 text-red-900">
            Welcome
            <FaRegSmileWink className="mt-1 animate-pulse" />
          </h1>
          <h1 className=" pt-[10px] font-bold animate-pulse   pl-1 pr-2 text-[#BACDDB]">
            {getRestaurantName?.firstname}_{getRestaurantName?.lastname}
          </h1>
          <hr className="mt-12" />
          <Link to="/bookingdetails">
            <h1 className=" hover:bg-black font-medium cursor-pointer text-white flex gap-2  ">
              <SlCalender className="mt-1" />
              Booking Details
            </h1>
          </Link>
          <hr />
          <hr className="mt-4" />
          <h1 className=" hover:bg-black font-medium cursor-pointer  text-white  flex  gap-2">
            <IoIosMicrophone className="mt-1" />
            Created Gigs
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
              <Link to="/prosetforres">
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
          <div className="pr-[400px] pt-[100px] font-extrabold text-[30px]  text-orange-700">
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
