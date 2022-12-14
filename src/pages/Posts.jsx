import { useEffect, useState } from 'react';
import { useFetching } from '../hooks/useFetching';
import { usePosts } from '../hooks/usePosts';
import { getPageCount, getPagesArray } from '../utils/pages'

import API from '../utils/PostApi';
import Button from '../components/Button';
import Pagination from '../components/Pagination';
import Popup from '../components/Popup';
import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import Preloader from '../components/Preloader/Preloader';

const Posts = () => {
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
      <div className="mx-auto max-w-3xl p-8 ">
        <h1 className="text-3xl text-center text-rose-600 mb-8">Список постов</h1>
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
  );
};

export default Posts;
