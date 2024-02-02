import React from 'react'
import { useLeaveContext } from './LeaveContext';

const ListLeave = () => {

    const { leaveApplications } = useLeaveContext();
  return (
    <div className="container" style={{ marginLeft: '-85px' }}>
      <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
        <div className="content-wrapper" style={{ marginLeft: '220px', padding: '20px' }}>
          <h2 className="text-center mb-4">List Admin</h2>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Reason</th>
              </tr>
            </thead>
            <tbody>
              {leaveApplications.map((application, index) => (
                <tr key={index}>
                  <td>{application.employeeName}</td>
                  <td>{application.startDate}</td>
                  <td>{application.endDate}</td>
                  <td>{application.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ListLeave
