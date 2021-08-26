import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Pdf from '../resume.pdf';

function Navigation() {
  return (
    <div className="nav">
        <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto nav_item">
            <Nav.Link href="#projects" className="nav_item">Projects</Nav.Link>
            <Nav.Link href={Pdf} target = "_blank" type="application/pdf" className="nav_item"><span className="nav_item">Resume</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
    </div>
  );
}

export default Navigation;
