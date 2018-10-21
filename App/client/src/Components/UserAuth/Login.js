import React, {Component} from 'react';

import {Link, Route} from 'react-router-dom';

import axios from 'axios'

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
                    <input
                        type='text'
                        name='username'
                        placeholder='username'
                        onChange={this.handleChange}/>
                    <input type='password' name='password' placeholder='password' onChange={this.handleChange}/>
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
