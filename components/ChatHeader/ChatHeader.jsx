import React from 'react'
import classes from './ChatHeader.module.css'


export default function Header() {
    return (
        <header className={classes.header}>
            <button className={classes.arrow_back} type="">
                <span className="material-icons">arrow_back</span>
            </button>
            <button className={classes.search} type="">
                <span className="material-icons">search</span>
            </button>
            <button className={classes.more_vert} type="">
                <span className="material-icons">more_vert</span>
            </button>
        </header>
    )
}
