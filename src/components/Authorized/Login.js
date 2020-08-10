import React from 'react'
import classes from './Login.module.scss'
import {UsernameInput} from './UsernameForm/UsernameInput'
import Button from '../UI/Button/Button'

const Login = ({username, handleOnChange}) => {
    return (
        <>
            <section className={classes.Login}>
                <h3>Choose your <span>username:</span></h3>
                <UsernameInput username={username} handleOnChange={handleOnChange}/>
                <p>**Username will help us to save the progress that you will achieve</p>
                <Button >Submit</Button>
            </section>
        </>
    )
}

export default Login
