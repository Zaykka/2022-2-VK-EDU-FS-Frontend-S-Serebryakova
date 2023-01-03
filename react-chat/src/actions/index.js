import { GET_MESSAGES_FAILURE, GET_MESSAGES_SUCCESS, SEND_MESSAGE } from "../constants/ActionTypes";

const getMessagesSuccess = (messages) => ({
    type: GET_MESSAGES_SUCCESS,
    payload: messages,
})

const getMessagesFailure = (messages) => ({
    type: GET_MESSAGES_FAILURE,
    payload: messages,
})

const sendMessage = (message) => ({
    type: SEND_MESSAGE,
    payload: message,
})

export const getMessagesAction = () => {
    return (dispatch, getState) => {
        console.log(`state: ${getState()}`);
        fetch('https://tt-front.vercel.app/messages')
            .then(res => res.json())
            .then(data => dispatch(getMessagesSuccess(data.reverse())))
            .catch(err => dispatch(getMessagesFailure(err.message)))
    }
}

export const sendMessageAction = (message) => {
    return (dispatch, getState) => {
        console.log(`state: ${getState()}`);
        fetch('https://tt-front.vercel.app/message', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(message),
        });
        dispatch(sendMessage(message));
    }
}