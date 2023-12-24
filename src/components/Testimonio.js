import React from 'react';
import '../stylesheets/Testimonio.css';

function Testimonio(){
  return(
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio' 
        src={require('../img/yo.jpg')}
        alt='Foto de Brayan'/>
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>Brayan Perutty en Colombia</p>
          <p className='cargo-testimonio'>Estudiante ingeniería de sistemas UFPS</p>
          <p className='texto-testimonio'>"Aprender React ha sido la mejor decisión que he podido tomar. Las oportunidades laborales han aumentado considerablemente. Gracias a React he podido escalar profesionalmente"</p>
        </div>
    </div>
  );
}

export default Testimonio;