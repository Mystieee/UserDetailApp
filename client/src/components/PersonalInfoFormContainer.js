import React, {Component} from 'react';
import Input from './Input.js';
import Button from './Button.js';
import PersonService from "../service/PersonService.js"

const validMobileNumberRegex = RegExp('^[0-9]+$');
const validEmailRegex = RegExp('^[a-zA-Z0-9]+@[a-zA-Z0-9]+.(w*com\\w*)$');

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    // if we have an error string set valid to false
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class PersonalInfoFormContainer extends Component{
constructor(props) {
    super(props);

    this.state = {
      user: {
        name: '',
        email: '',
        mobile_number: '',
        address_line1: '',
        address_line2: '',
        address_line3: ''
       },
       errors: {
           name: '',
           email: '',
           mobile_number: '',
           address_line1: '',
           address_line2: '',
           address_line3: ''
       }
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
}

handleInput(e) {
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

     this.setState({errors, [name]: value})

     this.setState( prevState => {
        return {
           user : {...prevState.user, [name]: value}
        }
     }, () => console.log(this.state.user)
     )
 }

handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.user;

    console.log(this.state.errors)
     if(validateForm(this.state.errors)) {
        console.info('Valid Form')
      }else{
        console.error('Invalid Form')
      }

 PersonService.addPersonInfo(userData)
        .then(response => {
                response.json().then(data =>{
                  console.log("Successful" + data);
                })
            })
        .catch((error) => {
                if(error.response){
                    console.log("error -->",error.response);
                }
            })




  }



render(){
const {errors} = this.state;
   return(
     <div className="formContainer">
      <form id="person-form"  onSubmit={this.handleFormSubmit}>

                {errors.name.length > 0 && <span className='error'>{errors.name}</span>}
                {errors.email.length > 0 && <span className='error'>{errors.email}</span>}
                {errors.mobile_number.length > 0 && <span className='error'>{errors.mobile_number}</span>}
                {errors.address_line1.length > 0 && <span className='error'>{errors.address_line1}</span>}
                {errors.address_line2.length > 0 && <span className='error'>{errors.address_line2}</span>}
                {errors.address_line3.length > 0 && <span className='error'>{errors.address_line3}</span>}

              <Input type={'text'} title= {'Name'}  name= {'name'} value={this.state.user.name}   handleChange = {this.handleInput}/> {/* Name of the user */}
              <Input  type={'text'} title= {'Email'}  name= {'email'} value={this.state.user.email}   handleChange = {this.handleInput}/> {/* Email */}
              <Input type={'text'} title= {'Mobile Number'}  name= {'mobile_number'} value={this.state.user.mobile_number}   handleChange = {this.handleInput}/> {/* Mobile number */}
              <Input type={'text'} title= {'Address Line 1'}  name= {'address_line1'} value={this.state.user.address_line1}   handleChange = {this.handleInput}/> {/* adressLine1 */}
              <Input type={'text'} title= {'Address Line 2'}  name= {'address_line2'} value={this.state.user.address_line2}   handleChange = {this.handleInput}/> {/* addressLine2 */}
              <Input type={'text'} title= {'Address Line 3'}  name= {'address_line3'} value={this.state.user.address_line3}   handleChange = {this.handleInput}/> {/* addressLine3 */}

               <Button title={'Next'} action={this.handleFormSubmit}  /> {/*  Button Next*/}

            </form>
          </div>
   )
}
}
export default PersonalInfoFormContainer;