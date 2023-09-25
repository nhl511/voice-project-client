import React, { useEffect, useState } from "react";
import "./ListVoice.css";
import ListVoiceCard from "../../components/ListVoiceCard/ListVoiceCard";
import { getVoiceList } from "../../api/axios";
import { Link } from "react-router-dom";

const ListVoice = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [listVoice, setListVoice] = useState([]);

  useEffect(() => {
    getVoiceList(currentPage, 10, "old", false)
      .then((json) => setListVoice(json))
      .then((json) => setLoading(false));
  }, [currentPage]);
  console.log(listVoice);
  return (
    <div className="listvoice">
      {loading ? (
        <div className="loading">
          <div className="loading-container">
            <div class="loader"></div>
          </div>
        </div>
      ) : (
        <div className="listvoice-container">
          <div className="listvoice-search">
            <input type="search" placeholder="Tìm kiếm" />
            <select>
              <option>Mới nhất</option>
              <option>Theo dõi</option>
            </select>
          </div>
          <div className="cards">
            {listVoice.map((voice) => (
              <Link
                to={`/voicedetail/${voice.voiceSeller.voiceSellerId}`}
                className="link"
              >
                <ListVoiceCard key={voice.voiceDetailId} voice={voice} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ListVoice;
