import React from 'react'
import classes from './MessageForm.module.css'


export default function MessageForm({children, onSubmit, ...props}) {

    return (
        <form onSubmit={onSubmit} className={classes.form}>
            <input className={classes.form_input} 
            {...props}/>
            <button className={classes.attachment} ><span className="material-icons">{children}</span></button>
        </form>
    )
}
