import React from "react";
import {AiFillFile} from "react-icons/ai"

const PDFViewer = () => {
  const handleResume = () =>{
    window.open('kapil.pdf','_blank');

  } 
  return (
    <span className="social-icons" onClick={handleResume}>
      <AiFillFile/>
    </span>
  );
};
export default PDFViewer;
