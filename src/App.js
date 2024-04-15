import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import  Login from "./screens/login/login.jsx"
import Signup from "./screens/signup/signup.jsx"
import Dashboard from "./screens/Dashboard/dashboard.jsx"

function App() {
  return (
   <>
    <Routes>
        <Route exact index element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
     
   </>
  );
}

export default App;
