import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import "./navbar.css"


function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-mynav">
      <Container>
        <Navbar.Brand href="#home">Happy Shoppy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-autu">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#men">Men</Nav.Link>
            <Nav.Link href="#women">Women</Nav.Link>
            <Nav.Link href="#kids">Kids</Nav.Link>
            
             </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;