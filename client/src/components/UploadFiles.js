import React, { Component } from "react";
import UploadFileService from "../service/UploadFileService.js";
import folderimage from "../images/folder_btn.png";
import ClickCameraPicture from "./ClickCameraPicture.js";

export default class UploadFiles extends Component {
  constructor(props) {
    super(props);
    this.selectFile = this.selectFile.bind(this);

    this.state = {
      selectedFiles: undefined,
      currentFile: undefined,
      message: "",
      file: null,
      fileInfos: []
    };
  }

  componentDidMount() {
    UploadFileService.getFiles().then(response => {
      this.setState({
        fileInfos: response.data
      });
    });
  }

  selectFile(event) {
    this.setState({
      selectedFiles: event.target.files,
      file: URL.createObjectURL(event.target.files[0])
    });
    this.props.onSelectFile(event.target.files);
  }

  render() {
    const { currentFile } = this.state;

    return (
      <div className="form-horizontal">
        <div className="row">
          <div className="col s6">
            <img className="profilePicture" alt="" src={this.state.file} />
          </div>
          <div className="col s6">
            <div className="row">
              <ClickCameraPicture />
            </div>
            <div className="row">
              {currentFile}
              <div className="image-upload">
                <label htmlFor="file-input">
                  <img src={folderimage} alt="" />
                </label>

                <input
                  id="file-input"
                  type="file"
                  accept="image/*"
                  onChange={this.selectFile}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
