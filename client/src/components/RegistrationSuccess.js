import React, { Component } from "react";
import tick from "../images/tick.png";

export class RegistrationSuccess extends Component {
  newForm = e => {
    e.preventDefault();
    this.props.beginningStep();
  };
  componentDidMount() {
    this.props.registrationPage();
  }
  render() {
    return (
      <div className="form-container">
        <div className="form-horizontal">
          <img src={tick} alt="tick" />
          <h1>Success </h1>
          <br />
          <h3>Your application has been submitted.</h3>
          <br />
          <button class="btn btn-danger" onClick={this.newForm}>
            OK
          </button>
        </div>
      </div>
    );
  }
}

export default RegistrationSuccess;
