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
import NavbarForRestaurant from "./NavbarForRestaurant";
//

export default function FindArtist() {
  const user = useUser();
  const email = user.email;
  // const id = user._id;
  const [userId, setUser] = useState(user.id);
  const [artistId, setArtistId] = useState("");
  //validation for checking the fields in gig-creation

  //for booking hte artist
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm();
  //
  const onBookClicked = (artist) => {
    setArtistId(artist._id);
    setShowBookModal(true);
  };
  //to create gig

  //modal
  const [showModal, setShowModal] = useState(false);

  const [showBookModal, setShowBookModal] = useState(false);

  //function to post the booking details
  const Booking = async ({
    gigname,
    gigtype,
    date,
    showtype,
    startingtime,
    endingtime,
    Address,
    budget,
  }) => {
    const response = await axios.post("http://localhost:5000/api/booking", {
      gigname: gigname,
      gigtype: gigtype,
      date: date,
      showtype: showtype,
      startingtime: startingtime,
      endingtime: endingtime,
      Address: Address,
      budget: budget,
      bookedBy: userId,
      bookedTo: artistId,
    });
    console.log(response, "k ayo ta ");
    setShowBookModal(false);
  };

  //to get the list of artist from get method
  const [getArtist, setGetArtist] = useState([]);
  const getAllArtist = async () => {
    const ArtistData = await axios.get("http://localhost:5000/api/user");
    const data = ArtistData.data.checkfname;
    console.log(data, "hait");
    setGetArtist(data);
  };
  useEffect(() => {
    getAllArtist();
  }, []);

  console.log(getArtist, "j cha ");
  //

  /// testing

  return (
    <div className="text-center bg-[#010101] ">
      <NavbarForRestaurant />
      <div className="flex gap-[10%]">
        <div className=" p-5 border-r-2 bg-[#adadb12a]  border-gray-300">
          <h1 className="text-white">FILTER BY</h1> <br />
          <hr className="w-[100px] " />
          <h2 className="mt-5 text-white ">Genre +</h2>
          <br />
          <h2 className="text-white ">Band Type +</h2>
          <br />
          <button className="border-2 border-transparent bg-orange-600 w-full rounded-2xl text-white drop-shadow-2xl">
            Apply
          </button>
          <br />
          <br />
          <button className="border-2 border-transparent bg-orange-600 w-full text-white rounded-2xl drop-shadow-2xl">
            Reset
          </button>
        </div>
        <div>
          <div>
            <input
              className=" mt-[20px] w-full px-[190px]  h-[30px] rounded-lg placeholder:text-center  border-transparent border-gray-400 border-1"
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
                      className="w-[35vh] h-[25vh] rounded-lg mt-2 mb-2 ml-2"
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
                    <button
                      onClick={() => onBookClicked(artist)}
                      className=" mt-[80px] border-2 px-2 rounded-lg bg-orange-600 hover:border-white border-black text-white hover:text-black"
                    >
                      Book Now
                    </button>
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
      {/* for modal box */}

      {/* for modal box */}

      {/* second modal for book artist */}
      {/* for modal box */}
      <MyModal2
        isvisible={showBookModal}
        onClose={() => setShowBookModal(false)}
      >
        {/* contents here */}
        <form onSubmit={handleSubmit2(Booking)}>
          <div>
            <h1 className="font-bold text-[30px] font-mono text-orange-600 ">
              Book Artist
            </h1>
          </div>
          <div className="flex justify-center gap-6 mt-5">
            <div>
              <div>
                <div>
                  <label className="font-bold">Gig Name</label>
                </div>
                <input
                  type="text"
                  name="gigname"
                  className="border-2 border-black  rounded-lg shadow-xl "
                  {...register2("gigname", { required: true })}
                />
                <span className="flex justify-center text-red-600 mb-[-10px] text-xs ">
                  {errors2.gigname?.type === "required" &&
                    " Gig Name must be added"}
                </span>
              </div>
            </div>

            <div>
              <div>
                <div>
                  <label className=" font-bold">Genre Type</label>
                </div>
                <select
                  type="text"
                  name="gigtype"
                  className="border-2  px-[50px] placeholder:text-center  border-black  rounded-lg shadow-xl"
                  {...register2("gigtype", { required: true })}
                >
                  <option value=""></option>
                  <option value="Classical">Classical</option>
                  <option value="Lok Dohori">Lok Dohori</option>
                  <option value="Pop">Pop</option>
                  <option value="Rock">Rock</option>
                  <option value="Hip Hop">Hip Hop</option>
                </select>
                <span className="flex justify-center text-red-600 mb-[-10px] text-xs ">
                  {errors2.gigtype?.type === "required" &&
                    " Genre type  must be added"}
                </span>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <label className=" font-bold">Gig Date</label>
                </div>
                <input
                  type="date"
                  name="date"
                  className="border-2 px-5 border-black  rounded-lg shadow-xl "
                  {...register2("date", { required: true })}
                />
                <span className="flex justify-center text-red-600 mb-[-10px] text-xs ">
                  {errors2.date?.type === "required" &&
                    " Gig Date must be added"}
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-5">
            <div>
              <div>
                <div>
                  <label className="  font-bold">Payment Type</label>
                </div>
                <select
                  type="text"
                  name="showtype"
                  className="border-2  px-[45px] placeholder:text-center  border-black  rounded-lg shadow-xl"
                  {...register2("showtype", { required: true })}
                >
                  <option value=""></option>
                  <option value="Hourly">Hourly</option>
                  <option value="Full Show">Full Show</option>
                </select>
                <span className="flex justify-center text-red-600 mb-[-10px] text-xs ">
                  {errors2.showtype?.type === "required" &&
                    " Genre type  must be added"}
                </span>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <label className=" font-bold">Starting Time</label>
                </div>
                <input
                  type="time"
                  name="startingtime"
                  className="border-2 px-[45px] border-black  rounded-lg shadow-xl "
                  {...register2("startingtime", { required: true })}
                />
                <span className="flex justify-center text-red-600 mb-[-10px] text-xs ">
                  {errors2.startingtime?.type === "required" &&
                    " Starting time  must be added"}
                </span>
              </div>
            </div>

            <div>
              <div>
                <div>
                  <label className=" font-bold">Ending Time</label>
                </div>
                <input
                  type="time"
                  name="endingtime"
                  className="border-2  px-[40px] placeholder:text-center  border-black  rounded-lg shadow-xl"
                  {...register2("endingtime", { required: true })}
                  placeholder="Genre"
                />

                <span className="flex justify-center text-red-600 mb-[-10px] text-xs ">
                  {errors2.endingtime?.type === "required" &&
                    " Endtime  must be added"}
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-start pl-8 gap-6 mt-5">
            <div>
              <div>
                <div>
                  <label className="  font-bold">Address</label>
                </div>
                <input
                  type="text"
                  name="Address"
                  className="border-2 px-2  border-black  rounded-lg shadow-xl "
                  {...register2("Address", { required: true })}
                />
                <span className="flex justify-center text-red-600 mb-[-10px] text-xs ">
                  {errors2.Address?.type === "required" &&
                    "Venue Address must be added"}
                </span>
              </div>
            </div>

            <div>
              <div>
                <div>
                  <label className="  font-bold">Payment </label>
                </div>
                <input
                  type="number"
                  name="budget"
                  className="border-2  px-2 placeholder:text-center  border-black  rounded-lg shadow-xl"
                  {...register2("budget", { required: true })}
                />

                <span className="flex justify-center text-red-600 mb-[-10px] text-xs ">
                  {errors2.budget?.type === "required" &&
                    " Payment must be added"}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div>
              <label className="font-bold">Description</label>
            </div>
            <textarea
              name="description"
              {...register2("description", { required: true })}
              className="border-2  border-black w-[60%] pb-[10%] "
            ></textarea>
            <span className="flex justify-center text-red-600 mb-[-10px] text-xs ">
              {errors2.description?.type === "required" &&
                "Must provide a short discription about an artist or band"}
            </span>
          </div>
          <button
            type="submit"
            className="mt-7 border-black border-2 px-5  rounded-xl bg-orange-400"
          >
            Create
          </button>
        </form>
      </MyModal2>
      {/* for modal box */}
    </div>
  );
}
