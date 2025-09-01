import React from "react";

export default function Greeting({ name, bgColor }) {
  const style = {
    backgroundColor: bgColor || "#f0f0f0",
    padding: "12px",
    borderRadius: "8px",
    fontSize: "18px",
    textAlign: "center",
    fontWeight: "bold",
  };

  return <div style={style}>Hello, {name}!</div>;
}
