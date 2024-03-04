import React from 'react'

const Noteitem = (props) => {
    const {note} = props;
    return (
        <div className='col-md-3'>
        <div class="card my-3">
            <div class="card-header">
                {note.Title}
            </div>
            <div class="card-body">
                <p class="card-text">{note.Description}</p>
            </div>
        </div>
        </div>
    )
}

export default Noteitem