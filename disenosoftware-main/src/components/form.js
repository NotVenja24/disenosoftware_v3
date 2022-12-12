import React, { useState } from "react";
import DatePicker from 'react-date-picker';
import Button from 'react-bootstrap/Button';
import { gql, useMutation } from "@apollo/client";

const typeDefs = gql`

 type Reserva{
    id: ID!
    nombre: String!
    rut: String!
    tour: String!
    telefono: String!
    fecha: String!
 }
 input ReservaInput {
    id: ID!
    nombre: String!
    rut: String!
    tour: String!
    telefono: String!
    fecha: String!
 }

`
const ADD_RESERVA = gql`
    mutation AddReserva{
        addReserva(input:{ReservaInput}){
            id
            nombre
            rut 
            tour
            telefono
            fecha
        }
    }
`

function Formulario() {
    const options = [
        {
            label: "Full Day",
            value: "full-day",
        },
        {
            label: "Cueva del Milodón",
            value: "milodon",
        },
        {
            label: "Base Torres",
            value: "basetorres",
        },
    ];
    const [value, onChange] = useState(new Date());
    const [valor, setValue] = useState()

    const [addU, { data, loading, error }] = useMutation(ADD_RESERVA);
    const [formState, SetFormState] = React.useState({
        nombre: String,
        rut: String,
        tour: String,
        telefono: String,
        fecha: String

    });

    return (
        <div className="container-fluid" >
            <div className='row' style={{margin:"20px"}}>
                <center><h1>Reservar</h1></center>
            </div>
            <form class="row g-3" style={{display: "flex", flexDirection: "column", alignItems: "center",margin:'20px'}} onSubmit={e => {
                e.preventDefault();
                addU({
                    variables: {
                        nombre: formState.nombre,
                        rut: formState.rut,
                        tour: formState.tour,
                        telefono: formState.telefono,
                        fecha: formState.fecha
                    }
                })
            }

            }>
                <div class="col-6">
                    <label class="form-label">Nombre completo:</label>
                    <input value={formState.nombre} onChange={e =>
                            SetFormState({
                                ...formState, nombre: e.target.value
                            }
                            )
                        }  type="text" class="form-control" />
                </div>

                <div class="col-6">
                    <label class="form-label">Rut:</label>
                    <input value={formState.rut} onChange={e =>
                            SetFormState({
                                ...formState, rut: e.target.value
                            }
                            )
                        } type="text" class="form-control" placeholder="11111111-1"/>
                </div>

                <div class="col-6">
                    <label class="form-label">Tour:</label>
                    <input value={formState.tour} onChange={e =>
                            SetFormState({
                                ...formState, tour: e.target.value
                            }
                            )
                        } type="text" class="form-control"/>
                
                </div>


                <div class="col-6">
                    <label class="form-label">Teléfono:</label>
                    <input value={formState.telefono} onChange={e =>
                            SetFormState({
                                ...formState, telefono: e.target.value
                            }
                            )
                        } type="text" class="form-control" placeholder="+56912345678"/>
                </div>

                <div class="col-6">
                    <label class="form-label">Fecha:</label>
                    <input value={formState.fecha} onChange={e =>
                            SetFormState({
                                ...formState, fecha: e.target.value
                            }
                            )
                        } type="date" class="form-control"  />
                </div>
                <div class="col-12">
                    <center><Button variant='outline-success' bg='dark' >Reservar</Button></center>
                </div>        
            </form>

        </div>
        
        
    
    );
}

export default Formulario;
