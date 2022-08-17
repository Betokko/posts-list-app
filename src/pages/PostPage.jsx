import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import API from "../utils/PostApi";

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null)
  const [fetchPostById, isLoading] = useFetching(async (id) => {
    const res = await API.getById(id);
    setPost(res.data)
  });

  useEffect(() => {
    fetchPostById(id)
  }, []);

  return <div>{post}</div>;
};

export default PostPage;
