import { createContext, useContext, useState } from 'react';

const LeaveContext = createContext();

export const LeaveProvider = ({ children }) => {
  const [leaveApplications, setLeaveApplications] = useState([]);

  const addLeaveApplication = (application) => {
    setLeaveApplications([...leaveApplications, application]);
  };

  return (
    <LeaveContext.Provider value={{ leaveApplications, addLeaveApplication }}>
      {children}
    </LeaveContext.Provider>
  );
};

export const useLeaveContext = () => useContext(LeaveContext);
