import contextValue from '../context/notes/noteContext';
import { React, useContext, useState } from 'react'


const Addnote = () => {

    const context = useContext(contextValue);
    // eslint-disable-next-line
    const { addNote } = context;

    const [note, setNote] = useState({Title:"", Description:"", Tag:"default"})

    const handleClick = (e) =>{
        e.preventDefault();
        addNote(note.Title, note.Description, note.Tag)
    }

    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }

    return (
            <div className="container">
                <h1>Add Note</h1>

                <form>
                    <div className="mb-3">
                        <label htmlFor="Title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="Title" name='Title' aria-describedby="emailHelp" onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="Description" name='Description' onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="Tag" name='Tag' onChange={onChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
                </form>


            </div>
        )
}

export default Addnote