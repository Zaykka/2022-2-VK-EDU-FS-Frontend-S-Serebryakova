import React from 'react'
import classes from './Header.module.css'
import { useNavigate } from "react-router-dom";


export default function Header() {
    let navigate = useNavigate();

    return (
        <>
            <div className={classes.header}>VK Translate</div>
            <button className={classes.history} onClick={() => navigate('/history')}>
                <span className='material-icons'>history</span>
            </button>
            <div className={classes.hisroty_title}>История</div>
        </>
    )
}



