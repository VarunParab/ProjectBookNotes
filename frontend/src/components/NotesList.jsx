import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Note = (props) => (
    <div className="card mt-4">
    <div className="card-body">
      <h4 className="card-title">{props.note.category}</h4>
      <div className="card-text mb-2">{props.note.description}</div>
      <Link className="btn btn-info me-md-2"to={"/edit/" + props.note._id}>Edit</Link>
      <button className="btn btn-danger" onClick={()=>{ props.deleteNote(props.note._id) }}>
        Delete
      </button>
    </div>
  </div>
);
const NotesList = () => {
    let [state,setState] = useState({notes:[]});
    let [searchTerm,setSearchTerm] = useState('');

    useEffect(()=>{
     axios
      .get("http://localhost:5000/notes/allNotes")
      .then((response) => {
        setState({ notes: response.data })
      })
      .catch((error) => {
        console.log(error);
      });
    },[])

    const deleteNote = id =>{
        axios.delete("http://localhost:5000/notes/" + id).then((response) => {
          console.log(response.data);
        });
    
        setState({
          notes: state.notes.filter((el) => el._id !== id),
        });
      }

     const noteList=()=>{
        return state.notes.filter((currentnote)=>{
          if(searchTerm===''){
            return currentnote;
          }else if(currentnote.category.toLowerCase().includes(searchTerm.toLowerCase())){
            return currentnote;
          }
          return 0;
        }).map((currentnote) => {
          return (
            <Note
              note={currentnote}
              deleteNote={deleteNote}
              key={currentnote._id}
            />
          );
        });
      }

  return (
    <>
    <Link to="/" className="btn btn-white">&#8592;</Link>
    <div>
        <h3>All Notes</h3>
        <Link to="/create" className="buttonCreate">+</Link>
        <input className="form-control form-input" type="text" placeholder="Search Categories..." onChange={(e)=>setSearchTerm(e.target.value)}/>
        <div>{noteList()}</div>
  
    </div>
    </>
  )
}

export default NotesList