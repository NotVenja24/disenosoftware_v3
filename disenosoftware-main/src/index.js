import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Route, Routes } from "react-router-dom"



// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8090/graphql',
  cache: new InMemoryCache(),
});

client.query({
  query: gql`
    query getReservas {
      getReservas {
        id
        fecha
        nombre_viaje 
      }
    }
  `
}).then((result) => console.log(result));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <ApolloProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>,
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
