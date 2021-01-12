import React, {useState} from 'react';
import Error from '../Error/Error';
import { obtenerDiferenciaPlan, obtenerDescuentoPeriocidad, obtenerDescuentoDigital  } from '../../middleware/helper'

import './Formulario.css';
import Modal from '../Modal/Modal'

export default function Formulario({guardarFinal, guardarCargando}) {


    const [ data, guardarData ] = useState({
        plan: '',
        idiomas: '',
        pago: '',
        digital: '',
    })

    const [ error, guardarError ] = useState(false);


    const { plan, idiomas, pago, digital } = data;

    const [ modal, guardarModal ] = useState(false);

    const showAndCloseModal = () => {
        guardarModal(true)
    }

    const onChange = e => {
        guardarData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        if( plan.trim() === '' || idiomas.trim() === '' || pago.trim() === '' || digital.trim() === '' || idiomas < 1){
            guardarError(true)
            return;
        }

        guardarError(false);


        // Precio base inicial
        const inicial = obtenerDiferenciaPlan(plan);
        
        // Idiomas
        const lenguages = inicial*parseInt(idiomas);
       
        // Pago
        const periocidad = lenguages*obtenerDescuentoPeriocidad(pago);
        
        // Digital
        const presupuesto = periocidad*obtenerDescuentoDigital(digital);



        // Reseteamos Form
        guardarData ({
                plan: '',
                idiomas: '',
                pago: '',
                digital: '',
        })

        guardarCargando(true);
        

        setTimeout(() => {

            guardarCargando(false);
      
            guardarFinal({
                presupuesto,
                data
            })
            
          }, 3000)


    }


    return (
        <form
            onSubmit = {onSubmit}
        >

        { error ? <Error message='Todos los campos son obligatorios' /> : null }


        <div className="instrucciones" onClick={showAndCloseModal} alt="descripción"></div>

        {modal ? <Modal  guardarModal={guardarModal}  /> : null }


        <div className="plan">

            <label>Plan</label>

            <select
                name="plan"
                value={plan}
                onChange={onChange}
            >
                <option value="">-- Choose --</option>
                <option value="simple">simple</option>
                <option value="regular">regular</option>
                <option value="top">top</option>

            </select>

        </div>
            
        <div className="plan">

            <label>Idiomas</label>

            <input
                type='number'
                name='idiomas'
                placeholder='Min: 1'
                value={idiomas}
                onChange={onChange}
            />
            
        </div>

        <div className="plan">
            
            <label>Pago</label>

            <select
                name="pago"
                value={pago}
                onChange={onChange}
            >

                <option value="">-- Choose --</option>
                <option value="mensual">mensual</option>
                <option value="trimestral">trimestral</option>
                <option value="anual">anual</option>
            
            </select>

        </div>

        <div className="digital">
            
            <label>Digital</label>

            <div className="digital-input-container">
            
                <div className="digital-input-single">
            
                    <input
                        type="radio"
                        name="digital"
                        value='basico'
                        checked={digital === 'basico'}
                        onChange={onChange}
                    />  Básico

                </div>

                <div className="digital-input-single">
                
                    <input
                        type="radio"
                        name="digital"
                        value='completo'
                        checked={digital === 'completo'}
                        onChange={onChange}
                    />  Completo

                </div>

            </div>

        </div>

            <button className="calcular" type="submit">Calcular</button>

        </form>
    )
}
