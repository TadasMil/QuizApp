import React from 'react'
import {NavigationItem} from './NavigationItem/NavigationItem'
import classes from './NavigationItems.module.scss'

export default function NavigationItems() {
    return (
        <>
            <ul className={classes.NavigationItems}>
                <NavigationItem link='/home'>
                    Home
                </NavigationItem>
                <NavigationItem link='/quiz'>
                    Start the Quiz
                </NavigationItem>    
            </ul>
        </>
    )
}
