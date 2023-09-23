import React, { useEffect, useState } from "react";
import "./ListVoice.css";
import ListVoiceCard from "../../components/ListVoiceCard/ListVoiceCard";
import { getVoiceList } from "../../api/axios";

const ListVoice = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [listVoice, setListVoice] = useState([]);

  useEffect(() => {
    getVoiceList(currentPage, 5, "old", false).then((json) =>
      setListVoice(json)
    );
  }, [currentPage]);
  console.log(listVoice);
  return (
    <div className="listvoice">
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
            <ListVoiceCard key={voice.voiceDetailId} voice={voice} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListVoice;
