import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/home">Uruchkech</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home" >Home</Nav.Link>
            <Nav.Link href="/about">Nosotros</Nav.Link>
            <Nav.Link href="/lugares">Lugares</Nav.Link>
            <Nav.Link href="/tipo_de_viajes">Tipos de Viaje</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href="/form">
              <Button variant='outline-success' bg='dark' >Reservar</Button>
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
