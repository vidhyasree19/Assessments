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
        <div key={data.id} className="card">
          <div className="card-header">
            <h3>{data.name}</h3>
            <p>ID: {data.id}</p>
          </div>
          <div className="card-body">
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
            <p>Job Title: {data.jobTitle}</p>
            <p>Salary: {data.salary}</p>
            <p>Project Name: {data.projectName}</p>
            <p>Reporting Manager: {data.reportingManager}</p>
          </div>
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
      jobTitle: PropTypes.string.isRequired,
      salary: PropTypes.string.isRequired,
      projectName: PropTypes.string.isRequired,
      reportingManager: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default EmployeeDetails;
