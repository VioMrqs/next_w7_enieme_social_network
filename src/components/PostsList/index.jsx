import { FaFeatherAlt } from "react-icons/fa";
import Button from "../Button";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import Moment from "react-moment";
// import {useSelector} from "react-redux"

const PostsList = ({ postsData }) => {
  const userToken = Cookies.get("token") ? Cookies.get("token") : "";
  const decodedToken = jwt_decode(userToken);

  const handleDeleteClick = (data) => {
    fetch(`http://localhost:1337/posts/${data}`, {
      method: "delete",
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
      window.location.reload();
  };

  const handleLikeClick = (data) => {
    // const data = {
    //   like: username ? username : updateProfileData.username,
    // };
    //   fetch(`http://localhost:1337/posts/${data}`, {
    //     method: "put",
    //     headers: {
    //       Authorization: `Bearer ${userToken}`,
    //       "Content-Type": "application/json",
    //     },
    //   })
    //     .then((response) => response.json())
    //     .catch((error) => console.log(error));
  };

  return (
    <div>
      <h3>{postsData.length} messages postés ! </h3>
      <div className="post__list">
        {postsData
          .sort(function (a, b) {
            return b.id - a.id;
          })
          .map((post) => (
            <div className="post__item" key={post.id}>
              <div className="post__text">{post.text}</div>
              <Moment format="YYYY/MM/DD">{post.created_at}</Moment>
              <div className="post__user">
                <a href={"http://localhost:3000/users/" + post.user.id}>
                  <FaFeatherAlt /> {post.user.username}
                </a>
              </div>
              <div className="post__button">
                {post.user.id === decodedToken.id && (
                  <Button
                    onClick={() => handleDeleteClick(post.id)}
                    text={"Supprimer"}
                  />
                )}
                <Button
                  onClick={() => handleLikeClick(post.id)}
                  text={post.like + " fans"}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PostsList;
