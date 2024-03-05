import { React, useContext } from "react";
import contextValue from '../context/notes/noteContext';


const Noteitem = (props) => {
    const context = useContext(contextValue);
    const { deleteNote } = context;

    const { note, updateNote } = props;
    return (
        <div className='col-md-3'>
            <div className="card my-3">
                <div className="card-header d-flex justify-content-between align-items-center bg-info">
                    {note.Title}
                    <div className="d-flex">
                    <i className="fa-regular fa-pen-to-square mx-2" onClick={()=>(updateNote(note))}></i>
                    <i className="fa-regular fa-trash-can mx-2" onClick={()=>(deleteNote(note._id))}></i>
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-text">{note.Description}</p>
                </div>
            </div>
        </div>
    )
}

export default Noteitem