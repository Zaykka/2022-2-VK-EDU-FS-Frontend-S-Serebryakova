import React from 'react'
import Chat from '../Chat/Chat'
import classes from './ChatsList.module.css'


export default function ChatsList({ handleChatClick, chats }) {
    return (
        <section className={classes.chats_list}>
            <Chat
                handleChatClick={handleChatClick}
                chat_name='Global Chat'
                img_path={'pat'}
                chat_last_message={"Ты куда пропал?"}
                chat_time={"15:30"}
                key={-1}
            ></Chat>
            {chats.map(chat =>
                <Chat
                    handleChatClick={handleChatClick}
                    chat_name={chat.name}
                    img_path={'pat'}
                    chat_last_message={"Ты куда пропал?"}
                    chat_time={"15:30"}
                    key={chat.id}
                ></Chat>
            )}
        </section>
    )
}