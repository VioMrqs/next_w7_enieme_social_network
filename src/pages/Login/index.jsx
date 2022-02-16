import { useState } from "react";
import Cookies from "js-cookie";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/user/UserActions";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const Login = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  let history = useNavigate();

  const data = {
    identifier: username,
    password: password,
  };

  const handleSubmit = () => {
    fetch("http://localhost:1337/auth/local", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.error !== undefined) {
          console.log(response)
          alert(response.error);
        } else {
          Cookies.set("token", response.jwt);
          dispatch(userLogin());
          const log = jwt_decode(response.jwt);
          console.log(log.id);
          history(`/users/${log}`);
        }
      })
      .catch((error) => alert(error));
  };

  return (
    <div>
      <div>
        <h1>Connexion</h1>
      </div>
      <form className="form">
        <label htmlFor="username" className="form__label">
          Identifiant *
        </label>
        <input id="username" type="text" onChange={handleUsername} />

        <label htmlFor="password" className="form__label">
          Mot de passe *
        </label>
        <input id="password" type="password" onChange={handlePassword} />

        <div>
          <Button
            onClick={() => handleSubmit()}
            type={"button"}
            text={"Connexion"}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
