import React, { useState, useEffect } from 'react'
import ChatHeader from '../../components/ChatHeader/ChatHeader';
import MessageForm from '../../components/MessageForm/MessageForm';
import MessageList from '../../components/MessageList/MessageList';
import classes from './PageChat.module.css'
import { useNavigate } from "react-router-dom";


export default function PageChat({ chat_id }) {
    const [messages, setMessages] = useState([])
    const [text, setText] = useState('');

    let navigate = useNavigate();
    const routeChange = () => {
        navigate('/');
    }

    useEffect(() => {
        const pollItems = () => {
        fetch('https://tt-front.vercel.app/messages')
            .then((resp) => resp.json())
            .then((data) => setMessages(data.reverse()));
        };
        setInterval(() => pollItems(), 3000);
        return;
        }, []);

    function sendMessage(message) {
        fetch(`https://tt-front.vercel.app/message`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
        }).then(function(response) {
                console.log(response)
        });
        
        // fetch(`api/chats/v1/${chat_id}/messages/`, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(message),
        // }).then(function(response) {
        //     console.log(response)
        // })
    }

    function handleChange(event) {
        setText(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (text === '') {
            return;
        }

        // let time = new Date();
        let message = {
            // 'message': text,
            // 'created_at': `${time.getHours()}:${time.getMinutes()}`,
            // 'id': Date.now()
            // for 
            'text': text,
            'author': `Sofia`,
        };
        setMessages([...messages, { ...message, id: Date.now() }]);
        sendMessage(message)
        setText('');
    }
    // function loadMessages() {
    //     let savedMessages = getMesagesFromLocalStorage()
    //     if (savedMessages) {
    //         setMessages(savedMessages);
    //     }
    // }

    // useEffect(loadMessages, [])
    return (
        <div className={classes.pageChat}>
            <ChatHeader handleChatClick={routeChange}></ChatHeader>
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