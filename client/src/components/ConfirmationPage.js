import React, { Component } from 'react'
import  UploadFiles from './UploadFiles.js';

export class ConfirmationPage extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {
            values: { name, email, mobile_number, address_line1, address_line2, address_line3, city, building_name, landline_number, office_address_line1, office_address_line2, po_box_number }
        } = this.props;
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

                  <UploadFiles />
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