import React from 'react';
import Header from '../../components/Header/Header';
import classes from './PageMain.module.css';
import Source from '../../components/Source/Source';
import Destination from '../../components/Destination/Destination';


export default function PageMain() {
    return (
        <div>
            <Header></Header>
            <div className={classes.translater}>
                <div className={classes.language_bar}>
                    <div className={classes.translater_header}>DETECTED LANGUAGE</div>
                    <button className={classes.sync_alt} type="">
                        <span className="material-icons">sync_alt</span>
                    </button>
                </div>
                <div className={classes.translation_box}>
                    <Source />
                    <Destination />
                </div>
            </div>
        </div>
    )

}