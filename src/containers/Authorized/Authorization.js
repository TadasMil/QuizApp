import React, { Component } from 'react'
import Login from '../../components/Authorized/Login'
import axios from '../../axios-users'
import {ModalLogin} from '../../components/UI/Modal/ModalLogin'


export default class Authorization extends Component {
    state = {
        username: '',
        users: []
    }

    componentDidMount(){
        axios.get('/users.json')
        .then(response => {      
            let usersData = Object.keys(response.data).map((user) => {
                return response.data[user]
            })
         this.setState({
             users: usersData
         }, ()=>console.log(this.state.users))
        })
    }


    handleUsername = (event) => {
       this.setState({
        username: event.target.value
       })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const newUser = {
            name: this.state.username,
            score: this.state.score,
        };
        const userExists = this.state.users.some(user => user === this.state.username);
        //I am mentioning the usage of localStorage for this project in the Home container.
        if(userExists){
            localStorage.setItem("user", JSON.stringify(newUser));
            this.props.history.push({
                pathname: '/home'
            })
        } else {
            localStorage.setItem("user", JSON.stringify(newUser));
            axios.post('/users.json', newUser)
            .then(response => {
                this.setState({
                    username: ""
                })
                this.props.history.push({
                    pathname: '/home'
                })
            })
            .catch(error=>{
                console.log(error)
            })
        }
    }
    render() {
        
        return (
            <>
                <ModalLogin>
                    <Login username={this.state.username} handleOnChange={this.handleUsername} handleSubmit={this.handleSubmit} />
                </ModalLogin> 
            </>
        )
    }
}
