import React from "react";
import {Nav,Accordion,useAccordionButton } from "react-bootstrap"

// function SideNavSubItem(props) {
//     return (
//         <Accordion.Collapse eventKey={props.eventKey}>
//             <Nav.Link>{props.title}</Nav.Link>
//         </Accordion.Collapse>
//     );
// }

function SideNavItem(props) {
    // if (!props.subItems || props.subItems.length===0){
    //     return (
    //         <Accordion.Item eventKey={props.eventKey}>
    //             <Nav.Link flush>{props.title}</Nav.Link>
    //         </Accordion.Item>
    //     )
    // }
    // return (
    //     <Accordion.Item eventKey={props.eventKey}>
    //         <Accordion.Header>{props.title}</Accordion.Header>
    //         {props.subItems.map((subItem, index) => (
    //             <SideNavSubItem key={index} {...subItem} />
    //         ))}
    //     </Accordion.Item>
    // );
    
    return (
        <Accordion.Item eventKey={props.eventKey}>
            <Nav.Link onClick={()=>{
                props.setEventKey(props.eventKey);
                props.setActivate(1);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>{props.noteBook}</Nav.Link>
        </Accordion.Item>
    )
}

export default function SideNav(props){
    // const items = [
    //     {
    //         title: "Front",
    //         eventKey: "0",
    //         subItems: [
    //             { title: "React", eventKey: "0" },
    //             { title: "Bootstrap", eventKey: "0" }
    //         ]
    //     },
    //     {
    //         title: "Back End",
    //         eventKey: "1",
    //         subItems: [
    //             { title: "Spring", eventKey: "1" }
    //         ]
    //     },
    //     {
    //         title: "Other",
    //         eventKey: "2",
    //         subItems: []
    //     }
    // ];    
    const sideNavHtml=(
        <Accordion className="fixed-accordion">
            <Nav className="flex-column">
                {props.data.map((notebook, index) => (
                    <SideNavItem className="side-nav-item" key={index} {...notebook} setEventKey={props.setEventKey} setActivate={props.setActivate}/>
                ))}
            </Nav>
         </Accordion>
    )

    return sideNavHtml
}