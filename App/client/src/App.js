import React, {Component} from 'react';
import {Route, Redirect, BrowserRouter as Router} from 'react-router-dom'

import Profile from './Components/Profile'
import ProfileEdit from './Components/ProfileEdit'
import Dashboard from './Components/Dashboard'
import Login from './Components/UserAuth/Login'

import './Style/gen.css'
import SideNav, {Toggle, Nav, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      user: null,
      username: 'simongaviria',
      bio: 'I am a developerI am a developerI am a developerI am a developerI am a developer' +
          'I am a developerI am a developerI am a developerI am a developerI am a developer' +
          'I am a developerI am a developerI am a developerI am a developerI am a developer' +
          'I am a developerI am a developerI am a developerI am a developerI am a developer' +
          'I am a developerI am a developerI am a developerI am a developerI am a developer' +
          'I am a developerI am a developerI am a developerI am a developerI am a developer' +
          'I am a developerI am a developerI am a developerI am a developerI am a developer' +
          'I am a developerI am a developerI am a developerI am a developerI am a developer' +
          'I am a developerI am a developerI am a developerI am a developerI am a developer' +
          'I am a developerI am a developerI am a developerI am a developerI am a developer' +
          'I am a developerI am a developerI am a developerI am a developerI am a developer' +
          'I am a developerI am a developerI am a developer',
      profilePic: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/44225876_10160995280085646_6176365' +
          '99475208192_o.jpg?_nc_cat=107&_nc_ht=scontent-lga3-1.xx&oh=70b52779e598b14e43028' +
          'df0ed6376ad&oe=5C5023C4',
      edit: false
    }
  }

  handleLogin = () => {
    const {user} = this.state;
    return (user
      ? <Redirect to='/dashboard'/>
      : <Redirect to='/login'/>)
  }

  renderLogin = () => {
    return <Login/>
  }

  renderProfile = () => {
    const {username, bio, profilePic, edit} = this.state
    return <Profile
      username={username}
      profilePic={profilePic}
      bio={bio}
      edit={edit}
      toggleEdit={this.toggleEdit}/>
  }

  renderDashboard = () => {
    return <Dashboard/>
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
      <Router>
        <Route
          render={({location, history}) => (
          <React.Fragment>
          {this.state.user ?   <SideNav 
            id='nav'
              onSelect={(selected) => {
              const to = '/' + selected;
              if (location.pathname !== to) {
                history.push(to);
              }
            }}>
              <SideNav.Toggle/>
              <SideNav.Nav defaultSelected="dash">
                <NavItem eventKey="dashboard">
                  <NavIcon>
                    <i class="fas fa-home"></i>
                  </NavIcon>
                  <NavText>
                    Dashboard
                  </NavText>
                </NavItem>
                <NavItem eventKey="profile">
                  <NavIcon>
                  <i class="fas fa-user"></i>
                  </NavIcon>
                  <NavText>
                    Profile
                  </NavText>
                </NavItem>
              </SideNav.Nav>
            </SideNav>: ''}
            <main>
              <Route exact path="/" component={this.handleLogin}/>
              <Route path="/dashboard" component={this.renderDashboard}/>
              <Route path="/profile" component={this.renderProfile}/>
              <Route path="/edit" component={this.renderProfileEdit}/>
              <Route path="/login" component={this.renderLogin}/>
            </main>
          </React.Fragment>
        )}/>
      </Router>
    // <Router>   <div>     <Route exact path="/" component={this.handleLogin}/>
    // <Route path="/dashboard" component={this.renderDashboard}/>     <Route
    // path="/login" component={this.renderLogin}/>   </div> </Router>
    )
  }
}

export default App;
