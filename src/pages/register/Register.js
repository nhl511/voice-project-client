import React from "react";
import "./Register.css";

const Register = ({ title, children }) => {
  return (
    <div className="register">
      <div className="register-container">
        <div className="register-card">
          <div className="left">
            <div className="center-item">
              <h3>{title}</h3>
              <p>Vui lòng nhập đầy đủ các trường được yêu cầu</p>
            </div>
            {children}
            <div className="row-item">
              <input type="checkbox" />
              <span>
                Tôi đã đọc và đồng ý với <b>điều khoản</b> của VoiceMarket
              </span>
            </div>
            <div className="button">
              <button>Đăng ký</button>
            </div>
          </div>
          <div className="right">
            <div className="center-item">
              <h1>VOICE MARKET</h1>
            </div>
            <div className="col-item">
              <span>
                Hơn 7749 giọng đọc, đa dạng về lựa chọn để bạn có được kết quả
                ưng ý nhât
              </span>
              <span>
                Hệ thống phân tích, đưa ra lựa chọn tối ưu theo yêu cầu của bạn
              </span>
              <span>Kiểu giới thiệu về app của mình ở đây.......</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
