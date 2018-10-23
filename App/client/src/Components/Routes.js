import React from 'react'

class Routes extends React.Component{ 
    render(){ 
        return ( 
            <Route exact path="/" component={this.renderDashboard}/>
            <Route path="/profile" component={this.renderProfile}/>
            <Route path="/edit" component={this.renderProfileEdit}/>
            <Route path="/login" component={this.handleLogin}/>
            <Route path="/register" component={this.renderRegister}/>
        )
    }    
}