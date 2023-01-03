import { GET_MESSAGES_FAILURE, GET_MESSAGES_SUCCESS, SEND_MESSAGE } from "../constants/ActionTypes";

const initialState = {
    messages: [],
    error: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_MESSAGES_SUCCESS:
            return {
                // messages: [action.payload],
                messages: [...action.payload],
                error: '',
            }
        case GET_MESSAGES_FAILURE:
            return {
                messages: [...state.messages],
                error: action.payload,
            }
        case SEND_MESSAGE:
            return {
                // messages: [action.payload, ...state.messages],
                messages: [...state.messages],
                error: ''
            }
        default:
            return state
    }
}