import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Tarjeta extends React.Component {
  render(){
    return (
      <Card >
        <Card.Img variant="top" src={this.props.Imagen}/>
        <Card.Body>
          <Card.Title style={{textAlign:'center',fontSize:'1.5vw'}}>{this.props.Name}</Card.Title>
          <Card.Text style={{textAlign:'justify',fontSize:'1vw'}}>
            {this.props.Corp}
          </Card.Text>
          <center><Button variant="outline-success" href='/form' style={{width:'vw',height:'vw',fontSize:'0.9vw'}}>Reservar</Button></center>
        </Card.Body>
      </Card>
      );
  }
}

export default Tarjeta;