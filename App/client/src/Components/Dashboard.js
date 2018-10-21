import React, {Component} from 'react';
import {Route, Redirect} from 'react-router'

import DashboardEdit from './DashboardEdit'

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        const {username, profilePic, bio, toggleEdit, edit} = this.props

        return (
            <div>
                {edit
                    ? <DashboardEdit toggleEdit={toggleEdit}/>
                    : <div>
                        <img src={profilePic}/>
                        <h1>{username}</h1>
                        <p>{bio}</p>
                        <h1>Hello from Dashboard</h1>

                        <button onClick={toggleEdit}>
                            Edit Profile</button>
                    </div>
}

            </div>
        )
    }
}

export default Dashboard;
