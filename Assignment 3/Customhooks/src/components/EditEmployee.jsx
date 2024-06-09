import  { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useEmployees from '../hooks/useEmployees';

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employees, saveEmployees] = useEmployees();
  const employee = employees.find(emp => emp.id === parseInt(id));

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    jobTitle: '',
    salary: '',
    projectName: '',
    reportingManager: '',
  });

  useEffect(() => {
    if (employee) {
      setForm({
        name: employee.name,
        email: employee.email,
        phone: employee.phone,
        jobTitle: employee.jobTitle,
        salary: employee.salary,
        projectName: employee.projectName,
        reportingManager: employee.reportingManager,
      });
    }
  }, [employee]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEmployees = employees.map(emp =>
      emp.id === parseInt(id) ? { ...emp, ...form } : emp
    );
    saveEmployees(updatedEmployees);
    navigate('/employees');
  };

  return (
    <div>
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(form).map((key) => (
          <div key={key}>
            <label>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
            <input
              type="text"
              name={key}
              value={form[key]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditEmployee;