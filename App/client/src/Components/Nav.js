import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Redirect} from 'react-router-dom'

class SimpleMenu extends React.Component {
		state = {
				anchorEl: null
		};

		handleClick = event => {
				this.setState({anchorEl: event.currentTarget});
		};

		handleRedirect = (e) => {
				console.log(e.target.name)
				this.setState({anchorEl: null, target: e.target.name, redirect: true});
		};

		handleRedirectDash = (e) => {
				console.log(e.target.name)
				this.setState({anchorEl: null, dash: true, redirect: true});
		};

		renderRedirect = () => {
				if (this.state.redirect) {
						return <Redirect to='/profile'/>
				}
		}
		renderRedirectDash = () => {
				if (this.state.dash) {
						return <Redirect to='/dashboard'/>
				}
		}
		render() {
				const {anchorEl} = this.state;
				return (
						<div>
								{this.renderRedirect()}
								{this.renderRedirectDash()}
								<Button
										aria-owns={anchorEl
										? 'simple-menu'
										: null}
										aria-haspopup="true"
										onClick={this.handleClick}>
										Open Menu
								</Button>
								<Menu
										id="simple-menu"
										anchorEl={anchorEl}
										open={Boolean(anchorEl)}
										onClose={this.handleRedirect}>
										<MenuItem onClick={this.handleRedirect} name='profile'>Profile</MenuItem>
										<MenuItem onClick={this.handleRedirectDash} name='dashboard'>Dashboard</MenuItem>
										<MenuItem onClick={this.props.logOut}>Logout</MenuItem>
								</Menu>
						</div>
				);
		}
}

export default SimpleMenu;