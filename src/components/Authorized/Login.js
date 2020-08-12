import React from 'react'
import classes from './Login.module.scss'
import {UsernameInput} from './UsernameForm/UsernameInput'
import Button from '../UI/Button/Button'

const Login = ({username, handleOnChange, handleSubmit}) => {
    return (
        <>
            <section className={classes.Login}>
                <div className={classes.LoginName}>
                    <h1>QUIZY</h1>
                </div>
                <h3>Choose your username:</h3>
                <UsernameInput username={username} handleOnChange={handleOnChange}/>
                <p>**Username will help us to save the progress that you will achieve</p>
                <Button handleSubmit={handleSubmit}>Submit</Button>
            </section>
        </>
    )
}

export default Login
