import { useState } from "react";
import Button from "../../components/Button";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/User/UserActions";

// ajouter des validations ou utiliser antdesign - ajouter redirection

const Register = () => {
  // States for registration
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleUserName = (e) => {
    setUserName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const fetchRegisterForm = (data) => {
    fetch(" http://localhost:1337/auth/local/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        Cookies.set("token", response.jwt);
      })
      .catch((error) => console.log(error));
  };

  const dispatch = useDispatch()

  // Handling the form submission + fetch data + update state

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" || email === "" || password === "") {
      setError(true);
    } else {
      const data = {
        username: username,
        email: email,
        password: password,
      };
      setSubmitted(true);
      setError(false);
      fetchRegisterForm(data);
      dispatch(userLogin())
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>{username} est bien inscrit</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className="form">
      <div>
        <h1>Inscription</h1>
      </div>

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        {/* Labels and inputs for form data */}
        <div>
          <div>
            <label className="label">Nom</label>
          </div>

          <input
            onChange={handleUserName}
            className="input"
            value={username}
            type="text"
          />
        </div>

        <div>
          <div>
            <label className="label">Email</label>
          </div>

          <input
            onChange={handleEmail}
            className="input"
            value={email}
            type="email"
          />
        </div>

        <div>
          <div>
            <label className="label">Password</label>
          </div>

          <input
            onChange={handlePassword}
            className="input"
            value={password}
            type="password"
          />
        </div>

        <div>
          <Button onClick={handleSubmit} type={"submit"} text={"Inscription"} />
        </div>
      </form>
    </div>
  );
};

export default Register;
