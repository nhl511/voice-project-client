import React, { useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="test">
      <Link to="/voices">
        <span>Go to Voices Page</span>
      </Link>
      <Link to="/posts">
        <span>Go to posts Page</span>
      </Link>
    </div>
  );
};

export default Home;
