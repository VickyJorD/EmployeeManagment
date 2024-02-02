import React, { useState } from 'react';
import { useLeaveContext } from './LeaveContext';
import { useNavigate } from 'react-router-dom';


const LeaveApplication = () => {
  const { addLeaveApplication } = useLeaveContext();
  const history = useNavigate();

  const [employeeName, setEmployeeName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!employeeName || !startDate || !endDate || !reason) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);

    const formData = {
      employeeName,
      startDate,
      endDate,
      reason,
      approved: false,
    };

    try {
      const response = await fetch('http://localhost:8012/api/leave-applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data);

        // Add the submitted data to the context
        addLeaveApplication(formData);

        // Navigate to the ListLeave component
        history('/ListLeave');
      } else {
        console.error('Server Error:', response.statusText);
        alert('Failed to submit leave application. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Leave Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="employeeName" className="form-label">Employee Name:</label>
          <input type="text" className="form-control" id="employeeName" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="startDate" className="form-label">Start Date:</label>
          <input type="date" className="form-control" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="endDate" className="form-label">End Date:</label>
          <input type="date" className="form-control" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="reason" className="form-label">Reason:</label>
          <textarea className="form-control" id="reason" rows="3" value={reason} onChange={(e) => setReason(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default LeaveApplication;
