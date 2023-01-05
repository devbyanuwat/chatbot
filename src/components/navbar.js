import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <div>
            <Navbar className="navbar-color" variant="dark" sticky="top" expand="md">
                <Container>
                    <Navbar.Brand href="#home">
                        Take ama ChatBot
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsice"></Navbar.Toggle>
                    <Navbar.Collapse className="me-auto">
                        <Nav className="me-auto ">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/training">Training</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
}
