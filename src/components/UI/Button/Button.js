import React from 'react'
import classes from './Button.module.scss'

const Button = ({handleSubmit, children, buttonClass}) => {
if(buttonClass === 'Button'){
    return (
        <button className={classes.ButtonMain} type='submit' onClick={handleSubmit}>{children}</button>
)} else {
    return (
        <button className={classes.ButtonPages} type='submit' onClick={handleSubmit}>{children}</button>
    )
}}



export default Button;