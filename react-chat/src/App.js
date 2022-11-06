import './App.css';
import PageChatList from './pages/PageChatList/PageChatList';
import PageChat from './pages/PageChat/PageChat';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (  
    <div className="App">
      {/* <PageChatList></PageChatList> */}

      <Routes>
        <Route path="/" element={<PageChatList/>}/>
        <Route path="/chats" element={<PageChat/>}/>
      </Routes>
    </div>

  );
}

export default App;
