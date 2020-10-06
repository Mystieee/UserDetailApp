import React, {Component} from 'react';
import Input from './Input.js';
import Button from './Button.js';
import PersonService from "../service/PersonService.js"

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
     let value = e.target.value;
     let name = e.target.name;
     this.setState( prevState => {
        return {
           user : {
                    ...prevState.user, [name]: value
                   }
        }
     }, () => console.log(this.state.user)
     )
 }

handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.user;

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
   return(
      <form className="container" onSubmit={this.handleFormSubmit}>

              <Input type={'text'} title= {'Name'}  name= {'name'} value={this.state.user.name}   handleChange = {this.handleInput}/> {/* Name of the user */}
              <Input  type={'text'} title= {'Email'}  name= {'email'} value={this.state.user.email}   handleChange = {this.handleInput}/> {/* Email */}
              <Input type={'text'} title= {'Mobile Number'}  name= {'mobile_number'} value={this.state.user.mobile_number}   handleChange = {this.handleInput}/> {/* Mobile number */}
              <Input type={'text'} title= {'Address Line 1'}  name= {'address_line1'} value={this.state.user.address_line1}   handleChange = {this.handleInput}/> {/* adressLine1 */}
              <Input type={'text'} title= {'Address Line 2'}  name= {'address_line2'} value={this.state.user.address_line2}   handleChange = {this.handleInput}/> {/* addressLine2 */}
              <Input type={'text'} title= {'Address Line 3'}  name= {'address_line3'} value={this.state.user.address_line3}   handleChange = {this.handleInput}/> {/* addressLine3 */}

               <Button title={'Next'} action={this.handleFormSubmit}  /> {/*  Button Next*/}

            </form>
   )
}
}
export default PersonalInfoFormContainer;