import jwt_decode from "jwt-decode";
import PostForm from "../../components/PostForm";
import PostsList from "../../components/PostsList";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const logInfo = useSelector((state) => state)
  const decodedToken = logInfo.token ? jwt_decode(logInfo.token) : "";

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

  if (logInfo.token) {
    return (
      <div className="home">
        <h1>Bienvenue sur ENIEME</h1>
        <h2>Un réseau social des plus originaux</h2>
        <img
          src="https://c.tenor.com/KxYRITHTVjEAAAAM/typing-cat.gif"
          alt="stupid cat"
        ></img>
        <hr className="divider_solid" />
        <PostForm userToken={logInfo.token} decodedToken={decodedToken} />
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
