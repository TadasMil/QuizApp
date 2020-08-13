import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Home extends Component {
   state = {
       user: {}
   }

   //To learn the fundamentals of React using HTTP requests with axios, I decided not to mix
   //my application with Redux which is used for State managing. This allows me to concentrate
   //on making HTTP requests with axios. For that reason, I've used local storage, to retrieve the
   //current registered user everytime the page is being accessed. After completing the project,
   //I will move to learning Redux, to manage my state in a better approach.
   //It is not recommended to use setState in the componentDidMount lifecycle method,
   //because it will trigger to re-render twice, but for the learning purposes and localStorage usage,
   //I will use setState of the current user in the componentDidMount
   componentDidMount(){
      this.setState({
          user: localStorage.getItem("user")
      })
   }

    render() {
       return (
           <>
                {console.log(this.state.user)}
           </>
       )
    }
}
