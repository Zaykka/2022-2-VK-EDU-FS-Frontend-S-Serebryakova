import React from 'react'
import classes from './ProfileHeader.module.css'


export default function ProfileHeader({ handleClick }) {
  
  return (
    <header className={classes.header}>
      <button className={classes.arrow_back} type="" onClick={handleClick}>
        <span className="material-icons">arrow_back</span>
      </button>
      <div className={classes.edit_profile}>Edit Profile</div>
      <button className={classes.done} type="">
        <span className="material-icons">done</span>
      </button>
    </header>
  )
}
