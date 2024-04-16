import React from "react";
import { Routes, Route } from "react-router-dom";
import  Login from "./screens/Login/Login.jsx"
import Signup from "./screens/Signup/Signup.jsx"
import Dashboard from "./screens/Dashboard/Dashboard.jsx"

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
