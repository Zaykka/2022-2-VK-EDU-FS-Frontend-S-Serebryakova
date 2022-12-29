import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import classes from './PageMain.module.css'
import { useNavigate } from "react-router-dom";


export default function PageMain() {
    const [text, setText] = useState('');
    const [translations, setTranslations] = useState([]);

    let navigate = useNavigate();
    const routeChange = () => {
        navigate('/history');
    }

    function saveTranslationToLocalStorage(message) {
        let messages = localStorage.getItem('messages');
        if (messages === '' || messages === null) {
            localStorage.setItem('messages', JSON.stringify({ 'all': [] }));
        }
        messages = localStorage.getItem('messages');
        messages = JSON.parse(messages);
        messages.all.push(message);
        localStorage.setItem('messages', JSON.stringify(messages));
    }

    function handleChange(event) {
        setText(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (text === '') {
            return;
        }

        let translation = {
            'source_text': text,
            'translation': 'trans',
            'id': Date.now()
        };
        setTranslations([...translations, { ...translation, id: Date.now() }]);
        saveTranslationToLocalStorage(translation)
        setText('');
    }

    return (
        <div>
            <Header></Header>
            <div className={classes.translater}>
                <div className={classes.language_bar}>
                    <div className={classes.translater_header}>DETECTED LANGUAGE</div>
                    <button className={classes.arrow_down} type="">
                        <span class="material-icons">keyboard_arrow_down</span>
                    </button>
                    <button className={classes.sync_alt} type="">
                        <span class="material-icons">sync_alt</span>
                    </button>
                    <button className={classes.arrow_down} type="">
                        <span class="material-icons">keyboard_arrow_down</span>
                    </button>
                </div>
                <div className={classes.translation_box}>
                    <div className={classes.source}>
                        <input className={classes.form_input}
                            onSubmit={handleSubmit}
                            name="message-text"
                            // placeholder="Cообщение"
                            type="textarea"
                            value={text}
                            onChange={handleChange} />
                    </div>
                    <div className={classes.destination}>
                        <input className={classes.form_input}
                            onSubmit={handleSubmit}
                            name="message-text"
                            placeholder="Translation"
                            type="textarea"
                            value={text}
                            onChange={handleChange} />
                    </div>
                </div>

            </div>
        </div>
    )
}