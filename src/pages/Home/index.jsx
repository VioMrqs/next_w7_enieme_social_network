import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import PostForm from "../../components/PostForm";
import PostsList from "../../components/PostsList";
import { useState, useEffect } from "react";

const Home = () => {
  const userToken = Cookies.get("token")? Cookies.get("token") : "";
  const decodedToken = userToken ? jwt_decode(Cookies.get("token")) : "";
  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/posts", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setPostsData(response);
      })
      .catch((error) => console.log(error));
  }, []);


  return (
    <div className="home">
      <h1>Bienvenue sur ENIEME, le réseau social qu'il vous fallait.</h1>
      <PostForm userToken={userToken} decodedToken={decodedToken} />
      <PostsList postsData={postsData} />
    </div>
  );
};

export default Home;
