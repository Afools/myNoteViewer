import React from "react";
import {Nav,Accordion,useAccordionButton } from "react-bootstrap"

function SideNavItem(props) {

    
    return (
        <Accordion.Item eventKey={props.eventKey}>
            <Nav.Link 
                className={props.currEventKey === props.eventKey ? 'side-nav-activate' : ''}
                onClick={()=>{
                props.setCurrEventKey(props.eventKey);
                props.setEventKey(props.eventKey);
                props.setActivate(1);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>{props.noteBook}</Nav.Link>
        </Accordion.Item>
    )
}

export default function SideNav(props){
    const [currEventKey, setCurrEventKey] = React.useState(0);
    const sideNavHtml=(
        <Accordion className="fixed-accordion">
            <Nav className="flex-column">
                {props.data.map((notebook, index) => (
                    <SideNavItem className="side-nav-item" currEventKey={currEventKey} setCurrEventKey={setCurrEventKey} key={index} {...notebook} setEventKey={props.setEventKey} setActivate={props.setActivate}/>
                ))}
            </Nav>
         </Accordion>
    )

    return sideNavHtml
}