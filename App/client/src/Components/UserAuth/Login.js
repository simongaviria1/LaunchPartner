import React, {Component} from 'react';
import {Link, Route, Redirect} from 'react-router-dom';

import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import '../../Style/UserAuth.css'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    //Finish submission function
    submit = (e) => {
        const {username, password} = this.state
        const {user, UserFound} = this.props
        console.log(true)
        e.preventDefault();
        axios
            .post('/users/login', {
            username: username,
            password: password
        })
            .then(res => {
                UserFound(res.data);
                this.setState({username: '', password: '', message: 'Success!'})
            })
            .catch(err => {
                console.log('err', err)
            })
    }

    handleChange = (e) => {
        // console.log(this.state)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {username, password, message} = this.state
        return (
            <div class='userAuth'>
                <Paper>
                    <h2>Login</h2>
                    <div class='userAuth'>
                        <form onSubmit={this.submit}>
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
                            <button onClick={this.submit}>Login</button>
                        </form>

                        <p>{message}{" "}
                            Not a member?
                            <Link to='/register'>
                                Sign up
                            </Link>
                        </p>
                    </div>
                </Paper>
            </div>
        )
    }
}

export default Login;
