import React, {useState} from 'react';
import Error from '../Error/Error';

export default function Formulario() {


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

        if( plan.trim() === '' || idiomas.trim() === '' || pago.trim() === '' || digital.trim() === '' ) {
            guardarError(true)
            console.log(error)
            return;
        }

        guardarError(false);



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
                placeholder='Ej: 2'
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


            <button type="button">Calcular</button>

        </form>
    )
}
