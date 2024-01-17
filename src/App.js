import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import HeaderComponent from './Component/HeaderComponent';
import FooterComponent from './Component/FooterComponent';
import AddEmployeeXomponent from './Component/AddEmployeeXomponent';
import ListEmployeeComponent from './Component/ListEmployeeComponent';

import EmployeeDashboard from './Component/EmployeeDashboard';
import AdminLogin from './Component/AdminLogin';
import ListAdmin from './Component/ListAdmin';


function App() {
  return (
   
      <BrowserRouter>
     <HeaderComponent/>
       <div className='container'>
      <Routes>
      <Route path='/' element={<ListEmployeeComponent/>}/>

        <Route path='/employee' element={<ListEmployeeComponent/>}/>
        <Route path='/add-employee' element={<AddEmployeeXomponent/>}/>
        <Route path='/add-employee/:id' element={<AddEmployeeXomponent/>}/>
       
        <Route path='/EmployeeDashboard' element={<EmployeeDashboard/>}/>
        <Route path='/AdminLogin' element={<AdminLogin/>}/>
        <Route path='/ListAdmin' element={<ListAdmin/>}/>




      </Routes>
      </div>
      <FooterComponent/>
      
      </BrowserRouter>
    
  );
}

export default App;
