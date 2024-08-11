import React from "react";
import SideNav from "./utils/SideNav";
import {Col,Row,Container} from "react-bootstrap"
import "highlight.js/styles/monokai-sublime.css"
import { useState } from "react";
import {marked, use} from 'marked'
import NoteList from "./utils/NoteList";
import MarkdownComponent from "./utils/MarkdownComponent";
export default function Note(props){
    const [url, setUrl] = useState('');
    const [activate, setActivate] = useState(1);
    return (
        <section className="Note-main-page">
            <Container className="main-container">
                <Row >
                    <Col md={2}> 
                        <SideNav/>
                    </Col>
                    {/* <Col style={{backgroundColor:"#c5c5c5"}}>
                    A test item1</Col> */}
                    <Col >
                        { activate?(<NoteList setActivate={setActivate} setUrl={setUrl}/>):
                        (<MarkdownComponent url={url} setActivate={setActivate}/>)
                        }
                    </Col>
                </Row>
            </Container>
        </section>
    )
}