export function save_translate(response, external_this) {
    let trans = response[0].translations[0].text;

    const text = {
        'source_text': external_this.state.text,
        'translation': trans,
        'id': Date.now()
    };

    external_this.props.setTraslatedText(trans);

    let translations = localStorage.getItem('translations');
    if (translations === '' || translations === null) {
        localStorage.setItem('translations', JSON.stringify({ 'all': [] }));
    }
    translations = localStorage.getItem('translations');

    translations = JSON.parse(translations);
    translations.all.push(text);
    localStorage.setItem('translations', JSON.stringify(translations));
}

export function translate(external_this) {
    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key": "df5ffa97f3mshfa5277882376ad1p1db7b7jsnb69ba524116a",
            "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
        },
        body: JSON.stringify([{ Text: external_this.state.text }]),
    };

    fetch(
        `https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=${external_this.props.to_lang}&api-version=3.0&profanityAction=NoAction&textType=plain`,
        options
    )
        .then((response) => response.json())
        .then((response) => save_translate(response, external_this));
}

export function mapState(state) {
    return {
        to_lang: state.to_lang,
        translated_text: state.translated_text,
    };
}

export function mapDispatch(dispatch) {
    return {
        setTraslatedText(text) {
            dispatch({ type: "SET_TRANSLATED_TEXT", payload: text });
        },
    };
}