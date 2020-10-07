import React, {Component} from 'react';
import './FormStyles.css';
import PersonalInfoFormContainer from './PersonalInfoFormContainer.js';
import PersonInfoPage from './PersonInfoPage.js';

class PersonalInfo extends Component{
render(){
    return(
        <div className="container">

            <PersonInfoPage />
            <hr />
            <PersonalInfoFormContainer />
        </div>
    )
}
}
export default PersonalInfo;