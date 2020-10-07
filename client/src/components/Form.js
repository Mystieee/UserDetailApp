import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import OfficeInfo from './OfficeInfo';
import ConfirmationPage from './ConfirmationPage';
import RegistrationSuccess from './RegistrationSuccess';

const validMobileNumberRegex = RegExp('^[0-9]+$');
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
      errors: {
           name: '',
           email: '',
           mobile_number: '',
           address_line1: '',
           address_line2: '',
           address_line3: ''
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
                       console.log('is valid email? ', validEmailRegex.test(value));
                         errors.email =
                          validEmailRegex.test(value)
                             ? ''
                             : 'Please enter a valid email address.';
                         break;
                       case 'mobile_number':
                            console.log('mobile contains digits? ',validMobileNumberRegex.test(value));
                         errors.mobile_number = (validMobileNumberRegex.test(value) && (value.length == 10))
                             ? ''
                             : 'Mobile Number should be 10 digits.';
                         break;
                       case 'address_line1':
                       console.log('addressline1', value.length, 'valid? ',( value.length < 3 ? 'false': 'true'))
                         errors.address_line1 =
                           value.length < 3
                             ? 'Enter valid address for Address Line 1.'
                             : '';
                         break;
                       case 'address_line2':
                            console.log('addressline2', value.length, 'valid? ',( value.length < 3 ? 'false': 'true'))
                         errors.address_line2 =
                           value.length < 3
                             ? 'Enter valid address for Address Line 2.'
                             : '';
                         break;
                       case 'address_line3':
                       console.log('addressline3', value.length, 'valid? ',( value.length < 3 ? 'false': 'true'))
                         errors.address_line3 =
                           value.length < 3
                             ? 'Enter valid address for Address Line 3.'
                             : '';
                         break;
                       default:
                         break;
                     }

        this.setState({errors, [name]: value}, ()=> {
                                                        console.log(errors)
                                                    })

        this.setState({
            [input]: e.target.value
        });
    };

    render() {
        const { step } = this.state;
        const { name, email, mobile_number, address_line1, address_line2, address_line3 } = this.state;
        const values = { name, email, mobile_number, address_line1, address_line2, address_line3 };

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
                    <RegistrationSuccess />
                );
        }
    }
}

export default Form