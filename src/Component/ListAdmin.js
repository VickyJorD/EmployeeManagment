import React, { useEffect, useState } from 'react';
import AdminService from '../Service/AdminService';
import { Link, NavLink } from 'react-router-dom';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

const ListAdmin = () => {
  const [adminArray, setAdminArray] = useState([]);

  useEffect(() => {
    const isLoggedIn = true; // Set this based on your authentication state

    if (isLoggedIn) {
      getAllAdmin();
    }
  }, []);

  function getAllAdmin() {
    AdminService.getAllAdmin()
      .then((res) => {
        setAdminArray(res.data);
        console.log(res);
      })
      .catch((e) => console.log(e));
  }

  const handleUpdate = (adminId) => {
    // You can implement the update logic here
    console.log('Update functionality to be implemented');
  };

  const handleDelete = (adminId) => {
    AdminService.deleteAdmin(adminId)
      .then((response) => {
        console.log('Delete successful', response);
        getAllAdmin();
      })
      .catch((error) => {
        console.error('Delete failed', error);
      });
  };

  return (
    <div className="container" style={{ marginLeft: '-85px' }}>
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
            <NavLink exact to="/employee" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Manage Employee</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/ListLeave" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Leave Application</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Document Management</CDBSidebarMenuItem>
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

        <div className="content-wrapper" style={{ marginLeft: '220px', padding: '20px' }}>
          <h2 className="text-center mb-4">List Admin</h2>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Admin Id</th>
                <th>Admin Username</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {adminArray.map((admin) => (
                <tr key={admin.id}>
                  <td>{admin.id}</td>
                  <td>{admin.username}</td>
                  <td>
                    <Link to={`/update-admin/${admin.id}`} onClick={() => handleUpdate(admin.id)} className="btn btn-info">
                      Update
                    </Link>{' '}
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(admin.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListAdmin;
