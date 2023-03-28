import React from "react";

import { Link } from "react-router-dom";
import { FcAbout, FcBusinessContact } from "react-icons/fc";
import { SiTwitter, SiFacebook } from "react-icons/si";
import { MdNotificationsActive, MdLocationOn } from "react-icons/md";
import { FaHeadphonesAlt } from "react-icons/fa";
import { ImHappy2 } from "react-icons/im";

import { Dropdown, Menu } from "antd";
import { useEffect, useState } from "react";

import useUser from "../../../auth/useUser";
import axios from "axios";

import { IoMdMicrophone } from "react-icons/io";
import MyModal from "../modals/ShowModel";
import MyModal2 from "../modals/ModalContent";
//useform hook for gig-drpdown
import { useForm } from "react-hook-form";

export default function ViewArtist() {
  const user = useUser();
  const email = user.email;

  //to get available artist
  const [getArtist, setGetArtist] = useState([]);
  const getAllArtist = async () => {
    const ArtistData = await axios.get("http://localhost:5000/api/user");
    const data = ArtistData.data.checkfname;
    setGetArtist(data);
    console.log(setGetArtist);
  };
  useEffect(() => {
    getAllArtist();
  }, []);

  //for dropdown
  const menu = (
    <Menu>
      <Menu.Item key="1">{email}</Menu.Item>
      <Link to="/login">
        <Menu.Item key="3">Logout</Menu.Item>
      </Link>
    </Menu>
  );
  return (
    <div className="text-center bg-[#010101] ">
      <div className=" flex justify-between bg-[#adadb167] drop-shadow-xl">
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
          <Link to="/dashboardforviewer">
            <button className=" w-[90px] h-[35px] border-transparent mt-[-5px] rounded-2xl  border-2 hover:border-[#A7727D] font-bold text-[15px]  items-center text-center text-white mr-[40px] ">
              DashBoard
            </button>
          </Link>
          <Link to="/findshows">
            <button className=" w-[150px] h-[35px] pt-1 mt-[-5px]  border-transparent rounded-2xl  font-bold text-[15px] hover:border-[#A7727D] border-2 text-center text-white mr-[40px] ">
              Find Shows
            </button>
          </Link>
          {/* gig */}

          <button className=" w-[150px] h-[35px] pt-1 mt-[-5px]  border-transparent rounded-2xl  font-bold text-[15px] hover:border-[#A7727D] border-2 text-center text-white mr-[40px] ">
            View Artists
          </button>

          {/*  */}
        </div>

        <div className="flex text-center gap-6 items-center">
          <div>
            <MdNotificationsActive className="text-[25px] hover:text-[#7F669D] text-white " />
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
      <div className="flex justify-center gap-10">
        <div>
          <div>
            <input
              className="relative top-[30px]  w-full px-[190px]  h-[30px] rounded-lg placeholder:text-center drop-shadow-2xl border-transparent border-gray-400 border-1"
              type="text"
              placeholder="Search Artist Here "
            ></input>
          </div>
          {/* getall artist registered */}
          <div className="pb-20">
            {/* mapping  */}
            {getArtist.map((artist, i) => {
              return (
                <div
                  key={i}
                  className=" flex justify-between pr-5 mt-[80px]  rounded-lg bg-[#adadb167] "
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
                      {artist.firstname}_{artist.lastname}
                    </h1>
                    <h1 className="text-[15px] font-medium text-white">
                      {artist.band}
                    </h1>
                    <h1 className="text-[18] text-white">{artist.skill}</h1>
                    <h1 className="flex justify-center gap-1 text-white">
                      <FaHeadphonesAlt className="mt-1 text-white" />
                      {artist.genre}
                    </h1>
                    <h1 className="flex justify-center gap-1 text-white">
                      <MdLocationOn className="mt-1" />
                      {artist.address}
                    </h1>
                  </div>
                  <div className="">
                    {/* <button className=" relative top-10 border-2 px-2 rounded-lg bg-orange-600 hover:border-white border-black text-white hover:text-black">
                      Book Now
                    </button> */}
                  </div>
                </div>
              );
            })}
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
