import React, { Component } from 'react'
import PersonService from "../service/PersonService.js"

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    // if we have an error string set valid to false
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

export class PersonalInfo extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();

         if(validateForm(this.props.errors)) {
            console.info('Valid Personal Info Form')
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
          }else{
            console.error('Invalid Personal Info Form')
          }


    };

    render() {
        const { values, inputChange, errors } = this.props;

        return (
             <div className="form-container">
                <h1 className="mb-5">Personal Info Page</h1>

                    {errors.name.length > 0 && <span className='error'>{errors.name}</span>}
                    {errors.email.length > 0 && <span className='error'>{errors.email}</span>}
                    {errors.mobile_number.length > 0 && <span className='error'>{errors.mobile_number}</span>}
                    {errors.address_line1.length > 0 && <span className='error'>{errors.address_line1}</span>}
                    {errors.address_line2.length > 0 && <span className='error'>{errors.address_line2}</span>}
                    {errors.address_line3.length > 0 && <span className='error'>{errors.address_line3}</span>}

              <form className="form-horizontal">


                    <div className="form-group row">
                        <label htmlFor="name" className="control-label col-sm-4">Name</label>
                         <div className="col-sm-6">
                            <input type="text" className="form-control" name="name" onChange={inputChange('name')} value={values.name} />
                         </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="email" className="control-label col-sm-4" >Email</label>
                         <div className="col-sm-6">
                            <input type="email" className="form-control" name="email" onChange={inputChange('email')} value={values.email} />
                         </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="mobile_number" className="control-label col-sm-4">Mobile Number</label>
                         <div className="col-sm-6">
                            <input type="text" className="form-control" name="mobile_number" onChange={inputChange('mobile_number')} value={values.mobile_number} />
                          </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="address_line1" className="control-label col-sm-4">Address Line1</label>
                         <div className="col-sm-6">
                            <input type="address_line1" className="form-control" name="address_line1" onChange={inputChange('address_line1')} value={values.address_line1} />
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