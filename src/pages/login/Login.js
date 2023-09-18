import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-card">
          <div className="left">
            <div className="center-item">
              <h3>Đăng nhập</h3>
              <p>Vui lòng đăng nhập để sử dụng đầy đủ các tính năng của VoiceMarket</p>
            </div>
            <div className="col-item">
              <span>Email</span>
              <input type="email" placeholder="Nhập email của bạn" />
            </div>
            <div className="col-item">
              <span>Mật khẩu</span>
              <input type="password" placeholder="Nhập mật khẩu" />
            </div>
            <div className="row-item">
              <input type="checkbox" />
              <i>Remember me</i>
              <span>Quên mật khẩu?</span>
            </div>
            <div className="button">
              <button>Đăng nhập</button>
            </div>
            <div className="google">
              <button>
                <img src="/img/google.png" className="google-logo-img" />
              </button>
            </div>
            <div className="row-item">
              <i>Bạn chưa có tài khoản VoiceMarket?<strong> Đăng ký</strong> ngay</i>
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
  )
};

export default Login;
