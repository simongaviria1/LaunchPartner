import React, {Component} from 'react';
import {Route, Redirect} from 'react-router'

import ProfileEdit from './ProfileEdit'

import '../Style/Profile.css'

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Profile extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        const {username, profilePic, bio, toggleEdit, edit} = this.props

        return (
                edit? <ProfileEdit /> :
            <div>
                <div>
                        <Paper elevation={1}>
                            <img id='profilePic' src={profilePic}/>
                            <div id='user_profile'>
                                <h1>{username}</h1>
                                <p>{bio}</p>
                            </div>

                            <div>
                                <button onClick={toggleEdit}>
                                Edit Profile</button> 
                            </div>
                        </Paper>
                    </div>}

            </div>
        )
    }
}

export default Profile;
