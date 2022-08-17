import React from "react";
import { useNavigate } from "react-router-dom";

const Post = ({ id, post, removePost }) => {
  const navigate = useNavigate();
  return (
    <li className="flex justify-between items-center border border-teal-400/10 rounded-xl p-4 transition hover:shadow-lg bg-teal-50/25">
      <div>
        <h2 className="text-xl text-teal-600">
          <span className="text-2xl text-rose-600">{id}. </span>
          {post.title}
        </h2>
        <p>{post.body}</p>
      </div>
      <div className="flex flex-row gap-4 ml-4">
        <button
          onClick={() => navigate(`./${id}`)}
          className="transition hover:text-rose-600"
        >
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
              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
            />
          </svg>
        </button>
        <button
          onClick={() => removePost(post)}
          className="transition hover:text-rose-600"
        >
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
