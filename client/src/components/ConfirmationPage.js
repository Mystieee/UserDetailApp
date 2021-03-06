import React, { Component } from "react";
import UploadFiles from "./UploadFiles.js";
import Signature from "./Signature.js";
import UploadFileService from "../service/UploadFileService.js";

export class ConfirmationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFiles: undefined,
      currentFile: undefined,
      message: ""
    };
  }
  handleProfilePicture = profilePicture => {
    this.setState({ selectedFiles: profilePicture });
  };

  continue = e => {
    e.preventDefault();

    //uploadProfile Picture..
    let currentFile;
    if (this.state.selectedFiles == null) {
      this.setState({
        message: "Please select a file.",
        currentFile: undefined
      });
    } else {
      currentFile = this.state.selectedFiles[0];
    }

    this.setState({
      currentFile: currentFile
    });

    UploadFileService.uploadFile(currentFile)
      .then(response => {
        this.setState({
          message: response.data.message
        });
        return UploadFileService.getFiles();
      })
      .then(files => {
        this.setState({
          fileInfos: files.data
        });
      })
      .catch(() => {
        this.setState({
          message: "Could not upload the file as the file size exceeds 2MB",
          currentFile: undefined
        });
      });

    this.setState({
      selectedFiles: undefined
    });

    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  componentDidMount() {
    this.props.confirmationPage();
  }

  render() {
    const {
      values: {
        name,
        email,
        mobile_number,
        address_line1,
        address_line2,
        address_line3,
        city,
        building_name,
        landline_number,
        office_address_line1,
        office_address_line2,
        po_box_number
      }
    } = this.props;

    const message = this.state.message;

    return (
      <div className="form-container">
        <form className="form-horizontal ">
          <div id="flex-container">
            <div className="flex-item">
              <ul className="list-group">
                <li className="list-group-item border-0">Name: {name}</li>
                <li className="list-group-item border-0">Email: {email}</li>
                <li className="list-group-item border-0">
                  Mobile Number: {mobile_number}
                </li>
                <li className="list-group-item border-0">
                  Address Line 1: {address_line1}
                </li>
                <li className="list-group-item border-0">
                  Address Line 2: {address_line2}
                </li>
                <li className="list-group-item border-0">
                  Address Line 3: {address_line3}
                </li>
              </ul>
            </div>
            <div className="flex-item">
              <ul className="list-group">
                <li className="list-group-item border-0">
                  Building Name: {building_name}
                </li>
                <li className="list-group-item border-0">City/Area: {city}</li>
                <li className="list-group-item border-0">
                  Landline Number: {landline_number}
                </li>
                <li className="list-group-item border-0">
                  Address Line 1: {office_address_line1}
                </li>
                <li className="list-group-item border-0">
                  Address Line 2: {office_address_line2}
                </li>
                <li className="list-group-item border-0">
                  PO Box Number: {po_box_number}
                </li>
              </ul>
            </div>
            <div className="flex-item">
              <UploadFiles onSelectFile={this.handleProfilePicture} />
              <div className="alert alert-light" role="alert">
                {message}
              </div>

              <Signature />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-4">
              <button className="btn btn-secondary" onClick={this.back}>
                Back
              </button>
            </div>
            <div className="col-4 text-right">
              <button className="btn btn-danger" onClick={this.continue}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ConfirmationPage;
