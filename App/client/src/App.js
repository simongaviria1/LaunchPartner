import React, {Component} from 'react';
import {Route, Redirect, BrowserRouter as Router} from 'react-router-dom'

import Dashboard from './Components/Dashboard'
import Login from './Components/UserAuth/Login'

class App extends Component {

  constructor() {
    super();
    this.state = {
      username: 'simongaviria',
      bio: 'I am a developer',
      profilePic: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/44225876_10160995280085646_6176365' +
          '99475208192_o.jpg?_nc_cat=107&_nc_ht=scontent-lga3-1.xx&oh=70b52779e598b14e43028' +
          'df0ed6376ad&oe=5C5023C4',
      edit: false
    }
  }

  renderDashboard = () => {
    const {username, bio, profilePic, edit} = this.state
    return <Dashboard
      username={username}
      profilePic={profilePic}
      bio={bio}
      edit={edit}
      toggleEdit={this.toggleEdit}/>
  }

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={this.renderDashboard}/>
          <Route path="/login" component={< Login />}/>
        </div>
      </Router>
    )
  }
}

export default App;
