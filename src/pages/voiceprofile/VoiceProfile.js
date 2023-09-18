import React from "react";
import "./VoiceProfile.css";

const VoiceProfile = () => {
  return (
    <div className="voiceprofile">
      <div className="voiceprofile-container">
        <div className="voiceprofile-card">
          <div className="col-item">
            <span className="sub-title">
              Để hoàn tất profile bạn vui lòng đọc văn bản dưới đây và gửi bản
              ghi âm giọng của bạn lên hệ thống.
            </span>
            <button className="btn-download">Download Test.doc</button>
            <span className="note">
              Lưu ý: Khi thu âm vui lòng đọc rõ chữ, tránh tiếng ồn, khuyến cáo
              nên sử dụng micro hoặc các thiết bị thu âm để đạt được chất lượng
              phân tích tốt nhất từ hệ thống.
            </span>
          </div>
          <div className="col-item-left">
            <span>Mức giá cho giọng nói của bạn (Không bắt buộc):</span>
            <div className="row-item">
              <div className="left">
                <span>Giá</span>
                <input type="number" />
                <span>/Phút</span>
              </div>
              <div className="right">
                <span>Số lần chỉnh sửa</span>
                <input type="number" />
              </div>
            </div>
          </div>
          <div className="col-item">
            <input type="file" id="upload-btn" hidden />
            <label for="upload-btn" className="btn-upload">
              Tải lên file ghi âm
            </label>
            <button className="btn-finish">Hoàn tất</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceProfile;
