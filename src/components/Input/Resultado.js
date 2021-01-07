import React from 'react'

export default function Resultado({presupuesto}) {

 
    return (
        <div>
            {(presupuesto === 0) ? 'No hay datos' : presupuesto}
        </div>
   
    )
}
