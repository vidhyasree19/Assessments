import PropTypes from 'prop-types';

const EmployeeDetails = ({ employees }) => {
  console.log(employees);

  if (!employees || employees.length === 0) {
    return <div>Employee not found</div>;
  }

  return (
    <div>
      <h2>Employee Details</h2>
      {employees.map((data) => (
        <div key={data.id}>
          <p>ID: {data.id}</p>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Position: {data.jobTitle}</p>
          <p>Salary: {data.salary}</p>
          <p>Project Name: {data.projectName}</p>
          <p>Reporting Manager: {data.reportingManager}</p>
        </div>
      ))}
    </div>
  );
};

EmployeeDetails.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default EmployeeDetails;
