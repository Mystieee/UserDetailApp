import axios from "axios";
const API_URL = "http://localhost:8080";

class PersonService {
  addPersonInfo(person) {
    return axios.post(`${API_URL}/api/addPerson/`, person);
  }
  updatePersonInfo(id, person) {
    return axios.put(`${API_URL}/api/updatePerson/${id}`, person);
  }
}
export default new PersonService();
