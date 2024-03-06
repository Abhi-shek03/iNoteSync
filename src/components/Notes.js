import { React, useContext, useEffect, useRef, useState} from 'react'
import contextValue from '../context/notes/noteContext';
import Noteitem from './Noteitem';
import Addnote from './Addnote';
import { useNavigate } from 'react-router-dom';

const Notes = (props) => {

    const context = useContext(contextValue);
    let navigate = useNavigate();
    // eslint-disable-next-line
    const { notes, getNotes, editNote } = context;
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes()
        }
        else{
            navigate("/login")
        }
    }, [])

    const ref = useRef(null)
    const closeRef = useRef(null)
    const [note, setNote] = useState({id:"", eTitle:"", eDescription:"", eTag:""})

    const updateNote = (currentNote) => {
        // ref.toggle()
        ref.current.click()
        setNote({id: currentNote._id, eTitle: currentNote.Title, eDescription: currentNote.Description, eTag: currentNote.Tag})
    }


    
    const handleClick = (e) =>{
        editNote(note.id, note.eTitle, note.eDescription, note.eTag)
        closeRef.current.click()
        props.showAlert("Updated Successfully","success")

    }

    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }

    return (
        <>
            <Addnote showAlert={props.showAlert}/>
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="eTitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="eTitle" name='eTitle' value={note.eTitle} aria-describedby="emailHelp" onChange={onChange} minLength={3} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="eDescription" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="eDescription" name='eDescription' value={note.eDescription} onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="eTag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="eTag" name='eTag' value={note.eTag} onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={closeRef}>Close</button>
                            <button disabled={note.eTitle.length<3 || note.eDescription.length<5} type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row my-3'>
                <h1>Your Notes</h1>
                <div className='container'>
                {notes.length===0 && 'No notes to display'}
                </div>

                {notes.map((note) => {
                    return <Noteitem key={note._id} updateNote={updateNote} note={note} showAlert={props.showAlert}/>
                })}
            </div>
        </>
    )
}

export default Notes