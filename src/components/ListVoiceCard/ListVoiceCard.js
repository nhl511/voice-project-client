import React from "react";
import './ListVoiceCard.css';
import ReactAudioPlayer from "react-audio-player";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const ListVoiceCard = () => {
    return (
        <div className="listvoice-card">
            <div className="listvoice-avatar">
                <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                    alt="avatar" />
            </div>
            <div className="listvoice-info">
                <div className="listvoice-personal">
                    <span>Trần Thành Công</span> <br />
                    <span>(100 người theo dõi)</span>
                </div>
                <div className="listvoice-sound">
                    <ReactAudioPlayer src="/mp3/example_mp3.mp3" controls audio='1' />
                </div>
                <div className="listvoice-time">
                    <span>11 tháng 7 lúc 12:40</span>
                </div>
            </div>
            <div className="listvoice-icon">
                <MoreHorizIcon />
            </div>
        </div>
    )
}

export default ListVoiceCard;
