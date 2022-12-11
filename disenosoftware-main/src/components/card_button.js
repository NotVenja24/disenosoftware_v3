import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Tarjeta extends React.Component {
  render(){
    return (
      <Card >
        <Card.Img variant="top" src={this.props.Imagen}/>
        <Card.Body>
          <Card.Title style={{textAlign:'center'}}>{this.props.Name}</Card.Title>
          <Card.Text style={{textAlign:'justify'}}>
            {this.props.Corp}
          </Card.Text>
          <center><Button variant="outline-success" href='/form' style={{width:'vw',height:'vw'}}>Reservar</Button></center>
        </Card.Body>
      </Card>
      );
  }
}

export default Tarjeta;