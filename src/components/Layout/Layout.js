import React from 'react'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.module.scss'

export default function Layout(props) {
    return (
        <>
            <Toolbar />
            <div className={classes.MainArea}>
                    <main className={classes.Main}>
                        {props.children}
                    </main>
            </div>
        </>
    )
}
