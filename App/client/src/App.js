import React, {Component} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom'

import Profile from './Components/Profile'
import ProfileEdit from './Components/ProfileEdit'
import Dashboard from './Components/Dashboard'
import Login from './Components/UserAuth/Login'
import Register from './Components/UserAuth/Register'

import './Style/gen.css'
import './Style/Profile.css'

import SideNav, {Toggle, Nav, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import axios from 'axios'
class App extends Component {

  constructor() {
    super();
    this.state = {
      user: null,
      edit: false
    }
  }

  logOut = () => {
    const {user} = this.state;
    axios
      .get("/users/logout")
      .then(res => {
        this.setState({user: null});
      })
      .catch(err => {
        console.log(err);
      });
  };

  // functions passed as Props
  UserFound = userData => {
    this.setState({user: userData});
  };

  handleLogin = () => {
    const {user} = this.state
    if (user) {
      return <Redirect to='/'/>
    } else {
      return <Login UserFound={this.UserFound}/>
    }
  }

  handleRegisterUser = () => {
    const {user} = this.state;
    if (user) {
      return <Redirect to='/'/>
    } else {
      return (<Register setUser={this.UserFound}/>)
    }
  }

  renderProfile = () => {
    const {user, loading, edit} = this.state
    if (!user) {
      return <Redirect to='/login'/>
    } else {
      return (<Profile
        logOut={this.logOut}
        user={user}
        logOut={this.logOut}
        toggleEdit={this.toggleEdit}
        edit={edit}/>)
    }
  }

  renderDashboard = () => {
    const {user, loading, edit} = this.state
    if (!user) {
      return <Redirect to='/login'/>
    } else {
      return <Dashboard logOut={this.logOut}/>
    }
  }

  renderProfileEdit = () => {
    return <ProfileEdit/>
  }

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={this.renderProfile}/>
        <Route path="/dashboard" component={this.renderDashboard}/>
        <Route path="/profile" component={this.renderProfile}/>
        <Route path="/edit" component={this.renderProfileEdit}/>
        <Route path="/login" component={this.handleLogin}/>
        <Route path="/register" component={this.handleRegisterUser}/>
      </Switch>
    )
  }
}

export default App;
