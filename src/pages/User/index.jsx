import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Button from "../../components/Button";
import PostsList from "../../components/PostsList";
import { useParams } from "react-router";

const User = () => {
  const { id } = useParams();
  const [profileData, setProfileData] = useState("");
  const [username, setUserName] = useState("");
  const [description, setDescription] = useState("");
  const [postsData, setPostsData] = useState([]);

  // Handling the name change
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  // Handling the description change
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  // Handling the fetching of profile
  const logInfo = useSelector((state) => state);

  const userToken = Cookies.get("token");

  useEffect(() => {
    if (logInfo.connected) {
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
    }
  }, []);

  // Handling the form submission + fetch data + update state
  const handleSubmit = (e) => {
    const data = {
      username: username ? username : profileData.username,
      description: description ? description : profileData.description,
    };
    fetch(`http://localhost:1337/users/${profileData.id}`, {
      method: `PUT`,
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => setProfileData(response))
      .catch((error) => console.log(error));
  };

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

  // return un gros cirque

  if (logInfo.connected === true && profileData) {
    return (
      <div className="profile">
        <div className="profile-card">
          <h1>Profile de {profileData.username}</h1>
          <h2>{profileData.email}</h2>
          <p>{profileData.description}</p>
        </div>
        <form>
          <div>
            <div className="form__label">
              <label>Nom</label>
            </div>
            <div>
              <input
                onChange={handleUserName}
                className="input"
                value={username}
                type="text"
              />
            </div>
          </div>

          <div>
            <div className="form__label">
              <label>Description</label>
            </div>
            <div>
              <input
                onChange={handleDescription}
                className="input"
                value={description}
                type="text"
              />
            </div>
          </div>

          <div>
            <Button
              onClick={handleSubmit}
              type={"submit"}
              text={"Mettre à jour"}
            />
          </div>
        </form>

        <h1>Les posts de {profileData.username}</h1>
        <PostsList
          postsData={postsData}
        />
      </div>
    );
  } else {
    return <div>Bien tenté</div>;
  }
};

export default User;
