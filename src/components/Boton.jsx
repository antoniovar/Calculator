import '../styles/Boton.css';

function Boton (props){
  const esOperador = (val) =>{
    if(val=='+' || val=='-' || val=='*' || val=='/' || val=='C' ){
      return true
    }
    else{
      return false
    }
  };
  return(
      <div 
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={() => props.manejarClick(props.children)}>
        {props.children}
      </div>
  );
}

export default Boton;