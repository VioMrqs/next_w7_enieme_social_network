import Button from "../../components/Button";
import { useState } from "react";

const PostForm = ({ decodedToken, userToken }) => {

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
  };
  // };

  return (
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
  );
};

export default PostForm;
