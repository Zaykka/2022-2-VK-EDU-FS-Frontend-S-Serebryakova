import React, { useState, useEffect } from 'react';
import ChatListHeader from '../../components/ChatListHeader/ChatListHeader'
import FloatButton from '../../components/FloatButton/FloatButtonon'
import { useNavigate } from "react-router-dom";
import ChatsList from '../../components/ChatsList/ChatsList';
import { getMessagesAction, sendMessageAction } from '../../actions';
import { connect } from 'react-redux'


function PageChatList(props) {
    const [chats, setChats] = useState([]);

    useEffect(() => {
        props.getMessagesAction()
    }, []);

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
                handleChatClick={props.handleChatClick}
                chats={chats}
                messages={props.messages}
            ></ChatsList>
            <FloatButton></FloatButton>
        </>

    )
}

const mapStateToProps = (state) => ({
    messages: state.messages.messages,
});

export default connect(mapStateToProps, { getMessagesAction, sendMessageAction })(PageChatList)