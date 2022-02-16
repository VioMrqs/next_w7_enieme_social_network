import { useEffect, useState } from "react";

const PostsList = (userToken) => {
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
    }, [postsData]);

  return (
    <div className="post__list">
      {postsData.map((post) => (
        <div className="post__item" key={post.id}>
        <h2>{post.text}</h2>
        <h3>{post.user.username}</h3>
      </div>
      ))}
    </div>
  );
};

export default PostsList;
