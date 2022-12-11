import React, { useState } from "react";
import DatePicker from 'react-date-picker'
import Button from 'react-bootstrap/Button';


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
    return (
        <div className="container-fluid" >
            <div className='row' style={{margin:"20px"}}>
                <center><h1>Reservar</h1></center>
            </div>
            <form class="row g-3" style={{display: "flex", flexDirection: "column", alignItems: "center",margin:'20px'}}>
                <div class="col-6">
                    <label class="form-label">Nombre completo:</label>
                    <input type="text" class="form-control"  />
                </div>

                <div class="col-6">
                    <label class="form-label">Rut:</label>
                    <input type="text" class="form-control" placeholder="11111111-1" />
                </div>

                <div class="col-6">
                    <label class="form-label">Tour:</label>
                    <select class="form-select" >
                            {options.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                </div>

                <div class="col-6">
                    <label class="form-label">Email:</label>
                    <input type="email" class="form-control" />
                </div>

                <div class="col-6">
                    <label class="form-label">Teléfono:</label>
                    <input type="text" class="form-control" placeholder="+56912345678"/>
                </div>

                <div class="col-6">
                    <label class="form-label">Fecha:</label>
                    <input type="date" class="form-control" setValue={value}onChange={{onChange}} />
                </div>
                <div class="col-12">
                    <center><Button variant='outline-success' bg='dark' >Reservar</Button></center>
                </div>        
            </form>

        </div>
        
        
    
    );
}

export default Formulario;
