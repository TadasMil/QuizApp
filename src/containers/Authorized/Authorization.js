import React, { Component } from 'react'
import Login from '../../components/Authorized/Login'

export default class Authorized extends Component {
    state = {
        auth: false,
        username: ''
    }
    handleUsername = (event) => {
       this.setState({
        username: event.target.value
       })
    }
    render() {
        return (
           <>
                <Login username={this.state.username} handleOnChange={this.handleUsername}/>
           </>
        )
    }
}
