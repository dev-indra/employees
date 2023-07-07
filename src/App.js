import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';


function App() {
  const [role, setRole] = useState();
  return (
    <div className="App">
      <input type="text" onChange={e => setRole(e.target.value)}/>
      <Employee name="Sachin" role="Developer" age="25" />
      <Employee name="Devindra" role={role} age="22" />
      <Employee name="David" role="" age="50" />
    </div>
  );
}

export default App;
