import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginComponent from "./pages/login/login";
import DashboardComponent from "./pages/dashboard/dash";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/dashboard" element={<DashboardComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
