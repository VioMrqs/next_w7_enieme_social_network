import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import PostsList from "../../components/PostsList";
import { useParams } from "react-router";
import {Link} from "react-router-dom"

const User = () => {
  const { id } = useParams();
  const [profileData, setProfileData] = useState("");
  const [postsData, setPostsData] = useState([]);

  // fetching of profile

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

  // fetching post of the user
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
if (logInfo.connected === true) {
if (profileData) {
  return (
    <div className="profile">
      <div className="profile-card">
        <h1>Profile de {profileData.username}</h1>
        <h2>{profileData.email}</h2>
        <p>{profileData.description}</p>
      </div>
      <h1>Les posts de {profileData.username}</h1>
      <PostsList postsData={postsData} />
    </div>
  );
} else {
  return (
    <div className="profile">
        <h1>Loading...</h1>
    </div>
  );
}
};
  return (
    <div className="profile">
      <h1>Bien tenté, sacripant</h1>
      <Link to="/login" className="navbar__button">
        Va te connecter
      </Link>
      <Link to="/register" className="navbar__button">
        Va t'inscrire'
      </Link>
    </div>
  );
}

export default User;
