import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

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

Button.propTypes = {
    guardarPressed: PropTypes.func.isRequired
}