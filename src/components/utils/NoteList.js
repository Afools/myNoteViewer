import React from "react";
import { ListGroup } from "react-bootstrap";


function NoteItem(props){
    const handleClick=(event) =>{
        
    }
    return (
        <ListGroup.Item className="note-list-item" onClick={handleClick} style={{cursor:"pointer"}}>
            {props.title}
        </ListGroup.Item>
    )
}
export default function NoteList(props){

    const notes=[{
        title: "React and Bootstrap personal website",
        description: "A personal website built with React and Bootstrap",
        tags: ["React", "Bootstrap", "JavaScript", "HTML", "CSS"],
        date: "2024-03-29"
    }]

    const notehtml=(
        <ListGroup as="ul">
            {notes.map((note)=>(
                <NoteItem title={note.title} text={note.description}/>
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