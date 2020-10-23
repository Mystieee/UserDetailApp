import React, { Component } from "react";
import Stepper from "react-stepper-horizontal";
import PersonalInfo from "./PersonalInfo";
import OfficeInfo from "./OfficeInfo";
import ConfirmationPage from "./ConfirmationPage";
import RegistrationSuccess from "./RegistrationSuccess";
import menu from "../images/menu.png";

const validNumberRegex = RegExp("^[0-9]+$");
const validEmailRegex = RegExp("^[a-zA-Z0-9.]+@[a-zA-Z0-9]+.(w*com\\w*)$");

export class Form extends Component {
  state = {
    step: 0,
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
    po_box_number: "",
    page: "",
    pageTitle: "",
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
    },
    steps: [
      {
        title: "Step 1",
        href: "",
        onClick: e => {
          e.preventDefault();
        }
      },
      {
        title: "Step 2",
        href: "",
        onClick: e => {
          e.preventDefault();
        }
      },
      {
        title: "Step 3",
        href: "",
        onClick: e => {
          e.preventDefault();
        }
      }
    ]
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  beginningStep = () => {
    const step = 0;
    this.setState({
      step: step,
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
    });
  };

  personalInfoPage = childData => {
    this.setState({ page: "Personal Info", pageTitle: "Personal Info Page" });
  };
  officeInfoPage = childData => {
    this.setState({ page: "Office Details", pageTitle: "Office Info Page" });
  };

  confirmationPage = childData => {
    this.setState({
      page: "Confirmation Page",
      pageTitle: "Confirmation Page"
    });
  };
  registrationPage = childData => {
    this.setState({ pageTitle: "Registration Success" });
  };
  inputChange = input => e => {
    const { name, value } = e.target;
    let errors = this.state.errors;

    switch (name) {
      case "name":
        errors.name =
          value.length < 5 ? "Name must be at least 5 characters long." : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value)
          ? ""
          : "Please enter a valid email address.";
        break;
      case "mobile_number":
        errors.mobile_number =
          validNumberRegex.test(value) && value.length === 10
            ? ""
            : "Mobile Number should be 10 digits.";
        break;
      case "address_line1":
        errors.address_line1 =
          value.length < 3 ? "Enter valid address for Address Line 1." : "";
        break;
      case "address_line2":
        errors.address_line2 =
          value.length < 3 ? "Enter valid address for Address Line 2." : "";
        break;
      case "address_line3":
        errors.address_line3 =
          value.length < 3 ? "Enter valid address for Address Line 3." : "";
        break;
      case "building_name":
        errors.building_name =
          value.length < 3 ? "Enter valid building name." : "";
        break;
      case "city":
        errors.city = value.length < 3 ? "Enter valid City name." : "";
        break;
      case "landline_number":
        errors.landline_number =
          validNumberRegex.test(value) && value.length === 8
            ? ""
            : "Landline Number should be 8 digits.";
        break;
      case "office_address_line1":
        errors.office_address_line1 =
          value.length < 3 ? "Enter valid address for Address Line 1." : "";
        break;
      case "office_address_line2":
        errors.office_address_line2 =
          value.length < 3 ? "Enter valid address for Address Line 2." : "";
        break;
      case "po_box_number":
        errors.po_box_number =
          validNumberRegex.test(value) && value.length === 5
            ? ""
            : "Enter valid PO Box Number.";
        break;

      default:
        break;
    }

    this.setState({ errors, [name]: value });

    this.setState({
      [input]: e.target.value
    });
  };

  render() {
    const { step, steps } = this.state;
    const {
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
    } = this.state;
    const values = {
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
    };

    return (
      <div>
        <div className="wizard-wrapper">
          <div className="pageName">
            <nav class="" role="navigation">
              <div class="row">
                <div class="col s12 text-left">
                  <p>{this.state.pageTitle}</p>
                </div>
              </div>
            </nav>
          </div>
          {step === 3 ? (
            ""
          ) : (
            <div className="topnav">
              <nav class="bg-white h-25" role="navigation">
                <div class="row">
                  <div class="col s6 text-left">
                    <p class="m-3">{this.state.page}</p>
                  </div>
                  <div class="col s6 text-right">
                    {step === 0 ? (
                      <div className="imageContainer">
                        <img src={menu} alt="menu" />
                        <div class="centered">User</div>
                      </div>
                    ) : (
                      <div className="imageContainer">
                        <img src={menu} alt="menu" />
                        <div class="centered">{this.state.name}</div>
                      </div>
                    )}
                  </div>
                </div>
              </nav>

              <Stepper
                steps={steps}
                activeStep={step}
                activeColor="#ee1b25"
                completeColor="#ee1b25"
                defaultCircleFontColor="grey"
                barStyle="solid"
                defaultBarColor="#fee5e3"
                completeBarColor="#ee1b25"
                lineMarginOffset={3}
                activeBorderStyle="solid"
                activeBorderColor="White"
                circleFontSize={14}
              />
            </div>
          )}
          {step === 0 && (
            <PersonalInfo
              nextStep={this.nextStep}
              inputChange={this.inputChange}
              values={values}
              errors={this.state.errors}
              {...this.props}
              personalInfoPage={this.personalInfoPage}
            />
          )}
          {step === 1 && (
            <OfficeInfo
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              inputChange={this.inputChange}
              values={values}
              errors={this.state.errors}
              {...this.props}
              officeInfoPage={this.officeInfoPage}
            />
          )}
          {step === 2 && (
            <ConfirmationPage
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
              confirmationPage={this.confirmationPage}
            />
          )}
          {step === 3 && (
            <RegistrationSuccess
              beginningStep={this.beginningStep}
              registrationPage={this.registrationPage}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Form;
