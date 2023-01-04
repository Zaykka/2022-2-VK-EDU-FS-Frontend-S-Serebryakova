import React from 'react'
import Chat from '../Chat/Chat'
import classes from './ChatsList.module.css'


export default function ChatsList({ handleChatClick, chats, messages }) {
    function ts_to_time(ts) {
        const date = new Date(ts);
        var minutes = "0" + date.getMinutes();
        minutes = minutes.substr(-2);
        return `${date.getHours()}:${minutes}`
    }

    return (
        <section className={classes.chats_list}>
            <Chat
                handleChatClick={handleChatClick}
                chat_name='Global Chat'
                img_path={'pat'}
                chat_last_message={(messages.length) ? messages[0]['text']: ""}
                chat_time={(messages.length) ? ts_to_time(messages[0]['timestamp']): ""}
                key={-1}
            ></Chat>
            {chats.map(chat =>
                <Chat
                    handleChatClick={handleChatClick}
                    chat_name={chat.name}
                    img_path={'pat'}
                    chat_last_message={"Ты куда пропал?"}
                    chat_time={"15:30"}
                    chat_id={chat.id}
                ></Chat>
            )}
        </section>
    )
}