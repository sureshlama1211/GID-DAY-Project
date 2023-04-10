import React from "react";
import { Button } from "antd";
import background from "../../Images/backgroundband.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Landingpage() {
  //showing all the avialable artists
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

  //show all the available gigs
  const [getGig, setGetGig] = useState([]);
  const getAllGig = async () => {
    const GigData = await axios.get("http://localhost:5000/api/allgigs");
    const data = GigData.data.gig;
    setGetGig(data);
    console.log(setGetGig);
  };
  useEffect(() => {
    getAllGig();
  }, []);

  //for available events
  const [getEvent, setGetEvent] = useState([]);
  const getAllEvents = async () => {
    const EventData = await axios.get("http://localhost:5000/api/allevents");
    const data = EventData.data.allevent;
    setGetEvent(data);
    console.log(setGetEvent);
  };
  useEffect(() => {
    getAllEvents();
  }, []);

  //
  //for hte correct value of the date
  const dateOptions = { day: "numeric", month: "long", year: "numeric" };
  var startDateTime = new Date(getGig?.gigdate);
  const newStartDate1 = startDateTime.toLocaleDateString("en-US", dateOptions);

  return (
    <div className="bg-white ">
      <div className=" flex justify-between sticky top-0 bg-white">
        <div>
          <img
            alt="photooflanding"
            className="h-[13vh] w-[13vh] relative left-6 "
            src={require("../../Images/gig.png")}
          />
        </div>
        <div className="flex mt-[28px]">
          <p className=" w-[90px] h-[55px]  font-bold text-[15px]  items-center text-center text-black mr-[40px] ">
            Find Artists
          </p>
          <p className=" w-[80px] h-[63px] font-bold text-[15px]   items-center text-center text-black  mr-[20px] ml-[20px]">
            Find Gigs
          </p>
          <p className=" w-[80px] h-[63px]  font-bold text-[15px]  items-center text-center text-black ml-[40px] ">
            Find Shows
          </p>
        </div>
        <div className="flex  space-x-10 mr-[25px] mt-[28px]  ">
          <Link to="/login">
            <Button
              className="border-white font-semibold  text-[15px]"
              size="medium"
            >
              Log In
            </Button>
          </Link>
          <Link to="/beforesign">
            <Button
              className="border-white font-semibold text-[15px] "
              size="medium"
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "90vh",
        }}
        className="mt-[-20px]"
      >
        <div className=" text-center pt-[15%] ">
          <p className="text-5xl  font-kadwa font-bold text-[#332727]">
            GIG-DAY
          </p>
          <p className=" text-[23px] font-bold  text-[#4D3939]">
            Book Artists for live music and buy show tickets easily
          </p>
          <p className=" text-[17px] font-bold text-[#4D3939]">
            Connect Restaurants,Artist and Viewers
          </p>
          <Link to="/beforesign">
            <Button
              className="mt-[20px]  bg-[#4D3939] text-white rounded-xl  border-gray-400"
              size="large"
            >
              Join Now
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <h1 className="text-[35px] text-center font-bold text-orange-500 animate-pulse">
          Avialale Musicians
        </h1>
        <div className="grid grid-cols-4 gap-5 mt-5 ml-2">
          {/* mapping  */}
          {getArtist.map((artist, i) => {
            return (
              <div key={i} className=" text-center rounded-lg bg-black ">
                <div>
                  <img
                    className="w-full h-[25vh]"
                    alt="naruto"
                    src={`http://localhost:5000/${artist.profile_image}`}
                  />
                </div>

                <div>
                  <h1 className="font-bold text-[18px] text-white">
                    {artist.firstname} {artist.lastname}
                  </h1>
                  <h1 className="font-bold text-[15px] text-white">
                    {artist.bio}
                  </h1>
                </div>
                <div className="">
                  <button className="  border-2 px-2 rounded-lg bg-orange-600 hover:border-white border-black text-white hover:text-black">
                    Book Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* section for avialable gigs */}
      <div className="mt-4">
        <h1 className="text-[35px] text-center font-bold text-orange-500 animate-pulse">
          Avialale Gigs
        </h1>
        <div>
          {/* getall artist registered */}
          <div className="grid grid-cols-4 gap-5 mt-5 ml-2">
            {/* mapping  */}
            {getGig.map((gig, i) => {
              return (
                <div key={i} className=" text-center rounded-lg bg-black">
                  <div>
                    <img
                      className="w-full h-[25vh]"
                      alt="naruto"
                      src={`http://localhost:5000/${gig.gigProfile}`}
                    />
                  </div>

                  <div>
                    <h1 className="font-bold text-[18px] text-white">
                      {gig.gigName}
                    </h1>
                    <h1 className="text-[15px] font-medium   text-white ">
                      {newStartDate1}
                    </h1>
                    <h1 className=" flex  justify-center gap-1 text-[18] text-white">
                      {gig.address}
                    </h1>
                  </div>
                  <div className="">
                    <button className=" border-2 px-2 rounded-lg bg-orange-600 hover:border-white border-black hover:text-black text-white">
                      Apply Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* for available events */}
        <div>
          {/* getall artist registered */}
          <h1 className="text-[35px] text-center font-bold text-orange-500 animate-pulse">
            Upcoming Events
          </h1>
          <div className="grid grid-cols-4 gap-5 mt-5 ml-2">
            {/* mapping  */}
            {getEvent.map((event, i) => {
              return (
                <div key={i} className=" text-center rounded-lg bg-black ">
                  <div>
                    <img
                      className="w-full h-[20vh]"
                      alt="naruto"
                      src={`http://localhost:5000/${event.EventPic}`}
                    />
                  </div>

                  <div>
                    <h1 className="font-bold text-[18px] text-white">
                      {event.eventName}
                    </h1>
                    <h1 className="text-[15px] font-medium  text-white ">
                      {event.eventdate}
                    </h1>
                    <h1 className="flex justify-center gap-2 text-white ">
                      {event.ArtistName}
                    </h1>
                  </div>
                  <div className="">
                    <button className="  border-2 px-2 rounded-lg bg-orange-600 hover:border-white border-black hover:text-black text-white">
                      Buy Tickets Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
