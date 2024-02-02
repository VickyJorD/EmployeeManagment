import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className='navbar navbar-expand-md navbar-dark bg-dark p-3'>
          <div>
            <Link to="/Home" className='navbar-brand m-5' >
              Employee Management
            </Link>
          </div>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <div className='ml-auto'>
              <Link to="/add-employee" className='navbar-brand m-2'>
                Login Employee
              </Link>

              <Link to="/AdminLogin" className='navbar-brand m-2'>
                Login Admin
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
