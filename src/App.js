import './App.css';
import Testimonio from './components/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      <Testimonio 
        name='Brayan Perutty'
        country='Colombia'
        imagen='yo.jpg'
        job='Estudiante de ingeniería de sistemas'
        company='UFPS'
        testimonio='Gracias a React he podido crecer profesionalmente. Las oportunidades laborales han aumentado significativamente. Animo a los nuevos estudiantes a que exploren
                    el mundo que React nos ofrece.' />
      <Testimonio 
        name='Thanos Alfonso'
        country='Planeta Thanos'
        imagen='thanos.png'
        job='Villano de todas las personas'
        company='el mundo'
        testimonio='Yo soy inevitable. Todos aquellos que han querido enfrentarme han fracasado en el intento. Con el poder de las gemas dominaré el mundo.' />
       <Testimonio 
        name='Sr. Stark'
        country='USA'
        imagen='stark.jpg'
        job='Iron Man'
        company='el mundo'
        testimonio='La verdad es que soy el mejor de los avengers. Puedo salvar al mundo sin necesidad de los demás por la alta tecnología que poseo. También soy multimillonario.' />
      </div>
    </div>
  );
}

export default App;
