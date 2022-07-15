import '../styles/Clear.css'

function Clear(props){
  return(
    <div className='boton-clear' onClick={props.manejarClick}>
      {props.children}
    </div>
  );
}

export default Clear;