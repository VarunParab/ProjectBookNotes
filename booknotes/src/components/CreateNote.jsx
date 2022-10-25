import React,{useState} from 'react'
import axios from 'axios';
const CreateNote= props =>{
    const [category,setCategory]= useState('');
    const [description,setDescription]= useState('');

    const onChangeCategory= e=> {
      let category = e.target.value;
      setCategory(category);
    }
    const onChangeDescription= e=> {
      let description = e.target.value;
      setDescription(description);
    }
    const onSubmit= e =>{
      e.preventDefault();
  
      const note = {
        category: category,
        description: description,
      };
  
      console.log(note);
      axios
        .post("http://localhost:5000/notes/add", note)
        .then((res) => console.log(res.data));
  
      window.location = "/allNotes";
    }
  return (
    <div>
        <h3>Create New Note</h3>
        <form onSubmit={onSubmit}>
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
          <br />
          <button className='btn btn-primary'>Create Note</button>
        </form>
      </div>     
 )
}

export default CreateNote;