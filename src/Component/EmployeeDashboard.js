// EmployeeDashboard.js


import { Container, Row, Col, Card,  } from 'react-bootstrap';

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EmployeeServices from '../Service/EmployeeServices';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
  import { NavLink } from 'react-router-dom';



const EmployeeDashboard = () => {


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



    
    <div className="d-flex" style={{ marginLeft: '-75px' }}>
     
     <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Sidebar
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Manage Employee</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/add-employee" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Logout</CDBSidebarMenuItem>
            </NavLink>

        
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>





      <Container fluid className="p-4">
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <h2 className='text-center'>Welcome to the Employee Dashboard</h2>
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
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EmployeeDashboard;
