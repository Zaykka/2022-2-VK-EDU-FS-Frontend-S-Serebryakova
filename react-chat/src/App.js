import './App.css';
import React, { Component } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import PageProfile from './pages/PageProfile/PageProfile'
import PageChatList from './pages/PageChatList/PageChatList'
import PageChat from './pages/PageChat/PageChat'


class App extends Component {
	constructor(props) {
		super(props);
		this.handleChatClick = this.handleChatClick.bind(this);
		this.state = {
			chat_id: 0
		}
	}

	handleChatClick(chat_id) {
		console.log(chat_id)
		this.setState({ chat_id: chat_id })
	}

	render() {
		console.log(`chat_id ${this.state.chat_id}`)
		return (
			<Router>
				<div>
					<Routes>
						<Route path='/' element={<PageChatList handleChatClick={this.handleChatClick} />} />
						<Route path='/messages' element={<PageChat chat_id={this.state.chat_id} />} />
						<Route path='/profile' element={<PageProfile />} />
					</Routes>
				</div>
			</Router>
		);
	}
}

export default App;