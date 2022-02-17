import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { useState } from "react";
import UserUpdateForm from "../../components/UserUpdateForm";

const Profile = () => {
  const [profileData, setProfileData] = useState("");
  const logInfo = useSelector((state) => state);
  const userToken = Cookies.get("token");

  if (logInfo.connected === true && !profileData) {
    fetch(`http://localhost:1337/users/me`, {
      method: "get",
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setProfileData(response);
      })
      .catch((error) => console.log(error));
  }

  console.log(profileData);

  // return & conditions

  if (logInfo.connected && profileData) {
    return (
      <div className="profile">
        <div className="profile__card">
          <h1>Profile de {profileData.username}</h1>
          <h2>{profileData.description}</h2>
          <p>{profileData.email}</p>
        </div>
        <UserUpdateForm profile={profileData} />
      </div>
    );
  } else {
    return <h1>Bien tenté, sacripant</h1>;
  }
};

export default Profile;
