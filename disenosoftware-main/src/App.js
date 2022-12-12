import React from 'react';
import NavBar from './components/navbar';
import Home from './components/home';
import Footer from './components/footer';
import Formulario from "./components/form";


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tipo_viaje from './components/tipo_viaje';
import Lugar from './components/lugares';
import Nosotros from './components/about';
import ContactForm from './components/contact_form';
import { useQuery, gql } from '@apollo/client';

// Routes es igual a Switch component en los demás tutoriales
const GET_RESERVAS = gql`
  query getReservas{
    getReservas{
      id
      fecha
      nombre_viaje
    }
  }
`;


function MostrarReservas() {
  const { loading, error, data } = useQuery(GET_RESERVAS);
  if (loading) return (<p>Loading...</p>);
  if (error) return (<p>Error</p>)
  return data.getReservas.map(({ id, fecha, nombre_viaje }) =>
    <li key={id}>{fecha}</li>
  )
}
class App extends React.Component {
    render(){
      return (
        <>
          <Router>
              <NavBar Name='Uruchkech' First='Home' Second='Lugares' Third='Nosotros' Fourth='Tipo de Viaje' Fifth ='Reservar'/>
              <div className='content'>               
                  <Switch>
                    <Route exact path="/home">
                      <Home />
                    </Route>

                    <Route path = "/Lugares">
                      <Lugar />
                    </Route>

                    <Route path="/about">
                      <Nosotros />
                    </Route>

                    <Route path='/form'>
                      <Formulario />
                    </Route>

                    <Route path = "/tipo_de_viajes">
                      <Tipo_viaje />
                    </Route>

                  </Switch>
              </div>
              <div className='container-fluid'>
                <ContactForm></ContactForm>
              </div>
              <Footer />
            
              <div>
                <MostrarReservas></MostrarReservas>
              </div>
          </Router>
          
      </>

    );
  }
}

export default App;
