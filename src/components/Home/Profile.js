import React from 'react';
import Button from '../UI/Button/Button'
import classes from './Profile.module.scss'

function Profile(props) {
    const {name, score} = props.userInfo;
    return (
        <>
           <div className={classes.Profile}>
            <h2>Profile</h2>
            <div>
                    <ul>
                        <li>
                            <p>Your name: {name}</p>
                            <p>Your score: {score}</p>
                            <p>Correct answers:</p>
                        </li>
                    </ul>
            </div>
           </div>

           <Button>Start Quiz</Button>
        </>

    );
}

export default Profile;