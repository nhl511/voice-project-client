import React from "react";
import "./Posts.css";
import PostCard from "../../components/PostCard/PostCard";
const Posts = () => {
  return (
    <div className="posts">
      <div className="posts-container">
        <div className="filter">
          <div className="filter-row">
            <div className="searchbox">
              <input
                type="text"
                placeholder="Tìm kiếm (Ví dụ: Bảo Long, 1977,...)"
              />
            </div>
            <div className="min-max">
              <span>Giá</span>
              <input type="number" placeholder="Từ" />
              <span>-</span>
              <input type="number" placeholder="Đến" />
            </div>
            <div className="long">
              <span>Độ dài văn bản</span>
              <input type="number" />
            </div>
          </div>
          <div className="filter-row">
            <div className="region">
              <span>Vùng miền</span>
              <select name="" id="">
                <option value="">Miền Bắc</option>
                <option value="">Miền Trung</option>
                <option value="">Miền Nam</option>
              </select>
            </div>
            <div className="gender">
              <span>Giới tính</span>
              <select name="" id="">
                <option value="">Nữ</option>
                <option value="">Nam</option>
              </select>
            </div>
            <div className="nature">
              <span>Tính chất</span>
              <select name="" id="">
                <option value="">Thời sự</option>
              </select>
            </div>
            <div className="location">
              <span>Địa phương</span>
              <select name="" id="">
                <option value="">Hà Nội</option>
              </select>
            </div>
            <button>Tìm kiếm</button>
          </div>
        </div>
        <div className="cards">
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </div>
  );
};

export default Posts;
