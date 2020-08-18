import React, { Component } from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './Toolbar.module.scss'
import {Redirect} from 'react-router-dom'

export default class Toolbar extends Component {

    
    render() {
        return (
            <header>
                <nav className={classes.Navigation}>
                    <NavigationItems handleActiveUser={this.handleActiveUser}/>
                </nav>
            </header>
        )
    }
}
