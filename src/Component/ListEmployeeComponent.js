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

  return (
    <div className="container">
      <Link to="/add-employee" className="btn btn-primary mb-2 mt-3">
        Add Employee
      </Link>
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
                <Link to={`/add-employee/${employee.id}`} className="btn btn-info">
                  Update
                </Link>{" "}
               <a className="btn btn-danger" href="">Delete</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
