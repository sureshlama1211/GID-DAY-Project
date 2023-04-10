import { MdNotificationsActive } from "react-icons/md";
import useUser from "../../../auth/useUser";
import axios from "axios";
import { Dropdown, Input, Menu } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import MyModal from "../modals/ShowModel";
import { ImHappy2 } from "react-icons/im";
import { IoMdMicrophone } from "react-icons/io";
import MyModal4 from "../modals/ModalForEvent";

export default function NavbarForRestaurant() {
  const user = useUser();
  const email = user.email;
  //usestate for modal

  //validation for checking the fields in gig-creation
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const {
    register: register2,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,
  } = useForm();

  //for image of profile (multer)
  const [getInfoRestaurant, setGetInfoRestaurant] = useState();
  const Restaurantinformation = async () => {
    try {
      const RestaurantInfo = await axios.get(
        `http://localhost:5000/api/profilebeforeedit/${email}`
      );

      // console.log(ArtistInfo);
      const data = RestaurantInfo.data.getprofileinfo;
      // console.log(data);
      setGetInfoRestaurant(data);
      // console.log(getInfoArtist);
    } catch (error) {
      // console.log(error);
    }
  };
  // console.log(Artistinformation, "dai cha");
  useEffect(() => {
    Restaurantinformation();
  }, []);

  //state for modal
  const [showModal, setShowModal] = useState(false);
  //function for creating gig
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
    bio,
  }) => {
    const formData = new FormData();
    formData.append("gigProfile", gigProfile[0]);
    formData.append("gigName", gigName);
    formData.append("genreNeeded", genreNeeded);
    formData.append("gigdate", gigdate);
    formData.append("paymenttype", paymenttype);
    formData.append("starttime", starttime);
    formData.append("endtime", endtime);
    formData.append("address", address);
    formData.append("payment", payment);
    formData.append("description", bio);
    const response = await axios.post(
      "http://localhost:5000/api/gigs",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(response);
    setShowModal(false);
  };

  //
  //state for event modal
  const [eventModal, setEventModal] = useState(false);
  //method for event
  const createevent = async ({
    EventPic,
    eventName,
    TypeofEvent,
    ArtistName,
    eventdate,
    startingtime,
    endingtime,
    eventaddress,
    ticketprice,
    description,
  }) => {
    const formData = new FormData();
    formData.append("EventPic", EventPic[0]);
    formData.append("eventName", eventName);
    formData.append("TypeofEvent", TypeofEvent);
    formData.append("ArtistName", ArtistName);
    formData.append("eventdate", eventdate);
    formData.append("startingtime", startingtime);
    formData.append("endingtime", endingtime);
    formData.append("eventaddress", eventaddress);
    formData.append("ticketprice", ticketprice);
    formData.append("description", description);
    const response = await axios.post(
      "http://localhost:5000/api/event",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    setEventModal(false);
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">{email}</Menu.Item>
      <Link to="/login">
        <Menu.Item key="3">Logout</Menu.Item>
      </Link>
    </Menu>
  );
  return (
    <div className="  bg-black  sticky top-0">
      <div className=" flex justify-between bg-[#adadb167]   drop-shadow-xl">
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
          <Link to="/findartist">
            <button className=" w-[90px] h-[35px] pt-1 mt-[-5px] border-transparent rounded-2xl  font-bold text-[15px] hover:border-[#A7727D] border-2 text-center text-white mr-[40px] ">
              Find Artists
            </button>
          </Link>
          <div>
            <button
              onClick={() => setShowModal(true)}
              className=" w-[100px] h-[40px] font-bold text-[15px] border-transparent  border-2 rounded-md hover:border-[#A7727D] mt-[-10px]    text-center text-white  mr-[20px] ml-[20px]"
            >
              + Create Gig
            </button>
          </div>
          <div>
            <button
              onClick={() => setEventModal(true)}
              className=" w-[120px] h-[40px] font-bold text-[15px] border-transparent  border-2 rounded-md hover:border-[#A7727D] mt-[-10px]    text-center text-white  mr-[20px] ml-[20px]"
            >
              + Create Events
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
                src={`http://localhost:5000/${getInfoRestaurant?.profile_image}`}
                alt="profile"
                className="w-[7vh] h-[7vh] rounded-[25px]  mr-5 "
              />
            </Dropdown>
          </div>
        </div>
      </div>
      <MyModal isvisible={showModal} onClose={() => setShowModal(false)}>
        {/* contents here */}
        <form onSubmit={handleSubmit(creatinggig)}>
          <div>
            <h1 className="flex justify-center gap-2 font-bold text-[25px] text-orange-600 font-mono animate-bounce ">
              <IoMdMicrophone className="mt-1" />
              Create Your Gig Post
              <ImHappy2 className="mt-2" />
            </h1>
          </div>
          <div className="flex justify-center mt-4 gap-5">
            <div>
              <div>
                <label className=" font-bold">Gig Picture</label>
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
                  <label className=" font-bold">Gig Name</label>
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
                  <label className="  font-bold">Genre Type</label>
                </div>
                <select
                  type="text"
                  name="genreNeeded"
                  className="border-2  px-[50px] placeholder:text-center  border-black  rounded-lg shadow-xl"
                  {...register("genreNeeded", { required: true })}
                  placeholder="Genre"
                >
                  <option value=""></option>
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
                  <label className=" font-bold">Gig Date</label>
                </div>
                <input
                  type="date"
                  name="gigdate"
                  className="border-2 px-4 border-black  rounded-lg shadow-xl "
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
                  <label className="  font-bold">Payment Type</label>
                </div>
                <select
                  type="text"
                  name="paymenttype"
                  className="border-2  px-[45px] placeholder:text-center  border-black  rounded-lg shadow-xl"
                  {...register("paymenttype", { required: true })}
                  placeholder="Genre"
                >
                  <option value=""></option>
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
                  <label className="  font-bold">Starting Time</label>
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
                  <label className=" font-bold">Ending Time</label>
                </div>
                <input
                  type="time"
                  name="endtime"
                  className="border-2  px-[35px] placeholder:text-center  border-black  rounded-lg shadow-xl"
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
                  <label className="  font-bold">Address</label>
                </div>
                <input
                  type="text"
                  name="address"
                  className="border-2 px-1  border-black  rounded-lg shadow-xl "
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
                  <label className="  font-bold">Payment </label>
                </div>
                <input
                  type="number"
                  name="payment"
                  className="border-2  px-1 placeholder:text-center  border-black  rounded-lg shadow-xl"
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
              <label className="font-bold">Description</label>
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

      {/*  */}
      <MyModal4 isvisible={eventModal} onClose={() => setEventModal(false)}>
        <form onSubmit={handleSubmit2(createevent)}>
          <div>
            <h1 className="flex justify-center gap-2 font-bold text-[25px] text-orange-600 font-mono animate-bounce ">
              <IoMdMicrophone className="mt-1" />
              Create Your Event Post
              <ImHappy2 className="mt-2" />
            </h1>
          </div>
          <div className="flex justify-center mt-4 gap-5">
            <div>
              <div>
                <label className=" font-bold">Event Picture</label>
              </div>
            </div>
            <input
              type="file"
              name="EventPic"
              className="border-2 border-black  rounded-lg shadow-xl "
              {...register2("EventPic", { required: true })}
            />
            <span className="flex justify-center text-red-600 mb-[-10px] text-xs ">
              {errors2.EventPic?.type === "required" &&
                " Event Picture must be added"}
            </span>
          </div>

          <div className="flex justify-center gap-6 mt-5">
            <div>
              <div>
                <div>
                  <label className=" font-bold">Event Name</label>
                </div>
                <input
                  type="text"
                  name="eventName"
                  className="border-2 border-black  rounded-lg shadow-xl "
                  {...register2("eventName", { required: true })}
                />
                <span className="flex justify-center text-red-600 mb-[-10px] text-xs ">
                  {errors2.eventName?.type === "required" &&
                    " Event Name Name must be added"}
                </span>
              </div>
            </div>

            <div>
              <div>
                <div>
                  <label className="  font-bold">Genre of Music</label>
                </div>
                <select
                  type="text"
                  name="TypeofEvent"
                  className="border-2  px-[50px] placeholder:text-center  border-black  rounded-lg shadow-xl"
                  {...register2("TypeofEvent", { required: true })}
                  placeholder="Genre"
                >
                  <option value=""></option>
                  <option value="Classical">Classical</option>
                  <option value="Lok Dohori">Lok Dohori</option>
                  <option value="Pop">Pop</option>
                  <option value="Rock">Rock</option>
                  <option value="Hip Hop">Hip Hop</option>
                </select>
                <span className="flex justify-center text-red-600 mb-[-10px] text-xs ">
                  {errors2.TypeofEvent?.type === "required" &&
                    " Genre of music must be added"}
                </span>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <label className=" font-bold">Artist Name</label>
                </div>
                <input
                  type="text"
                  name="ArtistName"
                  className="border-2 px-4 border-black  rounded-lg shadow-xl "
                  {...register2("ArtistName", { required: true })}
                />
                <span className="flex justify-center text-red-600 mb-[-10px] text-xs ">
                  {errors2.ArtistName?.type === "required" &&
                    "Artist Name must be added"}
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-5">
            <div>
              <div>
                <div>
                  <label className="  font-bold">Date of event</label>
                </div>
                <input
                  type="date"
                  name="eventdate"
                  className="border-2  px-[35px] placeholder:text-center  border-black  rounded-lg shadow-xl"
                  {...register2("eventdate", { required: true })}
                ></input>
                <span className="flex justify-center text-red-600 mb-[-10px] text-xs ">
                  {errors2.eventdate?.type === "required" &&
                    " Date of event must be added"}
                </span>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <label className="  font-bold">Starting Time</label>
                </div>
                <input
                  type="time"
                  name="startingtime"
                  className="border-2 px-[50px] border-black  rounded-lg shadow-xl "
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
                  className="border-2  px-[50px] placeholder:text-center  border-black  rounded-lg shadow-xl"
                  {...register2("endingtime", { required: true })}
                />

                <span className="flex justify-center text-red-600 mb-[-10px] text-xs ">
                  {errors2.endingtime?.type === "required" &&
                    " Endtime  must be added"}
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-start pl-3 gap-6 mt-5">
            <div>
              <div>
                <div>
                  <label className="  font-bold">Event Address</label>
                </div>
                <input
                  type="text"
                  name=" eventaddress"
                  className="border-2 px-1  border-black  rounded-lg shadow-xl "
                  {...register2("eventaddress", { required: true })}
                />
                <span className="flex justify-center text-red-600 mb-[-10px] text-xs ">
                  {errors2.eventaddress?.type === "required" &&
                    "Venue Address must be added"}
                </span>
              </div>
            </div>

            <div>
              <div>
                <div>
                  <label className="font-bold">Ticket Price </label>
                </div>
                <input
                  type="number"
                  name="ticketprice"
                  className="border-2  px-3 placeholder:text-center  border-black  rounded-lg shadow-xl"
                  {...register2("ticketprice", { required: true })}
                />

                <span className="flex justify-center text-red-600 mb-[-10px] text-xs ">
                  {errors2.ticketprice?.type === "required" &&
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
                "Must provide a short discription about an Event"}
            </span>
          </div>
          <button
            type="submit"
            className="mt-7 border-black border-2 px-5 rounded-xl bg-orange-400"
          >
            Post
          </button>
        </form>
      </MyModal4>
    </div>
  );
}
