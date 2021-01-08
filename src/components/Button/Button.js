import React from 'react';
import './Button.css'

export default function Button({guardarPressed}) {

    const onClickPressed = () => {
        guardarPressed(true)
    }

    return (
        <div>
            <button className="begin-button" onClick={onClickPressed}>Comenzar</button>
        </div>
    )
}
