import React, { Component } from 'react';
import { MoveToPage } from './MoveToPage';


class GoToChat extends Component {
	constructor(props) {
		super(props);
		this.handleChatClick = this.handleChatClick.bind(this);
		this.state = { isClickOnChat: false };
	}

	handleChatClick() {
		this.setState({ isClickOnChat: !this.state.isClickOnChat });
	}

	render() {
		const isClickOnChat = this.state.isClickOnChat;

		return (
			<div>
				<MoveToPage isClickOnChat={isClickOnChat} handleChatClick={this.handleChatClick} />
			</div>
		);
	}
}
export default GoToChat;
