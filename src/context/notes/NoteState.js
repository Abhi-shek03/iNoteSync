import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const host = 'http://localhost:5000'
    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial)
    // get all notes
    const getNotes = async () => {
        // API call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem('token')
            },
        });
        const json = await response.json()
        setNotes(json)
    }


    const addNote = async (Title, Description, Tag) => {
        // API call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem('token')
            },
            body: JSON.stringify({Title, Description, Tag})
        });
        const note=await response.json()
        setNotes(notes.concat(note))

        // Logic to add note
        // const note = json
    }


    const deleteNote = async(id) => {
        // api call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem('token')
            },
        });
        const json = response.json();

        // Logic to delete note
        const newNote = notes.filter((note) => { return note._id !== id })
        setNotes(newNote)

    }
    const editNote = async (id, Title, Description, Tag) => {
        // Api call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem('token')
            },
            body: JSON.stringify({Title, Description, Tag}),
        });
        const json = response.json();


        let newNotes = JSON.parse(JSON.stringify(notes))
        // Logic to edit note        
        for (let index = 0; index < newNotes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                newNotes[index].Title = Title;
                newNotes[index].Description = Description;
                newNotes[index].Tag = Tag;
                break;
            }
        }
        setNotes(newNotes)

    }

    return (
        <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;