import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
//copy this
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//decodder import
import jwt_decode from "jwt-decode";
import { FcAbout, FcBusinessContact } from "react-icons/fc";
import { SiTwitter, SiFacebook } from "react-icons/si";
import axios from "axios";
import useToken from "../../auth/useToken";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Loginpage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  console.log(errors);
  //state for tracking the values of input
  const [token, setToken] = useToken();
  const navigate = useNavigate();

  const onLogInClicked = async ({ email, password }) => {
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email: email,
        password: password,
      });
      const { token } = response.data;
      setToken(token);

      var decoded = jwt_decode(token);
      console.log(decoded);

      if (decoded.role === "artist") {
        navigate("/signasartist");
      } else if (decoded.role === "restaurant") {
        //if profile is made navigate to home page
        if (!decoded.firstname) navigate("/signasrestaurant");
        else {
          navigate("/findartist");
        }
      } else if (decoded.role === "viewer") {
        navigate("/signasviewer");
      } else {
        navigate("/error");
      }
      // extract role from token

      toast.success("Logged in Successfully", {
        position: "bottom-right",
        autoClose: 5000,
      });
    } catch (error) {
      toast.error("Account is not verified", {
        position: "bottom-right",
        autoClose: 5000,
      });
    }
  };

  return (
    <div>
      <div className="bg-white drop-shadow-xl  ">
        <div className=" flex justify-between">
          <div className>
            <img
              alt="photooflanding"
              className="h-[13vh] w-[13vh] relative left-6 "
              src={require("../../Images/gig.png")}
            />
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
      </div>

      <div>
        <form
          className="bg-zinc-400 ml-[38%] mr-[38%] rounded-[8px] relative top-[90px]"
          onSubmit={handleSubmit(onLogInClicked)}
        >
          <div>
            <p className="text-center mt-11 pt-3 relative right-[10px] text-[25px] font-semibold text-[#D0FBD7] drop-shadow-md">
              LOG IN
            </p>
          </div>
          <div className="text-center mt-3">
            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
              placeholder="Email"
              className=" placeholder-black  city  w-[250px] h-7 rounded-[8px] border-solid border-white border-[2px]  bg-zinc-400 drop-shadow-md "
            />
            <span className="flex justify-center text-red-600 mb-[-10px] text-sm ">
              {errors.email?.type === "required" && "Email is required"}
            </span>
          </div>
          <div className="mt-6 text-center">
            <input
              type="password"
              name="password"
              {...register("password", { required: true })}
              id="password"
              placeholder="Password"
              className="placeholder-black w-[250px] h-7 rounded-[8px] border-solid border-white border-[2px] bg-zinc-400 drop-shadow-md"
            />
            {/* Message for an error */}
            <span className="flex justify-center text-red-600 mb-[-10px] text-sm ">
              {errors.password?.type === "required" && "Password  is required"}
            </span>
          </div>
          <button
            type="submit"
            className="relative left-[120px] mt-6 mb-5 rounded-[3px] pt-[1px] pb-[1px] pl-[5px] pr-[5px] text-[15px] bg-[#D1D0E3] drop-shadow-lg"
          >
            Join Now
          </button>
          <Link to="/beforesign">
            <p className="text-[13px] text-center font-semibold hover:text-pink-800  mt-[-12px] pb-[10px]">
              Don't have an account,Click Here{" "}
            </p>
          </Link>
        </form>
      </div>
      {/* Footer Secrion */}
      <div className="flex justify-between mt-[260px] pt-3 pb-3 bg-[#E3EDEE] ">
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
