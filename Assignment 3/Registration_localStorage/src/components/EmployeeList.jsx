import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const EmployeeList = ({ employees }) => {
  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <Link to={`/employee-details/${employee.id}`}>
              {employee.name} - {employee.jobTitle}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/">
        <button>Add New Employee</button>
      </Link>
    </div>
  );
};

EmployeeList.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default EmployeeList;
