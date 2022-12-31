import React from 'react'
import classes from './Translation.module.css'


export default function Translation(props) {
    return (
        <div className={classes.translation}>
            <div className={classes.source}>
                {props.source}
            </div>
            <div className={classes.destination}>{props.translation}
            </div>
        </div>
    )
}