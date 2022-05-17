import Header from "../components/Header";
import NoteForm from "../components/NoteForm";

const AddNewNote = () => {
    return (
    <div className="form-content">
        <Header title="Add New Note Page"/>
        <NoteForm/>
    </div>
    );
};

export default AddNewNote;