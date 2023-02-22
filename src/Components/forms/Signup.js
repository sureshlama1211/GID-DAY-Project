import React from "react"

import { Button } from "antd";
import { Link, Route } from "react-router-dom";
import { useForm } from 'react-hook-form';
//importing the axios
import axios from 'axios'
//importing from auth file
import  useToken  from "../../auth/useToken";

import { useNavigate } from "react-router-dom";



//calling api 
// import axios from "axios"
export default function Loginpage(){
    const navigate = useNavigate();
    const {register, formState:{errors},watch,handleSubmit} = useForm();
    console.log(errors);

    const [token, setToken] = useToken();
    // //signup function
    // const signup = () =>{
    //     const {email, password , passwordhai} = user
    //     //validation for email password and re enter password
    //     if(email && password && (password === passwordhai) ){
    //          axios.post("http://localhost:9002/signup",user)
    //          .then(res=>console.log(res))
    //     }
    //     else{
    //         alert("invalid")
    //     }
      
    // }
    // const[token ,setToken] = useToken();

    // const onSignUpClicked = async ({
    //     email, password
    // })=>{
    //     const response = await axios.post('/api/signup',{
    //         email:email,
    //         password:password

    //     });
    //     const {token} = response.data;
    //     setToken(token);
    //     navigate ('/')
    const onSignUpClicked = async({
        email,passwordhai
    })=>{
        const response = await axios.post('http://localhost:5000/api/signup',{
            email:email,
            password:passwordhai,
        });
        const{token} = response.data;
        setToken(token);
        navigate('/verifyemail')

    }
    watch();
    //To check password
    const validatepassword = (value) => {
        let error;
        if (!value) {
            error = "Confirm Password is required";
        } else if (value !== watch("password")) {
            error = "Passwords do not match";
        }
        return error || true;
    };

      
    
    return(
        <div>
            
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
                <form className="pb-7" onSubmit={handleSubmit(onSignUpClicked)}  >
                    <div className="text-center mt-3">
                    <input type="email" name="email" {...register("email",({required:true}))}  placeholder="Email"   className=" placeholder-black  city  w-[250px] h-7 rounded-[8px] border-solid border-white border-[2px]  bg-zinc-400 drop-shadow-md"/>
                    <span className="flex ml-[70px] text-red-600 mb-[-10px] text-xs ">{errors.email?.type==="required" && "Email is required"}</span>
                    </div>
                    <div className="mt-6 text-center">
                    <input type="password" name="password"  {...register("password",({required:true}))}  id="password" placeholder="Password"  className="placeholder-black w-[250px] h-7 rounded-[8px] border-solid border-white border-[2px] bg-zinc-400 drop-shadow-md"/>
                    <span className="flex ml-[70px] text-red-600 mb-[-10px] text-xs ">{errors.password?.type==="required" && "Password  is required"}</span>
                    </div>
                    <div className="mt-6 text-center">
                    <input type="password" name="passwordhai"  {...register("passwordhai",{validate:validatepassword},({required:true}))} id="password1" placeholder="Confirm Password"   className="placeholder-black w-[250px] h-7 rounded-[8px] border-solid border-white border-[2px] bg-zinc-400 drop-shadow-md"/>
                    <span className="flex ml-[70px] text-red-600 mb-[-10px] text-xs ">{errors.passwordhai?.type==="required" && "Password  is required"}</span>
                    </div>
                    <button type="submit" className="relative left-[100px] mt-5 rounded-[3px] pt-[1px] pb-[1px] pl-[5px] pr-[5px] text-[14px] bg-[#D1D0E3] drop-shadow-lg">Join Now</button> 
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
