import React, { Component } from 'react'
import Login from '../../components/Authorized/Login'
import axios from '../../axios-users'
import {ModalLogin} from '../../components/UI/Modal/ModalLogin'


export default class Authorization extends Component {
    state = {
        username: '',
        users: [],
        score: 0,
    }

    componentDidMount(){
        axios.get('/users.json')
        .then(response => {      
            let usersData = Object.keys(response.data).map((user) => {
                return response.data[user]
            })
         this.setState({
             users: usersData
         })
        })
    }


    handleUsername = (event) => {
       this.setState({
        username: event.target.value
       })
    }

    checkIfUserExists = (username, arr) => {
       const user = arr.find(user => {
           return user.name === username
       })
       if(user === undefined){
           return null;
       } else {
           return user;
       }
    }

    handleSubmit = (event) => {
        event.preventDefault();
     
        const userExists = this.checkIfUserExists(this.state.username, this.state.users);

        //I am mentioning the usage of localStorage for this project in the Home file which is in the containers folder.
        if(userExists){
            localStorage.setItem("user", JSON.stringify(userExists));
            this.props.history.push({
                pathname: '/home'
            })
        } else {
            const newUser = {
                name: this.state.username,
                score: 0
            }
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
