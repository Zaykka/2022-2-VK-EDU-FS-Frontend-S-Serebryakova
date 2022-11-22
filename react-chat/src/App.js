import './App.css';
import React, { Component } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import PageProfile from './pages/PageProfile/PageProfile'
import PageChatList from './pages/PageChatList/PageChatList'
import PageChat from './pages/PageChat/PageChat'


class App extends Component {
	render() {
		return (
			<Router>
				<div>
					{/* <GoToChat/> */}
					{/* <PageProfile></PageProfile> */}
					<Routes>
						<Route path='/' element={<PageChatList />} />
						<Route path='/messages' element={<PageChat />} />
						<Route path='/profile' element={<PageProfile />} />
					</Routes>
				</div>
			</Router>
		);
	}
}

export default App;