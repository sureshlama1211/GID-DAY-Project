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
//useform hook for gig-drpdown
import { useForm } from "react-hook-form";
//

export default function FindArtist() {
  const user = useUser();
  const email = user.email;
  //validation for checking the fields in gig-creation
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  //
  const creatinggig = async ({
    gigProfile,
    gigName,
    genreNeeded,
    gigdate,
    paymenttype,
    starttime,
    endtime,
    address,
    payment,
  }) => {
    const response = await axios.post("http://localhost:5000/api/gigs", {
      gigProfile: gigProfile,
      gigName: gigName,
      genreNeeded: genreNeeded,
      gigdate: gigdate,
      paymenttype: paymenttype,
      starttime: starttime,
      endtime: endtime,
      address: address,
      payment: payment,
    });
    console.log(response);
    setShowModal(false);
  };

  //modal
  const [showModal, setShowModal] = useState(false);
  const [showBookModal, setShowBookModal] = useState(false);

  //
  //to get the list of artist from get method
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
          <Link to="/dashboardforrestaurant">
            <button className=" w-[90px] h-[35px] mt-[-5px] border-transparent rounded-2xl  border-2 hover:border-[#A7727D] font-bold text-[15px]  items-center text-center text-white mr-[40px] ">
              DashBoard
            </button>
          </Link>
          <button className=" w-[90px] h-[35px] pt-1 mt-[-5px] border-transparent rounded-2xl  font-bold text-[15px] hover:border-[#A7727D] border-2 text-center text-white mr-[40px] ">
            Find Artists
          </button>
          <div>
            <button
              onClick={() => setShowModal(true)}
              className=" w-[100px] h-[40px] font-bold text-[15px] border-transparent  border-2 rounded-md hover:border-[#A7727D] mt-[-10px]    text-center text-white  mr-[20px] ml-[20px]"
            >
              + Create Gig
            </button>
          </div>
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
      <div className="flex gap-10">
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
                    <button
                      onClick={() => setShowBookModal(true)}
                      className=" relative top-10 border-2 px-2 rounded-lg bg-orange-600 hover:border-white border-black text-white hover:text-black"
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
      <MyModal isvisible={showModal} onClose={() => setShowModal(false)}>
        {/* contents here */}
        <form onSubmit={handleSubmit(creatinggig)}>
          <div>
            <h1 className="flex justify-center gap-2 font-bold text-[20px] text-orange-900 animate-bounce ">
              <IoMdMicrophone className="mt-1" />
              Apply for you Gig
              <ImHappy2 className="mt-2" />
            </h1>
          </div>
          <div className="flex justify-center mt-4 gap-5">
            <div>
              <div>
                <label className="text-red-700  font-bold">Gig Picture*</label>
              </div>
            </div>
            <input
              type="file"
              name="gigProfile"
              className="border-2 border-black  rounded-lg shadow-xl "
              {...register("gigProfile", { required: true })}
            />
            <span className="flex justify-center text-red-600 mb-[-10px] text-xs ">
              {errors.gigProfile?.type === "required" &&
                " Gig Profile Picture must be added"}
            </span>
          </div>

          <div className="flex justify-center gap-6 mt-5">
            <div>
              <div>
                <div>
                  <label className="text-red-700  font-bold">Gig Name*</label>
                </div>
                <input
                  type="text"
                  name="gigName"
                  className="border-2 border-black  rounded-lg shadow-xl "
                  {...register("gigName", { required: true })}
                />
                <span className="flex justify-center text-red-600 mb-[-10px] text-xs ">
                  {errors.gigName?.type === "required" &&
                    " Gig Name must be added"}
                </span>
              </div>
            </div>

            <div>
              <div>
                <div>
                  <label className="text-red-700  font-bold">Genre Type*</label>
                </div>
                <select
                  type="text"
                  name="genreNeeded"
                  className="border-2  px-[50px] placeholder:text-center  border-black  rounded-lg shadow-xl"
                  {...register("genreNeeded", { required: true })}
                  placeholder="Genre"
                >
                  <option value="" selected></option>
                  <option value="Classical">Classical</option>
                  <option value="Lok Dohori">Lok Dohori</option>
                  <option value="Pop">Pop</option>
                  <option value="Rock">Rock</option>
                  <option value="Hip Hop">Hip Hop</option>
                </select>
                <span className="flex justify-center text-red-600 mb-[-10px] text-xs ">
                  {errors.genreNeeded?.type === "required" &&
                    " Genre type  must be added"}
                </span>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <label className="text-red-700  font-bold">Gig Date*</label>
                </div>
                <input
                  type="date"
                  name="gigdate"
                  className="border-2 px-5 border-black  rounded-lg shadow-xl "
                  {...register("gigdate", { required: true })}
                />
                <span className="flex justify-center text-red-600 mb-[-10px] text-xs ">
                  {errors.gigdate?.type === "required" &&
                    " Gig Date must be added"}
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-5">
            <div>
              <div>
                <div>
                  <label className="text-red-700  font-bold">
                    Payment Type*
                  </label>
                </div>
                <select
                  type="text"
                  name="paymenttype"
                  className="border-2  px-[45px] placeholder:text-center  border-black  rounded-lg shadow-xl"
                  {...register("paymenttype", { required: true })}
                  placeholder="Genre"
                >
                  <option value="" selected></option>
                  <option value="Hourly">Hourly</option>
                  <option value="Full Show">Full Show</option>
                </select>
                <span className="flex justify-center text-red-600 mb-[-10px] text-xs ">
                  {errors.paymenttype?.type === "required" &&
                    " Genre type  must be added"}
                </span>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <label className="text-red-700  font-bold">
                    Starting Time*
                  </label>
                </div>
                <input
                  type="time"
                  name="starttime"
                  className="border-2 px-[45px] border-black  rounded-lg shadow-xl "
                  {...register("starttime", { required: true })}
                />
                <span className="flex justify-center text-red-600 mb-[-10px] text-xs ">
                  {errors.starttime?.type === "required" &&
                    " Starting time  must be added"}
                </span>
              </div>
            </div>

            <div>
              <div>
                <div>
                  <label className="text-red-700  font-bold">
                    Ending Time*
                  </label>
                </div>
                <input
                  type="time"
                  name="endtime"
                  className="border-2  px-[40px] placeholder:text-center  border-black  rounded-lg shadow-xl"
                  {...register("endtime", { required: true })}
                  placeholder="Genre"
                />

                <span className="flex justify-center text-red-600 mb-[-10px] text-xs ">
                  {errors.endtime?.type === "required" &&
                    " Endtime  must be added"}
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-start pl-8 gap-6 mt-5">
            <div>
              <div>
                <div>
                  <label className="text-red-700  font-bold">Address*</label>
                </div>
                <input
                  type="text"
                  name="address"
                  className="border-2 px-2  border-black  rounded-lg shadow-xl "
                  {...register("address", { required: true })}
                />
                <span className="flex justify-center text-red-600 mb-[-10px] text-xs ">
                  {errors.address?.type === "required" &&
                    "Venue Address must be added"}
                </span>
              </div>
            </div>

            <div>
              <div>
                <div>
                  <label className="text-red-700  font-bold">Payment *</label>
                </div>
                <input
                  type="number"
                  name="payment"
                  className="border-2  px-2 placeholder:text-center  border-black  rounded-lg shadow-xl"
                  {...register("payment", { required: true })}
                  placeholder="Genre"
                />

                <span className="flex justify-center text-red-600 mb-[-10px] text-xs ">
                  {errors.payment?.type === "required" &&
                    " Payment must be added"}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div>
              <lebel className="text-red-700">Bio*</lebel>
            </div>
            <textarea
              name="bio"
              {...register("bio", { required: true })}
              className="border-2  border-black w-[60%] pb-[10%] "
            ></textarea>
            <span className="flex justify-center text-red-600 mb-[-10px] text-xs ">
              {errors.bio?.type === "required" &&
                "Must provide a short discription about an artist or band"}
            </span>
          </div>
          <button
            type="submit"
            className="mt-7 border-black border-2 px-5 rounded-xl bg-orange-400"
          >
            Create
          </button>
        </form>
      </MyModal>
      {/* for modal box */}

      {/* second modal for book artist */}
      {/* for modal box */}
      <MyModal
        isvisible={showBookModal}
        onClose={() => setShowBookModal(false)}
      >
        {/* contents here */}
        <form onSubmit={handleSubmit(creatinggig)}>
          <div className="flex justify-center gap-6 mt-5">
            <div>
              <div>
                <div>
                  <label className="text-red-700  font-bold">Gig Name*</label>
                </div>
                <input
                  type="text"
                  name="gigName"
                  className="border-2 border-black  rounded-lg shadow-xl "
                  {...register("gigName", { required: true })}
                />
                <span className="flex justify-center text-red-600 mb-[-10px] text-xs ">
                  {errors.gigName?.type === "required" &&
                    " Gig Name must be added"}
                </span>
              </div>
            </div>

            <div>
              <div>
                <div>
                  <label className="text-red-700  font-bold">Genre Type*</label>
                </div>
                <select
                  type="text"
                  name="genreNeeded"
                  className="border-2  px-[50px] placeholder:text-center  border-black  rounded-lg shadow-xl"
                  {...register("genreNeeded", { required: true })}
                  placeholder="Genre"
                >
                  <option value="" selected></option>
                  <option value="Classical">Classical</option>
                  <option value="Lok Dohori">Lok Dohori</option>
                  <option value="Pop">Pop</option>
                  <option value="Rock">Rock</option>
                  <option value="Hip Hop">Hip Hop</option>
                </select>
                <span className="flex justify-center text-red-600 mb-[-10px] text-xs ">
                  {errors.genreNeeded?.type === "required" &&
                    " Genre type  must be added"}
                </span>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <label className="text-red-700  font-bold">Gig Date*</label>
                </div>
                <input
                  type="date"
                  name="gigdate"
                  className="border-2 px-5 border-black  rounded-lg shadow-xl "
                  {...register("gigdate", { required: true })}
                />
                <span className="flex justify-center text-red-600 mb-[-10px] text-xs ">
                  {errors.gigdate?.type === "required" &&
                    " Gig Date must be added"}
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-5">
            <div>
              <div>
                <div>
                  <label className="text-red-700  font-bold">
                    Payment Type*
                  </label>
                </div>
                <select
                  type="text"
                  name="paymenttype"
                  className="border-2  px-[45px] placeholder:text-center  border-black  rounded-lg shadow-xl"
                  {...register("paymenttype", { required: true })}
                  placeholder="Genre"
                >
                  <option value="" selected></option>
                  <option value="Hourly">Hourly</option>
                  <option value="Full Show">Full Show</option>
                </select>
                <span className="flex justify-center text-red-600 mb-[-10px] text-xs ">
                  {errors.paymenttype?.type === "required" &&
                    " Genre type  must be added"}
                </span>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <label className="text-red-700  font-bold">
                    Starting Time*
                  </label>
                </div>
                <input
                  type="time"
                  name="starttime"
                  className="border-2 px-[45px] border-black  rounded-lg shadow-xl "
                  {...register("starttime", { required: true })}
                />
                <span className="flex justify-center text-red-600 mb-[-10px] text-xs ">
                  {errors.starttime?.type === "required" &&
                    " Starting time  must be added"}
                </span>
              </div>
            </div>

            <div>
              <div>
                <div>
                  <label className="text-red-700  font-bold">
                    Ending Time*
                  </label>
                </div>
                <input
                  type="time"
                  name="endtime"
                  className="border-2  px-[40px] placeholder:text-center  border-black  rounded-lg shadow-xl"
                  {...register("endtime", { required: true })}
                  placeholder="Genre"
                />

                <span className="flex justify-center text-red-600 mb-[-10px] text-xs ">
                  {errors.endtime?.type === "required" &&
                    " Endtime  must be added"}
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-start pl-8 gap-6 mt-5">
            <div>
              <div>
                <div>
                  <label className="text-red-700  font-bold">Address*</label>
                </div>
                <input
                  type="text"
                  name="address"
                  className="border-2 px-2  border-black  rounded-lg shadow-xl "
                  {...register("address", { required: true })}
                />
                <span className="flex justify-center text-red-600 mb-[-10px] text-xs ">
                  {errors.address?.type === "required" &&
                    "Venue Address must be added"}
                </span>
              </div>
            </div>

            <div>
              <div>
                <div>
                  <label className="text-red-700  font-bold">Payment *</label>
                </div>
                <input
                  type="number"
                  name="payment"
                  className="border-2  px-2 placeholder:text-center  border-black  rounded-lg shadow-xl"
                  {...register("payment", { required: true })}
                  placeholder="Genre"
                />

                <span className="flex justify-center text-red-600 mb-[-10px] text-xs ">
                  {errors.payment?.type === "required" &&
                    " Payment must be added"}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div>
              <lebel className="text-red-700">Bio*</lebel>
            </div>
            <textarea
              name="bio"
              {...register("bio", { required: true })}
              className="border-2  border-black w-[60%] pb-[10%] "
            ></textarea>
            <span className="flex justify-center text-red-600 mb-[-10px] text-xs ">
              {errors.bio?.type === "required" &&
                "Must provide a short discription about an artist or band"}
            </span>
          </div>
          <button
            type="submit"
            className="mt-7 border-black border-2 px-5 rounded-xl bg-orange-400"
          >
            Create
          </button>
        </form>
      </MyModal>
      {/* for modal box */}
    </div>
  );
}
