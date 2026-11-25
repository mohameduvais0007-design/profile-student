import React from "react";
import "./professor.css";

function Professor() {
  const professors = [
    {
      name: "Jaffar anwas A",
      subject: "Artificial Intelligence",
      department: "Information Technology",
      age: 35,
    },
    {
      name: "Gowtham j",
      subject: "Web Development",
      department: "Information Technology",
      age: 32,
    },
    {
      name: "Sivasakthi G",
      subject: "Database Management",
      department: "Information Technology",
      age: 38,
    },
  ];

  return (
    <div className="professor-section">
      <h2>Department Professors</h2>
      <div className="professor-cards">
        {professors.map((prof, index) => (
          <div className="professor-card" key={index}>
            <h3>{prof.name}</h3>
            <p className="subject">{prof.subject}</p>
            <p>{prof.department}</p>
            <p>Age: {prof.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Professor;