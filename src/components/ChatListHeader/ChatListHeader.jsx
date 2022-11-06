import React from 'react'
import classes from './ChatListHeader.module.css'


export default function ChatListHeader() {
    return (
        <header className={classes.header}>
            <button className={classes.menu} type="">
                <span className="material-icons">cmenu</span>
            </button>
            <div className={classes.header_messenger}>Messenger</div>
            <button className={classes.search} type="">
                <span className="material-icons">search</span>
            </button>
        </header>
    )
}
