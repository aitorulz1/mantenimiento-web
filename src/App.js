
import React, { useState, useEffect } from 'react';
import Header from './components/Nav/Header';
import Formulario from './components/Form/Formulario';
import Summary from './components/Input/Summary';
import Resultado from './components/Input/Resultado';

import Spinner from './components/Extras/Spinner';

function App() {


  const [final, guardarFinal] = useState({
    presupuesto: 0,
    data: {
      plan: '',
      idiomas: '',
      pago: '',
      digital: '',
    }
  })

  const [ cargando, guardarCargando ] = useState(false);

  const { data, presupuesto } = final;



 



  return (
    <div>
      <Header 
        titulo="{wewebs}"
      />

      <Formulario 
        guardarFinal={guardarFinal}
        guardarCargando={guardarCargando}
      />

      <Summary 
        data = {data}
      />

      { cargando ? <Spinner /> : null}

      { !cargando ? 
      
      <Resultado
        presupuesto = {presupuesto}
      />

      : null
      
      }

    </div>
  );
}

export default App;
