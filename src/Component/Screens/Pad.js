import React, { useState } from "react";
import ReactDOM from "react-dom";
import Sidebar from "./Sidebar";
import "../../Stylesheet/Pad.css";
import SaveToDrive from "../Utilities/SaveToDrive";

import Header from "./Header";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { saveAs, encodeBase64 } from "@progress/kendo-file-saver";
const characterCount = (event) => {
  var e = document.querySelector("#w3review");
  var wordCount = document.querySelector("#count");
  if (e.innerText != null) {
    wordCount.innerHTML = e.innerText.length;
  } else {
    wordCount.innerHTML = "0";
  }
};

function handleAlign(align) {
  var e = document.querySelector("#w3review");
  e.style = align;
}
function setFamily(fam) {
  if (window.getSelection) {
    var sel = window.getSelection();
    if (sel.toString().length != 0) {
      if (sel.rangeCount) {
        var e = document.createElement("span");

        ReactDOM.render(<span />, e);
        var styles = {
          "font-family": fam[0],
          "font-size": fam[1],
        };
        Object.assign(e.style, styles);

        e.innerHTML = sel.toString();
        var range = sel.getRangeAt(0);
        range.deleteContents(); // Deletes selected text…
        range.insertNode(e);
      }
    } else {
      var pd = document.querySelector("#w3review");
      var styles = {
        "font-family": fam[0],
        "font-size": fam[1],
      };
      Object.assign(pd.style, styles);
    }
  } else {
    window.alert("Please restart the server or use updated browser");
  }
}

function handleStyle(selec) {
  if (window.getSelection) {
    var sel = window.getSelection();
    if (sel.toString().length != 0) {
      if (sel.rangeCount) {
        var e = document.createElement("span");
        ReactDOM.render(<span />, e);
        e.style.display = "inline";
        e.style = selec;
        e.innerHTML = sel.toString();
        var range = sel.getRangeAt(0);
        range.deleteContents();
        range.insertNode(e);
      } else {
        window.alert("Please use the latest version of browser....");
      }
    } else {
      var pd = document.querySelector("#w3review");
      pd.style = selec;
    }
  } else {
    window.alert("Please restart the server....");
  }
}
function closeModal() {
  var e = document.querySelector("#modal");
  var w = document.querySelector("#savemodal");

  var z = document.querySelector("#aboutmodal");
  var pm = document.querySelector("#printmodal");
  e.style = "display:none";
  w.style.display = "none";
  z.style.display = "none";
  pm.style.display = "none";
}

function clearAll() {
  var e = document.querySelector("#w3review");
  e.innerHTML = "";
  characterCount();
  closeModal();
}
function saveButton() {
  closeModal();
  var d = document.querySelector("#modal");
  d.style.display = "none";
  var e = document.querySelector("#savemodal");
  e.style.display = "block";
}

function Pad(props) {
  const [save, setSave] = useState("");
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [fName, setfName] = useState("");
  function saveToDrive() {
    closeModal();
    var e = document.querySelector("#w3review");
    setValue(e.innerText);
    setSave("drive");
  }
  function handleClear() {
    closeModal();
    var e = document.querySelector("#savemodal");
    e.style.display = "none";

    if (isOpen == true) {
      var e = document.querySelector("#modal");
      e.style = "display:block";
    }
  }

  function printBtn() {
    closeModal();
    if (fName.length != 0) {
      var fn = document.querySelector("#filename");
      fn.innerHTML = fName;
      var today = new Date();
      var date =
        today.getDate() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getFullYear();

      var time = today.getHours() + ":" + today.getMinutes();
      var dateTime = date + " " + time;
      var e = document.querySelector("#footertext");
      e.innerHTML = "Last edited-" + dateTime;
      window.print();
    } else {
      if (isOpen == true) {
        var pm = document.querySelector("#printmodal");
        pm.style.display = "block";
      }
    }
  }
  function setFileNameForPrint() {
    var e = document.querySelector("#fileName1").value;
    if (e.length != 0) {
      setfName(e + ".txt");
      printBtn();
    } else {
      var f = document.querySelector("#errormsg1");
      f.style.display = "block";
    }
  }
  function saveToFile() {
    setSave("file");
    closeModal();
    var e = document.querySelector("#w3review");
    const dataURI = "data:text/plain;base64," + encodeBase64(e.innerText);
    saveAs(dataURI, "document.txt");
  }
  function setOpen() {
    setIsOpen(true);
  }
  function aboutModal() {
    closeModal();
    if (isOpen == true) {
      var e = document.querySelector("#aboutmodal");
      e.style = "display:block";
    }
  }
  return (
    <div>
      <Header
        updateDetails={handleStyle}
        align={handleAlign}
        font={setFamily}
      ></Header>
      <Sidebar
        clear={handleClear}
        savebtn={saveButton}
        print={printBtn}
        about={aboutModal}
        fName={setfName}
      ></Sidebar>
      <div>
        <div id="content">
          <div class="col-12 bg-primary py-3" id="HeaderForPrint">
            <span id="lfp"> Notepad </span>
            <span id="filename">FileName.txt</span>
          </div>
          <div
            id="w3review"
            className="w31review"
            contentEditable="true"
            onKeyUp={characterCount}
          ></div>
          <div class="footer">
            <p id="footertext">*****</p>
          </div>
        </div>
      </div>

      <Modal.Dialog id="modal" centered className="dialog">
        <Modal.Header closeButton onClick={closeModal}>
          <Modal.Title>Warning....</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Do you want to clear the data</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={closeModal}>
            No
          </Button>
          <Button variant="primary" onClick={clearAll}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
      <Modal.Dialog id="savemodal" centered className="dialog">
        <Modal.Header closeButton onClick={closeModal}>
          <Modal.Title>Alert....</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Where do you want to save..</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={saveToFile}>
            File
          </Button>
          <Button variant="primary" onClick={saveToDrive}>
            GDrive
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
      <Modal.Dialog id="aboutmodal">
        <Modal.Header>
          <Modal.Title>About Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>Made By-</h1>
          <ul>
            <li>Satin Patel</li>
            <li>Priyanka K</li>
            <li>Sri Guruvardhan Ragam</li>
          </ul>
          <h2>Technologies Used</h2>
          <ol>
            <li>ReactJS</li>
            <li>HTML, CSS and Javascript</li>
            <li>React Bootstrap</li>
          </ol>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={closeModal}>
            OK
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
      <Modal.Dialog id="printmodal" centered>
        <Modal.Header closeButton onClick={closeModal}>
          <Modal.Title>File Name:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" id="fileName1" placeholder="Enter file Name" />
          <span id="errormsg1">Enter File Name first</span>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={setFileNameForPrint}>
            Save
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
      {save === "drive" && (
        <SaveToDrive
          value={value}
          isOpen={isOpen}
          setOpen={setOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
}

export default Pad;
