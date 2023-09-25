import React, { useEffect, useState } from "react";
import "./VoiceDetail.css";
import ReactAudioPlayer from "react-audio-player";
import { useParams } from "react-router-dom";
import { getVoice } from "../../api/axios";

const VoiceDetail = () => {
  const { id } = useParams();
  const [voice, setVoice] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getVoice(id)
      .then((json) => setVoice(json))
      .then((json) => setLoading(false));
  }, [id]);
  console.log(voice);
  return (
    <div className="voicedetail-card-container">
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className="voicedetail-card">
          <div className="voicedetail-avatar">
            <img
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
            />
          </div>
          <div className="voicedetail-info">
            <span style={{ fontSize: 22 }}>{voice.voiceSeller.fullname}</span>
            <br />
            <span>(100 người theo dõi)</span>
            <br />
            <span style={{ color: "black", fontWeight: 400 }}>
              {voice.createDate}
            </span>
          </div>
          <div className="voicedetail-audio">
            <ReactAudioPlayer src={voice.mainVoiceLink} controls />
          </div>
          <div className="voicedetail-detail">
            <div className="voicedetail-detail-info voicedetail-display">
              <span>Giới tính giọng đọc</span>
              <select>
                <option>Nam</option>
                <option>Nữ</option>
                <option>Khác</option>
              </select>
            </div>
            <div className="voicedetail-detail-info voicedetail-display">
              <span>Vùng miền</span>
              <select>
                <option>Miền Nam</option>
                <option>Miền Tây</option>
                <option>Miền Trung</option>
                <option>Miền Bắc</option>
              </select>
            </div>
            <div className="voicedetail-detail-info voicedetail-display">
              <span>Tone giọng</span>
              <select>
                <option>Cao</option>
                <option>Trầm</option>
              </select>
            </div>
            <div className="voicedetail-detail-info voicedetail-display">
              <span>Độ truyền cảm</span>
              <select>
                <option>Tốt</option>
                <option>Khá</option>
              </select>
            </div>
            <div className="voicedetail-detail-info voicedetail-display">
              <span>Tốc độ đọc</span>
              <select>
                <option>Nhanh</option>
                <option>Bình thường</option>
                <option>Chậm</option>
              </select>
            </div>
            <div className="voicedetail-detail-info voicedetail-display">
              <span>Khả năng phát âm</span>
              <select>
                <option>Tốt</option>
                <option>Khá</option>
              </select>
            </div>
            <div className="voicedetail-detail-info voicedetail-display">
              <span>Thể hiện trọng âm</span>
              <select>
                <option>Tốt</option>
                <option>Khá</option>
              </select>
            </div>
            <div className="voicedetail-detail-info ">
              <span>Chất giọng</span>
              <div className="voicedetail-show">
                <div>
                  <input type="checkbox" />
                  <label className="voicedetail-label">Mạnh mẽ</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="voicedetail-label">Trẻ trung</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="voicedetail-label">Trung niên</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="voicedetail-label">Giọng ấm</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="voicedetail-label">
                    Tươi mới <br />
                  </label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="voicedetail-label">Hài hước</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="voicedetail-label">Tự tin</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="voicedetail-label">Dịu dàng</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="voicedetail-label">Trẻ em</label>
                </div>
              </div>
            </div>
            <div className="voicedetail-detail-info voicedetail-show">
              <span>Tính chất phù hợp</span>
              <br />
              <div className="voicedetail-show">
                <div>
                  <input type="checkbox" />
                  <label className="voicedetail-label">Quảng cáo</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="voicedetail-label">Kể chuyện</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="voicedetail-label">Thuyết trình</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="voicedetail-label">Thuyết minh</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="voicedetail-label">
                    Review phim <br />
                  </label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="voicedetail-label">Thời sự</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="voicedetail-label">Thông báo</label>
                </div>
              </div>
            </div>
          </div>
          <div className="voicedetail-button">
            <button className="back">Quay lại</button>
            <button className="confirm">Xác nhận</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VoiceDetail;
