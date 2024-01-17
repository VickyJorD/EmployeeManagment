import React, { useEffect, useState } from 'react';
import AdminService from '../Service/AdminService';
import { Link } from 'react-router-dom';

const ListAdmin = () => {
  const [adminArray, setAdminArray] = useState([]);

  useEffect(() => {
    // Assuming you have some mechanism to check if the user is logged in
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
    // Assuming you have some admin data to update
    const updatedAdminData = {
      // ...
    };

    AdminService.updateAdmin(adminId, updatedAdminData)
      .then((response) => {
        console.log('Update successful', response);

        getAllAdmin(); // Refresh the admin list after the update
      })
      .catch((error) => {
        console.error('Update failed', error);
      });
  };

  const handleDelete = (adminId) => {
    // Assuming you have some mechanism to handle admin deletion
    AdminService.deleteAdmin(adminId)
      .then((response) => {
        console.log('Delete successful', response);

        getAllAdmin(); // Refresh the admin list after the deletion
      })
      .catch((error) => {
        console.error('Delete failed', error);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4">List admin</h2>
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
  );
};

export default ListAdmin;
