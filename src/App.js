import "./App.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";


function App() {
  const [role, setRole] = useState();
  const [employee, setEmployee] = useState([
    {
      name: "Alice Bailey",
      role: "Developer",
      img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
    },
    {
      name: "Bob Smith",
      role: "Lead Developer",
      img: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg",
    },
    {
      name: "Devindra Naidoo",
      role: "Designer",
      img: "https://images.pexels.com/photos/2586823/pexels-photo-2586823.jpeg",
    },
    {
      name: "Mia Murray",
      role: "Marketing",
      img: "https://images.pexels.com/photos/2587112/pexels-photo-2587112.jpeg",
    },
    {
      name: "Maggie Smith",
      role: "Project Manager",
      img: "https://images.pexels.com/photos/6001808/pexels-photo-6001808.jpeg",
    },
  ]);
  return (
    <div className="App">
      <input type="text" onChange={(e) => setRole(e.target.value)} />
      <div className="flex flex-wrap justify-center">
        {employee.map((emp) => (
          <Employee key={uuidv4()} {...emp} />
        ))}
      </div>
    </div>
  );
}

export default App;
