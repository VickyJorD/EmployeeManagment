import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdminService from '../Service/AdminService';

const AdminLogin = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate();

  const adminData = { username, password };

  const saveAdmin = (e) => {
    e.preventDefault();
    if (adminData.username !== '' && adminData.password !== '') {
      AdminService.saveAdmin(adminData)
        .then(() => {
          console.log('Admin data saved successfully!');
          // Optionally, you can redirect to another page after saving
          navigate('/ListAdmin');
        })
        .catch((error) => console.log('Error saving admin data:', error));
    } else {
      alert('Please, fill in all inputs');
    }
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="card col-md-6 offset-md-3 shadow-lg">
            <h2 className="text-center">Admin Login</h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                    className="form-control"
                    placeholder="Enter Username"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    className="form-control"
                    placeholder="Enter Password"
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <button onClick={(e) => saveAdmin(e)} className="btn btn-success text-center">
                    Login
                  </button>{' '}
                  <Link to="/employee" className="btn btn-danger">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
