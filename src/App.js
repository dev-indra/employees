import Header from "./components/Header";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import Customers from "./pages/Customers";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Header>
    </Router>
  );
}

export default App;
