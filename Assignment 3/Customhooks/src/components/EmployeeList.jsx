import  { useState } from 'react';
import useEmployees from '../hooks/useEmployee';
import EmployeeCard from './EmployeeCard';

const EmployeeList = () => {
  const [employees, saveEmployees] = useEmployees();
  const [editingEmployeeId, setEditingEmployeeId] = useState(null);

  const handleEdit = (id) => {
    setEditingEmployeeId(id);
  };

  const handleSaveEdit = (id, updatedEmployee) => {
    const updatedEmployees = employees.map(employee => {
      if (employee.id === id) {
        return { ...employee, ...updatedEmployee };
      }
      return employee;
    });
    saveEmployees(updatedEmployees);
    setEditingEmployeeId(null);
  };

  const handleCancelEdit = () => {
    setEditingEmployeeId(null);
  };

  const handleDelete = (id) => {
    const updatedEmployees = employees.filter(employee => employee.id !== id);
    saveEmployees(updatedEmployees);
  };

  return (
    <div>
      <h2>Employee List</h2>
      <div className="employee-list">
        {employees.map(employee => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            onEdit={handleEdit}
            onDelete={handleDelete}
            isEditing={editingEmployeeId === employee.id}
            onSaveEdit={handleSaveEdit}
            onCancelEdit={handleCancelEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;