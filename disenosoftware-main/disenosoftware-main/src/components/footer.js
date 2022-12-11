import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';

export default function Footer() {
    return (
        <CDBFooter className="container-fluid">
            <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
                <CDBBox display="flex" justifyContent="between" className="flex-wrap">
                    <CDBBox>
                        <p className="h5 mb-4" style={{FontWeight:'600',fontSize:'2.5vw'}}>Uruchkech</p>
                        <p className="my-3" style={{ fontSize:'1.5vw'}}>
                            Somos una empresa de turismo dedicada a entregarte una experiencia no un viaje
                        </p>
                    </CDBBox>
                    <CDBBox>
                        <p className="h5 mb-4" style={{ fontWeight: '600',fontSize:'2.5vw'}}>
                            Nosotros
                        </p>
                        <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0',fontSize:'1.5vw'}}>
                            <CDBFooterLink href="/home">Home</CDBFooterLink>
                            <CDBFooterLink href="/about">Nosotros</CDBFooterLink>
                        </CDBBox>
                    </CDBBox>
                    <CDBBox>
                        <p className="h5 mb-4" style={{ fontWeight: '600',fontSize:'2.5vw'}}>
                            Servicios
                        </p>
                        <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' ,fontSize:'1.5vw'}}>
                            <CDBFooterLink href="/lugares">Lugares</CDBFooterLink>
                            <CDBFooterLink href="/tipo_de_viajes">Tipos de Viaje</CDBFooterLink>                        </CDBBox>
                    </CDBBox>
                    
                    
                </CDBBox>
                <small className="text-center mt-5" styler={{fontSize:'1vw'}}>&copy; Uruchkech, 2022. All rights reserved.</small>
            </CDBBox>
        </CDBFooter>
    );
}