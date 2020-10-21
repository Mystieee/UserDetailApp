import React, { Component } from "react";

export class RegistrationSuccess extends Component {
  newForm = e => {
    e.preventDefault();
    this.props.beginningStep();
  };
  render() {
    return (
      <div className="form-container">
        <div className="form-horizontal">
          <h1>Success </h1>
          <h3>Your application has been submitted.</h3>
          <button class="btn btn-danger" onClick={this.newForm}>
            OK
          </button>
        </div>
      </div>
    );
  }
}

export default RegistrationSuccess;
