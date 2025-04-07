import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
