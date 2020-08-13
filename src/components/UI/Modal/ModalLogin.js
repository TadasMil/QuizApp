import React from 'react'
import classes from './ModalLogin.module.scss'

export const ModalLogin = (props) => {
    return (
        <div className={classes.Modal}>
            {props.children}
        </div>
    )
}
