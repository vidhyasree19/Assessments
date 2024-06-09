import PropTypes from 'prop-types';
import { useState } from 'react';
import '../App.css';

const EmployeeCard = ({ employee, onDelete, onEdit, isEditing, onSaveEdit, onCancelEdit }) => {
  const [editedEmployee, setEditedEmployee] = useState({ ...employee });

  const handleDeleteClick = () => {
    onDelete(employee.id);
  };

  const handleEditClick = () => {
    onEdit(employee.id);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedEmployee(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSaveClick = () => {
    onSaveEdit(employee.id, editedEmployee);
  };

  const handleCancelClick = () => {
    setEditedEmployee({ ...employee });
    onCancelEdit();
  };

  return (
    <div className="employee-card">
      {isEditing ? (
        <>
          <div><label htmlFor="name">Name:</label>
          <input type="text" name="name" value={editedEmployee.name} onChange={handleInputChange} id='name'/></div>
          <div><label htmlFor="email">Email:</label>
          <input type="text" name="email" value={editedEmployee.email} onChange={handleInputChange} id='email'/></div>
          <div><label htmlFor="phone">Phone:</label>
          <input type="text" name="phone" value={editedEmployee.phone} onChange={handleInputChange} id="phone"/></div>
          <div><label htmlFor="jobTitle">JobTitle:</label>
          <input type="text" name="jobTitle" value={editedEmployee.jobTitle} onChange={handleInputChange} id='jobTitle'/></div>
          <div><label htmlFor="salary">Salary:</label>
          <input type="text" name="salary" value={editedEmployee.salary} onChange={handleInputChange} id="salary"/></div>
          <div><label htmlFor="projectName">ProjectName:</label>
          <input type="text" name="projectName" value={editedEmployee.projectName} onChange={handleInputChange} id="projectName"/></div>
          <div><label htmlFor="reportingManager">ReportingManager:</label>
          <input type="text" name="reportingManager" value={editedEmployee.reportingManager} onChange={handleInputChange} id="reportingManager"/></div>
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </>
      ) : (
        <>
          <h2>Name:{employee.name}</h2>
          <p>Email: {employee.email}</p>
          <p>Phone: {employee.phone}</p>
          <p>Job Title: {employee.jobTitle}</p>
          <p>Salary: {employee.salary}</p>
          <p>Project Name: {employee.projectName}</p>
          <p>Reporting Manager: {employee.reportingManager}</p>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleDeleteClick}>Delete</button>
        </>
      )}
    </div>
  );
};

EmployeeCard.propTypes = {
  employee: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    projectName: PropTypes.string.isRequired,
    reportingManager: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  onSaveEdit: PropTypes.func.isRequired,
  onCancelEdit: PropTypes.func.isRequired,
};

export default EmployeeCard;
