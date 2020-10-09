import React, { Component } from "react";
import UploadFileService from "../service/UploadFileService.js";

export default class UploadFiles extends Component {
  constructor(props) {
    super(props);
    this.selectFile = this.selectFile.bind(this);

    this.state = {
      selectedFiles: undefined,
      currentFile: undefined,
      message:'',
      progress: 0,

      fileInfos: [],
    };
  }

  componentDidMount() {
    UploadFileService.getFiles().then((response) => {
      this.setState({
        fileInfos: response.data,
      });
    });
  }

  selectFile(event) {
    console.log("file to be uploaded: ",event.target.files);
    this.setState({
      selectedFiles: event.target.files,
    });
    console.log("this.state.selectedFile", event.target.files);
     this.props.onSelectFile(event.target.files);

  }

  render() {
    const {
      selectedFiles,
      currentFile,
      message,
      progress,
      fileInfos,
    } = this.state;

    return (
      <div>
        {currentFile && (
          <div className="progress">
            <div
              className="progress-bar progress-bar-info progress-bar-striped"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: progress + "%" }}
            >
              {progress}%
            </div>
          </div>
        )}

        <label className="btn btn-default">
          <input type="file" onChange={this.selectFile} />
        </label>
    </div>
    );
  }
}