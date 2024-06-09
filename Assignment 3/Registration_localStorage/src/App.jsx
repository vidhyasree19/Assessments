import  { useState, useEffect } from 'react';
import { Route, Routes, Link, useParams } from 'react-router-dom';
import RegisterEmployee from './components/RegisterEmployee';
import EmployeeList from './components/EmployeeList';
import EmployeeDetails from './components/EmployeeDetails';
import './App.css';

const App = () => {
  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem('employees');
    return savedEmployees ? JSON.parse(savedEmployees) : [];
  });

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (employee) => {
    setEmployees([...employees, { ...employee, id: employees.length + 1 }]);
  };

  return (
    <div className="app">
      <nav className="sidebar">
        <ul>
          <li><Link to="/">Register Employee</Link></li>
          <li><Link to="/employees">Employee List</Link></li>
          {/* Use employee details with id placeholder */}
          <li><Link to="/employee-details/:id">Employee Details</Link></li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<RegisterEmployee addEmployee={addEmployee} />} />
          <Route path="/employees" element={<EmployeeList employees={employees} />} />
          {/* Use employee details with id placeholder */}
          <Route path="/employee-details/:id" element={<EmployeeDetails employees={employees} />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;