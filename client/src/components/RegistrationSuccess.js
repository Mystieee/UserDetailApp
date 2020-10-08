import React, { Component } from 'react'

export class RegistrationSuccess extends Component {
    newForm = e => {
        e.preventDefault();
        this.props.beginningStep();
    };
    render() {
        return (
            <div>
                <h1 className="text-white">Registration Success</h1>
                <h1>Success </h1>
                <h3>Your application has been submitted.</h3>
                <button className="btn btn-primary" onClick={this.newForm}>OK</button>
            </div>
        )
    }
}

export default RegistrationSuccess