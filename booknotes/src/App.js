import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import NotesList from "./components/NotesList";
import EditNote from "./components/EditNote";
import Login from "./components/Login"
// import CreateNote from "./components/create-note";
import CreateNote from "./components/CreateNote";
// import GetId from "./components/useParams";
// import CreateUser from "./components/create-user";
function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/allNotes" element={<NotesList />} />
          <Route path="/edit/:id" element={<EditNote />} />
          <Route path="/create" element={<CreateNote />} />
          <Route path="/Login" element={<Login />} />
          {/* <Route path="/user" element={<CreateUser />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
