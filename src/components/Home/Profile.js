import React from 'react';
import Button from '../UI/Button/Button'
import classes from './Profile.module.scss'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'

function Profile(props) {
    return (
        <>
            <div className={classes.Profile}>
                <h2>Profile</h2>
                    <ProfileInfo userInfo={props.userInfo}/>
                </div>
            <Button>Start Quiz</Button>
        </>

    );
}

export default Profile;