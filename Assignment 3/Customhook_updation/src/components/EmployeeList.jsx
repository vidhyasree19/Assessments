import PropTypes from 'prop-types';


const EmployeeList = ({ employees, editEmployee, deleteEmployee }) => {
  const handleEdit = (id) => {
    const name = prompt("Enter new name:");
    const email = prompt("Enter new email:");
    const jobTitle = prompt("Enter new job title:");
    const salary = prompt("Enter new salary:");
    const projectName = prompt("Enter new project name:");
    const reportingManager = prompt("Enter new reporting manager:");
    if (name && email && jobTitle && salary && projectName && reportingManager) {
      editEmployee(id, { name, email, jobTitle, salary, projectName, reportingManager });
    }
  };

  return (
    <div>
      <h2>Employee List</h2>
      <div className="employee-list">
        {employees.map((employee) => (
          <div className="employee-card" key={employee.id}>
            <h3>{employee.name}</h3>
            <p><strong>ID:</strong> {employee.id}</p>
            <p><strong>Email:</strong> {employee.email}</p>
            <p><strong>Title:</strong> {employee.jobTitle}</p>
            <p><strong>Salary:</strong> {employee.salary}</p>
            <p><strong>Project Name:</strong> {employee.projectName}</p>
            <p><strong>Reporting Manager:</strong> {employee.reportingManager}</p>
            <div>
              <button onClick={() => handleEdit(employee.id)}>Edit</button>
              <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

EmployeeList.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
      salary: PropTypes.string.isRequired,
      projectName: PropTypes.string.isRequired,
      reportingManager: PropTypes.string.isRequired,
    })
  ).isRequired,
  editEmployee: PropTypes.func.isRequired,
  deleteEmployee: PropTypes.func.isRequired,
};

export default EmployeeList;
