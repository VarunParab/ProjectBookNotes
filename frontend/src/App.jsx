import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import NotesList from "./components/NotesList";
import EditNote from "./components/EditNote";
import CreateNote from "./components/CreateNote";
import Books from "./components/Books";
import Error from "./components/Error"
function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Navbar />}/>
          <Route path="/allNotes" element={<NotesList />} />
          <Route path="/Books" element={<Books/>}/>
          <Route path="/edit/:id" element={<EditNote />} />
          <Route path="/create" element={<CreateNote />} />
          <Route path="*" element={<Error />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
