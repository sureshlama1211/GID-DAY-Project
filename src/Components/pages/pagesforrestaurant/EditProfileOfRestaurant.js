import { useEffect, useState } from "react";
import axios from "axios";
import SettingForRestaurant from "./SettingForRestaurant";
import useUser from "../../../auth/useUser";

export default function EditProfileOfRestaurant() {
  const user = useUser();
  const email = user.email;
  const [getinfoartist, setGetInfoArtist] = useState([]);
  const artistinformation = async () => {
    const ArtistInfo = await axios.patch(
      `http://localhost:5000/api/profilebeforeedit/${email}`
    );
    const data = ArtistInfo.data.getprofileinfo;
    setGetInfoArtist(data);
  };
  useEffect(() => {
    artistinformation();
  }, []);
  return (
    <div>
      <SettingForRestaurant getinfoartist={getinfoartist} />
    </div>
  );
}
