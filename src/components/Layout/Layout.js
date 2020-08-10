import React from 'react'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.module.scss'

export default function Layout(props) {
    return (
        <>
            <Toolbar />
            <main className={classes.Main}>
                {props.children}
            </main>
        </>
    )
}
