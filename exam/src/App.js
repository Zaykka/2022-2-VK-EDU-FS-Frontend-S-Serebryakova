import './App.css';
import React, { Component } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import PageMain from './pages/PageMain/PageMain';


class App extends Component {
	constructor(props) {
		super(props);
		this.handleChatClick = this.handleChatClick.bind(this);
		this.state = {
			chat_id: 0
		}
	}

	handleChatClick(chat_id) {
		this.setState({ chat_id: chat_id })
	}

	render() {
		return (
			<Router>
				<div>
					<Routes>
						<Route path='/' element={<PageMain />} />
						{/* <Route path='/messages' element={<PageChat chat_id={this.state.chat_id} />} /> */}
						{/* <Route path='/profile' element={<PageProfile />} /> */}
					</Routes>
				</div>
			</Router>
		);
	}
}

export default App;