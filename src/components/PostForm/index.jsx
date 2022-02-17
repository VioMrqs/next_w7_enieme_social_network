import Button from "../../components/Button";
import { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";

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

  const handleSubmit = (e) => {
    const data = {
      text: message,
      user: decodedToken.id,
    };
    fetchRegisterForm(data);
  };

  return (
    <div className="post-creation">
      <h2>
        A toi la parole <FaTelegramPlane />
      </h2>
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
            text={"Envoi dans la toile"}
          />
        </div>
      </form>
    </div>
  );
};

export default PostForm;

// import Button from "../../components/Button";
// import { useState } from "react";
// import {FaTelegramPlane} from "react-icons/fa"

// const PostForm = ({ decodedToken, userToken }) => {
//   const [message, setMessage] = useState("");

//   // Handling the message change
//   const handleMessage = (e) => {
//     setMessage(e.target.value);
//   };

//     const data = {};

//   if (message) {
//     data.message = message;
//   }

//   if (userToken) {
//     data.user = decodedToken.id;
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//         fetch("http://localhost:1337/posts", {
//           method: "post",
//           headers: {
//             Authorization: `Bearer ${userToken}`,
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(data),
//         })
//           .then((response) => response.json())
//           .then((response) => console.log(response))

//           .then((response) => {
//             setMessage("");
//           })
//           .catch((error) => console.log(error));
//   };

//   return (
//     <div className="post-creation">
//       <h2>
//         A toi la parole <FaTelegramPlane />
//       </h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <div className="form__label">
//             <label htmlFor="message">Ton énième message</label>
//           </div>
//           <input
//             onChange={handleMessage}
//             className="post__input"
//             id="message"
//             type="text"
//           />
//         </div>
//         <div>
//           <Button type={"submit"} text={"Envoi dans la toile"} />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default PostForm;
