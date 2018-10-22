import React from "react";
import {Route, Redirect, BrowserRouter as Router} from 'react-router-dom'
import axios from 'axios'

import TextField from '@material-ui/core/TextField';

import '../Style/ProfileEdit.css'

class ProfileEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      user_pic: "",
      user_bio: "",
      user_name: ""
    };
  }

  submit = () => {
    console.log("submitted");
  };

  render() {
    const {toggleEdit} = this.props
    return (
      <div id='edit_profile'>
        <h1>Edit your profile</h1>
        <form id='input_form' onSubmit={this.submit}>
          <TextField id="standard-name" label="User Name" margin="normal"/>
          <br></br>
          <TextField id="standard-name" label="Bio" margin="normal"/>
          <br></br>

          <TextField id="standard-name" label="Pic URL" margin="normal"/>
          <br></br>

          <button onClick={this.submit}>submit</button>
          <button onClick={() => <Redirect to = '/dashboard' />}>Cancel</button>
        </form>
      </div>
    );
  }
}

export default ProfileEdit;