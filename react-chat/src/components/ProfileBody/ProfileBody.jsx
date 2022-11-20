import React from 'react'
import classes from './ProfileBody.module.css'


export default function ProfileBody({ img_path }) {
    return (
        <div className={classes.profile_body}>
            <div className={classes.profile_picture}>
                <img className={classes.picture} src={img_path} alt="profile_photo" style={{ width: 120, height: 100 }} />
            </div>

            <div className={classes.full_name}>
                <div className={classes._input1}>Full name
                    </div>
                <div className={classes._input2}>
                    Tony Jacobson
                </div>
            </div>

            <div className={classes.user_name}>
            <div className={classes._input1}>Username
                    </div>
                <div className={classes._input2}>
                    @Tony
                </div>
            </div>

            <div className={classes.bio}>
            <div className={classes._input1}>Bio
                    </div>
                <div className={classes._input2}>
                    19 y.o.,Moscow
                </div>
            </div>
        </div>
    )
}
