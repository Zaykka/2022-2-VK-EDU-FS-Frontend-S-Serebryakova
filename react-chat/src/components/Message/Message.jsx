import React from 'react'
import classes from './Message.module.css'


export default function Message(props) {
    function ts_to_time(ts) {
        const date = new Date(ts);
        var minutes = "0" + date.getMinutes();
        minutes = minutes.substr(-2);
        return `${date.getHours()}:${minutes}`
    }

    return (
        <div className={classes.message}>
            <div className={classes.message_text}>
                {props.text}
            </div>
            {props.image && (
                <img className={classes.image} alt="image_preview" src={props.image} />
            )}
            {props.audio && (
                <audio controls src={props.audio}></audio>
            )}
            <div className={classes.meta}>{ts_to_time(props.time)}
            </div>
        </div>
    )
}
