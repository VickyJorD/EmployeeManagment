import React from 'react';
import { Link } from 'react-router-dom';
import photo from './photo.avif';

const Home = () => {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: `url(${photo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0.5)', 
        backgroundBlendMode: 'lighten'
      }}
    >
      <div className="text-center mt-3" style={{ color: 'black' }}>
        <h1>Welcome to Employee Management System</h1>
        <p>Choose your login type:</p>

        <div className="btn-group" role="group">
          <Link to="/add-employee" className="btn btn-lg btn-dark mr-3">
            Employee Login
          </Link>
          <Link to="/AdminLogin" className="btn btn-lg btn-dark mr-2">
            Admin Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
