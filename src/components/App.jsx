import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostPage from '../pages/PostPage'
import Navbar from "./Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
