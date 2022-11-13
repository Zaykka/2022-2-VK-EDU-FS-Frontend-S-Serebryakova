import React from 'react';
import PageChatList from '../pages/PageChatList/PageChatList';
import PageChat from '../pages/PageChat/PageChat';


export function MoveToPage({ isClickOnChat, handleChatClick }) {
    if (isClickOnChat) {
        return <PageChat handleChatClick={handleChatClick} />;
    }
    return <PageChatList handleChatClick={handleChatClick} />;
}