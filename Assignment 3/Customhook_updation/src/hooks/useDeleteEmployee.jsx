
import { useState, useEffect } from "react";

const useDeleteEmployee = (initialEmployees) => {
  const [employees, setEmployees] = useState(initialEmployees);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees"));
    if (storedEmployees) {
      setEmployees(storedEmployees);
    }
  }, [initialEmployees]);

  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  return { employees, deleteEmployee };
};

export default useDeleteEmployee;
