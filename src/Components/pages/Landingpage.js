import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import background from "../../Images/backgroundband.jpg";
import background2 from "../../Images/download.webp";
// import background3 from "../../Images/download1.webp";

import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { SiTwitter, SiFacebook } from "react-icons/si";
import { useEffect } from "react";
import ReactTyped from "react-typed";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
export default function Landingpage() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
    AOS.refresh();
  }, []);

  //for splide
  const commonContent = (
    <div className="text-center pt-[15%]">
      <p className="text-5xl font-kadwa font-bold text-[#332727]">GIG-DAY</p>
      <p className="text-[23px] font-bold text-[#332727]">
        <ReactTyped
          strings={["Book Musicians for live music In your Venue"]}
          typeSpeed={100}
          loop
          backSpeed={20}
          showCursor={true}
        />
      </p>
      <p className="text-[17px] font-bold text-[#332727]">
        Connect Restaurants and Musicians
      </p>
      <Link to="/beforesign">
        <button className="mt-[20px] bg-[#4D3939] text-white rounded-xl px-4 py-2 hover:bg-slate-600 border-gray-400">
          Join Now
        </button>
      </Link>
    </div>
  );
  //
  const commonContent1 = (
    <div className="text-center pt-[15%]">
      <p className="text-5xl font-kadwa font-bold text-black">GIG-DAY</p>
      <p className="text-[23px] font-bold text-black">
        <ReactTyped
          strings={["Book Musicians for live music In your Venue"]}
          typeSpeed={100}
          loop
          backSpeed={20}
          showCursor={true}
        />
      </p>
      <p className="text-[17px] font-bold text-black">
        Connect Restaurants and Musicians
      </p>
      <Link to="/beforesign">
        <button className="mt-[20px] bg-white text-orange-600 rounded-xl px-4 py-2 hover:bg-black border-gray-400">
          Join Now
        </button>
      </Link>
    </div>
  );

  return (
    <div className="bg-black ">
      <div className=" flex justify-between sticky top-0 bg-gray-300 bg-opacity-90  z-10">
        <div>
          <img
            alt="photooflanding"
            className="h-[12vh] w-auto  "
            src={require("../../Images/gig.png")}
          />
        </div>
        <div className="flex pt-[28px] gap-20">
          <Link to="/login">
            <p className="  hover:border-orange-600 hover:border-b-2  cursor-pointer  font-bold text-[15px]  items-center text-center text-black ">
              Find Artists
            </p>
          </Link>
          <Link to="/login">
            <p className=" hover:border-orange-600 hover:border-b-2  cursor-pointer font-bold text-[15px]   items-center text-center text-black ">
              Find Gigs
            </p>
          </Link>
          <Link to="/login">
            <p className="  hover:border-orange-600 hover:border-b-2  cursor-pointer  font-bold text-[15px]  items-center text-center text-black  ">
              Find Shows
            </p>
          </Link>
        </div>
        <div className="flex  space-x-10 items-center mr-[20px]">
          <Link to="/login">
            <button
              className="border-white font-semibold hover:bg-orange-600 px-2 hover:rounded-xl py-1 text-[15px]"
              size="medium"
            >
              Log In
            </button>
          </Link>
          <Link to="/beforesign">
            <button className="border-white font-semibold text-[15px] hover:bg-orange-600 px-2 py-1 hover:rounded-xl  ">
              Sign Up
            </button>
          </Link>
        </div>
      </div>

      <Splide
        options={{
          type: "fade", // Use fade for smooth transitions
          perPage: 1,
          interval: 5000,
        }}
      >
        <SplideSlide>
          <div
            style={{
              backgroundImage: `url(${background})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "90vh",
            }}
            className="mt-[-20px]"
          >
            {commonContent}
          </div>
        </SplideSlide>
        <SplideSlide>
          <div
            style={{
              backgroundImage: `url(${background2})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "90vh",
            }}
            className="mt-[-20px]"
          >
            {commonContent1}
          </div>
        </SplideSlide>
        {/* <SplideSlide>
          <div
            style={{
              backgroundImage: `url(${background3})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "90vh",
            }}
            className="mt-[-20px]"
          >
            {commonContent1}
          </div>
        </SplideSlide> */}
      </Splide>

      {/*  */}
      <div className="mt-8">
        <div className="flex justify-around">
          <div data-aos="fade-right" className="w-[50%]">
            <p className="text-white font-semibold text-[25px] pt-[100px]">
              Find Your Ideal Musicians with Our App!
            </p>
            <p className="text-white">
              By enrolling in this app, you will have the opportunity to
              discover numerous musicians, each specialized in various genres,
              ensuring that you find the perfect fit for your gig.
            </p>
          </div>
          <img
            data-aos="fade-up"
            src="./gig1.jpeg"
            alt="gigpicture"
            className="h-[50vh] w-auto rounded-lg"
          />
        </div>
      </div>
      {/*  */}
      <div className="mt-8">
        <div className="flex justify-around">
          <img
            data-aos="fade-up"
            src="./sing.jpg"
            alt="gigpicture"
            className="h-[50vh] w-auto rounded-lg"
          />
          <div data-aos="fade-down" className="w-[50%]">
            <p className="text-white font-semibold text-[25px] pt-[100px]">
              Musician's Gig Gateway: Apply and Perform!
            </p>
            <p className="text-white">
              Calling all musicians! Elevate your career with our app's gig
              gateway. Discover a wide range of exciting gigs that align with
              your musical genre and style. Simply apply for gigs that interest
              you, showcase your talent, and open the door to incredible
              performance opportunities. Don't miss a beat – join now and step
              into the spotlight!
            </p>
          </div>
        </div>
      </div>
      {/*  */}

      {/* Footer Secrion */}

      <div className="mt-10 bg-[#262A56]">
        <div className="flex justify-between mx-4 items-center pt-5 pb-4">
          <div>
            <img
              alt="photooflanding"
              className="h-[12vh] w-auto  "
              src={require("../../Images/gig.png")}
            />
          </div>
          <div>
            <h1 className=" font-bold  text-white cursor-pointer hover:text-orange-600">
              Company
            </h1>
            <h3 className="text-white font-light cursor-pointer">About Us</h3>
            <h3 className="text-white font-light cursor-pointer">Blog</h3>
          </div>
          <div>
            <h1 className="text-white font-bold hover:text-orange-600 cursor-pointer">
              Event Planners
            </h1>
            <h3 className="text-white font-light cursor-pointer">
              How it Works
            </h3>
          </div>
          <div>
            <h1 className="text-white font-bold hover:text-orange-600 cursor-pointer">
              Support
            </h1>
            <h3 className="text-white font-light cursor-pointer">
              Help Center
            </h3>
            <h3 className="text-white font-light cursor-pointer">Contact Us</h3>
            <h3 className="text-white font-light cursor-pointer">Log In</h3>
          </div>
          <div className="flex gap-5">
            <SiTwitter className="mt-0.5 text-lg text-blue-600" />
            <SiFacebook className="mt-0.5 text-lg text-blue-600" />
            <BsInstagram className="mt-0.5 text-lg text-red-400" />
          </div>
        </div>
      </div>
      {/* <div className="flex justify-between  pt-3 pb-3 bg-[#E3EDEE] mt-5">
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
      </div> */}
    </div>
  );
}
