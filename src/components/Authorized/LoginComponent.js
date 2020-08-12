import React from 'react'
import Login from '../../components/Authorized/Login'

export const LoginComponent = ({username, handleOnChange, handleSubmit}) => {
    return (    
            <Login username={username} handleOnChange={handleOnChange} handleSubmit={handleSubmit}/>
    )
}
