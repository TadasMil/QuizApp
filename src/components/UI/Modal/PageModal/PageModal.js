import React from 'react'
import classes from './PageModal.module.scss'

export const PageModal = (props) => {
    return (
        
            <div className={classes.PageModal}>
                {props.children}
            </div>
    )
}
