import React from 'react';
import './Resultado.css';
import PropTypes from 'prop-types';

export default function Resultado({presupuesto}) {

 
    return (
        <div>
        
            {(presupuesto === 0) ? null 
        
            : 
            
            (

            <div className="resultado-container">
                El presupuesto final es de {presupuesto} €/mes
            </div>
            
            )
        }
        </div>   
    )
}


Resultado.propTypes = {
    presupuesto: PropTypes.object.isRequired
}