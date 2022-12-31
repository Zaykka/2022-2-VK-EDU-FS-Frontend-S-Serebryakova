const defaulState = {
    from_lang: "en",
    to_lang: "ru",
    translated_text: "",
  };

  export function reducer(state = defaulState, action) {
    if (action.type === "SET_TRANSLATED_TEXT" ) {
        return { ...state, translated_text: action.payload };
    } else {
        return state;
    }
}