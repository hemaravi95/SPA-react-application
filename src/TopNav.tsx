import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function TopNav() {
    const navigate = useNavigate()

    const [currentPage, setCurrentPage] = useState('logo');

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link
                                onClick={() => {
                                    setCurrentPage('logo')
                                    navigate('/')
                                }}
                                active={currentPage === 'logo'}
                            >
                                Logo
                            </Nav.Link>
                            <Nav.Link
                                onClick={() => {
                                    setCurrentPage('home')
                                    navigate('/home')
                                }}
                                active={currentPage === 'home'}
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link href="#link">Services</Nav.Link>
                            <Nav.Link href="#gallery">Gallery</Nav.Link>
                            <Nav.Link href="#contactus">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>
    )
}

export default TopNav;