import React from "react";
import { Link } from "react-router-dom";
// import UseParams from "./useParams";
import img1 from './../images/Capture.PNG'
import img2 from './../images/Capture2.PNG'
import img3 from './../images/Capture3.PNG'
function Body() {
  return (
    <div className="bod">
      <img src={img1} alt="" className="image1" />
      <img src={img3} alt="" className="image3" />
      <img src={img2} alt="" className="image2" />
      <del className="mem">Memorize</del>
      <br />
      <h1 className="save">Save It!</h1>
      <br />
      <p className="mm">
        Use BookNotes to save your selected text etc,
        <br />
        so you don't have to memorize anything.
        <br />
        
      </p>
      <Link to="/allNotes" className="btn btn-success">
        Notes
      </Link>
    </div>
  );
}

export default Body;
