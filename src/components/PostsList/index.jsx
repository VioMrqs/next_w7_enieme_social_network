import { useEffect, useState } from "react";

const PostsList = (userToken) => {
  const [postsData, setPostsData] = useState([]);
  console.log(userToken);
  console.log(postsData);

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
        <h3>{post.user}</h3>
      </div>
      ))}
    </div>
  );
};

export default PostsList;

//         // <TodoItem
//         //   todo={todo}
//         //   onToggle={onToggle}
//         //   onDelete={onDelete}
//         //   key={todo.id}
//         // />

// import React from "react";

// class PostsList extends React.Component {
//   // State of your application
//   state = {
//     posts: [],
//     error: null,
//   };

//   // const [posts, setPosts] = useState([]);

//   // Fetch your restaurants immediately after the component is mounted
//   componentDidMount = async () => {
//     // Parses the JSON returned by a network request
//     const parseJSON = (resp) => (resp.json ? resp.json() : resp);

//     // Checks if a network request came back fine, and throws an error if not
//     const checkStatus = (resp) => {
//       if (resp.status >= 200 && resp.status < 300) {
//         return resp;
//       }
//       return parseJSON(resp).then((resp) => {
//         throw resp;
//       });
//     };
//     const headers = {
//       "Content-Type": "application/json",
//     };

//     try {
//       const posts = await fetch("http://localhost:1337/posts", {
//         method: "GET",
//         headers: headers,
//       })
//         .then(checkStatus)
//         .then(parseJSON);
//       this.setState({ posts });
//     } catch (error) {
//       this.setState({ error });
//     }
//   };

//   render() {
//     const { error, posts } = this.state;

//     // Print errors if any
//     if (error) {
//       return <div>An error occured: {error.message}</div>;
//     }

//     return (
//       <div className="App">
//         <ul>
//           {console.log(this.state.posts)}
//           {this.state.posts.map((restaurant) => (
//             <li key={restaurant.id}>
//               {restaurant.text} by {restaurant.user.username}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default PostsList;