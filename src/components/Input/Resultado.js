import React from 'react';
import './Resultado.css';

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
