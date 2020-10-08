import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import OfficeInfo from './OfficeInfo';
import ConfirmationPage from './ConfirmationPage';
import RegistrationSuccess from './RegistrationSuccess';

const validNumberRegex = RegExp('^[0-9]+$');
const validEmailRegex = RegExp('^[a-zA-Z0-9]+@[a-zA-Z0-9]+.(w*com\\w*)$');

export class Form extends Component {
   state = {
      step: 1,
      name: '',
      email: '',
      mobile_number: '',
      address_line1: '',
      address_line2: '',
      address_line3: '',
      building_name: '',
      city: '',
      landline_number: '',
      office_address_line1: '',
      office_address_line2: '',
      po_box_number: '',

      errors: {
           name: '',
           email: '',
           mobile_number: '',
           address_line1: '',
           address_line2: '',
           address_line3: '',
           building_name: '',
           city: '',
           landline_number: '',
           office_address_line1: '',
           office_address_line2: '',
           po_box_number: ''
      }
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
        const { step } = this.state;
        this.setState({ step: 1 });
    };

    inputChange = input => e => {

        const { name, value } = e.target;
        let errors = this.state.errors;

        switch (name) {
                       case 'name':
                         errors.name =
                           value.length < 5
                             ? 'Name must be 5 characters long.'
                             : '';
                         break;
                       case 'email':
                         errors.email =
                          validEmailRegex.test(value)
                             ? ''
                             : 'Please enter a valid email address.';
                         break;
                       case 'mobile_number':
                         errors.mobile_number = (validNumberRegex.test(value) && (value.length == 10))
                             ? ''
                             : 'Mobile Number should be 10 digits.';
                         break;
                       case 'address_line1':
                         errors.address_line1 =
                           value.length < 3
                             ? 'Enter valid address for Address Line 1.'
                             : '';
                         break;
                       case 'address_line2':
                         errors.address_line2 =
                           value.length < 3
                             ? 'Enter valid address for Address Line 2.'
                             : '';
                         break;
                       case 'address_line3':
                         errors.address_line3 =
                           value.length < 3
                             ? 'Enter valid address for Address Line 3.'
                             : '';
                         break;
                       case 'building_name':
                          errors.building_name =
                            value.length < 3
                              ? 'Enter valid building name.'
                              : '';
                          break;
                       case 'city':
                        errors.city =
                          value.length < 3
                            ? 'Enter valid City name.'
                            : '';
                        break;
                       case 'landline_number':
                         errors.landline_number = (validNumberRegex.test(value) && (value.length == 8))
                             ? ''
                             : 'Landline Number should be 8 digits.';
                        break;
                       case 'office_address_line1':
                        errors.office_address_line1 =
                          value.length < 3
                            ? 'Enter valid address for Address Line 1.'
                            : '';
                        break;
                       case 'office_address_line2':
                        errors.office_address_line2 =
                          value.length < 3
                            ? 'Enter valid address for Address Line 2.'
                            : '';
                        break;
                       case 'po_box_number':
                         errors.po_box_number = (validNumberRegex.test(value) && (value.length == 5))
                             ? ''
                             : 'Enter valid PO Box Number.';
                        break;

                       default:
                         break;
                     }

        this.setState({errors, [name]: value})

        this.setState({
            [input]: e.target.value
        });
    };

    render() {
        const { step } = this.state;
        const { name, email, mobile_number, address_line1, address_line2, address_line3, city, building_name, landline_number, office_address_line1, office_address_line2, po_box_number } = this.state;
        const values = { name, email, mobile_number, address_line1, address_line2, address_line3, city, building_name, landline_number, office_address_line1, office_address_line2, po_box_number};

        switch (step) {
            case 1:
                return (
                    <PersonalInfo
                        nextStep={this.nextStep}
                        inputChange={this.inputChange}
                        values={values}
                        errors = {this.state.errors}
                    />
                );
            case 2:
                return (
                    <OfficeInfo
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                        errors = {this.state.errors}
                    />
                );
            case 3:
                return (
                    <ConfirmationPage
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
            case 4:
                return (
                    <RegistrationSuccess beginningStep={this.beginningStep} />
                );
        }
    }
}

export default Form