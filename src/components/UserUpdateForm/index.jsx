import Button from "../../components/Button";
import { useState } from "react";
import Cookies from "js-cookie";

const UserUpdateForm = ({ profileData }) => {
  const [username, setUserName] = useState("");
  const [description, setDescription] = useState("");
  const [updateProfileData, setUpdatedProfileData] = useState(profileData);
    const userToken = Cookies.get("token");

  // Handling the name change
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  // Handling the description change
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

    const handleSubmit = (e) => {
      const data = {
        username: username ? username : updateProfileData.username,
        description: description ? description : updateProfileData.description,
      };
      fetch(`http://localhost:1337/users/${updateProfileData.id}`, {
        method: `PUT`,
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => setUpdatedProfileData(response))
        .catch((error) => console.log(error));
    };

  return (
    <div className="profile__form">
      <h2>Modifie ton profil</h2>
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
};

export default UserUpdateForm;
