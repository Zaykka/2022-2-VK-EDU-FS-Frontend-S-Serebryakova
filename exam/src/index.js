import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from "react-redux";
import { createStore } from "redux";

const defaulState = {
    from_lang: "en",
    to_lang: "ru",
    translated_text: "",
  };

function reducer(state = defaulState, action) {
    if (action.type === "SET_TRANSLATED_TEXT" ) {
        return { ...state, translated_text: action.payload };
    } else {
        return state;
    }
}

let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
