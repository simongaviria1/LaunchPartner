import React from "react";
import {Route, Redirect, BrowserRouter as Router} from 'react-router-dom'
import axios from 'axios'

import TextField from '@material-ui/core/TextField';

import '../Style/ProfileEdit.css'
import Nav from './Nav'

class ProfileEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      user_pic: "",
      user_bio: "",
      user_name: ""
    };
  }

  Comment
  submit = (e) => {
    const {user_bio, user_name, user_pic} = this.state
    const {user} = this.props
    axios
      .post('/users/edit', {
      user_pic: user_pic,
      user_name: user_name,
      user_bio: user_bio,
      id: user.id
    })
      .then(() => {
        return <Redirect to ='/'/>
      })
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {

    console.log(this.state)
    const {toggleEdit, user} = this.props
    return (
      <div>
        <Nav/>
        <div id='edit_profile'>
          <h1>Edit your profile</h1>
          <form id='input_form' onSubmit={this.submit}>
            <TextField
              id="standard-name"
              label="Name"
              margin="normal"
              name='user_name'
              onChange={this.handleChange}/>
            <br></br>
            <TextField
              id="standard-name"
              label="Bio"
              margin="normal"
              name='user_bio'
              onChange={this.handleChange}/>
            <br></br>
            <TextField
              id="standard-name"
              label="Pic URL"
              margin="normal"
              name='user_pic'
              onChange={this.handleChange}/>
            <br></br>

            <button onClick={this.submit}>submit</button>
            <button onClick={() => <Redirect to='/dashboard'/>}>Cancel</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ProfileEdit;