import React from "react";
import Post from "./Post";
import { motion, AnimatePresence } from "framer-motion";

const PostList = ({ posts, removePost }) => {
  if (!posts.length) {
    return (
      <h2 className="text-3xl text-center text-rose-600">Посты не найдены</h2>
    );
  }

  return (
    <ul className="flex flex-col gap-y-4">
      {posts.map((post, index) => (
        <AnimatePresence exitBeforeEnter>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{delay: index*0.25}}
            exit={{ opacity: 0 }}
          >
            <Post
              id={post.id}
              key={post.id}
              post={post}
              removePost={removePost}
            />
          </motion.div>
        </AnimatePresence>
      ))}
    </ul>
  );
};

export default PostList;
