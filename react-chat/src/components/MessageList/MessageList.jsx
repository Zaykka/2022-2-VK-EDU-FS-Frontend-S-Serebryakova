import React from 'react'
import Message from '../Message/Message'
import classes from './MessageList.module.css'


export default function MessageList(props) {
    return (
        <div className={classes.messages}>
            {props.messages.map(message =>
                <Message 
                    text={message.text}
                    // meta={message.timestamp.length > 5 ? message.timestamp.substring(11, 16) : message.timestamp}
                    meta={message.timestamp}
                    key={message.id}
                />
            )}
        </div>
    )
}