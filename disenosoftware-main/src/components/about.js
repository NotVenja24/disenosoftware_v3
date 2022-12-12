import React from "react";
import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';
import equipo from './mocking/equipo';
import Perfiles from './card';

function Nosotros() {
  
  return(
    <div className="container p-5 my-5 border">
      <div className="row">
        <div className='col align-self-center'>
          <center><h1 >Nosotros</h1></center>
          <p align='center' >Nos dedicamos a entregar crear recurdos. Nuestra misión es que cada persona que viaja con nuestros servicios, cree recuerdos de los lugares que visitó, generando experiencias y momentos que los acompañarán toda su vida.</p>
          <center>
            <img
                className="img-thumbnail rounded"
                src="https://res.cloudinary.com/dmdluivvr/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1670802804/Magallanes_mwdxa2.jpg"
                 />
          </center>
        </div>
        </div>

      <div className="row" style={{margin:'10px' }}>
          <center><h2 >Equipo</h2></center>
        </div>

        <div className="row">
            <div className='col-12 col-sm-8 col-md-6 col-lg-4 col-xl-4'>
              <center /><Perfiles Name="Agustín Soto" Corp="Guía" Imagen="https://res.cloudinary.com/dmdluivvr/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1670808085/Agustin_Soto_ldalmz.jpg"></Perfiles>
            </div>
            <div className='col-12 col-sm-8 col-md-6 col-lg-4 col-xl-4'>
              <center /><Perfiles Name="Hans Bartner" Corp="Gerente" Imagen="https://res.cloudinary.com/dmdluivvr/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1670808070/Hans_Bartnert_mryknm.jpg"></Perfiles>
            </div>
            <div className='col-12 col-sm-8 col-md-6 col-lg-4 col-xl-4'>
              <center /><Perfiles Name="Jose M. Rojas" Corp="Administrador" Imagen="https://res.cloudinary.com/dmdluivvr/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1670808058/Jose_Rojas_ivrkhk.jpg"></Perfiles>
            </div>
            <div className='col-12 col-sm-8 col-md-6 col-lg-4 col-xl-4'>
              <center /><Perfiles Name="Benjamín Rodríguez" Corp="Chofer" Imagen="https://res.cloudinary.com/dmdluivvr/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1670808080/Benjamin_Rodriguez_rqlhbl.jpg"></Perfiles>
            </div>
        </div>
          
    </div>  
  );
}

export default Nosotros;
