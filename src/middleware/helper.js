export const obtenerDiferenciaPlan = (plan) => {
    
    let elige;

      if( plan === 'simple' ) {
        elige = 50;

    } if( plan === 'regular' ) {
        elige = 65;

    } if( plan === 'top' ) {
        elige = 80;
    
    }

    return elige;

}

export const obtenerDescuentoPeriocidad = (pago) => {
    
    let cuando;

      if( pago === 'mensual' ) {
        cuando = 1;

    } if( pago === 'trimestral' ) {
        cuando = 0.95;

    } if( pago === 'anual' ) {
        cuando = 0.90;
    
    }

    return cuando;

}

export const obtenerDescuentoDigital = (digital) => {
    
    let seosem;

      if( digital === 'basico' ) {
        seosem = 1;

    } if( digital === 'completo' ) {
        seosem = 1.5;
    
    }

    return seosem;

}