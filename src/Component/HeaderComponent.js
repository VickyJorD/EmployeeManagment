import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className='navbar navbar-expand-md navbar-dark bg-dark p-3'>
          <div>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className='navbar-brand m-5' href=''>
              Employee Management
            </a>
          </div>
          <div className='ml-auto'>
            <Link to="/add-employee" className='navbar-brand m-5'>
              Login Employee
            </Link>

            <Link to="/AdminLogin" className='navbar-brand m-5'>
              Login Admin
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
