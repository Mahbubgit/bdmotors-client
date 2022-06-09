import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Container, Nav} from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar 
        collapseOnSelect 
        expand="lg" 
        bg="dark" 
        variant="dark" 
        sticky='top'
        border-bottom='white'
        >
            <Container>
                <Navbar.Brand href="/home">BDMOTORS</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">HOME</Nav.Link>
                        <Nav.Link href="/gallery">GALLERY</Nav.Link>
                        <Nav.Link href="/blogs">BLOGS</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/login">LOGIN</Nav.Link>
                        <Nav.Link href="/signup">SIGN UP</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;