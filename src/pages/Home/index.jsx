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

  if (userToken) {
    return (
      <div className="home">
        <h1>Bienvenue sur ENIEME</h1>
        <h2>Un réseau social des plus originaux</h2>
        <img
          src="https://c.tenor.com/KxYRITHTVjEAAAAM/typing-cat.gif"
          alt="stupid cat"
        ></img>
        <hr className="divider_solid" />
        <PostForm userToken={userToken} decodedToken={decodedToken} />
        <hr className="divider_solid" />
        <PostsList postsData={postsData} />
      </div>
    );
  }
return (
    <div className="home">
      <h1>Bienvenue sur ENIEME</h1>
      <h2>Un réseau social des plus originaux</h2>
      <img
        src="https://c.tenor.com/KxYRITHTVjEAAAAM/typing-cat.gif"
        alt="stupid cat"
      ></img>
    </div>
  );  
}

export default Home;
