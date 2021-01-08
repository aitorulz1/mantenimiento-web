import React from 'react';
import { primeraMayuscula } from '../../middleware/helper';

import './Summary.css';

export default function Summary({data}) {

    const { plan, idiomas, pago, digital } = data;

    if(plan === '' || idiomas === '' || pago === '' || digital === '')  return null;
    

    return (
        <div className="summary-container">
            <div className="summary-line"> <span className="summary">Plan: </span> <span className="summary-answer">{ primeraMayuscula(plan) } </span></div>
            <div className="summary-line"> <span className="summary">Idiomas: </span> <span className="summary-answer">{ idiomas } </span></div>
            <div className="summary-line"> <span className="summary">Pago: </span> <span className="summary-answer">{ primeraMayuscula(pago) } </span></div>
            <div className="summary-line"> <span className="summary">Digital: </span> <span className="summary-answer">{ primeraMayuscula(digital) } </span></div>
        </div>
    )
}
