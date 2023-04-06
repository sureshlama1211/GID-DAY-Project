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
import NavigationPageForViewer from "./NavigationPageForViewer";

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
      <NavigationPageForViewer />
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
                  className=" flex justify-around py-2 mt-[80px]  rounded-lg bg-[#adadb167] "
                >
                  <div>
                    <img
                      className="w-[20vh] h-[20vh] rounded-lg"
                      alt="naruto"
                      src={`http://localhost:5000/${artist.profile_image}`}
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
