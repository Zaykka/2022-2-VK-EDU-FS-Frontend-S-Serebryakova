import React from 'react'
import Translation from '../Translation/Translation'
import classes from './TranslationsList.module.css'


export default function TranslationsList(props) {
    return (
        <div className={classes.translations}>
            {props.translations.map(translation =>
                <Translation 
                    source={translation.source_text}
                    translation={translation.translation}
                    key={translation.id}
                />
            )}
        </div>
    )
}