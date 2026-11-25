import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Professor from "./components/professor.jsx";
import Contact from "./components/contact.jsx";
import "./App.css";

const TABS = {
  Attendence: "Total Classes: 120 | Attended: 112 | Percentage: 93.3%",
  Marks: "Artificial Intelligence: 46/50 | Web Development: 48/50 | DBMS: 45/50",
  Results: "Status: PASS | Current CGPA: 8.9",
};

function Home() {
  const [tab, setTab] = useState("");

  return (
    <div className="container">
      <h1>Welcome to My Dashboard</h1>

      <div className="btn-group">
        {Object.keys(TABS).map((key) => (
          <button key={key} onClick={() => setTab(tab === key ? "" : key)}>
            {key}
          </button>
        ))}
      </div>

      {tab && (
        <div className="card cyan-top">
          <h3>{tab}</h3>
          <p>{TABS[tab]}</p>
        </div>
      )}

      <div className="card profile">
        <h2>Profile</h2>
        <p>Name: Uvais</p>
        <p>Age: 19</p>
        <p>Department: Information Technology</p>
      </div>

      <Professor />
      <Contact />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/professors"
          element={
            <div className="container">
              <Professor />
            </div>
          }
        />
        <Route
          path="/professor"
          element={
            <div className="container">
              <Professor />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div className="container">
              <Contact />
            </div>
          }
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}