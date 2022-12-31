import React from 'react'
import classes from './HistoryHeader.module.css'
import { Link } from "react-router-dom";


export default function HistoryHeader({loadTranslations}) {
    return (
        <>
            <div className={classes.header}>История</div>
            <Link to="/" className={classes.link}>Back</Link>
            <button className={classes.clear_history} onClick={() => {
            localStorage.clear(); loadTranslations();}}>Очистить историю</button>
        </>
    )
}