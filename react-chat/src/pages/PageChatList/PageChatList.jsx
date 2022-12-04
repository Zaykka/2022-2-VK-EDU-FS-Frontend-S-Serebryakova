import React, { useState, useEffect } from 'react';
import ChatListHeader from '../../components/ChatListHeader/ChatListHeader'
import FloatButton from '../../components/FloatButton/FloatButtonon'
import { useNavigate } from "react-router-dom";
import ChatsList from '../../components/ChatsList/ChatsList';


export default function PageChatList({ handleChatClick }) {
    const [chats, setChats] = useState([]);

    useEffect(() => {
        fetch("api/chats/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => resp.json())
            .then((data) => setChats(data));
    }, []);

    let navigate = useNavigate();

    const profileRouteChange = () => {
        navigate('/profile');
    }

    return (
        <>
            <ChatListHeader
                handleProfileClick={profileRouteChange}
            ></ChatListHeader>
            <ChatsList
                handleChatClick={handleChatClick}
                chats={chats}
            ></ChatsList>
            <FloatButton></FloatButton>
        </>

    )
}