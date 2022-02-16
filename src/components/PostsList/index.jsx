import { FaFeatherAlt } from "react-icons/fa";
import Button from "../Button";
  import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";


const PostsList = ({postsData}) => {

  // (Token JWT obligatoire)

  // 2.2.12. Modifier un post
  // PUT http://localhost:1337/posts/[POST_ID]

  //   import jwt_decode from "jwt-decode";
  // import { useSelector } from "react-redux";
  // import Cookies from "js-cookie";
  // import PostForm from "../../components/PostForm";
  // import PostsList from "../../components/PostsList";
  // import { useState, useEffect } from "react";

  const userToken = Cookies.get("token") ? Cookies.get("token") : "";

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
  }

  return (
    <div className="post__list">
      {postsData
        .sort(function (a, b) {
          return b.id - a.id;
        })
        .map((post) => (
          <div className="post__item" key={post.id}>
            <div className="post__text">{post.text}</div>
            <div className="post__user">
              <a href={"http://localhost:3000/users/" + post.user.id}>
                <FaFeatherAlt /> {post.user.username}
              </a>
            </div>
            <Button
              onClick={() => handleDeleteClick(post.id)}
              text={"Supprimer"}
            />
          </div>
        ))}
    </div>
  );
};


export default PostsList;
