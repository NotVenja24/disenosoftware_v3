import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/home"style={{fontSize:'2vw'}}>Uruchkech</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home" style={{fontSize:'1vw'}}>Home</Nav.Link>
            <Nav.Link href="/about"style={{fontSize:'1vw'}}>Nosotros</Nav.Link>
            <Nav.Link href="/lugares"style={{fontSize:'1vw'}}>Lugares</Nav.Link>
            <Nav.Link href="/tipo_de_viajes"style={{fontSize:'1vw'}}>Tipos de Viaje</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href="/form">
              <Button variant='outline-success' bg='dark' style={{width:'vw',height:'vw',fontSize:'1.5vw'}}>Reservar</Button>
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
