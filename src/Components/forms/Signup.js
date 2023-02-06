import React from "react"
import { useState } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
//calling api 
import axios from "axios"
export default function Loginpage(){
    const {register, formState:{errors},handleSubmit} = useForm();
    const onSubmit = (data) =>{
        console.log(data)
    };
    console.log(errors);
    const[user,setUser] = useState({
        email:"",
        password:"",
        passwordhai:""

    })
    const handleChange = e =>{
        console.log(e.target)
        const{ name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    //signup function
    const signup = () =>{
        const {email, password , passwordhai} = user
        //validation for email password and re enter password
        if(email && password && (password === passwordhai) ){
             axios.post("http://localhost:9002/signup",user)
             .then(res=>console.log(res))
        }
        else{
            alert("invalid")
        }
      
    }
    return(
        <div>
            {console.log("User",user)}
            <div  className="bg-white drop-shadow-xl  ">
                <div className=" flex justify-between">
                <div >
                    <Link to="/">
                        <img className="h-[14vh] w-[14vh] relative left-6  pointer-cursor " alt="logo " src={require('../../Images/gig.png')} />
                    </Link>
                </div>
                <div  className="flex mt-[25px] ">
                <p className=" w-[70px] h-[20px]  font-bold text-[13px]   text-center text-black mr-[40px] cursor-pointer ">Find Artists</p>
                <p className=" w-[70px] h-[20px] font-bold text-[13px]    text-center text-black  mr-[20px] ml-[20px]  cursor-pointer">Find Gigs</p>
                <p className=" w-[70px] h-[20px]  font-bold text-[13px]  text-center text-black ml-[40px]  cursor-pointer">Find Shows</p>
                </div>
                <div className="flex  space-x-10 mr-[25px] mt-[25px]  ">
                    <Link to="/login">
                        <Button className="border-white" size="small" >Log In</Button>
                    </Link>
                    <Link to="/signup">
                        <Button className="border-white "size="small">Sign Up</Button>
                    </Link>
                </div>
            </div>
            </div>

            <div className="bg-zinc-400 ml-[390px] mr-[390px] rounded-[8px] mt-[30px]">
                <div>
                    <p className="text-center mt-11 pt-3 relative right-[90px] text-[20px] font-semibold text-[#D0FBD7] drop-shadow-md">Join The Fun</p>
                </div>
                <form className="pb-7" onSubmit={handleSubmit(onSubmit) }>
                    <div className="text-center mt-3">
                    <input type="email" name="email" value={user.email} {...register("email",({required:true}))}  placeholder="Email" onChange={handleChange}  className=" placeholder-black  city  w-[250px] h-7 rounded-[8px] border-solid border-white border-[2px]  bg-zinc-400 drop-shadow-md"/>
                    <span className="flex ml-[70px] text-red-600 mb-[-10px] text-xs ">{errors.email?.type==="required" && "Email is required"}</span>
                    </div>
                    <div className="mt-6 text-center">
                    <input type="password" name="password" value={user.password} {...register("password",({required:true}))}  id="password" placeholder="Password" onChange={handleChange} className="placeholder-black w-[250px] h-7 rounded-[8px] border-solid border-white border-[2px] bg-zinc-400 drop-shadow-md"/>
                    <span className="flex ml-[70px] text-red-600 mb-[-10px] text-xs ">{errors.password?.type==="required" && "Password  is required"}</span>
                    </div>
                    <div className="mt-6 text-center">
                    <input type="password" name="passwordhai" value={user.passwordhai} {...register("passwordhai",({required:true}))} id="password1" placeholder="Confirm Password" onChange={handleChange}  className="placeholder-black w-[250px] h-7 rounded-[8px] border-solid border-white border-[2px] bg-zinc-400 drop-shadow-md"/>
                    <span className="flex ml-[70px] text-red-600 mb-[-10px] text-xs ">{errors.passwordhai?.type==="required" && "Password  is required"}</span>
                    </div>
                    <button type="submit" onClick={signup}  className="relative left-[100px] mt-5 rounded-[3px] pt-[1px] pb-[1px] pl-[5px] pr-[5px] text-[14px] bg-[#D1D0E3] drop-shadow-lg">Join Now</button> 
                </form>
                
                
            </div>
            <div className="flex justify-between mt-[110px] pt-3 pb-3 bg-[#E3EDEE] ">
                <div className=" ml-4 flex gap-6">
                    <p className="text-[12px]">About Us</p>
                    <p className="text-[12px]">Contact</p>
                </div>
                <div className="mr-4 flex gap-6">
                    <p className="text-[12px]">Twitter</p>
                    <p className="text-[12px]">Facebook</p>
                </div>
            </div>
        </div>
    )
}