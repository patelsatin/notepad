import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import "../../Stylesheet/Drive.css";
import Button from "react-bootstrap/Button";
import SweetAlert from "react-bootstrap-sweetalert";
var SCOPE = "https://www.googleapis.com/auth/drive";
var discoveryUrl = "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest";

class SaveToDrive extends Component {
  state = {
    show:false,
    name: "",
    googleAuth: "",
    fileName: "NotePadFile",
    fileValue: "",
  };
  componentDidMount() {
    this.props.setIsOpen(false);
    var script = document.createElement("script");
    script.onload = this.handleClientLoad;
    script.src = "https://apis.google.com/js/api.js";
    document.body.appendChild(script);
  }
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.closeSaveModal = this.closeSaveModal.bind(this);
  }
  initClient = () => {
    try {
      window.gapi.client
        .init({
          apiKey: "AIzaSyB4Gtr-knEfvBqchJjNfoY7NolUIhHYvnM",
          clientId:
            "965913890358-sd2i2tuj5d8itpkbjv1v1q1nhu8rk0qf.apps.googleusercontent.com",
          scope: SCOPE,
          discoveryDocs: [discoveryUrl],
        })
        .then(() => {
          this.setState({
            googleAuth: window.gapi.auth2.getAuthInstance(),
          });
          this.state.googleAuth.isSignedIn.listen(this.updateSigninStatus);
          document
            .getElementById("signin-btn")
            .addEventListener("click", this.signInFunction);
          document
            .getElementById("signout-btn")
            .addEventListener("click", this.signOutFunction);
        });
    } catch (e) {
      window.alert(
        "Notepad is facing some issue please contact to admin or you can restart"
      );
      console.log(e);
    }
  };

  signInFunction = () => {
    var e = document.querySelector("#fileName").value;
    if (e.length != 0) {
      this.setState({
        fileName: e,
        fileValue: this.props.value,
      });
      this.setState({
        fileName: e,
      });
      this.state.googleAuth.signIn();
      this.updateSigninStatus();
    } else {
      var f = document.querySelector("#errormsg");
      f.style.display = "block";
    }
  };

  signOutFunction = () => {
    this.state.googleAuth.signOut();
    window.alert("sign out perfect");
  };

  updateSigninStatus = () => {
    this.setSigninStatus();
  };

  setSigninStatus = async () => {
    var user = this.state.googleAuth.currentUser.get();
    if (!user.isSignedIn) {
      window.alert("user is null");
      this.setState({
        name: "",
      });
    } else {
      var isAuthorized = user.hasGrantedScopes(SCOPE);
      if (isAuthorized) {
        const boundary = "foo_bar_baz";
        const delimiter = "\r\n--" + boundary + "\r\n";
        const close_delim = "\r\n--" + boundary + "--";
        var fileName = this.state.fileName;
        var fileData = this.state.fileValue;
        var contentType = "text/plain";
        var metadata = {
          name: fileName,
          mimeType: contentType,
        };

        var multipartRequestBody =
          delimiter +
          "Content-Type: application/json; charset=UTF-8\r\n\r\n" +
          JSON.stringify(metadata) +
          delimiter +
          "Content-Type: " +
          contentType +
          "\r\n\r\n" +
          fileData +
          "\r\n" +
          close_delim;

        console.log(multipartRequestBody);
        var request = window.gapi.client.request({
          path: "https://www.googleapis.com/upload/drive/v3/files",
          method: "POST",
          params: { uploadType: "multipart" },
          headers: {
            "Content-Type": "multipart/related; boundary=" + boundary + "",
          },
          body: multipartRequestBody,
        });

        this.closeModal();
        this.setState({
          show: true,
        });
        request.execute(function (file) {
          console.log(file);
        });
      }
    }
  };

  handleClientLoad = () => {
    window.gapi.load("client:auth2", this.initClient);
  };
  closeModal() {
    this.props.setOpen();
    var e = document.querySelector("#drivemodal");
    e.style.display = "none";
  }
  closeSaveModal() {
    this.props.setOpen();
    this.setState({
      show: false,
    });
  }
  render() {
    return (
      <div className="App">
        <Modal.Dialog id="drivemodal" centered>
          <Modal.Header closeButton onClick={this.closeModal}>
            <Modal.Title>File Name:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input type="text" id="fileName" placeholder="Enter file Name" />
            <span id="errormsg">Enter File Name first</span>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" id="signin-btn">
              Save
            </Button>
          </Modal.Footer>
        </Modal.Dialog>

        <SweetAlert
          show={this.state.show}
          success
          title="Save Successful"
          onConfirm={this.closeSaveModal}
          onCancel={this.closeSaveModal}
        >
          Your data has been successfuly saved in your google drive
        </SweetAlert>
      </div>
    );
  }
}

export default SaveToDrive;
