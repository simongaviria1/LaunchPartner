import React, {Component} from 'react';
import {Route, Redirect} from 'react-router'

class Dashboard extends Component {
    render() {
        const {username, profilePic, bio } = this.props
        return (
            <div>
                <h1>Hello from Login</h1>
            </div>
        )
    }
}

export default Dashboard;
