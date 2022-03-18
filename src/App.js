import React from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import { Buttons, Cards } from "./components/content";
import "./App.css";
const App = () => {
  return (
    <div>
      <Header />
      <div className="body">
        <Sidebar />
        <div>
          <Routes>
            <Route path="/" element={<Buttons />} />
            <Route path="/cards" element={<Cards />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
