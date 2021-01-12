import React from 'react';
import './Modal.css';
import PropTypes from 'prop-types';

export default function Modal({guardarModal}) {

    const showAndCloseModal = () => {
        guardarModal(false)
    }

    return (
        <div className="modal-container">

            <div className="close" onClick={showAndCloseModal}></div>

                <div className="modalcontent">

                <div class="title">descripción</div>

                    <div className="modal-segment">

                        <label>Plan</label>

                        <div className="plan-content">
                            Puede ser Simple (50€), Regular (65€) o Top (80€).<br /><br />
                            <span className="important">Simple:</span> <span className="right">Gestión y copias de seguridad.</span><br />
                            <span className="important">Regular:</span> <span className="right">Actualización de plugins y versión de PHP.</span><br />
                            <span className="important">Top:</span> <span className="right">Simple + Regular + 2 horas mensuales</span>
                        </div>

                    </div>
                    
                    
                    <div className="modal-segment">

                        <label>Idiomas</label>

                        <div className="plan-content">
                            Cada Idioma extra duplica la cuota del Plan
                        </div>

                    </div>
                    
                    
                    <div className="modal-segment">

                        <label>Pago</label>

                        <div className="plan-content">
                            <span className="important">Mensual:</span> <span className="right">Sin Descuento</span><br />
                            <span className="important">Trimestral:</span> <span className="right">5% de Descuento</span><br />
                            <span className="important">Anual:</span> <span className="right">10% de Descuento</span>
                        </div>

                    </div>
                    
                    
                    <div className="modal-segment">

                        <label>Digital</label>

                        <div className="plan-content">
                            <span className="important">Basico:</span> <span className="right">Sin coste adicional. Sin SEO ni SEM</span><br />
                            <span className="important">Completol:</span> <span className="right">50% más. Llevamos el SEO y SEM.</span>
                        </div>

                    </div>
                
                </div>
        </div>
    )
}

Modal.apply.propTypes = {
    guardarModal: PropTypes.func.isRequired
}