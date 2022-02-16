const PostItem = (post, key) => {
  return (
        <div className="post__item" key={key}>
          <h2>{post.text}</h2>
          <h3>{post.user.username}</h3>
        </div>
  );
}

export default PostItem