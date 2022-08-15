import { useState } from "react";

const PostForm = ({ addPost, setVisible }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (evt) => {
    evt.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    addPost(newPost);
    setPost({ title: "", body: "" });
    setVisible(false)
  };

  return (
    <form className="flex flex-col gap-y-4">
      <h2 className="text-2xl text-rose-600">Добавить пост</h2>
      <input
        className="border-b border-teal-400 py-2 outline-teal-600"
        value={post.title}
        type="text"
        name="title"
        id="title"
        placeholder="Введите название..."
        onChange={(evt) => setPost({ ...post, title: evt.target.value })}
      />
      <input
        className="border-b border-teal-400 py-2 outline-teal-600"
        value={post.body}
        type="text"
        name="body"
        id="body"
        placeholder="Введите текст..."
        onChange={(evt) => setPost({ ...post, body: evt.target.value })}
      />
      <button
        className="flex w-fit bg-teal-600 p-2 text-white rounded-md transition hover:bg-teal-700 disabled:bg-gray-300"
        onClick={(evt) => addNewPost(evt)}
      >
        Добавить
      </button>
    </form>
  );
};

export default PostForm;
