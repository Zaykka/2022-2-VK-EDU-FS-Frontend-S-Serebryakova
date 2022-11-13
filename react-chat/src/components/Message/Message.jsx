import React from 'react'
import classes from './Message.module.css'


export default function MessageList(props) {
    return (
        <div className={classes.message}>
            <div className={classes.message_text}>
                {props.text}
            </div>
            <div className={classes.meta}>{props.meta}
            </div>
        </div>
    )
}
