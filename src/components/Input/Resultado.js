import React from 'react';
import './Resultado.css';

export default function Resultado({presupuesto}) {

 
    return (
        <div className="resultado-container">
            {(presupuesto === 0) ? 'Completa los datos' : `${presupuesto} €`}
        </div>
   
    )
}
