import React from "react";
import MyForm from "./MyForm";
import { Routes, Route } from "react-router-dom";
import MyNavbar from "./MyNavbar";
import Home from "./Home";
import Dashboard from "./Dashboard";


const MyPrivateRouting = () => {
  return (
    <div>
      <MyNavbar />
      MyPrivateRouting

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="Dashboard" element={<Dashboard />} />

        <Route path="/MyForm" element={<MyForm />} /> 
        {/* <Route path="Dashboard" element={<Dashboard />} />
        </Route> */}
        {/* <Route path="/privateRoute" element={<privateRoute />} > 
        </Route> */}


      </Routes>
    </div>
  );
};

export default MyPrivateRouting;
