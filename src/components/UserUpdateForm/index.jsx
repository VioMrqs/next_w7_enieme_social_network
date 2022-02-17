import Button from "../../components/Button";
import { useState } from "react";
import Cookies from "js-cookie";

const UserUpdateForm = ({ profile }) => {
  const [username, setUserName] = useState("");
  const [description, setDescription] = useState("");
  const [profileData, setProfileData] = useState(profile);
  const userToken = Cookies.get("token");

  // Handling the name change
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  // Handling the description change
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const data = {};

  if (username) {
    data.username = username;
  }

  if (description) {
    data.description = description;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:1337/users/me`, {
      method: `PUT`,
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        setProfileData(response);
        window.location.reload();
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="form">
      <h1>Modifie ton profil</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" className="form__label">
            Pseudo
          </label>
        </div>
        <div>
          <input id="username" type="text" onChange={handleUserName} />
        </div>

        <div>
          <label htmlFor="description" className="form__label">
            Description
          </label>
        </div>

        <div>
          <input id="description" type="text" onChange={handleDescription} />
        </div>

        <div>
          <Button type={"submit"} text={"Mettre à jour"} />
        </div>
      </form>
    </div>
  );
};

export default UserUpdateForm;
