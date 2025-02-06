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
           expand='md'
           className='navbar'
           >
            <Container className='navbar-container'>
                <Navbar.Brand style={{userSelect:"none",color:"#317e4a"}}>LeMat    </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='me-auto flex-row' navbarScroll>
                        <Nav.Link 
                            as={Link} 
                            to='/myTestSite/' 
                            className={props.currPage === 'Home' ? 'currPage' : ''} 
                            onClick={() => props.setCurrPage('Home')}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={Link} 
                            to='/myTestSite/Projects'
                            className={props.currPage === 'Projects' ? 'currPage' : ''}
                            onClick={() => props.setCurrPage('Projects')}
                        >
                            Project
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to='/myTestSite/Note'
                            className={props.currPage === 'Note' ? 'currPage' : ''}
                            onClick={() => props.setCurrPage('Note')}
                        >
                            Note
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
           </Navbar> 
    )
}