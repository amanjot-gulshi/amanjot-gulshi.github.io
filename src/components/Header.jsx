import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Main from "./pages/Main";
import Project from "./pages/Project";
import {Routes, Route } from "react-router-dom";

function Header() {

  return (
    <div>
      <header className="header">
        <Navbar fixed='top' bg="dark" variant="dark">
          <Container>
            <Nav className="m-auto">
              <Nav.Link href="/#intro">Home</Nav.Link>
              <Nav.Link href="/#projects">Projects</Nav.Link>
              <Nav.Link href="/#about">About</Nav.Link>
              <Nav.Link href="/#resume">Resume</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/projects/:id" element={<Project />} />
      </Routes>
    </div>
  );
}

export default Header;