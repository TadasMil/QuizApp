import React from 'react'
import classes from './ProfileInfo.module.scss'

export const ProfileInfo = (props) => {
    const {name, score} = props.userInfo;
    return (
        <div className={classes.UserInfo}>
            <ul>
                <li>
                    <p>Your name: {name}</p>
                    <p>Your score: {score}</p>
                    <p>Correct answers:</p>
                </li>
            </ul>
        </div>
    )
}
