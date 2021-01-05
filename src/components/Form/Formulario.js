import React, {useState} from 'react';
import Error from '../Error/Error';
import { obtenerDiferenciaPlan, obtenerDescuentoPeriocidad, obtenerDescuentoDigital  } from '../../middleware/helper'

export default function Formulario({guardarFinal, guardarCargando}) {


    const [ data, guardarData ] = useState({
        plan: '',
        idiomas: '',
        pago: '',
        digital: '',
    })

    const [ error, guardarError ] = useState(false);


    const { plan, idiomas, pago, digital } = data;

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
        const mktgDigital = periocidad*obtenerDescuentoDigital(digital);



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
                presupuesto: mktgDigital,
                data
            })
            
          }, 3000)


       

    }


    return (
        <form
            onSubmit = {onSubmit}
        >

            { error ? <Error message='Todos los campos son obligatorios' /> : null }

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
            
            
            <label>Idiomas</label>

            <input
                type='number'
                name='idiomas'
                placeholder='Min: 1'
                value={idiomas}
                onChange={onChange}
            />
            
            
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

            
            <label>Digital</label>
            
            <input
                type="radio"
                name="digital"
                value='basico'
                checked={digital === 'basico'}
                onChange={onChange}
            />Básico
            
            <input
                type="radio"
                name="digital"
                value='completo'
                checked={digital === 'completo'}
                onChange={onChange}
            />Completo


            <button type="submit">Calcular</button>

        </form>
    )
}
