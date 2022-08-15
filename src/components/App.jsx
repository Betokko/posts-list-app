import { useEffect, useState } from 'react';
import { useFetching } from '../hooks/useFetching';
import { usePosts } from '../hooks/usePosts';
import { getPageCount, getPagesArray } from '../utils/pages'
import API from '../utils/PostApi';
import Button from './Button';
import Pagination from './Pagination';
import Popup from './Popup';
import PostFilter from './PostFilter';
import PostForm from './PostForm';
import PostList from './PostList';
import Preloader from './Preloader/Preloader';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [visible, setVisible] = useState(false);
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedSearchedPosts = usePosts(posts, filter.sort, filter.query);
  let pagesArray = getPagesArray(totalPages)

  const [fetchPosts, isLoading, error] = useFetching(async () => {
    const res = await API.getAll(limit, page)
    setPosts(res.data)
    const totalCount = res.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit))
  });

  const changePage = (page) => {
    setPage(page)
  }

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const addPost = (newPost) => setPosts([...posts, newPost]);
  const removePost = (post) => setPosts(posts.filter((p) => p.id !== post.id));

  return (
    <div className="bg-teal-50/50">
      <div className="mx-auto max-w-3xl p-8">
        <h1 className="text-3xl text-center text-rose-600 mb-8">To Do App</h1>
        <Button onClick={() => setVisible(true)}>Добавить пост</Button>
        <PostFilter filter={filter} setFilter={setFilter} />
        {error ? <h1 className="text-3xl text-center text-rose-600 mb-8">{error}</h1> : null}
        {isLoading 
          ? <Preloader />
          : <PostList posts={sortedSearchedPosts} removePost={removePost} />
        }
        <Pagination page={page} pagesArray={pagesArray} changePage={changePage}/>
        <Popup visible={visible} setVisible={setVisible}>
          <PostForm addPost={addPost} setVisible={setVisible} />
        </Popup>
      </div>
    </div>
  );
};

export default App;
