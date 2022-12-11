import React from 'react';
import Tarjeta from './card_button';
import tipo_viaje_imagenes from './mocking/tipo_viaje_imagenes';


function tipo_viaje() {

    return (
        <div className='container-fluid'>
          <div className="container p-5 my-5 border">
            <div className='row'>
              <br></br>
              {
                tipo_viaje_imagenes.map(obj=>{
                  return(
                    <div className='col-4'>
                      <center><Tarjeta Name={obj.nombre} Corp={obj.cuerpo} Imagen={obj.imagen}></Tarjeta></center>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      );
}

export default tipo_viaje;