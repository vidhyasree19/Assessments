import { useState } from 'react';
import './App.css';

const FormComponent = () => {
  const [form, setForm] = useState({
    name: '',
    rollNo: '',
    panCard: '',
    dateOfBirth: '',
  });

  const [errors, setErrors] = useState({});
  const [daysSinceDOB, setDaysSinceDOB] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name') {
      if (!/^[A-Za-z]*$/.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          name: 'Name should contain only alphabets.',
        }));
        return;
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          name: '',
        }));
      }
    }

    if (name === 'panCard') {
      if (value.length <= 5 && !/^[A-Za-z]*$/.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          panCard: 'First 5 characters should be alphabets only.',
        }));
        return;
      } else if (value.length > 5 && value.length <= 9 && !/^[A-Za-z]{5}[0-9]*$/.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          panCard: 'Characters 6 to 9 should be numbers only.',
        }));
        return;
      } else if (value.length === 10 && !/^[A-Za-z]{5}[0-9]{4}[A-Za-z]$/.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          panCard: 'Last character should be an alphabet.',
        }));
        return;
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          panCard: '',
        }));
      }
    }

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));

    if (name === 'dateOfBirth') {
      calculateDaysSinceDOB(value);
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!/^[A-Za-z]+$/.test(form.name)) {
      newErrors.name = 'Name should contain only alphabets.';
    }

    if (!/^[A-Za-z0-9]{1,8}$/.test(form.rollNo)) {
      newErrors.rollNo = 'Roll No should be alphanumeric and up to 8 characters.';
    }

    if (!/^[A-Za-z]{5}[0-9]{4}[A-Za-z]$/.test(form.panCard)) {
      newErrors.panCard = 'PAN Card should follow the pattern: 5 alphabets, 4 digits, 1 alphabet.';
    }

    const dob = new Date(form.dateOfBirth);
    const today = new Date();
    if (dob >= today) {
      newErrors.dateOfBirth = 'Date of birth cannot be today or a future date.';
    } else if (today.getFullYear() - dob.getFullYear() > 100) {
      newErrors.dateOfBirth = 'Year of birth should be within the last 100 years.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted successfully', form);
      alert('Form submitted successfully!');
    }
  };

  const calculateDaysSinceDOB = (date) => {
    const selectedDate = new Date(date);
    const today = new Date();
    const timeDiff = today.getTime() - selectedDate.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
    setDaysSinceDOB(daysDiff);
  };

  return (
    <div className="page-container">
      <div className="container">
        <h2 className="heading">Registration Form</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label className="label">Name:</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="input"
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label className="label">Roll No:</label>
            <input
              type="text"
              name="rollNo"
              value={form.rollNo}
              onChange={handleChange}
              required
              className="input"
            />
            {errors.rollNo && <p className="error">{errors.rollNo}</p>}
          </div>
          <div className="form-group">
            <label className="label">PAN Card:</label>
            <input
              type="text"
              name="panCard"
              value={form.panCard}
              onChange={handleChange}
              required
              maxLength={10}
              className="input"
            />
            {errors.panCard && <p className="error">{errors.panCard}</p>}
          </div>
          <div className="form-group">
            <label className="label">Date of Birth:</label>
            <input
              type="date"
              name="dateOfBirth"
              value={form.dateOfBirth}
              onChange={handleChange}
              required
              max={new Date().toISOString().split('T')[0]}
              className="input"
            />
            {errors.dateOfBirth && <p className="error">{errors.dateOfBirth}</p>}
            {daysSinceDOB !== null && (
              <p className="info">Total days since date of birth: {daysSinceDOB} days</p>
            )}
          </div>
          <button type="submit" className="button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
