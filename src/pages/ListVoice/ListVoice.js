import React from "react";
import './ListVoice.css';
import ListVoiceCard from "../../components/ListVoiceCard/ListVoiceCard";

const ListVoice = () => {
    return (
        <div className="container">
            <div className="listvoice-search">
                <input type="search" placeholder="Tìm kiếm" />
                <select>
                    <option>Mới nhất</option>
                    <option>Theo dõi</option>
                </select>
            </div>
            <div className="listvoice">
                <ListVoiceCard />
                <ListVoiceCard />
                <ListVoiceCard />
                <ListVoiceCard />
            </div>
        </div>
    )
}

export default ListVoice;