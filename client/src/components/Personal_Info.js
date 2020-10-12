import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
const validEmailRegex = RegExp("^[a-zA-Z0-9.]+@[a-zA-Z0-9]+.(w*com\\w*)$");
const validNumberRegex = RegExp("^[0-9]+$");

class Personal_Info extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: "",
      name: "",
      email: "",
      mobile_number: "",
      address_line1: "",
      address_line2: "",
      address_line3: "",
      errors: {
        name: "",
        email: "",
        mobile_number: "",
        address_line1: "",
        address_line2: "",
        address_line3: "",
        building_name: "",
        city: "",
        landline_number: "",
        office_address_line1: "",
        office_address_line2: "",
        po_box_number: ""
      }
    };

    this.onSaveButtonSubmit = this.onSaveButtonSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  componentDidMount() {
    console.log(this.state.id);

    // eslint-disable-next-line
    if (this.state.id == -1) {
      return;
    }

    //getall
  }

  validate(values) {
    let errors = this.state.errors;

    if (!values.name) {
      errors.name = "Enter a Name";
    } else if (values.name.length < 3) {
      errors.name = "Enter atleast 3 Characters in Name.";
    } else {
      errors.name = "";
    }

    if (!values.email) {
      errors.email = "Enter an Email.";
    } else if (!validEmailRegex.test(values.email)) {
      errors.email = "Enter a Valid email.";
    } else {
      errors.email = "";
    }

    if (!values.mobile_number) {
      errors.mobile_number = "Enter a Mobile Number.";
    } else if (
      !(
        validNumberRegex.test(values.mobile_number) &&
        values.mobile_number.length == 10
      )
    ) {
      errors.mobile_number = "Mobile Number should be 10 digits.";
    } else {
      errors.mobile_number = "";
    }

    if (!values.address_line1) {
      errors.address_line1 = "Enter Address Line 1.";
    } else if (values.address_line1.length < 3) {
      errors.address_line1 = "Enter valid address for Address Line 1.";
    } else {
      errors.address_line1 = "";
    }

    console.log("Done validating.");
    return errors;
  }

  onSaveButtonSubmit(values) {
    console.log("Submit cliked:----------------", values);
    let personInfo = {
      name: values.name,
      email: values.email,
      mobile_number: values.mobile_number,
      address_line1: values.address_line1,
      address_line2: values.address_line2,
      address_line3: values.address_line3,

      targetDate: values.targetDate
    };

    if (this.state.id === -1) {
      //add
    } else {
      //update
    }

    console.log(values);
  }

  render() {
    let {
      name,
      email,
      mobile_number,
      address_line1,
      address_line2,
      address_line3
    } = this.state;

    return (
      <div className="form-container">
        <div className="top">
          <h3>Course</h3>
          steps..
        </div>
        <br />
        <div className="container">
          <Formik
            initialValues={this.state}
            validateOnChange={false}
            validateOnBlur={false}
            validate={this.validate}
            onSubmit={this.onSaveButtonSubmit}
            enableReinitialize
          >
            {props => (
              <Form className="form-horizontal">
                <ErrorMessage
                  name="name"
                  component="div"
                  className="alert alert-warning"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="alert alert-warning"
                />
                <ErrorMessage
                  name="mobile_number"
                  component="div"
                  className="alert alert-warning"
                />
                <ErrorMessage
                  name="address_line1"
                  component="div"
                  className="alert alert-warning"
                />

                <fieldset className="form-group row">
                  <label className="control-label col-sm-4">Name</label>
                  <Field className="col-sm-6" type="text" name="name" />
                </fieldset>
                <fieldset className="form-group row">
                  <label className="control-label col-sm-4">Email</label>
                  <Field className="col-sm-6" type="text" name="email" />
                </fieldset>
                <fieldset className="form-group row">
                  <label className="control-label col-sm-4">
                    Mobile Number
                  </label>
                  <Field
                    className="col-sm-6"
                    type="text"
                    name="mobile_number"
                  />
                </fieldset>
                <fieldset className="form-group row">
                  <label className="control-label col-sm-4">
                    Address Line 1
                  </label>
                  <Field
                    className="col-sm-6"
                    type="text"
                    name="address_line1"
                  />
                </fieldset>
                <fieldset className="form-group row">
                  <label className="control-label col-sm-4">
                    Address Line 2
                  </label>
                  <Field
                    className="col-sm-6"
                    type="text"
                    name="address_line2"
                  />
                </fieldset>
                <fieldset className="form-group row">
                  <label className="control-label col-sm-4">
                    Address Line 3
                  </label>
                  <Field
                    className="col-sm-6"
                    type="text"
                    name="address_line3"
                  />
                </fieldset>
                <button className="btn btn-success" type="submit">
                  Save
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default Personal_Info;
