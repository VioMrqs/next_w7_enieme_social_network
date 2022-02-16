import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { useState } from "react";
import Button from "../../components/Button";

const Profile = () => {
  const [profileData, setProfileData] = useState("");
  const [username, setUserName] = useState("");
  const [description, setDescription] = useState("");

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

  if (logInfo.connected === true && !profileData) {
    fetch("http://localhost:1337/users/me", {
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

  //handling the update

  // Handling the form submission + fetch data + update state
  const handleSubmit = (e) => {
    const data = {
      username: username ? username : profileData.username,
      description: description ? description: profileData.description,
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

  // return

  if (logInfo.connected === true && profileData) {
    return (
      <div className="profile">
        <div className="profile-card">
          <h1>Mon Profil</h1>
          <h1>{profileData.username}</h1>
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
      </div>
    );
  } else {
    return <div>Bien tenté</div>;
  }
};

export default Profile;
