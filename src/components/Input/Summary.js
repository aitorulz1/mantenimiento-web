import React from 'react';
import { primeraMayuscula } from '../../middleware/helper'

export default function Summary({data}) {

    const { plan, idiomas, pago, digital } = data;

    if(plan === '' || idiomas === '' || pago === '' || digital === '')  return null;
    

    return (
        <div>
            plan: { primeraMayuscula(plan) }
            idiomas: { idiomas }
            pago: { primeraMayuscula(pago) }
            digital: { primeraMayuscula(digital) }
        </div>
    )
}
