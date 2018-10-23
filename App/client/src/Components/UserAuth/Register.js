import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';

import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import '../../Style/UserAuth.css'

class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    //Finish submission function
    submit = (e) => {
        const {username, password, bio, profile_pic, name} = this.state
        e.preventDefault();
        axios
            .post('/users/new', {
            username: username,
            password: password,
            bio: bio,
            profile_pic: profile_pic,
            name: name
        })
            .then(() => {
                axios
                    .post("/users/login", {
                    username: username,
                    password: password
                })
                    .then(res => {
                        this
                            .props
                            .userFound(res.data.user)
                    })
                    .catch(err => {
                        console.log(err)
                        this.setState({message: 'Error logging in'})
                    })

            })
            .catch(err => {
                console.log(`this is your`, err)
            })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {username, password} = this.state
        return (
            <div class='userAuth'>
                <Paper elevation={1}>
                    <Typography variant="h5" component="h2">
                        Register
                    </Typography>
                    <div >
                        <form onSubmit={this.submit}>
                            <TextField
                                id="standard-name"
                                label="Full Name"
                                margin="normal"
                                name='name'
                                onChange={this.handleChange}/>
                            <br></br>
                            <TextField
                                id="standard-name"
                                label="Short Bio"
                                margin="normal"
                                name='bio'
                                onChange={this.handleChange}/>
                            <br></br>
                            <TextField
                                id="standard-name"
                                label="User Name"
                                margin="normal"
                                name='username'
                                onChange={this.handleChange}/>
                            <br></br>
                            <TextField
                                id="standard-name"
                                label='password'
                                type='password'
                                margin="normal"
                                name='password'
                                onChange={this.handleChange}/>
                            <br></br>
                            <TextField
                                id="standard-name"
                                label='photo url'
                                type='text'
                                margin="normal"
                                name='profile_pic'
                                onChange={this.handleChange}/>
                            <br></br>
                            <button onClick={this.submit}>Register</button>
                        </form>

                        <p>{" "}<Typography variant="h5" component="h2">
                        Already a memeber?
                    </Typography>
                            <Link to='/login'>{' '}
                                <Typography variant="h5" component="p">
                                    Login
                                </Typography>
                            </Link>
                        </p>
                    </div>
                </Paper>
            </div>
        )
    }
}

export default Register;
