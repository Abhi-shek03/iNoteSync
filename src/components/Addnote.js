import { React, useContext, useState } from 'react'
import contextValue from '../context/notes/noteContext';


const Addnote = (props) => {

    const context = useContext(contextValue);
    // eslint-disable-next-line
    const { addNote } = context;

    const [note, setNote] = useState({Title:"", Description:"", Tag:""})

    const handleClick = (e) =>{
        e.preventDefault();
        addNote(note.Title, note.Description, note.Tag)
        setNote({Title:"", Description:"", Tag:""})
        console.log(note._id)
        props.showAlert("Added Note Successfully","success")
    }

    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }

    return (
            <div className="container">
                <h1>Add Note</h1>

                <form onSubmit={handleClick}>
                    <div className="mb-3">
                        <label htmlFor="Title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="Title" name='Title' value={note.Title} aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="Description" value={note.Description} name='Description' onChange={onChange} minLength={5} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="Tag" value={note.Tag} name='Tag' onChange={onChange}/>
                    </div>
                    <button disabled={note.Title.length<3 || note.Description.length<5} type="submit" className="btn btn-outline-secondary">Add Note</button>
                </form>


            </div>
        )
}

export default Addnote