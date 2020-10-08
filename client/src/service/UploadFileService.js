import axios from 'axios';
const API_URL = 'http://localhost:8080'

class UploadFileService {







     uploadFile(file) {
         let formData = new FormData();
         formData.append("file", file);
         const config = {
            headers: {
             'content-type': 'multipart/form-data'
            }
         }
         console.log('upload file service   formData: ', formData);
        return axios.post(`${API_URL}/api/upload/`, formData,config);
     }

     getFiles() {
        return axios.get(`${API_URL}/api/getFiles`);
     }
}
export default new UploadFileService()