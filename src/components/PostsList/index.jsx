import { FaFeatherAlt } from "react-icons/fa";
import Button from "../Button";
  // import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";


const PostsList = ({postsData}) => {

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

    // .like

    // like : le nombre de likes du post. Il faut récupérer le nombre de like actuels du post et ajouter +1. Tu peux aussi faire -1 si jamais tu enlèves ton like, mais uniquement si tu as déjà liké le post. Attention, par défaut un post n'a pas 0 like, mais null like. Il faut donc mettre en place une condition permettant de comprendre que null = 0, et afficher "0 like", pas "null".


  return (
    <div>
      <h3>Plus de {postsData.length} messages postés</h3>
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
              <Button
                onClick={() => handleLikeClick(post.id)}
                text={post.like + " fans"}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PostsList;
