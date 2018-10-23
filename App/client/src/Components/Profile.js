import React, {Component} from 'react';
import {Route, Redirect} from 'react-router'

import ProfileEdit from './ProfileEdit'
import Nav from './Nav'

import '../Style/Profile.css'

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Profile extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        const {
            username,
            profilePic,
            bio,
            toggleEdit,
            edit,
            user,
            logOut
        } = this.props

        return (edit
            ? <ProfileEdit user={user.user}/>
            : <div>
                <Nav logOut={logOut}/>
                <div>
                    <Paper elevation={1}>
                        <img id='profilePic' src={`${user.user.profilePic}`} alt='profile picture'/>
                        <div id='user_profile'>
                            <h1>{user.user.name}</h1>
                            <p>{user.user.bio}</p>
                        </div>

                        <div>
                            <button onClick={toggleEdit}>
                                Edit Profile</button>
                        </div>
                    </Paper>
                </div>

            </div>)
    }
}

export default Profile;
