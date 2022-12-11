import treking from './trekking.jpg';
import fds from './fds.jpg';
import lancha from './lancha.jpg';
import cabalgata from './cabalgata.jpg';
import pingüinos from './pingüinos.jpg';
import narvales from './narvales.jpg';

let tipo_viaje_imagenes = [
    {nombre :'Trekking',cuerpo:'Actividad de Trekking para diferentes lugares como la mística Cueva del Milodón, las Torres del Paine, entre otros lugares que no querrás perderte.', imagen: treking,path:'./treking.png',slide:'First slide'},
    {nombre :'Fin de Semana',cuerpo:'Ven a pasar un fin de semana en familia o pareja con unas vistas maravillosas del sur de Chile, podrás desconectarte del estrés mientras te bañas en las mejores termas volcánicas del mundo.​', imagen: fds,path:'./fds.jpg',slide:'Secon slide'},
    {nombre :'Viaje en lancha',cuerpo:'Viajes en lancha al Glaciar Grey, ven a recorrer este patrimonio nacional mientras queda hielo en el mundo, no te caigas al agua o morirás congelado, mientras los hermosos pingüinos juegan con tu cuerpo muerto.', imagen: lancha, path:'./lancha.jpeg',slide:'Third slide'},
    {nombre :'Cabalgata',cuerpo:'Ven a cabalgar por los alucinantes prados del sur de Chile y enamorate de nuestras mansas yeguas.', imagen: cabalgata,path:'./cabalgata.png',slide:'Fourth slide'},
    {nombre :'Alimenta a los Pingüinos',cuerpo:'Ven a ver y alimentar a los pingüinos barbijo de la zona, de esta forma ayudarás a evitar su extinción.​', imagen: pingüinos,path:'./pingüinos.jpg',slide:'Fifth slide'},
    {nombre :'Pelea de Espadas contra Narvales',cuerpo:'Saca al espadachín dentro de ti enfrentandote a narvales de verdad, estos animales se pueden ver muy tranquilos nadando, pero ¿Te atreverías a pelear contra uno de ellos?', imagen: narvales, path:'./narvales.jpeg',slide:'Sixth slide'}
]

export default tipo_viaje_imagenes;