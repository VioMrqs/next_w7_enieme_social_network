import { useState } from "react";
import Cookies from "js-cookie";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/user/UserActions";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const dispatch = useDispatch();
  let history = useNavigate();

  const handleSubmit = () => {
    const data = {
      identifier: email,
      password: password,
    };

    fetch("http://localhost:1337/auth/local", {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        Cookies.set("token", response.jwt);
        dispatch(userLogin());
        history("/profile");
      })
      .catch((error) => alert(error));
  }

  return (
    <div className="form">
      <div>
        <h1>Connexion</h1>
      </div>
      <form>
        <div>
          <div className="form__label">
            <label>Identifiant</label>
          </div>
          <input
            onChange={handleEmail}
            className="input"
            value={email}
            type="email"
          />
        </div>

        <div>
          <div className="form__label">
            <label>Mot de passe</label>
          </div>
          <input
            className="input"
            value={password}
            type="password"
            onChange={handlePassword}
          />
        </div>
        <div>
          <Button
            onClick={() => handleSubmit()}
            type={"submit"}
            text={"Connexion"}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
