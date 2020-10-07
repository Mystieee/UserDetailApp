import axios from 'axios';
const API_URL = 'http://localhost:8080'

class OfficeService {
     addOfficeInfo(office) {
              return axios.post(`${API_URL}/api/addOffice/`, office);
        }
}
export default new OfficeService()