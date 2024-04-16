import React from "react";
import { Routes, Route } from "react-router-dom";
import  Login from "./Screens/Login/Login.jsx"
import Signup from "./Screens/Signup/Signup.jsx"
import Dashboard from "./Screens/Dashboard/Dashboard.jsx"


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
