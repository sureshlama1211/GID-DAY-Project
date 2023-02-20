import React from "react"
import { Button } from "antd";
import { Link } from "react-router-dom";
//
import axios from  'axios'
import useToken from "../../auth/useToken";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

export default function Loginpage(){
    const {register, formState:{errors},handleSubmit} = useForm();
    console.log(errors);
    //state for tracking the values of input
    const[token, setToken] = useToken();
    const navigate = useNavigate();
   
const onLogInClicked = async({
    email, password
})=>{
    const response = await axios.post('http://localhost:5000/api/login',{
        email:email,
        password:password,
    })
    const {token} = response.data;
    setToken(token);
    navigate('/beforesign');

}
   
    return(
        <div>
            <div  className="bg-white drop-shadow-xl  ">
                <div className=" flex justify-between">
                <div >
                    {/* link to the landing page */}
                    <Link to="/">
                        <img className="h-[14vh] w-[14vh] relative left-6  " alt="logo " src={require('../../Images/gig.png')} />     
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
                    <p className="text-center mt-11 pt-3 relative right-[10px] text-[20px] font-semibold text-[#D0FBD7] drop-shadow-md">LOG IN</p>
                </div>
                <form className="pb-7" onSubmit={handleSubmit(onLogInClicked) }>
                    <div className="text-center mt-3">
                    <input type="email" name="email"   {...register("email",({required:true}))}  placeholder="Email"   className=" placeholder-black  city  w-[250px] h-7 rounded-[8px] border-solid border-white border-[2px]  bg-zinc-400 drop-shadow-md "/>
                    <span className="flex ml-[70px] text-red-600 mb-[-10px] text-xs ">{errors.email?.type==="required" && "Email is required"}</span>
                    </div>
                    <div className="mt-6 text-center">
                    <input type="password"  name="password"  {...register("password",({required:true}))}  id="password" placeholder="Password"   className="placeholder-black w-[250px] h-7 rounded-[8px] border-solid border-white border-[2px] bg-zinc-400 drop-shadow-md"/>
                    {/* Message for an error */}
                    <span className="flex ml-[70px] text-red-600 mb-[-10px] text-xs ">{errors.password?.type==="required" && "Password  is required"}</span>
                    </div>
                    <button type="submit"  className="relative left-[100px] mt-6 rounded-[3px] pt-[1px] pb-[1px] pl-[5px] pr-[5px] text-[14px] bg-[#D1D0E3] drop-shadow-lg">Join Now</button> 
                </form>
                <Link to="/signup">
                <p className="text-[10px] relative left-[70px] mt-[-18px] pb-[10px]">Don't have an account,Click Here </p>  
                </Link>
            </div>
            {/* Footer Secrion */}
            <div className="flex justify-between mt-[142px] pt-3 pb-3 bg-[#E3EDEE] ">
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