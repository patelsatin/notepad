import "../../Stylesheet/Sidebar.css";
import React, { useState } from "react";
import {
  FaClone,
  FaFolderOpen,
  FaInstagram,
  FaFacebookF,
  FaStickyNote,
  FaPrint,
  FaRandom,
  FaWindowClose,
  FaGooglePlusG,
  FaWindowMaximize,
} from "react-icons/fa";
function newPage() {
  window.open("http://localhost:3000");
}

function charCount() {
  var e = document.querySelector("#w3review");
  var wordCount = document.querySelector("#count");
  if (e.innerText != null) {
    wordCount.innerHTML = e.innerText.length;
  } else {
    wordCount.innerHTML = "0";
  }
}


function Sidebar(props) {
  function showFile(e) {
    e.preventDefault();
    const reader = new FileReader();
    let file = e.target.files[0];
    props.fName(file.name);
    reader.onload = async (e) => {
      const text = e.target.result;
      var pd = document.querySelector("#w3review");
      pd.innerHTML = "";
      pd.innerHTML = text;
      charCount();
    };
    reader.readAsText(e.target.files[0]);
   
  }
  return (
    <div>
      <div id="sidebar">
        <div className="Menu">
          <a href="#" onClick={newPage}>
            <FaClone color="white" className="ico" size="25px" />
            <span className="apn"> New Page</span>
          </a>
          <a href="#">
            <label htmlFor="fileViewer">
              <FaFolderOpen color="white" className="ico" size="25px" />
              <input
                type="file"
                id="fileViewer"
                accept = "text/*"
                onChange={(e) => showFile(e)}
              />
              <span className="apn"> Open</span>
            </label>
          </a>

          <a href="#" onClick={props.savebtn}>
            <FaStickyNote color="white" className="ico" size="25px" />
            <span className="apn"> Save</span>
          </a>
          <a href="#" onClick={props.print}>
            <FaPrint color="white" className="ico" size="25px" />
            <span className="apn"> Print</span>
          </a>
          <a href="#"  onClick={props.about}>
            <FaRandom color="white" className="ico" size="25px" />
            <span className="apn"> About</span>
          </a>
          <a href="#" onClick={props.clear}>
            <FaWindowClose color="white" className="ico" size="25px" />
            <span className="apn"> Clear</span>
          </a>
         
        </div>
        <div class="footer1">
          <a href="#" className="social"><FaInstagram  color="#19b3d3" className="ico" size="25px" /></a>
         <a href="#" className="social"><FaFacebookF color="#19b3d3" className="ico" size="20px" /></a>
          <a href="#" className="social"><FaGooglePlusG color="#19b3d3" className="ico" size="35px" /></a>
          </div>
      </div>

      <div id="MobNav">
        <a href="#" onClick={newPage}>
          <FaClone color="white" className="ico" size="25px" />
        </a>
        <a href="#">
        <label htmlFor="fileViewer">
        
          <FaFolderOpen color="white" className="ico" size="25px" />
          <input
                type="file"
                id="fileViewer"
                accept = "text/*"
                onChange={(e) => showFile(e)}
              />
               </label>
        </a>

        <a href="#" onClick={props.savebtn}>
          <FaStickyNote color="white" className="ico" size="25px" />
        </a>
        <a href="#" onClick={props.print}>
          <FaPrint color="white" className="ico" size="25px" />
        </a>
        <a  onClick={props.about}>
          <FaRandom color="white" className="ico" size="25px" />
        </a>
        <a href="#" onClick={props.clear}>
          <FaWindowClose color="white" className="ico" size="25px" />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
