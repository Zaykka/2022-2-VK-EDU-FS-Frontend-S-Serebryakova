import React, { useState, useEffect } from 'react'
import TranslationsList from '../../components/TranslationsList/TranslationsList';
import HistoryHeader from '../../components/HistoryHeader/HistoryHeader';


export default function PageHistory() {
    const [translations, setTranslations] = useState([]);

    function getTranslationsFromLocalStorage() {
        let translations = localStorage.getItem('translations');
        if (translations === '' || translations === null) {
            return
        }
        translations = JSON.parse(translations);
        return translations.all;
    }

    function loadTranslations() {
        const savedTranslations = getTranslationsFromLocalStorage() || []
        setTranslations(savedTranslations);
    }

    useEffect(loadTranslations, [])

    return (
        <>
            <HistoryHeader loadTranslations={loadTranslations}/>
            <TranslationsList
                translations={translations}
            ></TranslationsList>
        </>
    )
}