import React, { useContext, useEffect, useRef , useState} from "react";
import { useNavigate } from "react-router-dom";
import NoteContext from "../context/notes/noteContext";
import NoteItem from './NoteItem';
import AddNote from './AddNote';

export default function Notes(props) {
  const context = useContext(NoteContext);
  const navigate = useNavigate();
  const { notes , getNotes , editNote} = context;

  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes()
    }
    else {
      navigate("/login")
    }
    // eslint-disable-next-line  
  }, [])
  
  const [note , setNote] = useState({id: "" ,etitle: "", edescription: "", etag: ""})

  const ref = useRef(null)
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id: currentNote._id ,etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag})
  }

  const refClose = useRef(null)
  const handleClick = (e) => { // refClose is using for close updating form
    editNote(note.id , note.etitle , note.edescription , note.etag)
    refClose.current.click();
    props.showAlert("Note updated successfully" , "success")
  }; 

  const onChange = (e) => {
    setNote({...note, [e.target.name]: e.target.value});
  };

  return (
    <div>
      <AddNote showAlert={props.showAlert}/>
      <button ref={ref} type="button" className=" d-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" 
                  value={note.etitle} onChange={onChange} minLength={5} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label"> Description </label>
                    <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label"> Tag </label>
                    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} 
                    onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
              </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled={note.etitle.length < 5 || note.edescription.length < 5 } onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2>Your Notes</h2>
          <div className="container mx-1">
            {notes.length===0 && "No notes to display"}
          </div>
        {notes && notes.map ((note)=> {
          return <NoteItem key={note._id} updateNote={updateNote} note={note} showAlert={props.showAlert}/>
        })}
      </div>
    </div>
  )
}
