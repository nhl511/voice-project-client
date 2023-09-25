import React, { useEffect, useState } from "react";
import "./Voices.css";
import VoiceCard from "../../components/VoiceCard/VoiceCard";
import { getVoiceList } from "../../api/axios";

const Voices = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [voices, setVoices] = useState([]);
  const [openFilter, setOpenFilter] = useState(false);

  useEffect(() => {
    getVoiceList(currentPage, 10, "new", false).then((json) => setVoices(json));
  }, [currentPage]);
  console.log(voices);
  return (
    <div className="voices">
      <div className="voices-container">
        <div className="search">
          <span>Đa dạng lựa chọn với hơn 7749 giọng đọc cho dự án của bạn</span>
          <button onClick={() => setOpenFilter(!openFilter)}>
            Tìm kiếm ngay
          </button>
        </div>
        {openFilter && (
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
              <div className="unit">
                <span>Đơn vị tính</span>
                <select name="" id="">
                  <option value="">đ/ 100 từ</option>
                </select>
              </div>
              <div className="tone">
                <span>Tone giọng</span>
                <select name="" id="">
                  <option value="">Cao</option>
                </select>
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
              <div className="rating">
                <span>Đánh giá</span>
                <select name="" id="">
                  <option value="">5 sao</option>
                  <option value="">4 sao</option>
                  <option value="">3 sao</option>
                  <option value="">2 sao</option>
                  <option value="">1 sao</option>
                </select>
              </div>
              <button>Tìm kiếm</button>
            </div>
          </div>
        )}
        <div className="cards">
          {voices.map((voice) => (
            <VoiceCard key={voice.voiceDetailId} voice={voice} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Voices;
