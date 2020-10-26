import React, { Component } from "react";
import OfficeService from "../service/OfficeService.js";

const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

export class OfficeInfo extends Component {
  constructor() {
    super();
    this.state = {
      errors_arr: []
    };
  }

  continue = e => {
    e.preventDefault();

    const errors_arr = [];

    if (validateForm(this.props.errors)) {
      this.setState({ errors_arr });
      const {
        city,
        building_name,
        landline_number,
        office_address_line1,
        office_address_line2,
        po_box_number
      } = this.props.values;
      const officeData = {
        city,
        building_name,
        landline_number,
        office_address_line1,
        office_address_line2,
        po_box_number
      };
      if (building_name === "") {
        errors_arr.push("Enter Building Name");
      } else if (city === "") {
        errors_arr.push("Enter City");
      } else if (landline_number === "") {
        errors_arr.push("Enter Landline Number");
      } else if (office_address_line1 === "") {
        errors_arr.push("Enter Address line 1");
      } else {
        OfficeService.addOfficeInfo(officeData)
          .then(response => {
            response.json().then(data => {
              console.log("Successful" + data);
            });
          })
          .catch(error => {
            if (error.response) {
              console.log("error -->", error.response);
            }
          });

        this.props.nextStep();
      }
    } else {
      console.error("Invalid Office Info Form");

      if (this.props.errors.city.length > 0) {
        errors_arr.push(this.props.errors.city);
      }
      if (this.props.errors.landline_number.length > 0) {
        errors_arr.push(this.props.errors.landline_number);
      }
      if (this.props.errors.building_name.length > 0) {
        errors_arr.push(this.props.errors.building_name);
      }
      if (this.props.errors.office_address_line1.length > 0) {
        errors_arr.push(this.props.errors.office_address_line1);
      }
      if (this.props.errors.office_address_line2.length > 0) {
        errors_arr.push(this.props.errors.office_address_line2);
      }
      if (this.props.errors.po_box_number.length > 0) {
        errors_arr.push(this.props.errors.po_box_number);
      }

      if (errors_arr.length > 0) {
        this.setState({ errors_arr });
      }
    }
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  componentDidMount() {
    this.props.officeInfoPage();
  }
  render() {
    const { values, inputChange } = this.props;

    return (
      <div className="form-container">
        <form className="form-horizontal">
          {this.state.errors_arr.map(err => (
            <p key={err} className="error-message">
              {err}
            </p>
          ))}
          <div className="form-group row">
            <label htmlFor="building_name" className="control-label col-sm-4">
              Building Name
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                name="building_name"
                onChange={inputChange("building_name")}
                value={values.building_name}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="city" className="control-label col-sm-4">
              City/Area
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                name="city"
                onChange={inputChange("city")}
                value={values.city}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="landline_number" className="control-label col-sm-4">
              Landline Number
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                name="landline_number"
                onChange={inputChange("landline_number")}
                value={values.landline_number}
              />
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="office_address_line1"
              className="control-label col-sm-4"
            >
              Address Line 1
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                name="office_address_line1"
                onChange={inputChange("office_address_line1")}
                value={values.office_address_line1}
              />
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="office_address_line2"
              className="control-label col-sm-4"
            >
              Address Line 2
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                name="office_address_line2"
                onChange={inputChange("office_address_line2")}
                value={values.office_address_line2}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="po_box_number" className="control-label col-sm-4">
              PO Box Number
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                name="po_box_number"
                onChange={inputChange("po_box_number")}
                value={values.po_box_number}
              />
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
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default OfficeInfo;
