import React, { useState } from "react";
import { FcAbout, FcBusinessContact } from "react-icons/fc";
import { SiTwitter, SiFacebook } from "react-icons/si";
import { Button } from "antd";
import { Link, Route } from "react-router-dom";
import { useForm } from "react-hook-form";
//importing the axios
import axios from "axios";
//importing from auth file
import useToken from "../../auth/useToken";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import backgroundpic from "../../Images/backgroundlog.jpg";
import { useNavigate } from "react-router-dom";
//for search param
import { useSearchParams } from "react-router-dom";
import background from "../../Images/bgloginsign.jpg";

//calling api
// import axios from "axios"
export default function Loginpage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const role = searchParams.get("role");
  const [assignrole, setAssignRole] = useState(role);
  console.log(role);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm();
  console.log(errors);

  const [token, setToken] = useToken();

  const onSignUpClicked = async ({ email, passwordhai }) => {
    try {
      console.log(assignrole);
      const response = await axios.post("http://localhost:5000/api/signup", {
        email: email,
        password: passwordhai,
        role: assignrole,
      });
      const { token } = response.data;
      setToken(token);
      toast.success("Signed up Successfully", {
        position: "bottom-right",
        autoClose: 5000,
      });
      navigate("/verifyemail");
    } catch (error) {
      toast.error("Account already exists");
    }
  };
  watch();
  //To check password
  const validatepassword = (value) => {
    let error;
    if (!value) {
      toast.error("Confirm Password is Required");
      error = "Confirm Password is required";
    } else if (value !== watch("password")) {
      toast.error("Passwords do not match");
      error = "Passwords do not match";
    }

    return error || true;
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundpic})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div className="bg-white drop-shadow-xl  ">
        <div className=" flex justify-between">
          <div className>
            <Link to="/">
              <img
                alt="photooflanding"
                className="h-[13vh] w-[13vh] relative left-6 "
                src={require("../../Images/gig.png")}
              />
            </Link>
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
          className="bg-zinc-400 ml-[36%] mr-[36%] rounded-[8px] relative top-[60px] pb-7"
          onSubmit={handleSubmit(onSignUpClicked)}
        >
          <div>
            <p className="text-center mt-11 pt-3 relative  text-[27px] font-semibold text-[#D0FBD7] drop-shadow-md">
              Join The Fun
            </p>
          </div>
          <div className="text-center mt-3">
            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
              placeholder="Email"
              className=" placeholder-black outline-none  city  w-[250px] h-7 rounded-[8px] border-solid border-white border-[2px]  bg-zinc-400 drop-shadow-md"
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
              className="placeholder-black outline-none w-[250px] h-7 rounded-[8px] border-solid border-white border-[2px] bg-zinc-400 drop-shadow-md"
            />
            <span className="flex justify-center text-red-600 mb-[-10px] text-sm ">
              {errors.password?.type === "required" && "Password  is required"}
            </span>
          </div>
          <div className="mt-6 text-center">
            <input
              type="password"
              name="passwordhai"
              {...register(
                "passwordhai",
                { validate: validatepassword },
                { required: true }
              )}
              id="password1"
              placeholder="Confirm Password"
              className="placeholder-black outline-none w-[250px] h-7 rounded-[8px] border-solid border-white border-[2px] bg-zinc-400 drop-shadow-md"
            />
            <span className="flex justify-center text-red-600 mb-[-10px] text-sm">
              {errors.passwordhai?.type === "required" &&
                "Password  is required"}
            </span>
          </div>
          <button
            type="submit"
            className="relative left-[150px]  mt-5 rounded-[3px] pt-[1px] pb-[1px] pl-[5px] pr-[5px] text-[16px] bg-[#D1D0E3] drop-shadow-lg"
          >
            Join Now
          </button>
          <div className="mt-[8px]">
            <Link to="/login">
              <p className="text-center text-[14px] font-semibold hover:text-blue-600 ">
                Already have an account!{" "}
              </p>
            </Link>
          </div>
        </form>
      </div>
      <div className="flex justify-between mt-[206px] pt-3 pb-3 bg-[#E3EDEE] ">
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
