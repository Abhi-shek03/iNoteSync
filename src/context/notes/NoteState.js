import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const host = 'http://localhost:5000'
    const notesInitial = [

    ]

    const [notes, setNotes] = useState(notesInitial)
    // get all notes
    const getNotes = async () => {
        // API call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVjOWViMjA2MzBiNTIzZTIyOTZiY2JlIn0sImlhdCI6MTcwNzczMTc2N30.ZytNyiAbyXD4k1RU0C4ezu-S1pCREOd14L8Nrg282Qs"
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
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVjOWViMjA2MzBiNTIzZTIyOTZiY2JlIn0sImlhdCI6MTcwNzczMTc2N30.ZytNyiAbyXD4k1RU0C4ezu-S1pCREOd14L8Nrg282Qs"
            },
            body: JSON.stringify({Title, Description, Tag})
        });
        // const json=response.json()

        // Logic to add note
        const note = {
            "_id": "65e57831ea46e134f851b6ec9f",
            "user": "65c9eb20630b523e2296bcbe",
            "Title": Title,
            "Description": Description,
            "Tag": Tag,
            "Date": "2024-03-04T07:29:02.273Z",
            "__v": 0
        }
        setNotes(notes.concat(note))
    }


    const deleteNote = async(id) => {
        // api call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVjOWViMjA2MzBiNTIzZTIyOTZiY2JlIn0sImlhdCI6MTcwNzczMTc2N30.ZytNyiAbyXD4k1RU0C4ezu-S1pCREOd14L8Nrg282Qs"
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
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVjOWViMjA2MzBiNTIzZTIyOTZiY2JlIn0sImlhdCI6MTcwNzczMTc2N30.ZytNyiAbyXD4k1RU0C4ezu-S1pCREOd14L8Nrg282Qs"
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