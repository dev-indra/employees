import "./App.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";


function App() {
  const [employee, setEmployee] = useState([
    {
      id: "1",
      name: "Alice Bailey",
      role: "Developer",
      img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
    },
    {
      id: "2",
      name: "Bob Smith",
      role: "Lead Developer",
      img: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg",
    },
    {
      id: "3",
      name: "Devindra Naidoo",
      role: "Designer",
      img: "https://images.pexels.com/photos/2586823/pexels-photo-2586823.jpeg",
    },
    {
      id: "4",
      name: "Mia Murray",
      role: "Marketing",
      img: "https://images.pexels.com/photos/2587112/pexels-photo-2587112.jpeg",
    },
    {
      id: "5",
      name: "Maggie Smith",
      role: "Project Manager",
      img: "https://images.pexels.com/photos/6001808/pexels-photo-6001808.jpeg",
    },
  ]);

  function updateEmployee (id, newName, newRole) {
    setEmployee(
      employee.map((emp) => {
        if (emp.id === id) {
          return {
            ...emp,
            name: newName,
            role: newRole,
          };
        }
        return emp;
      })
    );
  
  }
  return (
    <div className="App">
      <div className="flex flex-wrap justify-center">
        {employee.map((emp) => (
          <Employee key={uuidv4()} {...emp} updateEmployee={updateEmployee} />
        ))}
      </div>
    </div>
  );
}

export default App;
