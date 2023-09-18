import React from "react";
import "./Register.css";

const RegisterSeller = () => {
  return (
    <div className="register">
      <div className="register-container">
        <div className="register-card">
          <div className="left">
            <div className="center-item">
              <h3>TẠO TÀI KHOẢN GIỌNG ĐỌC</h3>
              <p>Vui lòng nhập đầy đủ các trường được yêu cầu</p>
            </div>
            <div className="col-item">
              <span>Email*</span>
              <input type="email" placeholder="Nhập Email của bạn" />
            </div>
            <div className="col-item">
              <span>Mật Khẩu*</span>
              <input type="password" placeholder="Nhập mật khẩu" />
            </div>
            <div className="col-item">
              <span>Nhập lại mật khẩu*</span>
              <input type="password" placeholder="Nhập lại mật khẩu" />
            </div>
            <div className="col-item">
              <span>Số điện thoại*</span>
              <input type="text" placeholder="Nhập số điện thoại" />
            </div>
            <div className="col-item">
              <span>Họ và tên*</span>
              <input type="text" placeholder="Nhập họ và tên" />
            </div>
            <div className="col-item">
              <span>Địa chỉ*</span>
              <input type="text" placeholder="Nhập địa chỉ" />
            </div>
            <div className="col-item">
              <span>Ngày sinh*</span>
              <input type="text" placeholder="Nhập ngày" />
            </div>
            <div className="col-item">
              <span>Giới tính*</span>
              <select name="" id="">
                <option value="">Nữ</option>
                <option value="">Nam</option>
              </select>
            </div>
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

export default RegisterSeller;
