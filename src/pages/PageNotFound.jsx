import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="h-64 flex flex-col justify-center items-center">
      <div className="text-3xl font-black">404</div>
      <div>PageNotFound</div>
      <Link to="/" className="hover:text-rose-600">На главную</Link>
    </div>
  );
};

export default PageNotFound;
