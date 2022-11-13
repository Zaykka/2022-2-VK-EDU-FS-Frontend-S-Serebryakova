import React, { useState, useEffect } from 'react'
import ChatHeader from '../../components/ChatHeader/ChatHeader';
import MessageForm from '../../components/MessageForm/MessageForm';
import MessageList from '../../components/MessageList/MessageList';
import classes from './PageChat.module.css'


export default function PageChat({handleChatClick}) {
    const [messages, setMessages] = useState([])
    const [text, setText] = useState('');

    function getMesagesFromLocalStorage () {
        let messages = localStorage.getItem('messages');
        if (messages === '' || messages === null) {
          return
        } 
        messages = JSON.parse(messages);
        return messages.all;
      }

    function saveMessageToLocalStorage(message) {
        let messages = localStorage.getItem('messages');
        if (messages === '' || messages === null) {
            localStorage.setItem('messages', JSON.stringify({ 'all': [] }));
        }
        messages = localStorage.getItem('messages');
        messages = JSON.parse(messages);
        messages.all.push(message);
        localStorage.setItem('messages', JSON.stringify(messages));
    }

    function handleChange(event) {
        setText(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        let time = new Date();
        let message = {
            'text': text,
            'meta': `${time.getHours()}:${time.getMinutes()}`,
            'id': Date.now()
        };
        setMessages([...messages, { ...message, id: Date.now()}]);
        saveMessageToLocalStorage(message)
        setText('');
    }
    function loadMessages() {
        let savedMessages = getMesagesFromLocalStorage()
        if (savedMessages) {
            setMessages(savedMessages);
        }
    }

    useEffect(loadMessages, [])
    return (
        <div className={classes.pageChat}>
            <ChatHeader handleChatClick={handleChatClick}></ChatHeader>
            <MessageList messages={messages}></MessageList>
            <MessageForm
                onSubmit={handleSubmit}
                name="message-text"
                placeholder="Cообщение"
                type="textarea"
                value={text}
                onChange={handleChange}
            >attachment</MessageForm>
        </div>
    )
}

 