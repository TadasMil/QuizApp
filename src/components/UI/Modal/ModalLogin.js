import React from 'react'
import classes from './ModalLogin.module.css'

export const ModalLogin = (props) => {
    return (
        <div className={classes.Modal}>
            {props.children}
        </div>
    )
}
