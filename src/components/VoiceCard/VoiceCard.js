import React from "react";
import "./VoiceCard.css";
const VoiceCard = () => {
  return (
    <div className="voicecard">
      <div className="avatar">
        <img
          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
      <div className="main">
        <div className="info">
          <span>Nguyen Hoang Long | Giong nam</span>
        </div>
        <div className="play"></div>
      </div>
      <div className="type">
        <span>Giọng Miền Nam</span>
        <span>Giọng chua</span>
        <span>Giọng cao</span>
      </div>
      <div className="stats">
        <div className="rating">
          <div className="star">
            <span>5</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1200px-Star_icon_stylized.svg.png"
              alt=""
            />
          </div>
          <div className="num">
            <span>(57)</span>
          </div>
        </div>
        <div className="booking">
          <span>Lượt booking: 102</span>
        </div>
        <div className="price">
          <span>Giá: 20,000đ/ 100 từ </span>
        </div>
      </div>
      <div className="button">
        <button>Gửi dự án ngay</button>
      </div>
    </div>
  );
};

export default VoiceCard;
