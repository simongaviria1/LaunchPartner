import React, {Component} from 'react';
import {Route, Redirect} from 'react-router'

import ProfileEdit from './ProfileEdit'
import Nav from './Nav'
import '../Style/Profile.css'

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'

import '../Style/Dashboard.css'
import '../Style/Profile.css'

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            profiles: []
        }
    }

    componentDidMount = () => {
        axios
            .get('/users/getProfiles')
            .then(res => {
                this.setState({profiles: res.data.data})
            })
    }

    render() {
        const {username, profilePic, bio, toggleEdit, edit} = this.props
        return (
            <div>
                <Nav/>
                <div>
                    <div id='container'>
                        {this
                            .state
                            .profiles
                            .map(ele => {
                                return (
                                    <Paper elevation={1} className='profile_cards'>
                                        <img id='profilePic' src={ele.profilePic} alt='img'/>
                                        <div id='user_profile'>
                                            <h1>{ele.username}</h1>
                                            <p>{ele.bio}</p>
                                        </div>
                                    </Paper>
                                )
                            })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;
