import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import API from '../utils/PostApi';
import Preloader from '../components/Preloader/Preloader';
import { useNavigate } from 'react-router-dom';

const PostPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [fetchPostById, isLoading] = useFetching(async (id) => {
    const res = await API.getById(params.id);
    setPost(res.data);
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchPostById(params.id);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="m-16 p-4 rounded-md shadow-md bg-teal-50/25">
          <svg
            onClick={() => navigate(-1)}
            className="h-6 w-6 transition hover:text-rose-600 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <div className="text-3xl text-center text-teal-600">
            <span className="text-rose-600">{post.id} </span>
            {post.title}
          </div>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default PostPage;
