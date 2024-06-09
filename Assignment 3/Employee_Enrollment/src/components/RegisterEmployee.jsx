import { useState } from 'react';
import PropTypes from 'prop-types';

const RegisterEmployee = ({ addEmployee }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    jobTitle: '',
    salary: '',
    projectName: '',
    reportingManager: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(form);
    setForm({
      name: '',
      email: '',
      phone: '',
      jobTitle: '',
      salary: '',
      projectName: '',
      reportingManager: '',
    });
  };

  return (
    <div>
      <h2>Register Employee</h2>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

RegisterEmployee.propTypes = {
  addEmployee: PropTypes.func.isRequired,
};

export default RegisterEmployee;
