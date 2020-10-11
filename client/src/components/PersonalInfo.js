import React, { Component } from 'react'
import PersonService from "../service/PersonService.js"

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

const validateInputIsEmpty = (inputValues) => {
    if(!inputValues.name || !inputValues.email || !inputValues.mobile_number || !inputValues.address_line1 || !inputValues.address_line2 || inputValues.address_line3){
        return true;
    }else{
        return false;
    }
}

export class PersonalInfo extends Component {

   constructor() {
       super();
       this.state = {
            errors_arr: []
       };
     }

     componentDidUpdate(prevProps) {
       if (this.props.values !== prevProps.values) {
            const { name, email, mobile_number, address_line1, address_line2, address_line3 } = this.props.values;
            const userDataUpdated = { name, email, mobile_number, address_line1, address_line2, address_line3 };

            //TODO: update form.
       }
     }

    continue = e => {
        e.preventDefault();
         const errors_arr = [];

         if(validateForm(this.props.errors)) {
                    console.info('Valid Personal Info Form')

                    this.setState({ errors_arr });
                     const { name, email, mobile_number, address_line1, address_line2, address_line3 } = this.props.values;
                     const userData = { name, email, mobile_number, address_line1, address_line2, address_line3 };

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
                                 this.props.nextStep();
                  }else{
                    console.error('Invalid Personal Info Form')

                    if(this.props.errors.name.length > 0 ){
                       errors_arr.push(this.props.errors.name);
                    }
                    if(this.props.errors.email.length > 0){
                       errors_arr.push(this.props.errors.email);
                    }
                    if(this.props.errors.mobile_number.length > 0){
                        errors_arr.push(this.props.errors.mobile_number);
                    }
                    if(this.props.errors.address_line1.length > 0){
                        errors_arr.push(this.props.errors.address_line1);
                    }
                    if(this.props.errors.address_line2.length > 0){
                         errors_arr.push(this.props.errors.address_line2);
                    }
                    if(this.props.errors.address_line3.length > 0){
                          errors_arr.push(this.props.errors.address_line3);
                    }

                    if(errors_arr.length > 0){
                        this.setState({ errors_arr });
                    }

                  }
    };

    render() {
        const { values, inputChange, errors } = this.props;

        return (
             <div className="form-container">
                <h1 className="mb-5">Personal Info Page</h1>

              <form className="form-horizontal">

                 {this.state.errors_arr.map(err => (
                          <p key={err} className="error-message" >{err}</p>
                        ))}

                    <div className="form-group row">
                        <label htmlFor="name" className="control-label col-sm-4">Name*</label>
                         <div className="col-sm-6">
                            <input type="text" className="form-control" name="name" onChange={inputChange('name')} value={values.name}/>
                         </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="email" className="control-label col-sm-4" >Email*</label>
                         <div className="col-sm-6">
                            <input type="email" className="form-control" name="email" onChange={inputChange('email')} value={values.email}/>
                         </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="mobile_number" className="control-label col-sm-4">Mobile Number*</label>
                         <div className="col-sm-6">
                            <input type="text" className="form-control" name="mobile_number" onChange={inputChange('mobile_number')} value={values.mobile_number}/>
                          </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="address_line1" className="control-label col-sm-4">Address Line1*</label>
                         <div className="col-sm-6">
                            <input type="address_line1" className="form-control" name="address_line1" onChange={inputChange('address_line1')} value={values.address_line1}/>
                         </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="address_line2" className="control-label col-sm-4">Address Line2</label>
                         <div className="col-sm-6">
                            <input type="address_line2" className="form-control" name="address_line2" onChange={inputChange('address_line2')} value={values.address_line2} />
                         </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="address_line3" className="control-label col-sm-4" >Address Line3</label>
                         <div className="col-sm-6">
                            <input type="address_line3" className="form-control" name="address_line3" onChange={inputChange('address_line3')} value={values.address_line3} />
                         </div>
                    </div>

             </form>      <br />
                    <button className="btn btn-primary" onClick={this.continue}>Next</button>
        </div>
        )
    }
}

export default PersonalInfo