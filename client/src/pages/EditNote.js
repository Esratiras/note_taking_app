import React from 'react';
import Header from "../components/Header";
import NoteForm from "../components/NoteForm";

function EditNote() {

    return (
        <div className="card-content">
           <Header title="Edit Note Page"/>
            <NoteForm/>
        </div>

    );
}

export default EditNote;