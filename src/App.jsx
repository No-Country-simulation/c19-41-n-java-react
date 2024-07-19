import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex(index === 0 ? 2 : index - 1);
  };

  const handleNext = () => {
    setIndex(index === 2 ? 0 : index + 1);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <Header />
        </div>
      </div>
      <div className="row contenedor-img">
        <div className="col">
          <div id="id_carrusel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#id_carrusel" data-bs-slide-to="0" className={index === 0 ? "active" : ""}></button>
              <button type="button" data-bs-target="#id_carrusel" data-bs-slide-to="1" className={index === 1 ? "active" : ""}></button>
              <button type="button" data-bs-target="#id_carrusel" data-bs-slide-to="2" className={index === 2 ? "active" : ""}></button>
            </div>
            <div className="carousel-inner">
              <div className={index === 0 ? "carousel-item active" : "carousel-item"}>
                <img src="../img/img_inicio.jpg" className="d-block w-100 img-fluid" alt="Imagen inicio" />
                <div className="carousel-caption">
                  <h3>¡BIENVENIDOS A PATA SOLIDARIA!</h3>
                  <p>La mejor solución para hacer feliz a tu mascota.</p>
                </div>
              </div>
              <div className={index === 1 ? "carousel-item active" : "carousel-item"}>
                <img src="../img/img_inicio2.jpg" className="d-block w-100 img-fluid" alt="Chicago" />
                <div className="carousel-caption">
                  <h3>SENTIMOS AMOR POR LO QUE HACEMOS</h3>
                  <p>Tratamos a tu mascota como si estaría con su dueño. </p>
                </div>
              </div>
              <div className={index === 2 ? "carousel-item active" : "carousel-item"}>
                <img src="../img/img_inicio3.jpg" className="d-block w-100 img-fluid" alt="New York" />
                <div className="carousel-caption">
                  <h3>PORQUE LOS AMAMOS SIEMPRE TRABAJAMOS CON:</h3>
                  <p>Cuidado permanente, seriedad, responsabilidad y trato afectuoso.</p>
                </div>
              </div>
              
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#id_carrusel" onClick={handlePrev}>
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#id_carrusel" onClick={handleNext}>
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col nosotros">
            <h2>CONOCENOS...</h2>
                <p> <span>PATA SOLIDARIA </span> es una aplicación web que vincula las necesidades de tus mascotas con la persona ideal para satisfacer la misma.</p>
                <p>Buscamos que cada cuidador trate a las mascotas con el mismo amor con que lo hace su dueño. Nos esforzamos para que cada mascota se sienta como en su casa.</p>
                <p>Creemos que el amor que las mascotas brindan es incondicional, sincero y sin medida, por lo cual consideramos que se merecen lo mismo.</p>
                <p>Los invitamos a descubrir este sitio dedicado pura y exclusivamente a ellas, nuestras fieles, demostrativas y amadas compañeras: <span>  Nuestras Mascotas.</span></p>
        </div>
      </div>

      <div className="row tarjetas">
        <div className="col-sm-6">          
          <div className="container mt-3">           
            <div className="card bg-secondary text-white" style={{ width: '400PX' }}>
              <img className="card-img-top" src="../img/cuidadoMascotasCasa.jpg" alt="Card image" style={{ width: '100%' }} />
              <div className="card-body d-flex flex-column align-items-center">
                <h4 className="card-title">Alojamiento para tu mascota</h4>
                <p className="card-text">Busca el cuidador perfecto en tu zona que cuide a tu mascota con el amor que lo haces vos. </p>
                <a href="#" className="btn btn-primary btn-custom">BUSCAR</a>
              </div>
            </div>  
          </div>
        </div>

        <div className="col-sm-6">          
          <div className="container mt-3">           
            <div className="card bg-secondary text-white" style={{ width: '400PX' }}>
              <img className="card-img-top" src="../img/guarderia2.jpg" alt="Card image" style={{ width: '100%' }} />
              <div className="card-body d-flex flex-column align-items-center">
                <h4 className="card-title">Guarderia para tus mascotas</h4>
                <p className="card-text">Encontra cuidadores muy dispuestos a brindar cada día lo mejor para tus mascotas. </p>
                <p className="card-text">Estadia de Lunes a Viernes de 9:00 a 18:00 hs. </p>
                <a href="#" className="btn btn-primary btn-custom">CONTRATAR</a>
              </div>
            </div>  
          </div>
        </div>

        <div className="col-sm-6">          
          <div className="container mt-3">           
            <div className="card bg-secondary text-white" style={{ width: '400PX' }}>
              <img className="card-img-top" src="../img/pasearPerros.jpg" alt="Card image" style={{ width: '100%' }} />
              <div className="card-body d-flex flex-column align-items-center">
                <h4 className="card-title">Paseos de mascotas</h4>
                <p className="card-text">Contrata el paseo ideal para tu mascota con cuidadores de absoluta confianza. </p>
                <a href="#" className="btn btn-primary btn-custom">CONTRATAR</a>
              </div>
            </div>  
          </div>
        </div>

     
        <div className="col-sm-6">          
          <div className="container mt-3">           
            <div className="card bg-secondary text-white" style={{ width: '400PX' }}>
              <img className="card-img-top" src="../img/traslado.jpg" alt="Card image" style={{ width: '100%' }} />
              <div className="card-body d-flex flex-column align-items-center">
                <h4 className="card-title">Guarderia para tus mascotas</h4>
                <p className="card-text">Encontra cuidadores muy dispuestos a brindar cada día lo mejor para tus mascotas. </p>
                <p className="card-text">Estadia de Lunes a Viernes de 9:00 a 18:00 hs. </p>
                <a href="#" className="btn btn-primary btn-custom">CONTRATAR</a>
              </div>
            </div>  
          </div>
        </div>
        
      </div>
      <div className="col">
          <Footer />
      </div>
    </div>
  );
}

export default App;
