import React, { Component } from 'react';
import { Greeting } from './Greeting';



class LoginControl extends Component {
	constructor(props) {
		super(props);
		this.handleLoginClick = this.handleLoginClick.bind(this);
		// this.handleLogoutClick = this.handleLogoutClick;
		this.state = { isClickOnChat: false };
	}

	handleLoginClick() {
		console.log('f')
		console.log(this)
		this.setState({ isClickOnChat: !this.state.isClickOnChat });
	}

	// handleLogoutClick() {
	// 	this.setState({ isClickOnChat: false });
	// }

	render() {
		const isClickOnChat = this.state.isClickOnChat;
		// let button;

		// button = <LogoutButton onClick={ this.handleLoginClick } />
		return (
			<div>
				<Greeting isClickOnChat={isClickOnChat} handleLoginClick={ this.handleLoginClick } />
			</div>
		);
	}
}
export default LoginControl;
