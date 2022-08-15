import React from "react";

const Post = ({ id, post, removePost }) => {

  return (
    <li className="flex justify-between items-center border border-teal-400 rounded-xl p-4 transition hover:shadow-lg">
      <div>
        <h2 className="text-xl text-teal-600">
          <span className="text-2xl text-rose-600">{id}. </span>
          {post.title}
        </h2>
        <p>{post.body}</p>
      </div>
      <div>
        <button onClick={() => removePost(post)} className="transition hover:text-rose-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </li>
  );
};

export default Post;
