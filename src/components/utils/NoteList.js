import React,{useState,useEffect} from "react";
import { ListGroup } from "react-bootstrap";


function NoteItem(props){
    const handleClick=(event) =>{
        props.setActivate(0);
        props.setUrl(props.url);
    }
    return (
        <ListGroup.Item className="note-list-item" onClick={handleClick} style={{cursor:"pointer"}}>
            {props.title}
        </ListGroup.Item>
    )
}
export default function NoteList(props){

    // const notes=[{
    //     title: "React and Bootstrap personal website",
    //     description: "A personal website built with React and Bootstrap",
    //     tags: ["React", "Bootstrap", "JavaScript", "HTML", "CSS"],
    //     date: "2024-03-29"
    // }]
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/Afools/pictureRepo/main/noteList.json")
            .then((response) => response.json())
            .then((data) => {
                setNotes(data);
            })
            .catch((error) => console.error("Error fetching the JSON file:", error));
    }, []); // Empty dependency array means this effect runs once on mount
    const notehtml=(
        <ListGroup as="ul">
            {notes.map((note)=>(
                <NoteItem title={note.title} url={note.url} setActivate={props.setActivate} setUrl={props.setUrl}/>
            ))}
        </ListGroup>
    )
    
    return (
        notehtml
        // <ListGroup as="ul">
        //     <NoteItem href="https://github.com/Afools/myTestSite/blob/main/README.md" title="Note Title" text="Note Text"></NoteItem>
        // </ListGroup>
    )
}