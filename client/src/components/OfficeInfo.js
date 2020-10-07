import React, { Component } from 'react'
import OfficeService from "../service/OfficeService.js"

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    // if we have an error string set valid to false
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

export class OfficeInfo extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();

         console.log(this.props.errors)
         if(validateForm(this.props.errors)) {
            console.info('Valid Office Info Form')
          }else{
            console.error('Invalid Office Info Form')
          }

           const { city, building_name, landline_number, office_address_line1, office_address_line2, po_box_number  } = this.props.values;
           const officeData = { city, building_name, landline_number, office_address_line1, office_address_line2, po_box_number  };

           OfficeService.addOfficeInfo(officeData)
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
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, inputChange , errors} = this.props;

        return (
            <div className="form-container">
                <h1 className="mb-5">Office Info Page</h1>

                {errors.building_name.length > 0 && <span className='error'>{errors.building_name}</span>}
                {errors.city.length > 0 && <span className='error'>{errors.city}</span>}
                {errors.landline_number.length > 0 && <span className='error'>{errors.landline_number}</span>}
                {errors.office_address_line1.length > 0 && <span className='error'>{errors.office_address_line1}</span>}
                {errors.office_address_line2.length > 0 && <span className='error'>{errors.office_address_line2}</span>}
                {errors.po_box_number.length > 0 && <span className='error'>{errors.po_box_number}</span>}

                  <div className="form-group">
                      <label htmlFor="building_name">Building Name</label>
                      <input type="text" className="form-control" name="building_name" onChange={inputChange('building_name')} value={values.building_name} />
                  </div>
                  <div className="form-group">
                      <label htmlFor="city">City/Area</label>
                      <input type="text" className="form-control" name="city" onChange={inputChange('city')} value={values.city} />
                  </div>
                  <div className="form-group">
                      <label htmlFor="landline_number">Landline Number</label>
                      <input type="text" className="form-control" name="landline_number" onChange={inputChange('landline_number')} value={values.landline_number} />
                  </div>
                  <div className="form-group">
                      <label htmlFor="office_address_line1">Address Line 1</label>
                      <input type="text" className="form-control" name="office_address_line1" onChange={inputChange('office_address_line1')} value={values.office_address_line1} />
                  </div>
                  <div className="form-group">
                      <label htmlFor="office_address_line2">Address Line 2</label>
                      <input type="text" className="form-control" name="office_address_line2" onChange={inputChange('office_address_line2')} value={values.office_address_line2} />
                  </div>
                  <div className="form-group">
                      <label htmlFor="po_box_number">PO Box Number</label>
                      <input type="text" className="form-control" name="po_box_number" onChange={inputChange('po_box_number')} value={values.po_box_number} />
                  </div>


                <br />
                 <div className="row">
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={this.back}>Back</button>
                    </div>
                    <div className="col-6 text-right">
                        <button className="btn btn-primary" onClick={this.continue}>Continue</button>
                    </div>
                 </div>
            </div>
        )
    }
}

export default OfficeInfo