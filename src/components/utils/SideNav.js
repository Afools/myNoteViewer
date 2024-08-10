import React from "react";
import {Nav,Accordion,useAccordionButton } from "react-bootstrap"

function SideNavSubItem(props) {
    return (
        <Accordion.Collapse eventKey={props.eventKey}>
            <Nav.Link>{props.title}</Nav.Link>
        </Accordion.Collapse>
    );
}

function SideNavItem(props) {
    if (!props.subItems || props.subItems.length===0){
        return (
            <Accordion.Item eventKey={props.eventKey}>
                <Nav.Link flush>{props.title}</Nav.Link>
            </Accordion.Item>
        )
    }
    return (
        <Accordion.Item eventKey={props.eventKey}>
            <Accordion.Header>{props.title}</Accordion.Header>
            {props.subItems.map((subItem, index) => (
                <SideNavSubItem key={index} {...subItem} />
            ))}
        </Accordion.Item>
    );
}

export default function SideNav(props){
    const items = [
        {
            title: "Front",
            eventKey: "0",
            subItems: [
                { title: "React", eventKey: "0" },
                { title: "Bootstrap", eventKey: "0" }
            ]
        },
        {
            title: "Back End",
            eventKey: "1",
            subItems: [
                { title: "Spring", eventKey: "1" }
            ]
        },
        {
            title: "Other",
            eventKey: "2",
            subItems: []
        }
    ];    
    const sideNavHtml=(
        <Accordion>
            <Nav className="flex-column">
                {items.map((item, index) => (
                    <SideNavItem key={index} {...item} />
                ))}
            </Nav>
        </Accordion>
    )
    const compare=(
        <Accordion>
            <Nav className="flex-column" >
                <Accordion.Item  eventKey="0">
                    <Accordion.Header >Front</Accordion.Header>
                    <Accordion.Collapse eventKey="0">
                        <Nav.Link >React</Nav.Link>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="0">
                        <Nav.Link>Bootstrap</Nav.Link>
                    </Accordion.Collapse>
                </Accordion.Item>
                <Accordion.Item  eventKey="1">
                    <Accordion.Header>Back End</Accordion.Header>
                    <Accordion.Collapse eventKey="1">
                        <Nav.Link >Spring</Nav.Link>
                    </Accordion.Collapse>
                </Accordion.Item>
                <Accordion.Item  eventKey="2">
                    <Nav.Link  to='/myTestSite/Note-otherproject'>Other</Nav.Link>
                </Accordion.Item>
            </Nav>
        </Accordion>
    )
    return sideNavHtml
}