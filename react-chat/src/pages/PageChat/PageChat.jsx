import React, { useState, useEffect } from 'react'
import ChatHeader from '../../components/ChatHeader/ChatHeader';
import MessageForm from '../../components/MessageForm/MessageForm';
import MessageList from '../../components/MessageList/MessageList';
import classes from './PageChat.module.css'
import { useNavigate } from "react-router-dom";
import Recorder from './Recorder';
import { getMessagesAction, sendMessageAction } from '../../actions';
import {connect} from 'react-redux'


function PageChat(props) {
    const [text, setText] = useState('');
    const [file, setFile] = useState([]);

    let [audio, setAudio, isRecording, startRecording, stopRecording] = Recorder();

    let navigate = useNavigate();
    const routeChange = () => {
        navigate('/');
    }

    useEffect(() => {
        props.getMessagesAction()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function handleChange(event) {
        setText(event.target.value);
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (text === '' && file.length === 0 && audio.length === 0) {
            return;
        }

        let img_src;
        if (file.length !== 0) {
            img_src = await getImgSrc();
        }
        let audio_src;
        if (audio) {
            audio_src = await getAudioSrc();
        }

        const message = {
            // 'message': text,
            // 'created_at': `${time.getHours()}:${time.getMinutes()}`,
            // 'id': Date.now()

            // for global chat
            text: (text + (img_src ? ('&&&' + img_src) : '')),
            author: `Sofia`,
            file: img_src,
            audio: audio_src,
        };
        props.sendMessageAction(message)
        props.getMessagesAction()
        setText('');
        setFile([]);
    }

    function handleFiles(event) {
        const file = event.target.files[0];

        const reader = new FileReader();
        reader.onload = () => {
            setFile([file, URL.createObjectURL(file)]);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    }

    async function sendFile(file) {
        const data = new FormData();
        data.append('image', file);

        const response = await fetch('https://tt-front.vercel.app/upload', {
            method: "POST",
            body: data,
        })
        return response.json();
    }

    async function sendAudio(audio) {
        const data = new FormData();
        data.append('audio', audio);

        const response = await fetch('https://tt-front.vercel.app/upload', {
            method: "POST",
            body: data,
        })

        return response.json();
    }

    async function getAudioSrc() {
        let audio_result = await sendAudio(audio).then(value => value["audioSrc"]);
        return audio_result
    }

    function discardAudio() {
        stopRecording();
        setAudio("");
    }

    async function getImgSrc() {
        let image_result = await sendFile(file[0]).then(value => value["imgSrc"]);
        return image_result
    }

    async function submitAudio() {
        let audio_src;
        if (audio) {
            audio_src = await getAudioSrc();
            console.log(audio_src)
        }
        const message = {
            text: (text + (audio_src ? ('^^^' + audio_src) : '')),
            author: "Sofia"
        }
        if (!audio) {
            return
        }
        props.sendMessageAction(message)
        props.getMessagesAction();
        setText('');
        setFile([]);
        stopRecording();
    }

    function geoFindMe() {
        function success(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            let message = {
                'text': `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`,
                'author': 'Sofia'
            }
            props.sendMessageAction(message)
            props.getMessagesAction();
        }

        function error() {
            alert('Unable to get your location');
        }

        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser');
        } else {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }
    console.log(props.messages)
    return (
        <div className={classes.pageChat}>
            <ChatHeader handleChatClick={routeChange}></ChatHeader>
            <MessageList
                messages={props.messages}
            ></MessageList>
            {file.length !== 0 && (
                <>
                    <button className={classes.discard_button} type="button" onClick={() => setFile([])}>
                        <span class="material-icons">close</span>
                    </button>
                    <img
                        className={classes.image_preview}
                        src={file[1]}
                        alt="image_preview"
                    ></img>
                </>
            )}
            {isRecording && (
                <>
                    <div className={classes.audio_buttons}>
                        <button className={classes.send_button} type="button" onClick={submitAudio}>
                            <span class="material-icons">arrow_circle_up</span>
                        </button>
                        <button className={classes.discard_audio_button} type="button" onClick={discardAudio}>
                            <span class="material-icons">close</span>
                        </button>
                    </div>
                </>
            )}
            <MessageForm
                onSubmit={handleSubmit}
                name="message-text"
                placeholder="C????????????????"
                type="textarea"
                value={text}
                onChange={handleChange}
                handleFiles={handleFiles}
                onChangeGeo={geoFindMe}
                onClickRecord={startRecording}
                recordingStatus={isRecording}
            >attachment</MessageForm>
        </div>
    )
}

const mapStateToProps = (state) => ({
    messages: state.messages.messages,
});

export default connect(mapStateToProps, { getMessagesAction, sendMessageAction })(PageChat)