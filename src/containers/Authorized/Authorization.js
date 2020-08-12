import React, { Component } from 'react'
import Login from '../../components/Authorized/Login'
import axios from '../../axios-users'
import { Redirect, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Quiz from '../Quiz/Quiz'

export default class Authorization extends Component {
    state = {
        auth: true,
        username: ''
    }

    handleUsername = (event) => {
       this.setState({
        username: event.target.value
       })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            name: this.state.username
        }
          axios.post('/users.json', user)
            .then(response => {
                this.setState({
                    auth: true
                })
                this.props.history.push('/home');
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        if(this.state.auth === false){
          return (
            <>
            <Route path='/login' exact component={() => (<Login username={this.state.username} handleOnChange={this.handleOnChange} handleSubmit={this.handleSubmit} />)}/>
            <Redirect path='/login' />
           </>
          )
        }
        else {
           return (
               <Route path='/home' component={Home} />
           )
        }
      
    }
}
