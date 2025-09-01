import React from "react";
import "./ProfileCard.css";

export default function ProfileCard({ name, age, location }) {
  const inlineStyle = {
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    padding: "16px",
    margin: "10px auto",
    width: "280px",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
  };

  return (
    <div style={inlineStyle}>
      <h2>{name}</h2>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
}
