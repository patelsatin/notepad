import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../../Stylesheet/Header.css";

import {
  FaBars,
  FaBold,
  FaItalic,
  FaUnderline,
  FaAlignCenter,
  FaAlignLeft,
  FaAlignRight,
  FaHighlighter,
  FaUndo,
} from "react-icons/fa";
function colorUpdate(props) {
  var colorHex = document.querySelector("#color").value;
  props.updateDetails("color: " + colorHex);
}

function Header(props) {
  function handleClick() {
    var check = document.querySelector("#check");
    var allsp = document.querySelector("#sidebar");
    var ontsp = document.querySelector("#MobNav");
    var pad = document.querySelector("#content");
    if (check.checked) {
      allsp.style.display = "none";
      ontsp.style.display = "block";
      pad.style.marginLeft = "60px";
    } else {
      ontsp.style.display = "none";
      allsp.style.display = "block";
      pad.style.marginLeft = "250px";
    }
  }
  function setFam(props) {
    var sltbox = document.querySelector("#font-family");
    const fam = [sltbox.value, defaultSize];
    props.font(fam);
    setDefaultFamily(sltbox.value);
  }
  function setFnt(props) {
    var sltbox = document.querySelector("#font-size");
    const fam = [defaultFamily, sltbox.value];
    props.font(fam);
    setDefaultSize(sltbox.value);
  }
  var initial = [
    "Arial",
    "Courier New",
    "Gill Sans",
    "sans-serif",
    "Times New Roman",
    "Courier New",
    "Courier",
    "Lucidatypewriter",
    "monospace",
    "Comic Sans",
    " Comic Sans MS",
    " Zapf Chancery",
    " cursive",
    "Impact",
    " Arnoldboecklin",
    " fantasy",
  ];
  var late = [
    14,
    16,
    18,
    20,
    22,
    24,
    26,
    28,
    30,
    32,
    34,
    36,
    38,
    40,
    42,
    44,
    46,
    48,
    50,
    52,
    54,
    56,
    58,
    60,
    62,
    64,
    66,
    68,
    70,
    72,
  ];
  const [family, setFamily] = useState(initial);
  const [size, setSize] = useState(late);
  const [defaultFamily, setDefaultFamily] = useState("Arial");
  const [defaultSize, setDefaultSize] = useState("14px");
  return (
    <div id="head">
      <Navbar
        className="navbar-fixed-top head navbar-dark"
        collapseOnSelect
        expand="lg"
        fixed="top"
      >
        <Navbar.Brand id="brand" href="#home">
          Note<span>Pad</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto custom">
            <Nav.Link href="#features">
              <input
                type="checkbox"
                id="check"
                defaultValue="true"
                onChange={() => handleClick()}
              />
              <label htmlFor="check">
                <FaBars color="white" id="sidebar_btn" className="ico" />
              </label>
            </Nav.Link>
            <Nav.Link onClick={() => props.updateDetails("font-weight:bolder")}>
              <FaBold id="bold" value="bold" className="ico" />
            </Nav.Link>
            <Nav.Link onClick={() => props.updateDetails("font-style:italic")}>
              <FaItalic id="italic" className="ico" />
            </Nav.Link>
            <Nav.Link
              onClick={() => props.updateDetails("text-decoration:underline")}
            >
              <FaUnderline id="underline" className="ico" />
            </Nav.Link>
            <Nav.Link
              onClick={() => props.updateDetails("background-color:yellow")}
            >
              <FaHighlighter id="highlight" className="ico" />
            </Nav.Link>
            <Nav.Link href="#" onClick={() => props.align("text-align:left")}>
              {" "}
              <FaAlignLeft id="left" className="ico" />
            </Nav.Link>
            <Nav.Link
              href="#"
              onClick={() => props.align("text-align:center")}
            >
              {" "}
              <FaAlignCenter id="center" className="ico" />
            </Nav.Link>
            <Nav.Link
              href="#"
              onClick={() => props.align("text-align:right")}
            >
              <FaAlignRight id="right" className="ico" />
            </Nav.Link>
            
            <Nav.Link  href="#pricing">
              <input type="color" id="color" className="ico" defaultValue="#ff0000" onChange={() => colorUpdate(props)}/>
            </Nav.Link>
           
            <Nav.Link href="#">
              {" "}
              <select id="font-family" onChange={() => setFam(props)}>
                <option disabled defaultValue>
                  Arial
                </option>
                {family.map((myList, index) => (
                  <option  key={index}>{myList}</option>
                ))}
              </select>
            </Nav.Link>
            
            <Nav.Link href="#">
              <select id="font-size" onChange={() => setFnt(props)}>
                <option disabled defaultValue>
                  font-size
                </option>
                {size.map((myList, index) => (
                  <option key={index}>{myList}px</option>
                ))}
              </select>
            </Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link>
              <span id="count">0</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default Header;
