// useEditEmployee.js
import { useState, useEffect } from "react";

const useEditEmployee = (initialEmployees) => {
  const [employees, setEmployees] = useState(initialEmployees);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees"));
    if (storedEmployees) {
      setEmployees(storedEmployees);
    }
  }, [initialEmployees]); // <-- Include initialEmployees in the dependency array

  const editEmployee = (id, updatedEmployee) => {
    const updatedEmployees = employees.map((employee) =>
      employee.id === id ? { ...employee, ...updatedEmployee } : employee
    );
    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  return { employees, editEmployee };
};

export default useEditEmployee;
