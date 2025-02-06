import React from "react";
import SideNav from "./utils/SideNav";
import {Col,Row,Container} from "react-bootstrap"
import "highlight.js/styles/monokai-sublime.css"
import { useState,useEffect } from "react";
import {marked, use} from 'marked'
import NoteList from "./utils/NoteList";
import MarkdownComponent from "./utils/MarkdownComponent";
export default function Note(props){
    const [url, setUrl] = useState('');
    const [activate, setActivate] = useState(1);
    const [data, setData] = useState([]);
    const [eventKey, setEventKey] = useState(0);
    const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

    const handleScroll = (e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target;
        const isBottom = scrollHeight - scrollTop === clientHeight;
        setIsScrolledToBottom(isBottom);
    };

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/Afools/pictureRepo/main/noteList.json")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => console.error("Error fetching the JSON file:", error));
    }, []); // Empty dependency array means this effect runs once on mount
    return (
        // <section className="Note-main-page">
            <div className="main-container">
                <SideNav className={`sideNav ${isScrolledToBottom? 'scorlled':''}`} data={data} setEventKey={setEventKey} setActivate={setActivate}/>
                {/* <Col style={{backgroundColor:"#c5c5c5"}}>
                A test item1</Col> */}
                <div className="note-body-container" onScroll={handleScroll}>
                    { activate?(<NoteList setActivate={setActivate} setUrl={setUrl} data={data} eventKey={eventKey}/>):
                    (<MarkdownComponent url={url} setActivate={setActivate}/>)
                    }
                </div>
            </div>
        // </section>
    )
}