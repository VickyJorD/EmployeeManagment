import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import HeaderComponent from './Component/HeaderComponent';
import FooterComponent from './Component/FooterComponent';
import AddEmployeeXomponent from './Component/AddEmployeeXomponent';
import ListEmployeeComponent from './Component/ListEmployeeComponent';


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



      </Routes>
      </div>
      <FooterComponent/>
      
      </BrowserRouter>
    
  );
}

export default App;
