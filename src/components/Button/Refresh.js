import React from 'react';
import './Refresh.css';
import PropTypes from 'prop-types';

export default function Refresh({presupuesto}) {

    function refreshPage() {
        window.location.reload(false);
      }

    return (
        <div>

            {(presupuesto === 0) ? null 
            
            : 
                
            (

            <button className="refresh" onClick={refreshPage}>Comenzar de Nuevo!</button> 
            
            )}

        </div>
    )
}

Refresh.propTypes = {
    presupuesto: PropTypes.object.isRequired
}