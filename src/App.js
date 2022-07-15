import './App.css';
import logo from './images/freecodecamp-logo.png'
import Boton from './components/Boton.jsx'
import Clear from './components/Clear.jsx'
import Screen from './components/Screen.jsx'
import { useState } from 'react';
import {evaluate} from 'mathjs';

function App() {
  const [state, setState] = useState('')
  const pulsarBoton = (val) => {
    setState(state + val);
  };
  const resultado = () => {
    if (state) { //Ya que en js las cadenas de caracteres vacías son false
      setState(evaluate(state));
    }
    else{
      alert('Ningún valor añadido');
    } 
  };
  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
          <img className='freecodecamp-logo' alt='logo' src={logo}/>
        </div>
      <div className='main-container'>
        <Screen input={state} />
        <div className='fila'>
          <Boton manejarClick={pulsarBoton}>1</Boton>
          <Boton manejarClick={pulsarBoton}>2</Boton>
          <Boton manejarClick={pulsarBoton}>3</Boton>
          <Boton manejarClick={pulsarBoton}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={pulsarBoton}>4</Boton>
          <Boton manejarClick={pulsarBoton}>5</Boton>
          <Boton manejarClick={pulsarBoton}>6</Boton>
          <Boton manejarClick={pulsarBoton}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={pulsarBoton}>7</Boton>
          <Boton manejarClick={pulsarBoton}>8</Boton>
          <Boton manejarClick={pulsarBoton}>9</Boton>
          <Boton manejarClick={pulsarBoton}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={()=>setState('')}>C</Boton>
          <Boton manejarClick={pulsarBoton}>0</Boton>
          <Boton manejarClick={pulsarBoton}>.</Boton>
          <Boton manejarClick={pulsarBoton}>/</Boton>
        </div>
        <div className='fila'>
          <Clear manejarClick={resultado}>Calculate Result</Clear>
        </div>                
      </div>
    </div> 
  );
}

export default App;
