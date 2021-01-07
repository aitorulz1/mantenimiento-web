
import React, { useState, useEffect } from 'react';
import Header from './components/Nav/Header';
import Formulario from './components/Form/Formulario';
import Summary from './components/Input/Summary';
import Resultado from './components/Input/Resultado';

import Spinner from './components/Extras/Spinner';

function App() {


  const [ final, guardarFinal ] = useState({
    presupuesto: 0,
    data: {
      plan: '',
      idiomas: '',
      pago: '',
      digital: '',
    }
  })


  const { data, presupuesto } = final;

  const [ cargando, guardarCargando ] = useState(false);





 



  return (
    <div>
      <Header 
        titulo="{wewebs}"
      />

      <Formulario 
        guardarFinal={guardarFinal}
        guardarCargando={guardarCargando}
      />

      {cargando ? <Spinner /> : null }

      <Summary 
        data = {data}
      />

      <Resultado
        presupuesto = { presupuesto }
      />



    </div>
  );
}

export default App;
