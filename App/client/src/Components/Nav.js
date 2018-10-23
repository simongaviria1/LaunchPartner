// import React, {Component} from 'react'; import {Link} from
// "react-router-dom"; import PropTypes from 'prop-types'; import {withStyles}
// from '@material-ui/core/styles'; import BottomNavigation from
// '@material-ui/core/BottomNavigation'; import BottomNavigationAction from
// '@material-ui/core/BottomNavigationAction'; import RestoreIcon from
// '@material-ui/icons/Restore'; import FavoriteIcon from
// '@material-ui/icons/Favorite'; import LocationOnIcon from
// '@material-ui/icons/LocationOn'; class Nav extends Component { 		render() {
// 				return ( 						<div className='header'> 								<div
// className='header-portfolio'> 										<Link to={'/profile'}>
// 												Profile 										</Link> 								</div> 								<div
// className='header-transactions'> 										<Link to={'/dashboard'}>
// 												Dashboard 										</Link> 								</div> 						</div> 				);
// 		} } export default Nav;

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