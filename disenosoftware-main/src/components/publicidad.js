import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imagenes from './mocking/imagenes';

class UncontrolledExample extends React.Component {
  render(){
    return (
       <Carousel>
          {
            imagenes.map(obj=>{
              return(
                <Carousel.Item>
                  <div className='col'>
                    <img className="d-block w-100" 
                      src={obj.imagen}
                      alt={obj.slide}
                    />
                  </div>
                  <Carousel.Caption >
                    <center><h3 style={{color:'white',background:'green',fontSize:'2vw' }}>{obj.nombre}</h3></center>
                    <p style={{color:'white',background:'green',fontSize:'1.5vw'}}>{obj.cuerpo}</p>
                  </Carousel.Caption>
                </Carousel.Item>
                );
              })
          }
        </Carousel>
    );
  }
}

export default UncontrolledExample;