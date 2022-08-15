import React from "react";
import Post from "./Post";

const PostList = ({ posts, removePost }) => {

  if (!posts.length) {
    return (
      <h2 className="text-3xl text-center text-rose-600">Посты не найдены</h2>
    )
  }

  return (
    <ul className="flex flex-col gap-y-4">
      {posts.map((post, index) => (
        <Post
          id={index + 1}
          key={post.id}
          post={post}
          removePost={removePost}
        />
      ))}
    </ul>
  );
};

export default PostList;
