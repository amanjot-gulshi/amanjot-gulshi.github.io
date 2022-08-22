import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {

  return (
    
    <div>
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">AmanjotGulshi</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#resume">Resume</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </div>

  );
}

export default Header;