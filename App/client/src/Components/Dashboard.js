import React, {Component} from 'react';
import {Route, Redirect} from 'react-router'

import ProfileEdit from './ProfileEdit'

import '../Style/Profile.css'

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            profiles: [
                {
                    username: 'sebas',
                    bio: 'I am also a dev',
                    profilePic: 'https://comps.canstockphoto.com/businessman-ready-to-commit-suicide-stock-photos_csp8557263.jpg'
                }, {
                    username: 'sebas',
                    bio: 'I am also a dev',
                    profilePic: 'https://comps.canstockphoto.com/businessman-ready-to-commit-suicide-stock-photos_csp8557263.jpg'
                }, {
                    username: 'sebas',
                    bio: 'I am also a dev',
                    profilePic: 'https://comps.canstockphoto.com/businessman-ready-to-commit-suicide-stock-photos_csp8557263.jpg'
                }, {
                    username: 'sebas',
                    bio: 'I am also a dev',
                    profilePic: 'https://comps.canstockphoto.com/businessman-ready-to-commit-suicide-stock-photos_csp8557263.jpg'
                }, {
                    username: 'sebas',
                    bio: 'I am also a dev',
                    profilePic: 'https://comps.canstockphoto.com/businessman-ready-to-commit-suicide-stock-photos_csp8557263.jpg'
                }, {
                    username: 'sebas',
                    bio: 'I am also a dev',
                    profilePic: 'https://comps.canstockphoto.com/businessman-ready-to-commit-suicide-stock-photos_csp8557263.jpg'
                }
            ]
        }
    }

    render() {
        const {username, profilePic, bio, toggleEdit, edit} = this.props

        return (
            <div>
                <div id='container'>
                    {this
                        .state
                        .profiles
                        .map(ele => {
                            console.log(ele)
                            return (
                                <Paper elevation={1} >
                                    <img id='profilePic' src={ele.profilePic} alt='img'/>
                                    <div id='user_profile'>
                                        <h1>{ele.username}</h1>
                                        <p>{ele.bio}</p>
                                    </div>
                                </Paper>
                            )
                        })
}
                </div>
            </div>
        )
    }
}

export default Dashboard;
{/* <Paper elevation={1}>
                             <img id='profilePic' src={profilePic}/>
                             <div id='user_profile'>
                                 <h1>{username}</h1>
                                 <p>{bio}</p>
                             </div>


                            <button onClick={toggleEdit}>
                                Edit Profile</button>
                        </Paper>
                    </div>} */
}