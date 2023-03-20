import { useEffect, useState } from "react";
import axios from "axios";
import FindArtist from "./FindArtist";

export default function GetAllArtistFromBackend() {
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
  return (
    <div>
      <FindArtist getArtist={getArtist} />
    </div>
  );
}
