import './App.css';
import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom'
import PageMain from './pages/PageMain/PageMain';
import PageHistory from './pages/PageHistory/PageHistory';


class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path='/' element={<PageMain />} />
          <Route path='/history' element={<PageHistory />} />
        </Routes>
      </>
    );
  }
}

export default App;