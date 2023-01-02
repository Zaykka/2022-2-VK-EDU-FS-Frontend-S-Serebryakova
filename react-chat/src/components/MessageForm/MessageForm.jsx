import React from 'react'
import classes from './MessageForm.module.css'


export default function MessageForm({children, onSubmit, handleFiles, onChangeGeo, recordingStatus, onClickRecord, ...props}) {

    return (
        <form onSubmit={onSubmit} className={classes.form}>
            <input
                className={classes.visually_hidden}
                type="file"
                id="fileElem"
                onChange={handleFiles}
            />
            <label className={classes.attachment_button} htmlFor="fileElem">
            <span class="material-icons">attachment</span>
            </label>
            <input className={classes.form_input} 
            {...props}/>
            <button className={classes.location_button} onClick={onChangeGeo} type="button">
                <span class="material-icons">share_location</span>
            </button>
            <button className={!recordingStatus ? classes.audio_button : classes.audio_button_on_record}
                    onClick={onClickRecord}
                    type="button">
                <span class="material-icons">mic</span>
            </button>
        </form>
    )
}
