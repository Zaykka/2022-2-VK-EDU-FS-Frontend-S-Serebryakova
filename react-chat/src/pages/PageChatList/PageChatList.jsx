import React from 'react'
import ChatListHeader from '../../components/ChatListHeader/ChatListHeader'
import Chat from '../../components/Chat/Chat'
import FloatButton from '../../components/FloatButton/FloatButtonon'
import classes from './PageChatList.module.css'
import image1 from './images/img1.png'
import image2 from './images/img2.png'


export default function PageChatList({ handleChatClick }) {
    return (
        <>
            <ChatListHeader></ChatListHeader>
            <section className={classes.chats_list}>
                <Chat
                    handleChatClick={handleChatClick}
                    chat_name={"Дженнифер Эшли"}
                    img_path={image1}
                    chat_last_message={"Ты куда пропал?"}
                    chat_time={"15:30"}
                ></Chat>
                <Chat
                    handleChatClick={handleChatClick}
                    chat_name={"Общество целых бокалов"}
                    img_path={image2}
                    chat_last_message={"Ребят, без меня сегодня :("}
                    chat_time={"15:52"}
                ></Chat>
            </section>
            <FloatButton></FloatButton>
        </>
    )
}