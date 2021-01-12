
import React, { useState, useEffect } from 'react';
import Header from './components/Nav/Header';
import Formulario from './components/Form/Formulario';
import Summary from './components/Input/Summary';
import Resultado from './components/Input/Resultado';

import Spinner from './components/Extras/Spinner';
import Button from './components/Button/Button';
import Refresh from './components/Button/Refresh';

import './App.css'

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

  const [ pressed, guardarPressed ] = useState(false);






 
  return (
    <div className="body">
    

    

          <Header 
            titulo="manetinimientoWeb"
          />

          <div className="wrapper">

          {!pressed ?
          
            <Button
                guardarPressed = {guardarPressed}
            />

          :

            <div className="form-wrapper">

              <Formulario 
                guardarFinal={guardarFinal}
                guardarCargando={guardarCargando}
              />

              { cargando ? <Spinner /> : null }


              { cargando ? null :
              
              <div>

              <Summary 
                data = { data }
              />

              <Resultado
                presupuesto = { presupuesto }
              />

              <Refresh 
                presupuesto = { presupuesto }
              />

              </div>

              }

            </div>

          }




      </div>
    
    </div>
  );
}

export default App;
