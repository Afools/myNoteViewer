import React,{ useState} from 'react'
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import {Link} from "react-router-dom"
export default function NavBar(props){
    return(
           <Navbar
           fixed='top'
           expand='md'
           className='navbar'
           >
            <Container fluid>
                <Navbar.Brand >LJ</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='me-auto flex-row' navbarScroll>
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <NavDropdown title='TECH' id="responsive-navbar-dropdown">
                            <NavDropdown.Item as={Link} to='/AI'>AI</NavDropdown.Item>
                            <NavDropdown.Item to='/Front'>Front</NavDropdown.Item>
                            <NavDropdown.Item to='/Back'>Back</NavDropdown.Item>
                            <NavDropdown.Item to='/Project'>Project</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title='Entertainment' id="responsive-navbar-dropdown">
                            <NavDropdown.Item to='/Anime'>Anime</NavDropdown.Item>
                            <NavDropdown.Item to='/Comic_and_Novel'>Novel</NavDropdown.Item>
                            <NavDropdown.Item to='/Game'>Game</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
           </Navbar> 
    )
}