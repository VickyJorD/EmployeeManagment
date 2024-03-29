import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EmployeeServices from '../Service/EmployeeServices';

const ListEmployeeComponent = () => {
  const [employeeArray, setEmployeeArray] = useState([]);

  useEffect(() => {
    getAllEmployee();
  }, []);

  function getAllEmployee() {
    EmployeeServices.getAllEmployee()
      .then((res) => {
        setEmployeeArray(res.data);
        console.log(res);
      })
      .catch((e) => console.log(e));
  }

  const handleDelete = (employeeId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this employee?');

    if (confirmDelete) {
      EmployeeServices.deleteEmployee(employeeId)
        .then(() => {
          // Assuming you have a method to refresh the employee list
          getAllEmployee();
        })
        .catch((error) => console.error('Error deleting employee:', error));
    }
  };


  const handleUpdate = (employeeId) => {
    // Assuming you have some employee data to update
    const updatedEmployeeData = {
      
     };
  
    EmployeeServices.updateEmployee(employeeId, updatedEmployeeData)
      .then((response) => {
        console.log('Update successful', response);
        
        getAllEmployee(); // Refresh the employee list after the update
      })
      .catch((error) => {
        console.error('Update failed', error);
      });
  };

  return (
    <div className="container">
      
      <h2 className="text-center mb-4">List Employee</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee Username</th>
            <th>Employee Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employeeArray.map((employee) => (
            <tr id={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.username}</td>
              <td>{employee.role}</td>
              <td>
              <Link to={`/add-employee/${employee.id}`} onClick={() => handleUpdate(employee.id)}
                 className="btn btn-info">
                  Update
                </Link>{" "}
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
