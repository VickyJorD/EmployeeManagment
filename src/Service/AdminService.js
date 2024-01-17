import axios from "axios";


const BASE_URL = "http://localhost:8012/admin";
class AdminService{
    getAllAdmin() {
        return axios.get(BASE_URL);
      }
      saveAdmin(adminData){
        return axios.post(BASE_URL,adminData);
      }
      updateAdmin(adminId, adminData) {
        return axios.put(`${BASE_URL}/${adminId}`, adminData);
      }
      getAdminById(id){
        return axios.get(`${BASE_URL}/${id}`);
      }

}
export default new AdminService();
