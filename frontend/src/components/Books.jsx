import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

function Books() {
   const [searchBook,setSearchBook] = useState('')
   const [result,setResult] = useState([])
   const [apiKey,setApiKey] = useState('AIzaSyCGlmsqU3C0VnjEqu_qg5KlO0erYGjNdk8')

   const onChangeSearch = (e) =>{
    let searchBook = e.target.value
    setSearchBook(searchBook)
   }
   const onHandleSubmit = (e) =>{
    e.preventDefault();
    axios.get('https://www.googleapis.com/books/v1/volumes?q='+searchBook+'&key='+apiKey+'&maxResults=30')
    .then(data=>{
      console.log(data.data.items)
      setResult(data.data.items)
    })
   }
   
  return (
    <>
    <Link to="/" className="btn btn-white">&#8592;</Link>
    <div>
      <h1>Search for Books</h1>
      <form onSubmit={onHandleSubmit}>
      <div className='form-group'>
        <input type="text" placeholder='Search for Enter Books' className='form-control' onChange={onChangeSearch}/>
         <br />
         <button type="submit" className='btn btn-danger'>Search</button>
        </div>
      </form>
      {result.map(book=>{
        return (
        <div key={book.id} className="card mb-3 mt-3">
          <div className="row">
            <div className="col-md-2">
              <img src={book.volumeInfo.imageLinks.thumbnail} className="img-fluid rounded-start" alt={book.title}/>
            </div>
        <div className="col-md-10">
        <div className="card-body">
        <h5 className="card-title"><a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">{book.volumeInfo.title}</a></h5>
        <h6 className="card-text">by {book.volumeInfo.authors}</h6>
        <p className="card-text">{book.volumeInfo.description}</p>
      </div>
      </div>
    </div>
  </div>
        )
      })
     }
   </div>
   </>
  )
}

export default Books