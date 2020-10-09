import React, { Component } from 'react'
import  UploadFiles from './UploadFiles.js';
import  Signature from './Signature.js';
import UploadFileService from "../service/UploadFileService.js";

export class ConfirmationPage extends Component {
     constructor(props) {
        super(props);
        this.state = { selectedFiles: undefined,  currentFile: undefined,
              message: ""
            }
    }
    handleProfilePicture = (profilePicture) => {
            this.setState({selectedFiles: profilePicture});
        }


    continue = e => {
        e.preventDefault();


    let currentFile = this.state.selectedFiles[0];

    console.log("current File: ",currentFile);

    this.setState({
      currentFile: currentFile,
    });

    console.log("Calling upload file service..");
    UploadFileService.uploadFile(currentFile)
      .then((response) => {
        this.setState({
          message: response.data.message,
        });
        return UploadFileService.getFiles();
      })
      .then((files) => {
        console.log("I am in fileInfos..");
        this.setState({
          fileInfos: files.data,
        });
      })
      .catch(() => {
        this.setState({
          message: "Could not upload the file as the file size exceeds 2MB",
          currentFile: undefined,
        });
      });

    this.setState({
      selectedFiles: undefined,
    });

    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {
            values: { name, email, mobile_number, address_line1, address_line2, address_line3, city, building_name, landline_number, office_address_line1, office_address_line2, po_box_number }
        } = this.props;

        const message = this.state.message;

        return (
            <div className="form-container">
                <h1 className="mb-5">Confirmation Page</h1>
                <ul class="list-group">
                    <li class="list-group-item">Name: {name}</li>
                    <li class="list-group-item">Email: {email}</li>
                    <li class="list-group-item">Mobile Number: {mobile_number}</li>
                    <li class="list-group-item">Address Line 1: {address_line1}</li>
                    <li class="list-group-item">Address Line 2: {address_line2}</li>
                    <li class="list-group-item">Address Line 3: {address_line3}</li>
                    <li class="list-group-item">Building Name: {building_name}</li>
                    <li class="list-group-item">City/Area: {city}</li>
                    <li class="list-group-item">Landline Number: {landline_number}</li>
                    <li class="list-group-item">Address Line 1: {office_address_line1}</li>
                    <li class="list-group-item">Address Line 2: {office_address_line2}</li>
                    <li class="list-group-item">PO Box Number: {po_box_number}</li>
                </ul>

                <br /><br />

                  <UploadFiles  onSelectFile={this.handleProfilePicture} />
                    <div className="alert alert-light" role="alert">
                            {message}
                          </div>

                  <Signature />

                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={this.back}>Back</button>
                    </div>
                    <div className="col-6 text-right">
                        <button className="btn btn-primary" onClick={this.continue}>Submit</button> //save photo and signature.
                    </div>
                </div>
            </div>
        )
    }
}

export default ConfirmationPage