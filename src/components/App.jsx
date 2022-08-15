import { useMemo, useState } from "react";
import PostFilter from "./PostFilter";
import PostForm from "./PostForm";
import PostList from "./PostList";

const App = () => {
  const [posts, setPosts] = useState([
    { id: 4, title: "ZZZ", body: "AAA" },
    { id: 3, title: "YYY", body: "DDD" },
    { id: 2, title: "XXX", body: "SSS" },
    { id: 1, title: "AAA", body: "OOO" },
  ]);
  const [filter, setFilter] = useState({sort: "", query: ""})


  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts])

  const searchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  const addPost = (newPost) => setPosts([...posts, newPost]);
  const removePost =(post) => setPosts(posts.filter(p => p.id !== post.id));

  return (
    <div className="mx-auto container py-8">
      <h1 className="text-3xl text-center text-rose-600">To Do</h1>
      <PostForm addPost={addPost} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList posts={searchedPosts} removePost={removePost} />
    </div>
  );
};

export default App;
