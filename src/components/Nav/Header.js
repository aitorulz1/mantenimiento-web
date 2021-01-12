import React from 'react';
import './Header.css';
import  Logo  from '../../assets/logo/llaves.png';
import PropTypes from 'prop-types';


export default function Header({titulo}) {
    return (
        <div className="header">
            <header>
                <div className="logo"><img src={Logo} /></div>
                <div className="title">{titulo}</div>
            </header>
        </div>
    )
}

Header.propTypes = {
   titulo: PropTypes.string.isRequired
}