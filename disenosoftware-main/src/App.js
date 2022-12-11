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

// Routes es igual a Switch component en los demás tutoriales

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
              
          </Router>
          
      </>

    );
  }
}

export default App;
