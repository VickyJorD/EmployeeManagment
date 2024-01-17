import axios from "axios";

const BASE_URL = "http://localhost:8012/employee";

class EmployeeServices {
  getAllEmployee() {
    return axios.get(BASE_URL);
  }
  saveEmployee(employeeData){
    return axios.post(BASE_URL,employeeData);
  }
  updateEmployee(employeeId, employeeData) {
    return axios.put(`${BASE_URL}/${employeeId}`, employeeData);
  }
  getEmployeeById(id){
    return axios.get(`${BASE_URL}/${id}`);
  }
  deleteEmployee(employeeId) {
    return axios.delete(`${BASE_URL}/${employeeId}`);
  }
}

export default new EmployeeServices();
