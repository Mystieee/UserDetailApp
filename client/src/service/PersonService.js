import axios from 'axios';
const API_URL = 'http://localhost:8080'

class PersonService {
     addPersonInfo(person) {
                console.log('data in service: ',person)
              return axios.post(`${API_URL}/api/addPerson/`, person);
        }
}
export default new PersonService()