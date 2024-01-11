import React, { useEffect, useState } from 'react'
import EmployeeServices from '../Service/EmployeeServices';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';

const AddEmployeeXomponent = () => {
  const[username ,setusername]= useState('');
  const[password,setpassword]=useState('');
  const[role,setRole]=useState('');
  const navigate =useNavigate();
const {id}=useParams();

  const employeeData ={username,password,role};


  
  function saveEmployee(e){

    e.preventDefault();
    if(employeeData.username !=="" && employeeData.password !="" && employeeData.role !=""){
if(id){
  EmployeeServices.updateEmployee(id,employeeData)
  .then(navigate("/employee"))
  .catch(e=>console.log(e));
}else{
  EmployeeServices.saveEmployee(employeeData)
  .then(navigate("/employee"))
  .catch(e=>console.log(e));
}
     
    }else{
      alert("Please,fill in all inputs ");
    }
    

  }


  function tile() {
    if(id){
      return "Update Employee";
    }else{
      return "ADD Employee";
    }
  }


  useEffect(()=>{
    EmployeeServices.getEmployeeById(id)
    .then(res=>{
      setusername(res.data.username);
      setpassword(res.data.password);
      setRole(res.data.role);
    }).catch(e=>{console.log(e); });
  
  })




  return (
    <div>
      <div className="container mt-5">
        <div className="row">
            <div className="card col-md-6 offset-md-3 shadow-lg">
                <h2 className="text-center">{tile()}</h2>
                <div className="card-body">
                    <form action="">
                        <div className="form-group mb-2">
                            <input type="text" value={username} onChange={(e)=>setusername(e.target.value)} className="form-control"  placeholder='Enter Username' />
                        </div>
                        <div className="form-group mb-2">
                        <input type="text" value={password} onChange={(e)=>setpassword(e.target.value)} className="form-control" placeholder='Enter Passwrod' />
                        </div>
                        <div className="from-group mb-2">
                            <input type="text" value={role} onChange={(e)=>setRole(e.target.value)} className="form-control" placeholder='Enter Role'/>
                        </div>
                        <button onClick={(e)=>saveEmployee(e)} className='btn btn-success'> Login</button>{" "}
                        <Link to={"/employee"} className='btn btn-danger'>Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddEmployeeXomponent
