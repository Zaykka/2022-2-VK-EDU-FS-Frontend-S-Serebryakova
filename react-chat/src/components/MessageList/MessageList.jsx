import React from 'react'
import Message from '../Message/Message'
import classes from './MessageList.module.css'


export default function MessageList(props) {
    return (
        <div className={classes.messages}>
            {props.messages.map(message =>
                <Message 
                    // for local chat
                    // text={message.message}
                    //for local chat
                    // meta={message.created_at.length > 5 ? message.created_at.substring(11, 16) : message.created_at}
                    text={(typeof message.text === 'string' && message.text[0] !== '^') ? message.text.split('&&&')[0] : ''}
                    image={typeof message.text === 'string' ? message.text.split('&&&')[1] : ''}
                    audio={typeof message.text === 'string' ? message.text.split('^^^')[1] : ''}
                    time={message.timestamp}
                    author={message.author}
                    key={message._id}
                />
            )}
        </div>
    )
}