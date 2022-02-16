import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import PostsList from "../../components/PostsList";
import { useParams } from "react-router";
import UserUpdateForm from "../../components/UserUpdateForm";

const User = () => {
  const { id } = useParams();
  const [profileData, setProfileData] = useState("");
  const [postsData, setPostsData] = useState([]);

  // Handling the fetching of profile
  const logInfo = useSelector((state) => state);
  const userToken = Cookies.get("token");

  useEffect(() => {
      fetch(`http://localhost:1337/users/${id}`, {
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
    }, [id]);

  // See post of the profile

  useEffect(() => {
    fetch(`http://localhost:1337/posts?user.id=${id}`, {
      method: "get",
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setPostsData(response);
      })
      .catch((error) => console.log(error));
  }, []);

// return & conditions

  if (logInfo.connected === true && profileData) {
    return (
      <div className="profile">
        <div className="profile-card">
          <h1>Profile de {profileData.username}</h1>
          <h2>{profileData.email}</h2>
          <p>{profileData.description}</p>
        </div>
        <h1>Les posts de {profileData.username}</h1>
        <PostsList postsData={postsData}/>
        <UserUpdateForm profileData={profileData}/>
      </div>
    );
  } else {
    return <div>Bien tenté</div>;
  }
};

export default User;
