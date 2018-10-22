import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';

import axios from 'axios'
import TextField from '@material-ui/core/TextField';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    submit = (e) => {
        const {username, password} = this.state
        console.log('true')
        e.preventDefault();
        axios
            .post('/users/login', {
            username: username,
            password: password
        })
            .then(res => {
                console.log('res:', res.data)
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
            <div>
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

                <p>{" "}
                    Not a member?
                    <Link to='/register'>
                        Sign up
                    </Link>
                </p>
            </div>
        )
    }
}

export default Login;
