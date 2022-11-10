import React from 'react';
import PageChatList from '../pages/PageChatList/PageChatList';
import PageChat from '../pages/PageChat/PageChat';


export function Greeting({ isClickOnChat, handleLoginClick }) {
    if (isClickOnChat) {
        return <PageChat handleLoginClick={handleLoginClick}/>;
    }
    return <PageChatList handleLoginClick={handleLoginClick} />;
}