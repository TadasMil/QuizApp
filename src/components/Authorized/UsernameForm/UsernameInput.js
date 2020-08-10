import React from 'react'
import classes from './UsernameInput.module.scss'

export const UsernameInput = ({handleOnChange, username}) => {
    return (
        <input className={classes.UsernameInput} placeholder="Username" type="text" value={username} onChange={handleOnChange}></input>
    )
}
