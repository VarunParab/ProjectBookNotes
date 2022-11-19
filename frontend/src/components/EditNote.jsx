import React,{ useEffect, useState }  from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const EditNote = () => {
    let {id} = useParams();
    const[category,setCategory]= useState('');
    const [description,setDescription]=useState('');

    useEffect(()=>{
       axios
      .get("http://localhost:5000/notes/" + id)
      .then((response) => {
        setCategory(response.data.category);
        setDescription(response.data.description)
      })
      .catch(function (error) {
        console.log(error);
      });
    },[id])
    const onChangeCategory= e=> {
        let category = e.target.value;
        setCategory(category);
    }
    const onChangeDescription= e=> {
        let description = e.target.value;
        setDescription(description);
    }
    const OnSubmit=e=>{
        e.preventDefault();
    
        const note = {
          category: category,
          description: description,
        };
    
        console.log(note);
    
        axios
          .post("http://localhost:5000/notes/update/" + id, note)
          .then((res) => console.log(res.data));
    
        window.location = "/allNotes";
      }

  return (
    <div>
    <h3>Edit Note Log</h3>
    <form onSubmit={OnSubmit}>
      <div className="form-group">
        <label>Category: </label>
        <input
          type="text"
          required
          className="form-control"
          value={category}
          onChange={onChangeCategory}
        />
      </div>
      <div className="form-group">
        <label>Description: </label>
        <textarea
          type="text"
          required
          className="form-control"
          value={description}
          onChange={onChangeDescription}
          rows="8"
        ></textarea>
      </div>
      <br/>
      <div className="form-group">
        <input
          type="submit"
          value="Edit Note"
          className="btn btn-primary"
        />
        <Link className="btn btn-secondary" to="/allNotes">Cancel</Link>
      </div>
    </form>
  </div>
  )
}

export default EditNote