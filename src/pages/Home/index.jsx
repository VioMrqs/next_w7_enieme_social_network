import Button from "../../components/Button";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useState } from "react";

const Home = () => {
  const logInfo = useSelector((state) => state);
  const userToken = Cookies.get("token");
  const decodedToken = jwt_decode(Cookies.get("token"));

  // Vérifier que la personne soit bien connectée (useSelector)
  // Récupérer son ID
  // Form => à mettre dans un composant
  // Redux pour ADD / UPDATE / DELETE (//todo tuto)

  // States for registration
  const [message, setMessage] = useState("");

  // Handling the message change
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

    const fetchRegisterForm = (data) => {
    fetch("http://localhost:1337/posts", {
      method: "post",
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  };

  // const dispatch = useDispatch()

  // Handling the form submission + fetch data + update state

  const handleSubmit = (e) => {
    // e.preventDefault();
    // if (username === "" || email === "" || password === "") {
    //   setError(true);
    // } else {
      const data = {
        text: message,
        user: decodedToken.id,
      };
      // setSubmitted(true);
      // setError(false);
      fetchRegisterForm(data);
      // dispatch(userLogin())
    }
  // };

  return (
    <div className="home">
      <h1>Bienvenue sur ENIEME, le réseau social qu'il vous fallait.</h1>
      <div className="post-creation">
        <h2>A toi la parole</h2>
        <form>
          <div>
            <div className="form__label">
              <label>Ton énième message</label>
            </div>
            <input
              onChange={handleMessage}
              className="post__input"
              value={message}
              type="text"
            />
          </div>
          <div>
            <Button
              onClick={() => handleSubmit()}
              type={"submit"}
              text={"L'envoie dans la toile"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;

// You can create posts via POST /posts with JSON payload { "text": [post_message], "user": [creator_id] }.
