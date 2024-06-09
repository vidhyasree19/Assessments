import { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import RegisterEmployee from './components/RegisterEmployee';
import EmployeeList from './components/EmployeeList';
import EmployeeDetails from './components/EmployeeDetails';
import useEditEmployee from './hooks/useEditEmployee';
import useDeleteEmployee from './hooks/useDeleteEmployee';
import './App.css'

const App = () => {
  const initialEmployees = JSON.parse(localStorage.getItem('employees')) || [];
  const [employees, setEmployees] = useState(initialEmployees);

  const addEmployee = (employee) => {
    const newEmployee = { ...employee, id: employees.length + 1 };
    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  const { editEmployee } = useEditEmployee(employees);
  const { deleteEmployee } = useDeleteEmployee(employees);

  return (
    <div className="app">
      <nav className="sidebar">
        <ul>
          <li><Link to="/">Register Employee</Link></li>
          <li><Link to="/employees">Employee List</Link></li>
          <li><Link to="/employee-details">Employee Details</Link></li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<RegisterEmployee addEmployee={addEmployee} />} />
          <Route path="/employees" element={<EmployeeList employees={employees} editEmployee={editEmployee} deleteEmployee={deleteEmployee} />} />
          <Route path="/employee-details" element={<EmployeeDetails employees={employees} />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
