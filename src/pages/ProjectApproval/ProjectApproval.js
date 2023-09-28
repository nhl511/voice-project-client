import React, { useEffect, useState } from "react";
import "./ProjectApproval.css";
import ListProjectApprovalCard from "../../components/ListProjectApprovalCard/ListProjectApprovalCard";
import { getPostList } from "../../api/axios";

const ProjectApproval = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPostList(currentPage, 10, "old")
      .then((json) => setPosts(json))
      .then((json) => setLoading(false));
  }, [currentPage]);
  return (
    <div className="projectapproval">
      <div className="projectApproval-container">
        <div className="projectApproval-search">
          <input type="search" placeholder="Tìm kiếm" />
          <select>
            <option>Mới nhất</option>
            <option>Theo dõi</option>
          </select>
        </div>
        <div className="posts">
          {posts.map((post) => (
            <ListProjectApprovalCard post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectApproval;
