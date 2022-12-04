import React from 'react'
import classes from './Chat.module.css'
import { useNavigate } from "react-router-dom";


export default function Chat({ handleChatClick, chat_name, img_path, chat_last_message, chat_time, key }) {
    const navigate = useNavigate();

    return (
        <div className={classes.chat} 
        onClick={() => {
            handleChatClick(key);
            navigate('/messages');
          }}>
            <div className={classes.chat_picture}>
                <img className={classes.picture} src="https://via.placeholder.com/60" alt="profile_photo" style={{ width: 60, height: 60 }} />
            </div>
            <div className={classes.chat_detail}>
                <span className={classes.chat_name}>{chat_name}</span>
                <span className={classes.chat_last_message}>{chat_last_message}</span>
            </div>
            <div className={classes.chat_meta}>
                <span className={classes.chat_time}>{chat_time}</span>
                <div className={classes.done_all}>
                    <span className="material-icons">done_all</span>
                </div>
            </div>
        </div>
    )
}
