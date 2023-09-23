import React from "react";
import "./PostCard.css";

const PostCard = () => {
  return (
    <div className="postcard">
      <div className="thumbnail">
        <img
          src="https://nld.mediacdn.vn/291774122806476800/2021/9/12/hao-hao-1631458927029451636971.jpeg"
          alt=""
        />
      </div>
      <div className="content">
        <div className="title">
          <span>Quảng cáo mì Hảo Hảo</span>
        </div>
        <div className="info">
          <span>Ngày đăng: 28/05/2023</span>
          <span>Giá: 200,000 đ</span>
        </div>
        <div className="require">
          <span>Giọng miền nam</span>
          <span>Giọng cao</span>
          <span>Phát âm tốt</span>
        </div>
        <div className="button">
          <button>Ứng tuyển ngay</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
