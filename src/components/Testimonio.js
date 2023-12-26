import React from 'react';
import '../stylesheets/Testimonio.css';

function Testimonio( props ){
  return(
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio' 
        src={require(`../img/${props.imagen}`)}
        alt='Foto de Brayan' />
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>
            <strong>{props.name}</strong> en <strong>{props.country}</strong>
          </p>
          <p className='cargo-testimonio'>
            {props.job} en <strong>{props.company}</strong>
          </p>
          <p className='texto-testimonio'>
            "{props.testimonio}"
          </p>
        </div>
    </div>
  );
}

export default Testimonio;