import React from 'react';

import Tarjeta from './card_button';
import UncontrolledExample from '../components/publicidad';

import imagenes from './mocking/imagenes';


class Home extends React.Component {
  render(){
    return (
        <div className='container-fluid'>
          <div className='row' style={{padding:'10px', margin:'10px'}}>
            {
              imagenes.map(obj=>{
                return(
                  <div className='col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4'>
                    <center><Tarjeta Name={obj.nombre} Corp={obj.cuerpo} Imagen={obj.imagen}></Tarjeta></center>
                  </div>
                  );
                })
              }
          </div>
              
          <div className='row justify-content-center'style={{margin:'50px'}}>
            <div className='col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 align-self-center' >
              <UncontrolledExample></UncontrolledExample>
            </div>
          </div>

          
        </div>

        
        
      );
  }
}

export default Home;